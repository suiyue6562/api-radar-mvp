#!/bin/bash
# =============================================================================
# API优选咨询 - 自动 git pull 守护
# =============================================================================
# 功能：每 5 分钟跑一次（cron 触发）
#       - git fetch + git pull origin main
#       - 检测到新 commit → 重启 http.server（让缓存页面立即拉新代码）
#       - 无更新 → 静默退出
#
# 用法： crontab -e 加一行
#          */5 * * * * bash /home/admin/api-radar/tests/auto_pull.sh >> /tmp/auto_pull.log 2>&1
#
# 日志： /tmp/auto_pull.log
# =============================================================================

set -euo pipefail

# -------- 可调参数 ----------------------------------------------------------
REPO_DIR="/home/admin/api-radar"
BRANCH="main"
REMOTE="origin"
PORT=8080
LOG="/tmp/auto_pull.log"
PY_PID_FILE="/tmp/api-radar-http-${PORT}.pid"

ts()  { date '+%F %T'; }
log() { echo "[$(ts)] $*" | tee -a "$LOG"; }

# -------- 前置检查 ----------------------------------------------------------
if [ ! -d "$REPO_DIR/.git" ]; then
    log "❌ $REPO_DIR 不是 git 仓库，跳过"
    exit 0
fi

# 记录更新前的 HEAD
HEAD_BEFORE=$(git -C "$REPO_DIR" rev-parse HEAD 2>/dev/null || echo "none")

# -------- 1. 拉取 -----------------------------------------------------------
log "开始 git fetch + pull..."
if ! git -C "$REPO_DIR" fetch "$REMOTE" "$BRANCH" >> "$LOG" 2>&1; then
    log "❌ git fetch 失败（网络/权限问题），不重启服务"
    exit 1
fi

# 用 fast-forward only，避免合并不到本地未推送的 commit
if ! git -C "$REPO_DIR" pull --ff-only "$REMOTE" "$BRANCH" >> "$LOG" 2>&1; then
    log "⚠️ git pull --ff-only 失败（可能有未推送提交），跳过本次更新"
    exit 1
fi

HEAD_AFTER=$(git -C "$REPO_DIR" rev-parse HEAD)

# -------- 2. 判断有无更新 ---------------------------------------------------
if [ "$HEAD_BEFORE" = "$HEAD_AFTER" ]; then
    log "无更新 (HEAD=$HEAD_AFTER)"
    exit 0
fi

# -------- 3. 有更新：重启 http.server ---------------------------------------
SHORT_HASH=$(git -C "$REPO_DIR" rev-parse --short HEAD)
COMMIT_MSG=$(git -C "$REPO_DIR" log -1 --pretty=format:'%s' 2>/dev/null || echo "")
log "✅ 检测到新代码: $SHORT_HASH  $COMMIT_MSG"

# 重启 http.server：杀进程 → systemd 会自动拉起（如果配了 Restart=always）
# 或自己 nohup 拉一次
if [ -f "$PY_PID_FILE" ] && kill -0 "$(cat "$PY_PID_FILE")" 2>/dev/null; then
    PID=$(cat "$PY_PID_FILE")
    log "杀掉旧 http.server PID=$PID"
    kill "$PID" 2>/dev/null || true
    sleep 2
fi
# 兜底：杀所有同名同端口进程
pkill -f "python3 -m http.server ${PORT}" 2>/dev/null || true
sleep 1

# 启动新进程
cd "$REPO_DIR/03_prototype"
nohup python3 -m http.server "$PORT" --bind 0.0.0.0 > /tmp/radar.log 2>&1 &
echo $! > "$PY_PID_FILE"
sleep 2

# 健康验证
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" --max-time 5 "http://127.0.0.1:${PORT}/" || echo "000")
if [ "$HTTP_CODE" = "200" ]; then
    log "✅ 重启成功 HTTP=$HTTP_CODE  hash=$SHORT_HASH"
else
    log "❌ 重启后 HTTP=$HTTP_CODE，请查 /tmp/radar.log"
    exit 1
fi

# -------- 4. 触发 Cloudflare cache purge（让边缘节点拉新页面） -------------
# 可选：通过 Cloudflare API 主动 purge，需要 CLOUDFLARE_API_TOKEN + ZONE_ID
# 详见 deploy/README.md "Cache Purge" 一节
if [ -n "${CLOUDFLARE_API_TOKEN:-}" ] && [ -n "${CLOUDFLARE_ZONE_ID:-}" ]; then
    log "正在 purge Cloudflare cache..."
    if curl -sf -X POST \
        "https://api.cloudflare.com/client/v4/zones/${CLOUDFLARE_ZONE_ID}/purge_cache" \
        -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
        -H "Content-Type: application/json" \
        --data '{"purge_everything":true}' >/dev/null 2>&1; then
        log "✅ Cloudflare cache purged"
    else
        log "⚠️ Cloudflare cache purge 失败（不影响部署）"
    fi
fi

log "完成 (HEAD=$SHORT_HASH)"