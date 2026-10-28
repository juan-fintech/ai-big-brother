"""Shared helpers. Posts are stored one file for each 10 minutes (UTC): data/posts/YYYY-MM-DD/HH-M0.jsonl.
Small files keep the git history small: each run adds to the newest file only.
Each line is one post: [seq, ts, r, text]
  seq  - our own post number (always goes up, also after the room restarts)
  ts   - time of the post, seconds since 1970 (UTC)
  r    - 1 to 4 for Resident 1 to 4, 0 for the outside voice
  text - the post
"""
import json, os, datetime as dt

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, 'data')
POSTS = os.path.join(DATA, 'posts')
MOMENTS = os.path.join(DATA, 'moments')
STATE = os.path.join(DATA, 'state.json')
ROOM = os.path.join(DATA, 'room.json')

def utc(ts):
    return dt.datetime.fromtimestamp(ts, dt.timezone.utc)

def chunk_path(ts):
    d = utc(ts)
    return os.path.join(POSTS, d.strftime('%Y-%m-%d'), f"{d.strftime('%H')}-{d.minute // 10}0.jsonl")

def read_json(path, default):
    try:
        with open(path, encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        return default

def write_json(path, obj, pretty=True):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    tmp = path + '.tmp'
    with open(tmp, 'w', encoding='utf-8') as f:
        json.dump(obj, f, ensure_ascii=False, indent=1 if pretty else None, separators=None if pretty else (',', ':'))
        f.write('\n')
    os.replace(tmp, path)

def append_posts(rows):
    """Add posts to their hour files. rows must be in order."""
    open_files = {}
    try:
        for row in rows:
            p = chunk_path(row[1])
            if p not in open_files:
                os.makedirs(os.path.dirname(p), exist_ok=True)
                open_files[p] = open(p, 'a', encoding='utf-8')
            open_files[p].write(json.dumps(row, ensure_ascii=False, separators=(',', ':')) + '\n')
    finally:
        for f in open_files.values():
            f.close()

def days():
    if not os.path.isdir(POSTS):
        return []
    return sorted(d for d in os.listdir(POSTS) if len(d) == 10 and os.path.isdir(os.path.join(POSTS, d)))

def read_hour_file(path):
    rows = []
    with open(path, encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if line:
                rows.append(json.loads(line))
    return rows

def read_day(day):
    folder = os.path.join(POSTS, day)
    rows = []
    for name in sorted(os.listdir(folder)):
        if name.endswith('.jsonl'):
            rows += read_hour_file(os.path.join(folder, name))
    rows.sort(key=lambda r: r[0])
    return rows

def read_hour(ts_hour):
    d = utc(ts_hour); folder = os.path.join(POSTS, d.strftime('%Y-%m-%d')); rows = []
    for m in range(0, 60, 10):
        p = os.path.join(folder, f"{d.strftime('%H')}-{m:02d}.jsonl")
        if os.path.exists(p):
            rows += read_hour_file(p)
    return sorted(rows, key=lambda r: r[0])

def all_posts():
    rows = []
    for d in days():
        rows += read_day(d)
    return rows
