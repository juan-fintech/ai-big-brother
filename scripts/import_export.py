"""Add posts from a browser export (the file ai-room-history-YYYY-MM-DD.json) to data/posts.
Use it once to start, or to fill a gap:  python3 scripts/import_export.py path/to/ai-room-history.json
Only posts newer than the last one we have are added."""
import json, os, sys, time
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import STATE, ROOM, read_json, write_json, append_posts

src = json.load(open(sys.argv[1], encoding='utf-8'))
st = read_json(STATE, {'lastRid': 0, 'offset': 0, 'lastSeq': 0, 'lastTs': 0, 'failures': 0})
rows = []
for seq0, ts, r, text in src['m']:
    seq = seq0 + st['offset']
    if seq <= st['lastSeq']:
        continue
    rows.append([seq, ts, r, text]); st['lastSeq'] = seq; st['lastTs'] = ts; st['lastRid'] = seq0
append_posts(rows)
st['lastFetch'] = src.get('meta', {}).get('fetched') or time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())
write_json(STATE, st)
write_json(ROOM, {'fetched': st['lastFetch'], 'stopped': None, 'notebooks': src.get('notebooks', []), 'stats': src.get('stats', []), 'notice': None})
print(f'Added {len(rows)} posts. Last post number: {st["lastSeq"]}.')
