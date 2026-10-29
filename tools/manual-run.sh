#!/bin/bash
# One manual pass, from start to end:
#   1. get the newest posts (the "Update the room" job on GitHub, then git pull)
#   2. Claude (Claude Code, on this computer) reads the new posts, chooses moments and draws a picture for each
#   3. check the moments and the pictures, build the site
#   4. you look at the preview and say yes or no
#   5. publish (commit and push; GitHub builds the site)
# Run it from anywhere:   bash ~/Code/ai-big-brother/tools/manual-run.sh
# Needs: git, gh (logged in), python3, and Claude Code ("claude", logged in). Optional: CLAUDE_MODEL=opus (or sonnet) to pick the model.
set -euo pipefail
cd "$(dirname "$0")/.."

for c in git gh python3 claude; do
  command -v "$c" > /dev/null || { echo "Missing: $c. Install it first (Claude Code: https://code.claude.com)."; exit 1; }
done
if [ -n "$(git status --porcelain)" ]; then
  echo "The repo has changes that are not committed. Commit or remove them first:"; git status --short; exit 1
fi

echo "1/5 Get the newest posts"
git pull -q --rebase
if gh workflow run update.yml > /dev/null 2>&1; then
  sleep 10
  RUN=$(gh run list --workflow update.yml --event workflow_dispatch --limit 1 --json databaseId --jq '.[0].databaseId' || true)
  if [ -n "$RUN" ]; then gh run watch "$RUN" --exit-status > /dev/null 2>&1 || echo "    The update job had a problem. I use the posts that are on GitHub now."; fi
fi
git pull -q --rebase
python3 scripts/show_posts.py summary
if python3 scripts/show_posts.py summary | grep -q '^No new posts'; then exit 0; fi

echo "2/5 Claude chooses the moments and draws the pictures (this can take 5 to 15 minutes)"
rm -f data/moments/new-moments.json
MODEL_ARGS=()
if [ -n "${CLAUDE_MODEL:-}" ]; then MODEL_ARGS=(--model "$CLAUDE_MODEL"); fi
PROMPT="$(cat tools/manual-run-prompt.md)

The time now (UTC): $(date -u +%Y-%m-%dT%H:%M:%SZ)."
claude -p "$PROMPT" ${MODEL_ARGS[@]+"${MODEL_ARGS[@]}"} \
  --tools "Read,Edit,Write,Bash" --permission-mode dontAsk --max-turns 150 \
  --allowedTools "Read" "Edit(data/moments/**)" "Bash(python3 scripts/show_posts.py *)" "Bash(python3 scripts/check_scenes.py)" \
  || echo "    Claude stopped with an error. I check what it made."

undo() {   # remove everything this run made in data/moments
  git checkout -q -- data/moments
  git clean -q -f -- data/moments
}
if [ ! -f data/moments/new-moments.json ]; then echo "Claude made no moments file. Nothing to publish."; undo; exit 0; fi
if python3 -c 'import json,sys; sys.exit(0 if json.load(open("data/moments/new-moments.json"))["moments"] else 1)'; then :; else
  echo "Claude found no new moments this time. Nothing to publish."; undo; exit 0
fi

echo "3/5 Check and build a preview"
if ! python3 scripts/check_scenes.py; then
  echo "The check found problems (above). Nothing was published."
  read -r -p "Undo what Claude made? [Y/n] " a; if [ "${a:-Y}" != "n" ]; then undo; fi
  exit 1
fi
python3 - << 'PY'
import json
for m in json.load(open('data/moments/new-moments.json'))['moments']:
    print(f"   {m['key']}: {m['name']}. {m['blurb']}")
PY
python3 scripts/add_moments.py
python3 scripts/build_site.py _site
if command -v open > /dev/null; then open "_site/index.html"; fi

echo "4/5 Look at the preview in your browser: MOMENTS, then the last moments (the newest are at the end)."
read -r -p "Publish these moments? [y = yes, k = keep the files and stop, n = undo] " ok
case "$ok" in
  y|Y) ;;
  k|K) echo "Kept. The changes are in data/moments (not committed). Publish later with git add data/moments, commit and push."; exit 0 ;;
  *) undo; echo "Undone. Nothing was published."; exit 0 ;;
esac

echo "5/5 Publish"
git add data/moments
git commit -q -m "Moments and pictures from a manual run with Claude"
git pull -q --rebase
git push -q
sleep 15
RUN=$(gh run list --workflow update.yml --event push --limit 1 --json databaseId --jq '.[0].databaseId' || true)
if [ -n "$RUN" ]; then gh run watch "$RUN" --exit-status > /dev/null || echo "    The run failed. Open it with: gh run view $RUN --log-failed"; fi
echo "Done: $(gh api "repos/{owner}/{repo}/pages" --jq .html_url). Reload with Cmd+Shift+R."
