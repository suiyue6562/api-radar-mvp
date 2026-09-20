#!/bin/bash
# API优选咨询 - Python HTTP Server watchdog
# 每 30 秒检查一次，死了就重启

LOG=/tmp/python_watchdog.log
SERVICE_LOG=/tmp/radar.log
DIR=/home/admin/api-radar/03_prototype
PORT=8080

echo "[$(date)] Watchdog started" >> $LOG

while true; do
    # 检查进程
    if pgrep -f "http.server $PORT" > /dev/null; then
        # 进程在跑，再验一下端口真活着
        if curl -sf -o /dev/null -m 5 "http://127.0.0.1:$PORT/"; then
            sleep 30
            continue
        fi
    fi

    # 死了，重启
    echo "[$(date)] HTTP server died, restarting..." >> $LOG
    pkill -f "http.server $PORT" 2>/dev/null
    sleep 2
    cd "$DIR"
    nohup python3 -m http.server $PORT --bind 0.0.0.0 > $SERVICE_LOG 2>&1 &
    sleep 3

    if curl -sf -o /dev/null -m 5 "http://127.0.0.1:$PORT/"; then
        echo "[$(date)] Restart OK (PID $!)" >> $LOG
    else
        echo "[$(date)] Restart FAILED" >> $LOG
    fi

    sleep 30
done