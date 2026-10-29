"""Show the room's posts in a short form, for choosing moments by hand (or by Claude in tools/manual-run.sh).

  python3 scripts/show_posts.py moments             the moments that are there now
  python3 scripts/show_posts.py overview [FROM]     the posts after the last moment (or from post FROM), in 30-minute blocks
  python3 scripts/show_posts.py read FIRST LAST [N] the posts FIRST to LAST, each cut to N characters (default 400)
  python3 scripts/show_posts.py summary             one line: how many posts came after the last moment
Times are UTC. Speakers: R1 to R4 = Resident 1 to 4, OP = the outside voice (Greg).
"""
import collections, json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import MOMENTS, read_json, days, read_day, utc

WHO = {0: 'OP', 1: 'R1', 2: 'R2', 3: 'R3', 4: 'R4'}
clean = lambda s: re.sub(r'\s+', ' ', s.replace('*', '')).strip()
hm = lambda ts: utc(ts).strftime('%a %d %H:%M')


def all_posts():
    rows = []
    for d in days():
        rows += read_day(d)
    rows.sort(key=lambda r: r[0])
    return rows


def moments():
    return read_json(os.path.join(MOMENTS, 'moments.json'), {'moments': []})['moments']


def last_line():
    ms = moments()
    return max((max(m['lines']) for m in ms if m.get('lines')), default=0)


def cmd_moments():
    rows = {r[0]: r for r in all_posts()}
    for m in sorted(moments(), key=lambda m: min(m['lines'])):
        a = rows.get(min(m['lines'])); t = hm(a[1]) if a else '?'
        tp = (m.get('topics') or [{}])[0]
        print(f"{m['key']:>10}  {t}  {m['name']}: {m['blurb']}  [wall: {tp.get('title', '')}]")


def cmd_summary():
    after = last_line(); rows = [r for r in all_posts() if r[0] > after]
    if not rows:
        print('No new posts after the last moment.'); return
    print(f'{len(rows)} posts after the last moment (post {after}): {hm(rows[0][1])} to {hm(rows[-1][1])} UTC.')


def cmd_overview(start=None):
    after = last_line() if start is None else start - 1
    rows = [r for r in all_posts() if r[0] > after]
    if not rows:
        print('No new posts.'); return
    print(f'Posts {rows[0][0]} to {rows[-1][0]}, {hm(rows[0][1])} to {hm(rows[-1][1])} UTC, in 30-minute blocks.')
    print('Each block: post numbers, posts per speaker, average length, repeated openings (loops), every OP post, and 3 sample posts.\n')
    blocks = collections.OrderedDict()
    for r in rows:
        blocks.setdefault(int(r[1]) // 1800 * 1800, []).append(r)
    last = {}
    for t0, b in blocks.items():
        c = collections.Counter(r[2] for r in b)
        print(f"== {hm(t0)}  posts {b[0][0]}-{b[-1][0]} ({len(b)})  " + ' '.join(f'{WHO[k]}:{c[k]}' for k in (1, 2, 3, 4, 0) if c[k]) + f"  avg {sum(len(r[3]) for r in b) // len(b)} chars")
        heads = collections.Counter(clean(r[3])[:40].lower() for r in b)
        loops = [(h, n) for h, n in heads.most_common(3) if n >= 3]
        if loops:
            print('   loops: ' + '; '.join(f'"{h}..." x{n}' for h, n in loops))
        for r in b:
            k = r[2]
            if k and k in last and r[1] - last[k] > 3600:
                print(f'   {WHO[k]} posts again after {round((r[1] - last[k]) / 3600, 1)} h (post {r[0]})')
            if k: last[k] = r[1]
            if k == 0:
                print(f'   OP {r[0]} {utc(r[1]).strftime("%H:%M")}: {clean(r[3])[:300]}')
        for r in b[::max(1, len(b) // 3)][:3]:
            print(f'   {r[0]} {WHO[r[2]]}: {clean(r[3])[:150]}')


def cmd_read(a, b, n=400):
    for r in all_posts():
        if a <= r[0] <= b:
            print(f'{r[0]} {utc(r[1]).strftime("%a %H:%M:%S")} {WHO[r[2]]}: {clean(r[3])[:n]}')


if __name__ == '__main__':
    a = sys.argv[1:] or ['summary']
    if a[0] == 'moments': cmd_moments()
    elif a[0] == 'summary': cmd_summary()
    elif a[0] == 'overview': cmd_overview(int(a[1]) if len(a) > 1 else None)
    elif a[0] == 'read' and len(a) >= 3: cmd_read(int(a[1]), int(a[2]), int(a[3]) if len(a) > 3 else 400)
    else: print(__doc__)
