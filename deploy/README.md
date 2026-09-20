# API优选咨询 - 服务器部署指南

> 适用系统：Alibaba Cloud Linux 3 / CentOS / RHEL 8+ （dnf 包管理器）
> 目标域名：`https://www.apiyouxuan.top/`
> 部署目录：`/home/admin/api-radar/`
> 服务端口：8080（python http.server） → 80（socat/cloudflared）

---

## 目录

1. [服务器初始化](#1-服务器初始化)
2. [项目部署](#2-项目部署)
3. [systemd 服务配置](#3-systemd-服务配置)
4. [crontab 定时任务](#4-crontab-定时任务)
5. [监控脚本说明](#5-监控脚本说明)
6. [Cloudflare Tunnel 配置](#6-cloudflare-tunnel-配置)
7. [一键更新](#7-一键更新)
8. [故障排查](#8-故障排查)

---

## 1. 服务器初始化

### 1.1 基础环境

```bash
# 更新系统
sudo dnf update -y

# 基础工具
sudo dnf install -y git python3 curl socat tar coreutils

# 创建用户（如需，admin 通常已存在）
sudo useradd -m admin || true
sudo usermod -aG wheel admin

# 创建部署目录
sudo mkdir -p /home/admin/api-radar
sudo chown -R admin:admin /home/admin/api-radar
```

### 1.2 防火墙

```bash
# 阿里云安全组需要放行：80, 443, 8080（按需）
sudo firewall-cmd --permanent --add-port=80/tcp
sudo firewall-cmd --permanent --add-port=8080/tcp
sudo firewall-cmd --reload
```

### 1.3 Cloudflared 安装

```bash
# 阿里云 Linux 3 对应 RHEL x86_64
curl -L --output /tmp/cloudflared.rpm \
    https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-x86_64.rpm
sudo dnf install -y /tmp/cloudflared.rpm
cloudflared --version
```

---

## 2. 项目部署

### 2.1 首次部署

```bash
# 克隆仓库
cd /home/admin
git clone https://github.com/suiyue6562/api-youxuan-mvp.git api-radar

# 进入目录
cd api-radar

# 首次启动 http.server 测试
cd 03_prototype
nohup python3 -m http.server 8080 --bind 0.0.0.0 > /tmp/radar.log 2>&1 &
echo $! > /tmp/api-radar-http-8080.pid

# 验证
curl -I http://127.0.0.1:8080/
```

### 2.2 socat 80→8080 转发（如不用 cloudflared 直连）

```bash
sudo nohup socat TCP-LISTEN:80,fork,reuseaddr TCP:127.0.0.1:8080 \
    > /tmp/socat.log 2>&1 &
echo $! > /tmp/api-radar-socat.pid
```

---

## 3. systemd 服务配置

把以下三个 unit 文件写入 `/etc/systemd/system/`，然后：

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now api-radar-http.service cloudflared.service
sudo systemctl status api-radar-http cloudflared
```

### 3.1 `api-radar-http.service`

```ini
[Unit]
Description=API Radar Python HTTP Server
After=network.target

[Service]
Type=simple
User=admin
WorkingDirectory=/home/admin/api-radar/03_prototype
ExecStart=/usr/bin/python3 -m http.server 8080 --bind 0.0.0.0
Restart=always
RestartSec=5
StandardOutput=append:/tmp/radar.log
StandardError=append:/tmp/radar.log
Environment=PYTHONUNBUFFERED=1

[Install]
WantedBy=multi-user.target
```

> 关键点：`Restart=always` 让 systemd 自动拉起死掉的进程，watchdog 脚本就是它的"双保险"。

### 3.2 `api-radar-watchdog.service`（可选，把 watchdog 当 systemd 服务）

```ini
[Unit]
Description=API Radar HTTP Watchdog (30s health check)
After=api-radar-http.service

[Service]
Type=simple
User=admin
ExecStart=/bin/bash /home/admin/api-radar/tests/watchdog_http.sh
Restart=always
RestartSec=10
StandardOutput=append:/tmp/watchdog_http.log
StandardError=append:/tmp/watchdog_http.log

[Install]
WantedBy=multi-user.target
```

### 3.3 `cloudflared.service`

```ini
[Unit]
Description=Cloudflare Tunnel for API Radar
After=network-online.target
Wants=network-online.target

[Service]
Type=notify
User=admin
ExecStart=/usr/bin/cloudflared tunnel --config /home/admin/.cloudflared/config.yml run api-radar
Restart=always
RestartSec=5
LimitNOFILE=65536
Environment=CLOUDFLARED_TUNNEL_CREDENTIAL_FILE=/home/admin/.cloudflared/<YOUR-TUNNEL-ID>.json

[Install]
WantedBy=multi-user.target
```

### 3.4 常用命令

```bash
# 查看状态
sudo systemctl status api-radar-http

# 重启
sudo systemctl restart api-radar-http

# 看日志
sudo journalctl -u api-radar-http -n 50 -f

# 停用某个 unit
sudo systemctl disable --now api-radar-watchdog.service
```

---

## 4. crontab 定时任务

```bash
crontab -e
```

加入以下行（注意 `PATH` 必填，否则 cron 找不到命令）：

```cron
# 环境变量
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/home/admin/.local/bin
SHELL=/bin/bash

# 每 5 分钟自动 git pull + 重启 http.server
*/5 * * * * bash /home/admin/api-radar/tests/auto_pull.sh >> /tmp/auto_pull.log 2>&1

# 每分钟检查 cloudflared（systemd 之外的双保险）
* * * * * bash /home/admin/api-radar/tests/cloudflared_restart.sh >> /tmp/cf_watchdog.log 2>&1

# 每天凌晨 3 点清理老日志（保留 7 天）
0 3 * * * find /tmp -maxdepth 1 \( -name "*.log" -o -name "*.pid" \) -mtime +7 -delete
```

查看 cron 实际生效任务：

```bash
crontab -l
sudo journalctl -u crond -n 20 -f
```

---

## 5. 监控脚本说明

| 脚本 | 触发方式 | 频率 | 作用 |
|---|---|---|---|
| `tests/watchdog_http.sh` | systemd 或手动 nohup | 每 30s | http.server 健康检查 + 死了重启 |
| `tests/auto_pull.sh` | cron | 每 5min | git pull + 有更新则重启 + 可选 purge CDN |
| `tests/cloudflared_restart.sh` | cron | 每 1min | cloudflared 进程守护 + 域名可达性探测 |
| `update.sh` | 手动 | 一次性 | 一键更新版本（带磁盘检查 + commit 信息） |

### 5.1 关键路径

| 用途 | 路径 |
|---|---|
| Python http.server PID | `/tmp/api-radar-http-8080.pid` |
| socat PID | `/tmp/api-radar-socat.pid` |
| http.server 日志 | `/tmp/radar.log` |
| socat 日志 | `/tmp/socat.log` |
| watchdog 日志 | `/tmp/watchdog_http.log` |
| auto_pull 日志 | `/tmp/auto_pull.log` |
| cloudflared 日志 | `/tmp/cf_watchdog.log` |
| update 日志 | `/tmp/update.log` |
| cloudflared 启动日志 | `/tmp/cloudflared.log` |

### 5.2 手动测试脚本

```bash
# 单次运行 auto_pull（不真正重启，只 pull）
DRY_RUN=1 bash tests/auto_pull.sh

# 看 watchdog 最近日志
tail -f /tmp/watchdog_http.log

# 强制重启 http.server
pkill -f "python3 -m http.server 8080"
cd /home/admin/api-radar/03_prototype
nohup python3 -m http.server 8080 --bind 0.0.0.0 > /tmp/radar.log 2>&1 &
```

---

## 6. Cloudflare Tunnel 配置

### 6.1 首次登录

```bash
cloudflared tunnel login
# 浏览器打开链接 → 选择 apiyouxuan.top 域 → 授权
# → cert.pem 自动下载到 ~/.cloudflared/
```

### 6.2 创建 tunnel

```bash
cloudflared tunnel create api-radar
# 输出：Tunnel credentials written to /home/admin/.cloudflared/<UUID>.json
```

### 6.3 配置 DNS

```bash
cloudflared tunnel route dns api-radar www.apiyouxuan.top
cloudflared tunnel route dns api-radar apiyouxuan.top
```

### 6.4 写 `~/.cloudflared/config.yml`

```yaml
tunnel: api-radar
credentials-file: /home/admin/.cloudflared/<UUID>.json

ingress:
  - hostname: www.apiyouxuan.top
    service: http://127.0.0.1:8080
  - hostname: apiyouxuan.top
    service: http://127.0.0.1:8080
  - service: http_status:404
```

### 6.5 启动

```bash
# 方式 A：交给 systemd（推荐）
sudo systemctl enable --now cloudflared

# 方式 B：手动 nohup
nohup cloudflared tunnel --config /home/admin/.cloudflared/config.yml run api-radar \
    > /tmp/cloudflared.log 2>&1 &
```

### 6.6 Cache Purge（可选）

`update.sh` 在更新代码后会主动 purge Cloudflare 缓存。配置环境变量：

```bash
sudo tee /etc/api-radar.env > /dev/null <<EOF
export CLOUDFLARE_API_TOKEN="your-cloudflare-api-token"
export CLOUDFLARE_ZONE_ID="your-zone-id"
EOF
sudo chmod 600 /etc/api-radar.env
```

获取 Token 和 Zone ID：
1. <https://dash.cloudflare.com/profile/api-tokens> → Create Token → Edit zone DNS → 使用模板
2. Zone ID 在域名 overview 页右下角

---

## 7. 一键更新

```bash
bash /home/admin/api-radar/update.sh
```

输出会包含：
- 磁盘空间检查结果
- commit hash + author + 日期 + 变更文件
- 旧进程 PID + 新进程 PID
- HTTP 健康码
- Cloudflare purge 结果（如已配置）

带日志：

```bash
bash /home/admin/api-radar/update.sh 2>&1 | tee /tmp/update-$(date +%F).log
```

回滚：

```bash
# 找最近备份
ls -dt /home/admin/api-youxuan.bak.* | head -1
# 回滚
rm -rf /home/admin/api-youxuan
mv /home/admin/api-youxuan.bak.<timestamp> /home/admin/api-youxuan
bash /home/admin/api-radar/update.sh
```

---

## 8. 故障排查

### 8.1 域名访问不到

```bash
# 1. 看 cloudflared 是否在
pgrep -fa cloudflared

# 2. 看 cloudflared 日志
tail -30 /tmp/cf_watchdog.log
sudo journalctl -u cloudflared -n 30 -f

# 3. 本地端口是否通
curl -I http://127.0.0.1:8080/

# 4. cloudflared 域名配置
cat ~/.cloudflared/config.yml

# 5. 重启 cloudflared
sudo systemctl restart cloudflared
```

### 8.2 auto_pull 没自动更新

```bash
# 1. 看 cron 是否跑了
sudo journalctl -u crond -n 20
grep CRON /var/log/cron     # 阿里云可能没装 rsyslog，看 journal

# 2. 看 auto_pull 日志
tail -50 /tmp/auto_pull.log

# 3. 手动跑一次
bash /home/admin/api-radar/tests/auto_pull.sh

# 4. 权限问题：cron 用户和 admin 不一致 → 用 admin 用户的 crontab
crontab -u admin -l
```

### 8.3 磁盘满

```bash
df -h
# 找大文件
sudo du -sh /* 2>/dev/null | sort -h | tail -10
# 清理
sudo dnf clean all
sudo journalctl --vacuum-size=100M
find /var/log -name "*.gz" -mtime +30 -delete
```

### 8.4 服务起来了但访问慢

```bash
# 看进程 CPU / 内存
top -u admin
# 看连接数
ss -ant | grep :8080 | wc -l
# 看日志是否刷错
tail -50 /tmp/radar.log
```

---

## 附录 A：完整文件清单

部署完成后 `/home/admin/api-radar/` 应包含：

```
api-radar/
├── 01_docs/
├── 02_data/
├── 03_prototype/         # http.server 实际服务的目录
│   ├── index.html
│   ├── app.js
│   ├── data.js
│   └── ...
├── backend/
├── tests/
│   ├── watchdog_http.sh
│   ├── auto_pull.sh
│   ├── cloudflared_restart.sh
│   ├── smoke_test.py
│   └── _start_tunnel.sh
├── deploy/
│   └── README.md          # 本文件
├── update.sh
└── watchdog.sh
```

## 附录 B：环境变量一览

| 变量 | 用途 | 写入位置 |
|---|---|---|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API 令牌（purge cache） | `/etc/api-radar.env` |
| `CLOUDFLARE_ZONE_ID` | Cloudflare Zone ID | `/etc/api-radar.env` |
| `PATH` | cron 找命令用 | `crontab` 顶部 |

---

> 最后更新：2026-09-21
> 维护：suiyue6562 / apiyouxuan.top