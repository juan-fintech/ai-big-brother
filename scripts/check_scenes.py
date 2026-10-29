"""Check the wall pictures that are written as code, before the website uses them.

A picture is one file, data/moments/scenes/<scene key>.js. It holds the body of one drawing function
(the viewer adds the rest). Only a small, safe part of JavaScript is allowed: the drawing helpers,
the room's colours, numbers, maths, local variables, if, for and arrow functions. No strings except
short capital-letter text and colours. Anything else is refused, and the site leaves that picture out.
The viewer also hides every other name of the page from the picture when it runs.

Usage:
  python3 scripts/check_scenes.py     check every picture, and data/moments/new-moments.json if it is there
Exit code 0 = OK, 1 = problems (they are printed).
"""
import json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import MOMENTS, read_json, days, read_day

SCENES_DIR = os.path.join(MOMENTS, 'scenes')
NEW = os.path.join(MOMENTS, 'new-moments.json')
MAX_CHARS = 6000

COLOURS = {'ink', 'plum', 'bplum', 'w1', 'w2', 'w3', 'w4', 'cream', 'parch', 'wall', 'wallS', 'mauve', 'violet', 'navy', 'blue', 'sky', 'skyL',
           'tealD', 'teal', 'green', 'greenL', 'lime', 'wine', 'red', 'rust', 'peach', 'skinH', 'skinL', 'skinM', 'skinD', 'gray', 'grayL',
           'pink', 'aqua', 'aquaL', 'lilac', 'lilacL'}
MATERIALS = {'wood', 'woodL', 'gold', 'paper', 'teal', 'tealF', 'red', 'rust', 'navy', 'slate', 'plumC', 'brown', 'skinL', 'skinM', 'skinD',
             'gray', 'lilac', 'aqua', 'coral', 'pinkC', 'paint', 'green'}
MATH = {'sin', 'cos', 'round', 'floor', 'ceil', 'abs', 'min', 'max', 'PI', 'sqrt', 'pow', 'sign', 'hypot', 'atan2'}
PROPS = {'P': COLOURS, 'M': MATERIALS, 'Math': MATH, 'PIC': {'x', 'y', 'w', 'h'}}
OTHER_PROPS = {'forEach', 'map', 'length'}            # on local arrays
GIVEN = {'t', 'g', 'P', 'M', 'PIC', 'K', 'Math', 'F', 'Pp', 'F1', 'line', 'ellF', 'blk', 'rng', 'ringGlow', 'txt3', 'bub', 'nightSky', 'RC'}
KEYWORDS = {'const', 'let', 'for', 'of', 'if', 'else', 'return', 'true', 'false', 'null', 'undefined', 'NaN', 'Infinity'}
BANNED = {'window', 'document', 'globalThis', 'self', 'parent', 'frames', 'opener', 'eval', 'Function', 'constructor', 'prototype',
          '__proto__', 'import', 'export', 'fetch', 'XMLHttpRequest', 'WebSocket', 'location', 'navigator', 'history', 'setTimeout',
          'setInterval', 'requestAnimationFrame', 'localStorage', 'sessionStorage', 'indexedDB', 'cookie', 'innerHTML', 'outerHTML',
          'Reflect', 'Proxy', 'open', 'close', 'print', 'alert', 'confirm', 'prompt', 'require', 'process', 'this', 'new', 'async',
          'await', 'class', 'delete', 'with', 'yield', 'while', 'do', 'function', 'var', 'arguments', 'debugger', 'switch', 'try',
          'catch', 'throw', 'in', 'instanceof', 'typeof', 'void', 'super', 'SCENES', 'console', 'postMessage', 'crypto', 'caches', 'JSON', 'URL', 'CSS'}
STRING_OK = [re.compile(r"^'[A-Z0-9?!.,:\- ]{0,8}'$"),                     # short text for txt3 and bub
             re.compile(r"^'#[0-9a-fA-F]{6}'$"),                           # a colour
             re.compile(r"^'rgba\(\d{1,3},\d{1,3},\d{1,3},(?:0|1|0?\.\d+)\)'$"),
             re.compile(r"^'\d{1,3},\d{1,3},\d{1,3}'$")]                   # the colour for ringGlow
TOKEN = re.compile(r"""(?P<sp>\s+)|(?P<com>//[^\n]*|/\*.*?\*/)|(?P<num>\d+\.?\d*(?:e-?\d+)?|\.\d+)|(?P<id>[A-Za-z_$][\w$]*)|(?P<str>'[^'\\\n]*')|(?P<op>=>|===|!==|==|!=|<=|>=|&&|\|\||\+\+|--|\+=|-=|\*=|/=|%=|\*\*|[-+*/%<>=!?:;,.(){}\[\]])""", re.S)


def check_body(key, src):
    """Return a list of problems in one picture (empty = OK)."""
    errs = []
    if len(src) > MAX_CHARS:
        errs.append(f'too long ({len(src)} characters; at most {MAX_CHARS})')
    toks, pos = [], 0
    while pos < len(src):
        m = TOKEN.match(src, pos)
        if not m:
            line = src.count('\n', 0, pos) + 1
            errs.append(f'line {line}: character {src[pos]!r} is not allowed (use single quotes for text; no backticks, double quotes or backslashes)')
            return errs
        pos = m.end()
        kind = m.lastgroup
        if kind in ('sp', 'com'):
            continue
        toks.append((kind, m.group(), src.count('\n', 0, m.start()) + 1))
    depth = {'(': 0, '[': 0, '{': 0}
    pairs = {')': '(', ']': '[', '}': '{'}
    for i, (kind, val, ln) in enumerate(toks):
        prev = toks[i - 1][1] if i else ''
        if kind == 'id':
            if val in BANNED:
                errs.append(f'line {ln}: "{val}" is not allowed')
            elif prev == '.':
                owner = toks[i - 2][1] if i >= 2 else ''
                allowed = PROPS.get(owner, OTHER_PROPS)
                if val not in allowed:
                    errs.append(f'line {ln}: ".{val}" is not allowed after "{owner}"' + (' (see the colour and material names)' if owner in ('P', 'M') else ''))
            elif val[0].isupper() and val not in GIVEN and val not in KEYWORDS and not re.fullmatch(r'[A-Z][A-Z0-9_]{0,3}', val):
                errs.append(f'line {ln}: "{val}" is not allowed (names that start with a capital letter: only P, M, PIC, K, RC, Math, or short ones like Q or L2)')
        elif kind == 'str':
            if not any(p.match(val) for p in STRING_OK):
                errs.append(f'line {ln}: text {val} is not allowed (only short capital-letter text, or a colour)')
        elif kind == 'op':
            if val == '.' and (i + 1 >= len(toks) or toks[i + 1][0] != 'id'):
                errs.append(f'line {ln}: "." must come before a name')
            if val in depth:
                depth[val] += 1
            elif val in pairs:
                depth[pairs[val]] -= 1
                if depth[pairs[val]] < 0:
                    errs.append(f'line {ln}: "{val}" has no opening pair'); depth[pairs[val]] = 0
            if val == '(' and prev == 'for':
                j, semis, empty_cond = i + 1, 0, False
                d = 0
                while j < len(toks):
                    v = toks[j][1]
                    if v in '([{': d += 1
                    elif v in ')]}':
                        if d == 0: break
                        d -= 1
                    elif v == ';' and d == 0:
                        semis += 1
                        if semis == 1 and j + 1 < len(toks) and toks[j + 1][1] == ';':
                            empty_cond = True
                    j += 1
                if empty_cond:
                    errs.append(f'line {ln}: a "for" loop needs a condition')
    for k, v in depth.items():
        if v:
            errs.append(f'"{k}" is not closed {v} time(s)')
    if not re.search(r'\bPIC\b', src):
        errs.append('use the picture area: start with const {x,y,w,h}=PIC;')
    return errs


def load_scenes(report=None):
    """The pictures that pass the check: {scene key: code}."""
    out = {}
    if not os.path.isdir(SCENES_DIR):
        return out
    for name in sorted(os.listdir(SCENES_DIR)):
        if not name.endswith('.js'):
            continue
        key = name[:-3]
        with open(os.path.join(SCENES_DIR, name), encoding='utf-8') as f:
            src = f.read()
        errs = [] if re.fullmatch(r'm_[a-z0-9_]{1,40}', key) else ['the file name must be m_<letters, digits or _>.js']
        errs += check_body(key, src)
        if errs:
            if report is not None:
                report[key] = errs
        else:
            out[key] = src
    return out


def check_new(scenes, problems):
    """Check data/moments/new-moments.json, the moments of a manual run."""
    store = read_json(NEW, None)
    if store is None:
        return 0
    old = read_json(os.path.join(MOMENTS, 'moments.json'), {'moments': []})['moments']
    old_keys = {m['key'] for m in old}
    have = set()
    for d in days():
        have.update(r[0] for r in read_day(d))
    moments = store.get('moments')
    if not isinstance(moments, list):
        problems['new-moments.json'] = ['it must be {"moments": [ ... ]}']
        return 0
    for m in moments:
        key = m.get('key', '?'); e = []
        lines = m.get('lines') or []
        if not re.fullmatch(r'a\d+', key) or (lines and key != f'a{lines[0]}'):
            e.append('key must be "a" + the first line number')
        if key in old_keys:
            e.append('this key is already in moments.json')
        words = lambda n: set(re.findall(r"[a-z0-9']+", n.lower()))
        for o in old:
            a_, b_ = words(m.get('name', '')), words(o.get('name', ''))
            if a_ and b_ and len(a_ & b_) / len(a_ | b_) >= 0.6:
                e.append(f'name is too close to the moment "{o["name"]}" ({o["key"]}); choose another name'); break
        if not (8 <= len(lines) <= 24) or lines != sorted(set(lines)):
            e.append('lines: 8 to 24 post numbers, in order, no repeats')
        missing = [i for i in lines if i not in have]
        if missing:
            e.append(f'posts not in the data: {missing[:5]}')
        name, blurb = m.get('name', ''), m.get('blurb', '')
        if not (2 <= len(name.split()) <= 5): e.append('name: 2 to 5 words')
        if not (1 <= len(blurb.split()) <= 22): e.append('blurb: one sentence, at most 20 words')
        tp = (m.get('topics') or [{}])[0]
        if not tp.get('title') or len(tp['title'].split()) > 8: e.append('topics[0].title: at most 8 words')
        if tp.get('at') != (lines[0] if lines else None): e.append('topics[0].at must be the first line')
        if tp.get('key') != key: e.append('topics[0].key must be the moment key')
        sc = tp.get('scene', '')
        if sc != f'm_{key}': e.append(f'topics[0].scene must be "m_{key}"')
        elif sc not in scenes: e.append(f'the picture data/moments/scenes/{sc}.js is missing or has problems')
        text = json.dumps(m, ensure_ascii=False)
        if '—' in text or '–' in text: e.append('no long dashes (use commas, colons or full stops)')
        for word in ('GPT', 'Llama', 'Gemini', 'Claude', 'Haiku'):
            if word in name + ' ' + blurb + ' ' + tp.get('title', ''): e.append(f'use "Resident 1" to "Resident 4", not model names ({word})')
        if e:
            problems[f'moment {key}'] = e
    return len(moments)


def main():
    problems = {}
    scenes = load_scenes(problems)
    n = check_new(scenes, problems)
    for where, errs in problems.items():
        print(f'PROBLEM in {where}:')
        for e in errs:
            print('  -', e)
    if problems:
        print(f'{len(problems)} problem(s). Fix them and run the check again.')
        sys.exit(1)
    print(f'OK: {len(scenes)} pictures' + (f', {n} new moments' if os.path.exists(NEW) else '') + '.')


if __name__ == '__main__':
    main()
