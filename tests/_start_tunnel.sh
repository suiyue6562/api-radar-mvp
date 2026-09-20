#!/bin/bash
# 启动 cloudflared tunnel
pkill -f cloudflared 2>/dev/null
sleep 2

cd ~
if [ ! -d ~/.cloudflared ]; then
    mkdir -p ~/.cloudflared
fi

# 检查是否有 tunnel credentials
ls ~/.cloudflared/*.json 2>&1 | head -3
echo "---"

# 启动 tunnel
nohup cloudflared tunnel --config /home/admin/.cloudflared/config.yml run api-radar > /tmp/tunnel.log 2>&1 &
sleep 8

echo "=== Tunnel 进程 ==="
pgrep -f cloudflared
echo ""
echo "=== Tunnel 日志 ==="
tail -20 /tmp/tunnel.log
