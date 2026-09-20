#!/bin/bash
# API优选咨询 自动更新脚本 v2 - 修复版
# 修复：1) pkill 不再误杀 socat 和脚本本身  2) 加 restart_socat 确保 80 端口转发

set -e

REPO="https://github.com/suiyue6562/api-youxuan-mvp.git"
DEPLOY_DIR="$HOME/api-youxuan"
PY_PID_FILE="/tmp/api-youxuan-8080.pid"
SOCAT_PID_FILE="/tmp/api-youxuan-socat.pid"

echo "[$(date '+%F %T')] 开始更新 API优选咨询..."

# 1. 备份当前版本
if [ -d "$DEPLOY_DIR" ]; then
    mv "$DEPLOY_DIR" "${DEPLOY_DIR}.bak.$(date +%s)" 2>/dev/null || true
fi

# 2. 拉最新代码
git clone "$REPO" "$DEPLOY_DIR" 2>&1 | tail -2

# 3. 只杀掉 8080 的 python（按 pid 文件精确杀）
if [ -f "$PY_PID_FILE" ]; then
    OLDPID=$(cat "$PY_PID_FILE")
    if kill -0 "$OLDPID" 2>/dev/null; then
        kill "$OLDPID" 2>/dev/null || true
    fi
    rm -f "$PY_PID_FILE"
fi
# 兜底：用 pgrep 精确定位 python http.server 进程
pgrep -f "python3 -m http.server 8080" | xargs -r kill 2>/dev/null || true
sleep 1

# 4. 重启 Python 8080
cd "$DEPLOY_DIR/03_prototype"
nohup python3 -m http.server 8080 --bind 0.0.0.0 > /tmp/radar.log 2>&1 &
echo $! > "$PY_PID_FILE"
sleep 2

# 5. 确保 socat 在跑（80 → 8080 转发）
if [ ! -f "$SOCAT_PID_FILE" ] || ! kill -0 "$(cat "$SOCAT_PID_FILE")" 2>/dev/null; then
    if ! pgrep -f "socat TCP-LISTEN:80" > /dev/null; then
        if ! command -v socat > /dev/null 2>&1; then
            echo "[$(date)] socat 未装，先装..."
            sudo dnf install -y socat 2>&1 | tail -1
        fi
        sudo nohup socat TCP-LISTEN:80,fork,reuseaddr TCP:127.0.0.1:8080 > /tmp/socat.log 2>&1 &
        echo $! > "$SOCAT_PID_FILE"
        sleep 1
    fi
fi

# 6. 验证
HTTP_8080=$(curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8080/ || echo "000")
HTTP_80=$(curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:80/ || echo "000")
echo "[$(date '+%F %T')] ✅ 更新完成"
echo "  - 8080 (Python): HTTP $HTTP_8080"
echo "  - 80 (socat)  : HTTP $HTTP_80"
echo "  - 域名 (Cloudflare): https://www.apiyouxuan.top/"

# 7. 清理旧备份（保留最近 3 个）
ls -dt ${DEPLOY_DIR}.bak.* 2>/dev/null | tail -n +4 | xargs -r rm -rf