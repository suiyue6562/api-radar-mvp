#!/bin/bash
# API Radar 自动更新脚本
# 用法：bash ~/api-radar/update.sh

set -e

REPO="https://github.com/suiyue6562/api-radar-mvp.git"
DEPLOY_DIR="$HOME/api-radar"

echo "[$(date '+%F %T')] 开始更新 API Radar..."

# 1. 备份当前版本
if [ -d "$DEPLOY_DIR" ]; then
    mv "$DEPLOY_DIR" "${DEPLOY_DIR}.bak.$(date +%s)" 2>/dev/null || true
fi

# 2. 拉最新代码
git clone "$REPO" "$DEPLOY_DIR" 2>&1 | tail -2

# 3. 重启 HTTP 服务
pkill -f "http.server 8080" 2>/dev/null
sleep 1
cd "$DEPLOY_DIR/03_prototype"
nohup python3 -m http.server 8080 --bind 0.0.0.0 > /tmp/radar.log 2>&1 &
sleep 2

# 4. 验证
HTTP=$(curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8080/)
echo "[$(date '+%F %T')] ✅ 更新完成 → http://127.0.0.1:8080/ = HTTP $HTTP"

# 5. 清理旧备份（保留最近 3 个）
ls -dt ${DEPLOY_DIR}.bak.* 2>/dev/null | tail -n +4 | xargs -r rm -rf
