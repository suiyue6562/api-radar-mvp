#!/bin/bash
# API Radar 一键部署脚本 - 在阿里云服务器终端里直接粘贴运行
# 生成时间: 2026-09-20

set -e

echo "=========================================="
echo "  API Radar 部署脚本启动"
echo "=========================================="

# 1. 检查基础环境
echo "[1/7] 检查环境..."
which nginx python3 curl tar base64 >/dev/null 2>&1 || {
    echo "缺少基础工具，尝试安装..."
    sudo dnf install -y nginx python3 tar coreutils 2>&1 | tail -3
}

# 2. 创建站点目录
echo "[2/7] 创建目录..."
sudo mkdir -p /var/www/api-radar
sudo chown -R $USER:$USER /var/www/api-radar

# 3. 写入 deploy payload (45KB base64)
echo "[3/7] 准备部署包..."
cat > /tmp/api_radar_payload.b64 <<'PAYLOAD_EOF'
[BELOW_PASTED]
PAYLOAD_EOF

echo ""
echo "=========================================="
echo "⚠️  现在需要你做一步："
echo ""
echo "1. 打开这个文件："
echo "   C:\\Users\\Administrator\\Desktop\\API-Radar-MVP\\03_prototype\\deploy_payload.txt"
echo ""
echo "2. 复制里面全部内容（在 [BELOW_PASTED] 处替换）"
echo ""
echo "3. 回到这个终端，先按 Ctrl+C 中断脚本"
echo ""
echo "4. 运行这个命令粘贴部署包："
echo "   cat > /tmp/api_radar_payload.b64 <<'EOF'"
echo "   [粘贴 base64 内容]"
echo "   EOF"
echo ""
echo "5. 然后运行："
echo "   bash /tmp/api_radar_deploy.sh"
echo "=========================================="
