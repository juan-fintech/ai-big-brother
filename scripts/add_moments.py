"""Add the moments of a manual run (data/moments/new-moments.json) to data/moments/moments.json, then remove the new file.
Keeps all moments that are there; a moment with the same key is replaced.
  python3 scripts/add_moments.py [path/to/new-moments.json]
"""
import json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import MOMENTS, read_json, write_json

src = sys.argv[1] if len(sys.argv) > 1 else os.path.join(MOMENTS, 'new-moments.json')
new = read_json(src, {'moments': []})['moments']
path = os.path.join(MOMENTS, 'moments.json')
store = read_json(path, {'moments': []})
keys = {m['key'] for m in new}
store['moments'] = [m for m in store['moments'] if m['key'] not in keys] + new
store['moments'].sort(key=lambda m: min(m['lines']))
write_json(path, store)
if os.path.abspath(src) == os.path.abspath(os.path.join(MOMENTS, 'new-moments.json')):
    os.remove(src)
print(f"{len(new)} moments added. Total: {len(store['moments'])}.")
