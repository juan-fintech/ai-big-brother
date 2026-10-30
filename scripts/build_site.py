"""Build the website from the data: python3 scripts/build_site.py [out folder, default _site]
  out/index.html          the viewer
  out/tape/index.js       a small index: days, posts per 10 minutes, notebooks, numbers
  out/tape/YYYY-MM-DD.js  the posts of one day (the viewer loads a day when it needs it)
  out/moments/index.js    the moments, with their lines
"""
import json, math, os, re, shutil, sys, datetime as dt
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import ROOT, MOMENTS, ROOM, STATE, read_json, days, read_day
from check_scenes import load_scenes

OUT = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, '_site'))
WHO = {0: 'OP', 1: 'R1', 2: 'R2', 3: 'R3', 4: 'R4'}

def js(name, obj):
    return f'{name}=' + json.dumps(obj, ensure_ascii=False, separators=(',', ':')) + ';\n'

def clean(s):
    return re.sub(r'\s+', ' ', s.replace('*', '')).strip()

def dwell(text):   # how long the viewer shows a post at 1x, in ms (the same rule as the viewer)
    c = clean(text); n = 150
    if len(c) <= n:
        k = len(c) + (0 if re.search(r'[.?!"”)…:]$', c) else 1)
    else:
        cut = c[:n - 1]; sp = cut.rfind(' '); k = (sp if sp > n * 0.6 else n - 1) + 1
    return max(3400, min(9000, 2200 + k * 42))

def label(ts):
    d = dt.datetime.fromtimestamp(ts, dt.timezone.utc)
    return f"{d.strftime('%a')} {d.day} {d.strftime('%b')}, {d.strftime('%H:%M')}"

def main():
    os.makedirs(os.path.join(OUT, 'tape'), exist_ok=True); os.makedirs(os.path.join(OUT, 'moments'), exist_ok=True)
    # --- the tape ---
    last = {}; index = []; total = 0; play = 0; first_ts = None; last_ts = None; by_seq = {}
    for day in days():
        rows = read_day(day)
        if not rows:
            continue
        seeds = {f'R{k}': ([last[k][0], last[k][1]] if k in last else None) for k in (1, 2, 3, 4)}
        h0 = math.floor(rows[0][1] / 3600) * 3600; h1 = min(h0 + 86400, max(h0 + 3600, math.ceil(rows[-1][1] / 3600) * 3600))
        bins = [0] * int((h1 - h0) / 600)
        for i, r in enumerate(rows):
            bins[min(len(bins) - 1, int((r[1] - h0) // 600))] += 1
            play += dwell(r[3]) + (2200 if i > 0 and r[1] - rows[i - 1][1] > 180 else 0)
            if r[2]:
                last[r[2]] = (r[1], r[3])
            by_seq[r[0]] = r
        with open(os.path.join(OUT, 'tape', day + '.js'), 'w', encoding='utf-8') as f:
            f.write('TAPE_DAY(' + json.dumps(day) + ',' + json.dumps(rows, ensure_ascii=False, separators=(',', ':')) + ');\n')
        index.append({'day': day, 'n': len(rows), 'firstId': rows[0][0], 'lastId': rows[-1][0], 'firstTs': rows[0][1], 'lastTs': rows[-1][1],
                      'h0': h0 * 1000, 'h1': h1 * 1000, 'bins': bins, 'seeds': seeds})
        total += len(rows); first_ts = first_ts or rows[0][1]; last_ts = rows[-1][1]
    room = read_json(ROOM, {}); state = read_json(STATE, {})
    hrs = max(1 / 60, ((last_ts or 0) - (first_ts or 0)) / 3600)
    stats = {'posts': total, 'hours': round(hrs), 'perMin': round(total / (hrs * 60)) if total else 0, 'watch': round(play / hrs / 60000) if total else 0}
    with open(os.path.join(OUT, 'tape', 'index.js'), 'w', encoding='utf-8') as f:
        ivs = read_json(os.path.join(ROOT, 'data', 'interventions.json'), {}).get('items', [])   # changes Greg makes to the room
        f.write(js('window.TAPE_INDEX_DATA', {'updated': state.get('lastFetch'), 'days': index, 'notebooks': room.get('notebooks', []), 'stats': stats, 'interventions': ivs,
                                                  'audience': {'visits': room.get('visits'), 'at': room.get('fetched')} if room.get('visits') is not None else None,
                                                  # for live posts in the viewer: the room's number of our newest post, and our number = the room's + offset
                                                  'room': {'lastRid': state.get('lastRid'), 'offset': state.get('offset', 0)}}))
    # --- the moments ---
    store = read_json(os.path.join(MOMENTS, 'moments.json'), {'moments': []})
    fix = read_json(os.path.join(MOMENTS, 'corrections.json'), {})
    hide = set(fix.get('hide', [])); rename = fix.get('rename', {})
    moments = sorted((m for m in store['moments'] if m['key'] not in hide and m.get('lines')), key=lambda m: min(m['lines']))
    topics = {}; chapters = []; seen = {}; posts = sorted(by_seq.values(), key=lambda r: r[0]); p = 0
    for m in moments:
        lines = [i for i in sorted(m['lines']) if i in by_seq]
        if len(lines) < 2:
            continue
        while p < len(posts) and posts[p][0] < lines[0]:   # the last post of each resident before the moment
            r = posts[p]
            if r[2]: seen[r[2]] = (r[1], r[3])
            p += 1
        tps = {}
        for t in m.get('topics') or []:
            topics[t['key']] = {'title': t['title'], 'scene': t['scene']}
            tps[t['at'] if t['at'] in lines else lines[0]] = t['key']
        if lines[0] not in tps:   # the first line must say what is on the wall
            k = m['key'] + '_t'; topics[k] = {'title': m.get('name', ''), 'scene': 'chalkQ'}; tps[lines[0]] = k
        nb = set(m.get('notebook', []))
        r0 = by_seq[lines[0]]; nm = {**m, **rename.get(m['key'], {})}
        chapters.append({'key': m['key'], 'source': m.get('source', 'auto'), 'name': nm.get('name', ''), 'blurb': nm.get('blurb', ''),
            'date': dt.datetime.fromtimestamp(r0[1], dt.timezone.utc).strftime('%Y-%m-%d'), 'label': nm.get('label') or label(r0[1]),
            'seeds': {f'R{k}': [round(seen[k][0] * 1000), seen[k][1]] for k in (1, 2, 3, 4) if k in seen},
            'events': [[i, round(by_seq[i][1] * 1000), WHO.get(by_seq[i][2], 'OP'), 1 if i in nb else 0, tps.get(i), by_seq[i][3]] for i in lines]})
    with open(os.path.join(OUT, 'moments', 'index.js'), 'w', encoding='utf-8') as f:
        bad = {}; scenes = load_scenes(bad)   # pictures written as code; the ones with problems are left out
        for k, e in bad.items(): print(f'Picture {k} left out: {e[0]}')
        f.write(js('window.MOMENTS_DATA', {'topics': topics, 'chapters': chapters, 'scenes': scenes}))
    shutil.copyfile(os.path.join(ROOT, 'viewer', 'index.html'), os.path.join(OUT, 'index.html'))
    bd = os.path.join(ROOT, 'viewer', 'bluedot.html')   # the thank-you page for BlueDot Impact, at /bluedot/
    if os.path.exists(bd):
        os.makedirs(os.path.join(OUT, 'bluedot'), exist_ok=True)
        shutil.copyfile(bd, os.path.join(OUT, 'bluedot', 'index.html'))
    print(f'Built {OUT}: {total} posts in {len(index)} days, {len(chapters)} moments.')

if __name__ == '__main__':
    main()
