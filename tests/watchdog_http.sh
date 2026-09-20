#!/bin/bash
# =============================================================================
# API优选咨询 - Python HTTP Server Watchdog
# =============================================================================
# 功能：每 30 秒对 Python http.server 做一次健康检查
#       - 进程死了 → nohup 重启
#       - 进程在但端口不响应 → 杀掉再重启
#       - 健康 → 静默等下一轮
#
# 用法： bash tests/watchdog_http.sh
#       推荐由 systemd (api-radar-http.service) 拉起，永驻后台
#       也可手动 nohup bash tests/watchdog_http.sh >/dev/null 2>&1 & 跑
#
# 日志： /tmp/watchdog_http.log          (本脚本自身日志)
#       /tmp/radar.log                   (http.server 自身日志)
# =============================================================================

set -euo pipefail

# -------- 可调参数（部署时改这里） ------------------------------------------
DEPLOY_DIR="/home/admin/api-radar/03_prototype"
PORT=8080
HEALTH_INTERVAL=30          # 健康检查周期（秒）
HTTP_TIMEOUT=5              # curl 超时（秒）
LOG="/tmp/watchdog_http.log"
SERVICE_LOG="/tmp/radar.log"
PY_PID_FILE="/tmp/api-radar-http-${PORT}.pid"

# -------- 工具函数 ----------------------------------------------------------
ts()  { date '+%F %T'; }
log() { echo "[$(ts)] $*" | tee -a "$LOG"; }

# 进程是否存在（精确匹配 python3 -m http.server PORT）
is_py_alive() {
    pgrep -f "python3 -m http.server ${PORT}" >/dev/null
}

# 端口是否真能返回 2xx/3xx
is_port_alive() {
    curl -sf -o /dev/null -m "$HTTP_TIMEOUT" "http://127.0.0.1:${PORT}/" \
        || curl -s -o /dev/null -m "$HTTP_TIMEOUT" -w "" "http://127.0.0.1:${PORT}/" \
               | grep -qE 'HTTP/[0-9.]+ [23]'
}

start_http() {
    if [ ! -d "$DEPLOY_DIR" ]; then
        log "❌ DEPLOY_DIR 不存在: $DEPLOY_DIR，无法重启"
        return 1
    fi
    # 先清掉旧的同名进程
    pkill -f "python3 -m http.server ${PORT}" 2>/dev/null || true
    sleep 1
    cd "$DEPLOY_DIR"
    nohup python3 -m http.server "$PORT" --bind 0.0.0.0 \
        > "$SERVICE_LOG" 2>&1 &
    echo $! > "$PY_PID_FILE"
    sleep 2
    if is_port_alive; then
        log "✅ 重启成功 (PID $(cat "$PY_PID_FILE"))"
        return 0
    else
        log "❌ 重启后端口仍不可达，查看 $SERVICE_LOG"
        return 1
    fi
}

# -------- 主循环 ------------------------------------------------------------
log "=== watchdog_http.sh 启动 ==="
log "    DEPLOY_DIR=$DEPLOY_DIR  PORT=$PORT  interval=${HEALTH_INTERVAL}s"

# 启动时若没进程，先拉一次
if ! is_py_alive || ! is_port_alive; then
    log "启动时检测到 http.server 不在运行，执行首次拉起"
    start_http || true
fi

while true; do
    if is_py_alive && is_port_alive; then
        # 健康 — 静默等下一轮（不刷日志，避免日志膨胀）
        :
    else
        log "⚠️  http.server 异常 (进程存活=${is_py_alive})，准备重启"
        start_http || true
    fi
    sleep "$HEALTH_INTERVAL"
done