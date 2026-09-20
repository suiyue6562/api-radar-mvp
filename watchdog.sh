#!/bin/bash
# API优选咨询 watchdog - 每分钟检查服务进程，死了就拉起
# 用法：bash ~/api-youxuan/watchdog.sh

PY_PID_FILE="/tmp/api-youxuan-8080.pid"
SOCAT_PID_FILE="/tmp/api-youxuan-socat.pid"
LOG="/tmp/api-youxuan-watchdog.log"
DEPLOY_DIR="$HOME/api-youxuan/03_prototype"

mkdir -p "$(dirname "$LOG")"

ts() { date '+%F %T'; }

# 1. 检查并拉起 Python 8080
PY_OK=0
if [ -f "$PY_PID_FILE" ] && kill -0 "$(cat "$PY_PID_FILE")" 2>/dev/null; then
    PY_OK=1
elif pgrep -f "python3 -m http.server 8080" > /dev/null; then
    PY_OK=1
fi

if [ "$PY_OK" = "0" ]; then
    if [ -d "$DEPLOY_DIR" ]; then
        cd "$DEPLOY_DIR"
        nohup python3 -m http.server 8080 --bind 0.0.0.0 > /tmp/radar.log 2>&1 &
        echo $! > "$PY_PID_FILE"
        echo "[$(ts)] 🔄 拉起 Python 8080 (PID $!)" >> "$LOG"
    else
        echo "[$(ts)] ❌ Python 8080 挂了，但部署目录不存在: $DEPLOY_DIR" >> "$LOG"
        exit 1
    fi
fi

# 2. 检查并拉起 socat 80 → 8080
SOCAT_OK=0
if [ -f "$SOCAT_PID_FILE" ] && kill -0 "$(cat "$SOCAT_PID_FILE")" 2>/dev/null; then
    SOCAT_OK=1
elif pgrep -f "socat TCP-LISTEN:80" > /dev/null; then
    SOCAT_OK=1
fi

if [ "$SOCAT_OK" = "0" ]; then
    if ! command -v socat > /dev/null 2>&1; then
        sudo dnf install -y socat >> "$LOG" 2>&1
    fi
    if [ -f "$PY_PID_FILE" ] && kill -0 "$(cat "$PY_PID_FILE")" 2>/dev/null; then
        sudo nohup socat TCP-LISTEN:80,fork,reuseaddr TCP:127.0.0.1:8080 >> /tmp/socat.log 2>&1 &
        echo $! > "$SOCAT_PID_FILE"
        echo "[$(ts)] 🔄 拉起 socat 80 → 8080 (PID $!)" >> "$LOG"
    fi
fi

# 3. 健康检查（HTTP 探测）
HTTP_80=$(curl -s -o /dev/null -w "%{http_code}" --max-time 5 http://127.0.0.1:80/ || echo "000")
HTTP_8080=$(curl -s -o /dev/null -w "%{http_code}" --max-time 5 http://127.0.0.1:8080/ || echo "000")

# 4. 异常时记录
if [ "$HTTP_80" != "200" ] || [ "$HTTP_8080" != "200" ]; then
    echo "[$(ts)] ⚠️ 健康检查异常: 80=$HTTP_80  8080=$HTTP_8080" >> "$LOG"
fi

# 5. 日志轮转（> 1MB 时截断）
LOGSIZE=$(stat -c%s "$LOG" 2>/dev/null || stat -f%z "$LOG" 2>/dev/null || echo 0)
if [ "$LOGSIZE" -gt 1048576 ]; then
    tail -n 200 "$LOG" > "$LOG.tmp" && mv "$LOG.tmp" "$LOG"
fi