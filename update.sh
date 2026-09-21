#!/bin/bash
# =============================================================================
# API优选咨询 - 一键更新脚本 v3 (升级版)
# =============================================================================
# 相比 v2 新增：
#   1) pgrep -f 精确检测旧进程（不再 pkill -f python 误杀）
#   2) 磁盘空间检查 (< 500MB 拒绝更新)
#   3) Cloudflare cache purge（可选，环境变量提供 token 时启用）
#   4) 输出 commit hash + 变更文件列表
#   5) 启动顺序：先杀进程 → 拉代码 → 启进程 → 验活 → purge cache
#
# 用法： bash update.sh
# =============================================================================

set -euo pipefail

# -------- 可调参数 ----------------------------------------------------------
REPO="https://github.com/suiyue6562/api-youxuan-mvp.git"
DEPLOY_DIR="$HOME/api-youxuan"
PROTOTYPE_DIR="$DEPLOY_DIR/03_prototype"
PORT=8080
MIN_DISK_MB=500                              # 磁盘剩余空间下限
BACKUP_KEEP=3                                # 保留最近几个备份
LOG="/tmp/update.log"
PY_PID_FILE="/tmp/api-youxuan-${PORT}.pid"

ts()  { date '+%F %T'; }
log() { echo "[$(ts)] $*" | tee -a "$LOG"; }

# -------- 0. 磁盘空间检查 ---------------------------------------------------
AVAIL_MB=$(df -m "$HOME" | awk 'NR==2 {print $4}')
log "磁盘剩余 ${AVAIL_MB}MB (下限 ${MIN_DISK_MB}MB)"
if [ "$AVAIL_MB" -lt "$MIN_DISK_MB" ]; then
    log "❌ 磁盘空间不足，拒绝更新"
    log "   清理命令： sudo dnf clean all && sudo journalctl --vacuum-size=100M"
    exit 1
fi

# -------- 1. 备份当前版本（保留最近 $BACKUP_KEEP 个） -----------------------
if [ -d "$DEPLOY_DIR" ]; then
    BAK_DIR="${DEPLOY_DIR}.bak.$(date +%s)"
    log "备份当前版本到 $BAK_DIR"
    cp -a "$DEPLOY_DIR" "$BAK_DIR"
    # 清理老备份
    ls -dt ${DEPLOY_DIR}.bak.* 2>/dev/null | tail -n +$((BACKUP_KEEP + 1)) | xargs -r rm -rf
fi

# -------- 2. 拉最新代码（保留 .git） ----------------------------------------
log "开始 git clone $REPO ..."
if [ -d "$DEPLOY_DIR/.git" ]; then
    cd "$DEPLOY_DIR"
    git fetch origin main >> "$LOG" 2>&1
    git reset --hard origin/main >> "$LOG" 2>&1
else
    git clone "$REPO" "$DEPLOY_DIR" >> "$LOG" 2>&1
fi

# -------- 3. 记录新版本信息 --------------------------------------------------
HEAD_SHORT=$(git -C "$DEPLOY_DIR" rev-parse --short HEAD)
HEAD_FULL=$(git -C "$DEPLOY_DIR" rev-parse HEAD)
COMMIT_MSG=$(git -C "$DEPLOY_DIR" log -1 --pretty=format:'%s')
COMMIT_AUTHOR=$(git -C "$DEPLOY_DIR" log -1 --pretty=format:'%an')
COMMIT_DATE=$(git -C "$DEPLOY_DIR" log -1 --pretty=format:'%ad' --date=iso)
CHANGED_FILES=$(git -C "$DEPLOY_DIR" diff --name-status HEAD~1 HEAD 2>/dev/null \
    | awk '{print "    " $0}' || echo "    (首次部署或无历史)")

log "📌 新版本信息："
log "    short:  $HEAD_SHORT"
log "    full:   $HEAD_FULL"
log "    msg:    $COMMIT_MSG"
log "    author: $COMMIT_AUTHOR"
log "    date:   $COMMIT_DATE"
log "    files:  "
echo "$CHANGED_FILES" | tee -a "$LOG"

# -------- 4. 精确杀掉旧 http.server 进程 ------------------------------------
# 优先用 pid 文件；没有则用 pgrep -f 精确定位"python3 -m http.server PORT"
PIDS_KILLED=""
if [ -f "$PY_PID_FILE" ] && kill -0 "$(cat "$PY_PID_FILE")" 2>/dev/null; then
    PIDS_KILLED="$(cat "$PY_PID_FILE")"
    kill "$PIDS_KILLED" 2>/dev/null || true
fi
PIDS_KILLED_EXTRA=$(pgrep -f "python3 -m http.server ${PORT}" || true)
if [ -n "$PIDS_KILLED_EXTRA" ]; then
    PIDS_KILLED="${PIDS_KILLED} ${PIDS_KILLED_EXTRA}"
    echo "$PIDS_KILLED_EXTRA" | xargs -r kill 2>/dev/null || true
fi
sleep 2
# 兜底：强杀
pgrep -f "python3 -m http.server ${PORT}" | xargs -r kill -9 2>/dev/null || true
log "已杀掉旧进程: ${PIDS_KILLED:-(无)}"
rm -f "$PY_PID_FILE"

# -------- 5. 启动新 http.server --------------------------------------------
cd "$PROTOTYPE_DIR"
nohup python3 -m http.server "$PORT" --bind 0.0.0.0 > /tmp/radar.log 2>&1 &
echo $! > "$PY_PID_FILE"
NEW_PID=$(cat "$PY_PID_FILE")
log "启动新 http.server PID=$NEW_PID"
sleep 3

# -------- 6. 健康验证 -------------------------------------------------------
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" --max-time 5 "http://127.0.0.1:${PORT}/" || echo "000")
if [ "$HTTP_CODE" != "200" ]; then
    log "❌ 启动失败 HTTP=$HTTP_CODE，请查 /tmp/radar.log"
    log "   回滚命令： rm -rf $DEPLOY_DIR && mv ${BAK_DIR} $DEPLOY_DIR && bash $0"
    exit 1
fi
log "✅ HTTP 健康检查通过 (HTTP $HTTP_CODE)"

# -------- 7. Cloudflare cache purge（可选） ---------------------------------
# 启用方式（任选其一）：
#   a) export CLOUDFLARE_API_TOKEN=xxx; export CLOUDFLARE_ZONE_ID=yyy; bash update.sh
#   b) 写入 /etc/api-radar.env 然后 source
if [ -f /etc/api-radar.env ]; then
    # shellcheck disable=SC1091
    source /etc/api-radar.env
fi

# 7.1 部署 Cloudflare Worker（Phase 2.1 品牌降级等新逻辑都靠这一步生效）
if [ -d "$DEPLOY_DIR/backend/worker" ] && [ -n "${CLOUDFLARE_API_TOKEN:-}" ]; then
    log "正在部署 Cloudflare Worker (api-youxuan-api)..."
    if ( cd "$DEPLOY_DIR/backend/worker" && npx wrangler deploy >> "$LOG" 2>&1 ); then
        log "✅ Worker 已部署"
    else
        log "⚠️ Worker 部署失败（Python http.server 仍可用，下次 update 再补）"
    fi
else
    log "ℹ️  未配置 CLOUDFLARE_API_TOKEN 或 worker 目录不存在，跳过 Worker 部署"
fi

if [ -n "${CLOUDFLARE_API_TOKEN:-}" ] && [ -n "${CLOUDFLARE_ZONE_ID:-}" ]; then
    log "正在 purge Cloudflare cache..."
    if curl -sf -X POST \
        "https://api.cloudflare.com/client/v4/zones/${CLOUDFLARE_ZONE_ID}/purge_cache" \
        -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
        -H "Content-Type: application/json" \
        --data '{"purge_everything":true}' >> "$LOG" 2>&1; then
        log "✅ Cloudflare cache 已清空"
    else
        log "⚠️ Cloudflare cache purge 失败（不影响部署，CDN 最长 1h 自然过期）"
    fi
else
    log "ℹ️  未配置 CLOUDFLARE_API_TOKEN/ZONE_ID，跳过 cache purge"
fi

# -------- 8. 输出最终状态 ---------------------------------------------------
cat <<EOF

================================================================================
✅ API优选咨询 更新完成
================================================================================
  版本：    $HEAD_SHORT  ($COMMIT_MSG)
  时间：    $(ts)
  HTTP：    127.0.0.1:$PORT  →  HTTP $HTTP_CODE
  域名：    https://www.apiyouxuan.top/
  备份：    $BAK_DIR
  日志：    $LOG
================================================================================

EOF