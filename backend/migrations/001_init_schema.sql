-- ============================================
-- API优选咨询 D1 Schema v1.0
-- Phase 1 - 基础数据表
-- ============================================

-- 1. 厂商
CREATE TABLE IF NOT EXISTS vendors (
  id TEXT PRIMARY KEY,
  name_zh TEXT NOT NULL,
  name_en TEXT,
  region TEXT CHECK(region IN ('global','cn')) DEFAULT 'global',
  logo TEXT,
  website TEXT,
  data_status TEXT DEFAULT 'B',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. 模型
CREATE TABLE IF NOT EXISTS models (
  id TEXT PRIMARY KEY,
  vendor_id TEXT NOT NULL REFERENCES vendors(id),
  name TEXT NOT NULL,
  display_name TEXT,
  family TEXT,
  category TEXT,
  tags TEXT,                          -- JSON array
  context_window INTEGER DEFAULT 0,
  max_output_tokens INTEGER DEFAULT 0,
  release_date TEXT,
  price_input_per_m REAL DEFAULT 0,
  price_output_per_m REAL DEFAULT 0,
  price_cache_read_per_m REAL DEFAULT 0,
  tool_use INTEGER DEFAULT 0,
  vision INTEGER DEFAULT 0,
  json_mode INTEGER DEFAULT 1,
  function_calling INTEGER DEFAULT 0,
  streaming INTEGER DEFAULT 1,
  batch_discount REAL DEFAULT 0.5,
  long_context_premium TEXT,          -- JSON
  modality TEXT,                      -- JSON array
  scenes TEXT,                        -- JSON array
  description TEXT,
  notes TEXT,
  license TEXT,
  is_open_weight INTEGER DEFAULT 0,
  data_status TEXT DEFAULT 'B',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_models_vendor ON models(vendor_id);
CREATE INDEX IF NOT EXISTS idx_models_category ON models(category);
CREATE INDEX IF NOT EXISTS idx_models_release ON models(release_date DESC);

-- 3. 渠道
CREATE TABLE IF NOT EXISTS providers (
  id TEXT PRIMARY KEY,
  name_zh TEXT NOT NULL,
  name_en TEXT,
  type TEXT CHECK(type IN ('official','aggregator','gateway','self_host','platform','individual')),
  region TEXT,
  website TEXT,
  payment_currency TEXT,              -- JSON array
  invoice_available INTEGER DEFAULT 0,
  min_charge REAL DEFAULT 0,
  sla_uptime TEXT,
  concurrent_rpm INTEGER DEFAULT 0,
  api_protocol TEXT,                  -- JSON array
  regions_available TEXT,             -- JSON array
  notes TEXT,
  data_status TEXT DEFAULT 'B',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_providers_type ON providers(type);
CREATE INDEX IF NOT EXISTS idx_providers_region ON providers(region);

-- 4. 提供关系（模型×渠道 售价）
CREATE TABLE IF NOT EXISTS offerings (
  model_id TEXT NOT NULL REFERENCES models(id),
  provider_id TEXT NOT NULL REFERENCES providers(id),
  is_official INTEGER DEFAULT 0,
  multiplier REAL DEFAULT 1.0,
  input_usd_m REAL DEFAULT 0,
  output_usd_m REAL DEFAULT 0,
  cache_read_usd_m REAL DEFAULT 0,
  source_url TEXT,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (model_id, provider_id)
);
CREATE INDEX IF NOT EXISTS idx_offerings_provider ON offerings(provider_id);

-- 5. 事件
CREATE TABLE IF NOT EXISTS events (
  id TEXT PRIMARY KEY,
  date TEXT NOT NULL,
  event_type TEXT NOT NULL,
  severity TEXT,
  target_type TEXT,
  target_id TEXT,
  target_name TEXT,
  title TEXT NOT NULL,
  description TEXT,
  tags TEXT,                          -- JSON array
  source_urls TEXT,                   -- JSON array
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_events_date ON events(date DESC);
CREATE INDEX IF NOT EXISTS idx_events_type ON events(event_type);

-- 6. 广告位
CREATE TABLE IF NOT EXISTS ads (
  id TEXT PRIMARY KEY,
  slot TEXT NOT NULL,
  type TEXT,                          -- banner/text/sponsored_card
  title TEXT,
  content TEXT,
  image_url TEXT,
  link_url TEXT,
  advertiser TEXT,
  start_date TEXT,
  end_date TEXT,
  active INTEGER DEFAULT 1,
  priority INTEGER DEFAULT 0,
  max_impressions INTEGER,
  impressions INTEGER DEFAULT 0,
  clicks INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_ads_slot ON ads(slot, active);

-- 7. 广告点击
CREATE TABLE IF NOT EXISTS ad_clicks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ad_id TEXT NOT NULL,
  ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_agent TEXT,
  country TEXT,
  referer TEXT
);
CREATE INDEX IF NOT EXISTS idx_ad_clicks_ad ON ad_clicks(ad_id, ts);

-- 8. 页面浏览
CREATE TABLE IF NOT EXISTS page_views (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  path TEXT NOT NULL,
  ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_agent TEXT,
  country TEXT
);
CREATE INDEX IF NOT EXISTS idx_page_views_path ON page_views(path, ts);

-- 9. 关注列表
CREATE TABLE IF NOT EXISTS watches (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_token TEXT NOT NULL,
  target_type TEXT,
  target_id TEXT,
  target_name TEXT,
  notify_email TEXT,
  notify_telegram TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_token, target_type, target_id)
);
CREATE INDEX IF NOT EXISTS idx_watches_user ON watches(user_token);

-- 10. 审计日志
CREATE TABLE IF NOT EXISTS change_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  username TEXT,
  action TEXT,                        -- create/update/delete
  table_name TEXT,
  record_id TEXT,
  old_value TEXT,                     -- JSON
  new_value TEXT,                     -- JSON
  ip_address TEXT,
  ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_change_log_ts ON change_log(ts DESC);
CREATE INDEX IF NOT EXISTS idx_change_log_table ON change_log(table_name, record_id);