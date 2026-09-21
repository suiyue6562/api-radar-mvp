# Worker fallback 部署验证指南

## 当前状态
- Worker 代码已 commit 到 GitHub
- Worker 是否已部署到 Cloudflare（需 wrangler deploy）

## SSH 验证步骤

### 1. 检查本地代码是否含 fallback

```bash
cd ~/api-radar/backend/worker
grep -c "brandFallbackPage" src/index.js
# 应该输出 2（定义 + 引用）
```

### 2. 部署

```bash
cd ~/api-radar/backend/worker
export CLOUDFLARE_API_TOKEN='[REDACTED-token]'
npx wrangler deploy 2>&1 | tail -20
```

### 3. 测试 fallback

让 server 死掉后 `https://apireader.top/` 应看到品牌降级页（不是 Cloudflare 通用 502）。

### update.sh 已自动含 deploy

未来 `bash update.sh` 自动部署 Worker。
