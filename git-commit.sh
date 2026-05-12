#!/usr/bin/env bash
# 用途：提交并推送当前主题仓库。
# 默认使用 ~/.local/bin/git-with-ai.sh 生成提交信息；可传 --tool codex / --tool gemini 切换工具。
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$(realpath "$0")")" && pwd)"
cd "$SCRIPT_DIR" || exit 1

GIT_WITH_AI="${GIT_WITH_AI:-$HOME/.local/bin/git-with-ai.sh}"

if [[ ! -x "$GIT_WITH_AI" ]]; then
  echo "未找到可执行的 git-with-ai.sh：$GIT_WITH_AI" >&2
  exit 1
fi

"$GIT_WITH_AI" "$@"
git push -u origin main
