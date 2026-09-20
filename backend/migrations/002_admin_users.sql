-- ============================================
-- Admin 用户表 + 初始账号
-- ============================================

CREATE TABLE IF NOT EXISTS admin_users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,        -- bcrypt
  role TEXT DEFAULT 'editor',         -- admin/editor/viewer
  api_token TEXT UNIQUE,              -- Worker 验证用
  active INTEGER DEFAULT 1,
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_admin_username ON admin_users(username);

-- 初始管理员账号
-- 用户名: admin
-- 密码: apiradar2026
-- password_hash (bcrypt of 'apiradar2026', cost 10):
-- $2b$10$rRYzaHvkVgVQ7LJAYu7F6.Yu3rLBVZWVjNu5qRxpQXQGZcZ6ZcO66
-- （请登录后立即改密码！）
INSERT OR IGNORE INTO admin_users (username, password_hash, role, api_token)
VALUES (
  'admin',
  '$2b$10$rRYzaHvkVgVQ7LJAYu7F6.Yu3rLBVZWVjNu5qRxpQXQGZcZ6ZcO66',
  'admin',
  'apitoken_CHANGE_ME_AFTER_FIRST_LOGIN_xxxxxxxxxxxxxxxxxxxxxx'
);