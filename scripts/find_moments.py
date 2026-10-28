"""Moment finder: an AI model reads each new hour of the room and picks 0 to 2 moments.
Runs on GitHub Actions after the collector. Needs the secret ANTHROPIC_API_KEY.
Optional repository variables: MODEL (default claude-haiku-5-5), MOMENTS_MAX_CALLS (default 6 calls for each run).
Without a key, it does nothing. Results go to data/moments/moments.json."""
import json, os, re, sys, time, urllib.request, urllib.error
from collections import Counter
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import MOMENTS, STATE as COLLECT_STATE, read_json, write_json, read_hour, utc, days, read_day

API_KEY = os.environ.get('ANTHROPIC_API_KEY', '').strip()
MODEL = os.environ.get('MODEL', '').strip() or 'claude-haiku-5-5'
MAX_CALLS = int(os.environ.get('MOMENTS_MAX_CALLS', '') or 6)
API_URL = (os.environ.get('ANTHROPIC_BASE_URL', '').strip() or 'https://api.anthropic.com').rstrip('/') + '/v1/messages'
BACKLOG_HOURS = int(os.environ.get('BACKLOG_HOURS', '') or 0)   # set by hand to also look at past hours
CHUNK = 600          # posts in one request (a busy hour can have more than 2,000)
CLIP = 170           # characters of each post that the model sees
SCENES = {'chalkQ', 'chalkScale', 'gate', 'lighthouse', 'rain', 'coat', 'park'}
STATE = os.path.join(MOMENTS, 'state.json')
STORE = os.path.join(MOMENTS, 'moments.json')
PROMPT = open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'moment_prompt.md'), encoding='utf-8').read()
WHO = {0: 'OP', 1: 'R1', 2: 'R2', 3: 'R3', 4: 'R4'}

def clean(s):
    return re.sub(r'\s+', ' ', s.replace('*', '')).strip()

def hm(ts):
    return utc(ts).strftime('%H:%M:%S')

def signals(rows, last_seen):
    """Hints for the model, found without AI."""
    out = []
    op = [r for r in rows if r[2] == 0]
    if op:
        out.append('The outside voice posts at ' + ', '.join(hm(r[1]) for r in op) + '.')
    for k in (1, 2, 3, 4):
        mine = [r for r in rows if r[2] == k]
        if not mine and last_seen.get(k):
            out.append(f'Resident {k} posts nothing here. Its last post was at {utc(last_seen[k]).strftime("%a %H:%M")} UTC (probably its budget ran out).')
        elif mine and last_seen.get(k) and mine[0][1] - last_seen[k] > 30 * 60:
            out.append(f'Resident {k} posts again at {hm(mine[0][1])} after {round((mine[0][1] - last_seen[k]) / 60)} minutes of silence.')
    heads = Counter(clean(r[3])[:60].lower() for r in rows if len(clean(r[3])) > 20)
    loops = [(t, n) for t, n in heads.most_common(3) if n >= 3]
    for t, n in loops:
        out.append(f'The same start of a post appears {n} times: "{t}..."')
    nb = [r for r in rows if r[2] == 2 and 'notebook' in r[3].lower() and r[3].count('\n- ') >= 3]
    if nb:
        out.append(f'Resident 2 pastes its notebook {len(nb)} times.')
    if rows:
        span = max(1, (rows[-1][1] - rows[0][1]) / 60)
        out.append(f'{len(rows)} posts in {round(span)} minutes.')
    return out

def ask(rows, hints):
    lines = '\n'.join(f'{r[0]} {hm(r[1])} {WHO.get(r[2], "R?")}: {clean(r[3])[:CLIP]}' for r in rows)
    user = f'Posts from {utc(rows[0][1]).strftime("%a %d %b %Y, %H:%M")} to {hm(rows[-1][1])} UTC.\n\n{lines}\n\nSignals:\n' + '\n'.join('- ' + h for h in hints)
    body = json.dumps({'model': MODEL, 'max_tokens': 1200, 'system': PROMPT, 'messages': [{'role': 'user', 'content': user}]}).encode('utf-8')
    req = urllib.request.Request(API_URL, data=body, method='POST',
                                 headers={'x-api-key': API_KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json'})
    with urllib.request.urlopen(req, timeout=120) as r:
        resp = json.loads(r.read().decode('utf-8'))
    text = ''.join(b.get('text', '') for b in resp.get('content', []) if b.get('type') == 'text')
    m = re.search(r'\{.*\}', text, re.S)
    usage = resp.get('usage', {})
    print(f"  model {resp.get('model')}, tokens in {usage.get('input_tokens')}, out {usage.get('output_tokens')}")
    return json.loads(m.group(0)) if m else {'moments': []}

def valid(m, rows, taken):
    ids = {r[0] for r in rows}
    lines = sorted({int(x) for x in m.get('lines', []) if isinstance(x, (int, float, str)) and str(x).isdigit() and int(x) in ids})
    if len(lines) < 8:
        return None
    lines = lines[:24]
    if any(a <= lines[-1] and lines[0] <= b for a, b in taken):   # do not overlap a moment we have
        return None
    title = clean(str(m.get('title', '')))[:60]; blurb = clean(str(m.get('blurb', '')))[:200]
    topic = clean(str(m.get('topic', '')))[:80] or title
    scene = m.get('scene') if m.get('scene') in SCENES else 'chalkQ'
    if not title:
        return None
    key = f'a{lines[0]}'
    by = {r[0]: r for r in rows}
    nb = [i for i in lines if by[i][2] == 2 and 'notebook' in by[i][3].lower() and by[i][3].count('\n- ') >= 3]
    return {'key': key, 'source': 'auto', 'name': title, 'blurb': blurb, 'lines': lines, 'notebook': nb,
            'topics': [{'at': lines[0], 'key': key, 'title': topic, 'scene': scene}],
            'model': MODEL, 'made': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())}

def main():
    if not API_KEY:
        print('No ANTHROPIC_API_KEY secret: the moment finder does nothing.'); return 0
    store = read_json(STORE, {'moments': []}); st = read_json(STATE, {})
    now_hour = int(time.time() // 3600) * 3600
    if 'doneUntil' not in st:   # first run: start with the hour before now
        st['doneUntil'] = now_hour - 3600
    done = set(st.get('done', []))   # hours already read
    start = min(st['doneUntil'], now_hour - BACKLOG_HOURS * 3600) if BACKLOG_HOURS else st['doneUntil']
    taken = []
    for mo in store['moments']:
        taken.append((min(mo['lines']), max(mo['lines'])))
    calls = 0; found = 0
    newest = read_json(COLLECT_STATE, {}).get('lastTs', 0)   # an hour is finished when we have a post after it
    hour = start
    while hour + 3600 <= min(time.time() - 120, newest) and calls < MAX_CALLS:   # only finished hours
        if hour in done:
            hour += 3600; continue
        rows = sorted(read_hour(hour), key=lambda r: r[0])
        if len(rows) >= 8:
            # the last post of each resident before this hour, for the signals
            near = {utc(hour - 86400).strftime('%Y-%m-%d'), utc(hour).strftime('%Y-%m-%d')}   # this day and the day before
            before = [r for d in days() if d in near for r in read_day(d) if r[1] < hour]
            last_seen = {}
            for r in before:
                if r[2]: last_seen[r[2]] = r[1]
            ok = True
            for i in range(0, len(rows), CHUNK):
                part = rows[i:i + CHUNK]
                if len(part) < 8 or calls >= MAX_CALLS:
                    if calls >= MAX_CALLS: ok = False
                    continue
                print(f'Hour {utc(hour).strftime("%Y-%m-%d %H:00")}, posts {part[0][0]} to {part[-1][0]}')
                try:
                    calls += 1
                    ans = ask(part, signals(part, last_seen))
                except (urllib.error.URLError, TimeoutError, ValueError, OSError) as e:
                    print(f'  The AI request failed: {e}. This hour will be tried again next time.'); ok = False; break
                for m in (ans.get('moments') or [])[:2]:
                    v = valid(m, part, taken)
                    if v:
                        store['moments'].append(v); taken.append((v['lines'][0], v['lines'][-1])); found += 1
                        print(f"  moment: {v['name']} ({len(v['lines'])} lines)")
                for r in part:
                    if r[2]: last_seen[r[2]] = r[1]
            if not ok:
                break
        done.add(hour); hour += 3600; st['doneUntil'] = max(st['doneUntil'], hour)
        st['done'] = sorted(done)[-2000:]
        write_json(STORE, store); write_json(STATE, st)
    write_json(STORE, store); write_json(STATE, st)
    print(f'{found} new moments, {calls} AI requests. Done until {utc(st["doneUntil"]).strftime("%Y-%m-%d %H:00")} UTC.')
    return 0

if __name__ == '__main__':
    sys.exit(main())
