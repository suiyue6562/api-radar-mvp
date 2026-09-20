#!/bin/bash
# =============================================================================
# API优选咨询 - Cloudflare Tunnel 守护
# =============================================================================
# 功能：每分钟检查 cloudflared 进程
#       - 进程不在 → 用 systemd restart cloudflared（推荐）
#         或 nohup 后台启动（无 systemd 时兜底）
#       - 进程在 → 静默退出
#
# 用法： crontab -e 加一行
#          * * * * * bash /home/admin/api-radar/tests/cloudflared_restart.sh >> /tmp/cf_watchdog.log 2>&1
#
# 前置：cloudflared 已登录并配置好 tunnel（详见 deploy/README.md）
#       推荐：systemd 单元 cloudflared.service 配合本脚本做"双保险"
# =============================================================================

set -euo pipefail

# -------- 可调参数 ----------------------------------------------------------
TUNNEL_NAME="api-radar"                    # 与 cloudflared tunnel 创建的名字一致
SYSTEMD_UNIT="cloudflared"                 # systemd 单元名（若使用 systemd 方式启动）
LOG="/tmp/cf_watchdog.log"
CLOUDFLARED_BIN="$(command -v cloudflared || echo /usr/bin/cloudflared)"

ts()  { date '+%F %T'; }
log() { echo "[$(ts)] $*" | tee -a "$LOG"; }

# -------- 1. 检查 cloudflared 进程 ------------------------------------------
# 用 pgrep -x 精确匹配进程名，避免误判
if pgrep -x cloudflared >/dev/null 2>&1; then
    # 进程在 — 进一步做端口可达性探测（可选）
    if curl -sf -o /dev/null -m 5 "https://www.apiyouxuan.top/" 2>/dev/null \
       || curl -s -o /dev/null -m 5 "https://www.apiyouxuan.top/" 2>/dev/null; then
        # 健康 — 静默退出
        exit 0
    fi
    # 进程在但域名不可达 → 强行重启
    log "⚠️ cloudflared 进程在但域名不可达，执行强制重启"
    pkill -x cloudflared 2>/dev/null || true
    sleep 3
else
    log "⚠️ cloudflared 进程不在，准备拉起"
fi

# -------- 2. 拉起方式：优先 systemd，回退到 nohup --------------------------
if command -v systemctl >/dev/null 2>&1 && systemctl list-unit-files "${SYSTEMD_UNIT}.service" >/dev/null 2>&1; then
    log "通过 systemd restart ${SYSTEMD_UNIT}.service ..."
    if sudo systemctl restart "${SYSTEMD_UNIT}.service" >> "$LOG" 2>&1; then
        sleep 5
        if pgrep -x cloudflared >/dev/null; then
            log "✅ systemd 拉起成功 (PID $(pgrep -x cloudflared | head -1))"
            exit 0
        else
            log "❌ systemd restart 后仍未见 cloudflared 进程"
            exit 1
        fi
    else
        log "❌ systemd restart 失败，尝试 nohup 兜底"
    fi
fi

# 兜底：nohup 直接启动（假设已有 ~/.cloudflared/config.yml + cert.pem）
CONFIG_FILE="$HOME/.cloudflared/config.yml"
CERT_FILE="$HOME/.cloudflared/cert.pem"
if [ ! -f "$CONFIG_FILE" ]; then
    log "❌ 找不到 $CONFIG_FILE，无法启动 tunnel"
    exit 1
fi
if [ ! -f "$CERT_FILE" ]; then
    log "❌ 找不到 $CERT_FILE（请先 cloudflared login）"
    exit 1
fi

nohup "$CLOUDFLARED_BIN" tunnel --config "$CONFIG_FILE" run "$TUNNEL_NAME" \
    > /tmp/cloudflared.log 2>&1 &
NEWPID=$!
log "nohup 启动 cloudflared PID=$NEWPID"
sleep 8

if pgrep -x cloudflared >/dev/null; then
    log "✅ cloudflared 已恢复"
    exit 0
else
    log "❌ cloudflared 仍未起来，查看 /tmp/cloudflared.log"
    tail -20 /tmp/cloudflared.log >> "$LOG" 2>/dev/null || true
    exit 1
fi