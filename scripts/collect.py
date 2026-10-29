"""Collector: get the new posts from the room and add them to data/posts.
Runs every 10 minutes on GitHub Actions. No AI.
Needs the repository variable ROOM_URL (the address of Greg's room, for example https://xyz.trycloudflare.com).
"""
import json, os, sys, time, urllib.request, urllib.error
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import STATE, ROOM, read_json, write_json, append_posts

ROOM_URL = os.environ.get('ROOM_URL', '').strip().rstrip('/')
LABELS = {'Resident 1': 1, 'Resident 2': 2, 'Resident 3': 3, 'Resident 4': 4}
NAMES = {'GPT-6 Luna': 1, 'Llama 4 Maverick': 2, 'Gemini 3.5 Flash-Lite': 3, 'Claude Haiku 5.5': 4}
PAGE = 500          # the room sends at most 500 posts for each request
MAX_PAGES = 40      # at most 20,000 posts in one run

def get(after):
    req = urllib.request.Request(f'{ROOM_URL}/api/state?after={after}', headers={'User-Agent': 'ai-big-brother-collector'})
    with urllib.request.urlopen(req, timeout=40) as r:
        return json.loads(r.read().decode('utf-8'))

def alert(msg):
    """Ask the workflow to fail after it saves the data (GitHub then sends an email)."""
    print(msg)
    out = os.environ.get('GITHUB_OUTPUT')
    if out:
        with open(out, 'a') as f:
            f.write('alert=1\n')

def resident(m):
    return LABELS.get(m.get('label')) or NAMES.get(m.get('name')) or 0

def main():
    st = read_json(STATE, {})
    st.setdefault('lastRid', 0); st.setdefault('offset', 0); st.setdefault('lastSeq', 0); st.setdefault('lastTs', 0)
    if not ROOM_URL:
        alert('ROOM_URL is not set. Add it as a repository variable.'); return 0
    added, last_resp = 0, None
    try:
        for page in range(MAX_PAGES):
            resp = get(st['lastRid']); last_resp = resp
            msgs = [m for m in resp.get('messages', []) if m['id'] > st['lastRid']]
            if not msgs:
                if page == 0:   # nothing new: the room is quiet, stopped, or it started again with new numbers
                    first = get(0); last_resp = first
                    fresh = [m for m in first.get('messages', []) if m['ts'] > st['lastTs'] + 1 and m['id'] <= st['lastRid']]
                    if fresh:
                        print(f"The room started again (post numbers begin at 1). Our numbers continue from {st['lastSeq']}.")
                        st['offset'] = st['lastSeq']; st['lastRid'] = 0
                        continue
                break
            rows = []
            for m in msgs:
                seq = m['id'] + st['offset']
                if seq <= st['lastSeq']:
                    continue
                rows.append([seq, round(float(m['ts']), 3), resident(m), m.get('text') or ''])
                st['lastSeq'] = seq; st['lastTs'] = float(m['ts'])
            append_posts(rows); added += len(rows)
            st['lastRid'] = msgs[-1]['id']
            if len(resp.get('messages', [])) < PAGE:
                break
    except (urllib.error.URLError, TimeoutError, ValueError, KeyError, OSError) as e:
        # Save the state only when the problem starts, so a dead room makes no new commits.
        if 'firstFailure' not in st:
            st['firstFailure'] = time.time(); st['lastError'] = f'{type(e).__name__}: {e}'[:300]
            write_json(STATE, st)
        mins = (time.time() - st['firstFailure']) / 60
        msg = f"Could not read the room for {round(mins)} minutes: {type(e).__name__}: {e}"
        # an email after 30 minutes, then one each day. Often the room link changed: update ROOM_URL.
        level = 0 if mins < 30 else 1 + int(mins // 1440)
        if level > st.get('alerted', 0):
            st['alerted'] = level; write_json(STATE, st); alert(msg)
        else:
            print(msg)
        return 0
    st.pop('failures', None); st.pop('firstFailure', None); st.pop('alerted', None); st.pop('lastError', None); st['lastFetch'] = time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())
    write_json(STATE, st)
    if last_resp is not None:
        write_json(ROOM, {'fetched': st['lastFetch'], 'stopped': last_resp.get('stopped'), 'notebooks': last_resp.get('notebooks', []),
                          'stats': last_resp.get('stats', []), 'notice': last_resp.get('notice'),
                          'visits': last_resp.get('visits'), 'watching': last_resp.get('watching')})
    print(f"Added {added} posts. Last post number: {st['lastSeq']}.")
    return 0

if __name__ == '__main__':
    sys.exit(main())
