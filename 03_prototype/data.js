// Auto-generated from seed_data.json
const API_RADAR_DATA = {
  "vendors": [
    {
      "id": "v_anthropic",
      "name_zh": "Anthropic",
      "name_en": "Anthropic",
      "region": "global",
      "website": "https://www.anthropic.com",
      "logo": "🅰️",
      "data_status": "A"
    },
    {
      "id": "v_openai",
      "name_zh": "OpenAI",
      "name_en": "OpenAI",
      "region": "global",
      "website": "https://openai.com",
      "logo": "🅾️",
      "data_status": "A"
    },
    {
      "id": "v_google",
      "name_zh": "Google",
      "name_en": "Google DeepMind",
      "region": "global",
      "website": "https://deepmind.google",
      "logo": "🇬",
      "data_status": "A"
    },
    {
      "id": "v_deepseek",
      "name_zh": "DeepSeek",
      "name_en": "DeepSeek",
      "region": "china_mainland",
      "website": "https://www.deepseek.com",
      "logo": "🌊",
      "data_status": "A"
    },
    {
      "id": "v_moonshot",
      "name_zh": "月之暗面",
      "name_en": "Moonshot AI",
      "region": "china_mainland",
      "website": "https://www.moonshot.cn",
      "logo": "🌙",
      "data_status": "A"
    },
    {
      "id": "v_zhipu",
      "name_zh": "智谱AI",
      "name_en": "Zhipu AI",
      "region": "china_mainland",
      "website": "https://www.zhipuai.cn",
      "logo": "🧠",
      "data_status": "A"
    },
    {
      "id": "v_qwen",
      "name_zh": "阿里通义",
      "name_en": "Alibaba Qwen",
      "region": "china_mainland",
      "website": "https://tongyi.aliyun.com",
      "logo": "🐯",
      "data_status": "A"
    },
    {
      "id": "v_meta",
      "name_zh": "Meta",
      "name_en": "Meta AI",
      "region": "global",
      "website": "https://llama.meta.com",
      "logo": "🦙",
      "data_status": "A"
    },
    {
      "id": "v_mistral",
      "name_zh": "Mistral",
      "name_en": "Mistral AI",
      "region": "global",
      "website": "https://mistral.ai",
      "logo": "🇫🇷",
      "data_status": "A"
    },
    {
      "id": "v_bytedance",
      "name_zh": "字节豆包",
      "name_en": "ByteDance Doubao",
      "region": "china_mainland",
      "website": "https://www.volcengine.com",
      "logo": "🫘",
      "data_status": "A"
    }
  ],
  "models": [
    {
      "id": "m_claude_sonnet_4",
      "vendor_id": "v_anthropic",
      "name": "claude-sonnet-4-20250514",
      "display_name": "Claude Sonnet 4",
      "alias": [
        "Claude 4",
        "Sonnet 4",
        "claude-4-sonnet"
      ],
      "modality": [
        "text"
      ],
      "context_window": 200000,
      "max_output_tokens": 8192,
      "capabilities": [
        "tool_call",
        "vision",
        "caching",
        "json_mode"
      ],
      "official_input_usd_m": 3.0,
      "official_output_usd_m": 15.0,
      "official_cache_read_usd_m": 0.3,
      "official_cache_write_usd_m": 3.75,
      "release_date": "2025-05-14",
      "status": "available",
      "data_status": "A",
      "scenes": [
        "编程",
        "Agent",
        "写作",
        "推理"
      ]
    },
    {
      "id": "m_claude_opus_4",
      "vendor_id": "v_anthropic",
      "name": "claude-opus-4-20250514",
      "display_name": "Claude Opus 4",
      "alias": [
        "Opus 4"
      ],
      "modality": [
        "text"
      ],
      "context_window": 200000,
      "capabilities": [
        "tool_call",
        "vision",
        "caching"
      ],
      "official_input_usd_m": 15.0,
      "official_output_usd_m": 75.0,
      "official_cache_read_usd_m": 1.5,
      "release_date": "2025-05-14",
      "status": "available",
      "data_status": "A",
      "scenes": [
        "推理",
        "复杂任务"
      ]
    },
    {
      "id": "m_gpt_4o",
      "vendor_id": "v_openai",
      "name": "gpt-4o",
      "display_name": "GPT-4o",
      "alias": [
        "4o"
      ],
      "modality": [
        "text",
        "image"
      ],
      "context_window": 128000,
      "capabilities": [
        "tool_call",
        "vision",
        "json_mode"
      ],
      "official_input_usd_m": 2.5,
      "official_output_usd_m": 10.0,
      "official_cache_read_usd_m": 1.25,
      "release_date": "2024-08-06",
      "status": "available",
      "data_status": "A",
      "scenes": [
        "多模态",
        "客服"
      ]
    },
    {
      "id": "m_gpt_4o_mini",
      "vendor_id": "v_openai",
      "name": "gpt-4o-mini",
      "display_name": "GPT-4o mini",
      "alias": [
        "4o mini"
      ],
      "modality": [
        "text",
        "image"
      ],
      "context_window": 128000,
      "capabilities": [
        "tool_call",
        "vision",
        "caching"
      ],
      "official_input_usd_m": 0.15,
      "official_output_usd_m": 0.6,
      "official_cache_read_usd_m": 0.075,
      "release_date": "2024-07-18",
      "status": "available",
      "data_status": "A",
      "scenes": [
        "低成本",
        "批处理"
      ]
    },
    {
      "id": "m_o3",
      "vendor_id": "v_openai",
      "name": "o3",
      "display_name": "OpenAI o3",
      "alias": [],
      "modality": [
        "text"
      ],
      "context_window": 200000,
      "capabilities": [
        "tool_call"
      ],
      "official_input_usd_m": 10.0,
      "official_output_usd_m": 40.0,
      "release_date": "2025-01-31",
      "status": "available",
      "data_status": "A",
      "scenes": [
        "推理",
        "数学"
      ]
    },
    {
      "id": "m_gemini_2_flash",
      "vendor_id": "v_google",
      "name": "gemini-2.0-flash",
      "display_name": "Gemini 2.0 Flash",
      "alias": [
        "Gemini Flash"
      ],
      "modality": [
        "text",
        "image",
        "audio"
      ],
      "context_window": 1000000,
      "capabilities": [
        "tool_call",
        "vision"
      ],
      "official_input_usd_m": 0.1,
      "official_output_usd_m": 0.4,
      "official_cache_read_usd_m": 0.025,
      "release_date": "2024-12-11",
      "status": "available",
      "data_status": "A",
      "scenes": [
        "极速",
        "长上下文"
      ]
    },
    {
      "id": "m_gemini_2_pro",
      "vendor_id": "v_google",
      "name": "gemini-2.0-pro",
      "display_name": "Gemini 2.0 Pro",
      "alias": [],
      "modality": [
        "text",
        "image"
      ],
      "context_window": 2000000,
      "capabilities": [
        "tool_call",
        "vision"
      ],
      "official_input_usd_m": 1.25,
      "official_output_usd_m": 5.0,
      "release_date": "2025-02-05",
      "status": "available",
      "data_status": "A",
      "scenes": [
        "复杂任务",
        "长上下文"
      ]
    },
    {
      "id": "m_deepseek_v3",
      "vendor_id": "v_deepseek",
      "name": "deepseek-chat",
      "display_name": "DeepSeek V3",
      "alias": [
        "DeepSeek-V3"
      ],
      "modality": [
        "text"
      ],
      "context_window": 64000,
      "capabilities": [
        "tool_call",
        "caching",
        "json_mode"
      ],
      "official_input_cny_m": 1.0,
      "official_output_cny_m": 2.0,
      "official_cache_read_cny_m": 0.1,
      "release_date": "2024-12-26",
      "status": "available",
      "data_status": "A",
      "scenes": [
        "编程",
        "低成本",
        "推理"
      ]
    },
    {
      "id": "m_deepseek_r1",
      "vendor_id": "v_deepseek",
      "name": "deepseek-reasoner",
      "display_name": "DeepSeek R1",
      "alias": [
        "R1"
      ],
      "modality": [
        "text"
      ],
      "context_window": 64000,
      "capabilities": [
        "tool_call"
      ],
      "official_input_cny_m": 4.0,
      "official_output_cny_m": 16.0,
      "release_date": "2025-01-20",
      "status": "available",
      "data_status": "A",
      "scenes": [
        "推理",
        "数学"
      ]
    },
    {
      "id": "m_kimi_k2",
      "vendor_id": "v_moonshot",
      "name": "moonshot-v1-128k",
      "display_name": "Kimi K2 (128K)",
      "alias": [
        "Kimi",
        "Moonshot"
      ],
      "modality": [
        "text"
      ],
      "context_window": 128000,
      "capabilities": [
        "tool_call"
      ],
      "official_input_cny_m": 12.0,
      "official_output_cny_m": 12.0,
      "release_date": "2024-08-06",
      "status": "available",
      "data_status": "A",
      "scenes": [
        "长上下文",
        "写作"
      ]
    },
    {
      "id": "m_glm_5",
      "vendor_id": "v_zhipu",
      "name": "glm-5",
      "display_name": "GLM-5",
      "alias": [
        "智谱GLM-5"
      ],
      "modality": [
        "text"
      ],
      "context_window": 128000,
      "capabilities": [
        "tool_call",
        "caching",
        "vision"
      ],
      "official_input_cny_m": 7.0,
      "official_output_cny_m": 21.0,
      "official_cache_read_cny_m": 1.4,
      "release_date": "2026-01-08",
      "status": "available",
      "data_status": "A",
      "scenes": [
        "编程",
        "Agent"
      ]
    },
    {
      "id": "m_glm_4_flash",
      "vendor_id": "v_zhipu",
      "name": "glm-4-flash",
      "display_name": "GLM-4 Flash",
      "alias": [
        "GLM Flash"
      ],
      "modality": [
        "text"
      ],
      "context_window": 128000,
      "capabilities": [
        "tool_call"
      ],
      "official_input_cny_m": 0.0,
      "official_output_cny_m": 0.0,
      "release_date": "2024-07-01",
      "status": "available",
      "data_status": "A",
      "scenes": [
        "免费",
        "批处理"
      ]
    },
    {
      "id": "m_qwen_max",
      "vendor_id": "v_qwen",
      "name": "qwen-max",
      "display_name": "通义千问 Max",
      "alias": [
        "Qwen Max"
      ],
      "modality": [
        "text"
      ],
      "context_window": 128000,
      "capabilities": [
        "tool_call",
        "vision"
      ],
      "official_input_cny_m": 20.0,
      "official_output_cny_m": 60.0,
      "release_date": "2024-04-01",
      "status": "available",
      "data_status": "A",
      "scenes": [
        "中文",
        "复杂任务"
      ]
    },
    {
      "id": "m_qwen_turbo",
      "vendor_id": "v_qwen",
      "name": "qwen-turbo",
      "display_name": "通义千问 Turbo",
      "alias": [
        "Qwen Turbo"
      ],
      "modality": [
        "text"
      ],
      "context_window": 128000,
      "capabilities": [
        "tool_call"
      ],
      "official_input_cny_m": 2.0,
      "official_output_cny_m": 6.0,
      "release_date": "2024-04-01",
      "status": "available",
      "data_status": "A",
      "scenes": [
        "低成本",
        "中文"
      ]
    },
    {
      "id": "m_qwen3",
      "vendor_id": "v_qwen",
      "name": "qwen3-235b-a22b",
      "display_name": "Qwen3 (235B)",
      "alias": [
        "Qwen3"
      ],
      "modality": [
        "text"
      ],
      "context_window": 128000,
      "capabilities": [
        "tool_call",
        "json_mode"
      ],
      "official_input_cny_m": 4.0,
      "official_output_cny_m": 12.0,
      "release_date": "2026-04-29",
      "status": "available",
      "data_status": "A",
      "scenes": [
        "编程",
        "推理"
      ]
    },
    {
      "id": "m_llama_4_maverick",
      "vendor_id": "v_meta",
      "name": "llama-4-maverick",
      "display_name": "Llama 4 Maverick",
      "alias": [
        "Llama 4"
      ],
      "modality": [
        "text",
        "image"
      ],
      "context_window": 1000000,
      "capabilities": [
        "tool_call",
        "vision"
      ],
      "official_input_usd_m": 0.2,
      "official_output_usd_m": 0.6,
      "release_date": "2025-04-05",
      "status": "available",
      "data_status": "A",
      "scenes": [
        "开源",
        "Agent"
      ]
    },
    {
      "id": "m_llama_4_scout",
      "vendor_id": "v_meta",
      "name": "llama-4-scout",
      "display_name": "Llama 4 Scout",
      "alias": [],
      "modality": [
        "text",
        "image"
      ],
      "context_window": 10000000,
      "capabilities": [
        "tool_call"
      ],
      "official_input_usd_m": 0.11,
      "official_output_usd_m": 0.34,
      "release_date": "2025-04-05",
      "status": "available",
      "data_status": "A",
      "scenes": [
        "长上下文",
        "开源"
      ]
    },
    {
      "id": "m_mistral_large",
      "vendor_id": "v_mistral",
      "name": "mistral-large-2",
      "display_name": "Mistral Large 2",
      "alias": [],
      "modality": [
        "text"
      ],
      "context_window": 128000,
      "capabilities": [
        "tool_call"
      ],
      "official_input_usd_m": 2.0,
      "official_output_usd_m": 6.0,
      "release_date": "2024-07-24",
      "status": "available",
      "data_status": "A",
      "scenes": [
        "欧洲",
        "推理"
      ]
    },
    {
      "id": "m_doubao_pro",
      "vendor_id": "v_bytedance",
      "name": "doubao-pro-32k",
      "display_name": "豆包 Pro 32K",
      "alias": [
        "Doubao"
      ],
      "modality": [
        "text"
      ],
      "context_window": 32000,
      "capabilities": [
        "tool_call",
        "vision"
      ],
      "official_input_cny_m": 0.8,
      "official_output_cny_m": 2.0,
      "release_date": "2024-08-01",
      "status": "available",
      "data_status": "A",
      "scenes": [
        "低价",
        "中文"
      ]
    },
    {
      "id": "m_doubao_lite",
      "vendor_id": "v_bytedance",
      "name": "doubao-lite-32k",
      "display_name": "豆包 Lite 32K",
      "alias": [],
      "modality": [
        "text"
      ],
      "context_window": 32000,
      "capabilities": [
        "tool_call"
      ],
      "official_input_cny_m": 0.3,
      "official_output_cny_m": 0.6,
      "release_date": "2024-08-01",
      "status": "available",
      "data_status": "A",
      "scenes": [
        "极低价"
      ]
    }
  ],
  "providers": [
    {
      "id": "p_anthropic_official",
      "name": "Anthropic（官方）",
      "type": "official",
      "entity_name": "Anthropic PBC",
      "entity_region": "美国",
      "service_regions": [
        "全球"
      ],
      "payment_methods": [
        "信用卡"
      ],
      "payment_currency": [
        "USD"
      ],
      "invoice_available": true,
      "min_recharge_usd": 5,
      "api_format": [
        "anthropic_native",
        "openai_compatible"
      ],
      "sla_available": true,
      "data_retention_days": 30,
      "used_for_training": "no",
      "data_region": "美国",
      "customer_service": [
        "邮件",
        "工单"
      ],
      "status": "active",
      "data_status": "A",
      "website": "https://console.anthropic.com",
      "description": "官方直连，数据不训练，可配置。",
      "risk_note": "国内访问需科学上网"
    },
    {
      "id": "p_openai_official",
      "name": "OpenAI（官方）",
      "type": "official",
      "entity_name": "OpenAI, Inc.",
      "entity_region": "美国",
      "service_regions": [
        "全球"
      ],
      "payment_methods": [
        "信用卡"
      ],
      "payment_currency": [
        "USD"
      ],
      "invoice_available": true,
      "min_recharge_usd": 5,
      "api_format": [
        "openai_native"
      ],
      "sla_available": true,
      "data_retention_days": 30,
      "used_for_training": "opt_out",
      "data_region": "美国",
      "customer_service": [
        "邮件"
      ],
      "status": "active",
      "data_status": "A",
      "website": "https://platform.openai.com",
      "description": "官方直连，可选退出训练。",
      "risk_note": "国内访问需科学上网"
    },
    {
      "id": "p_deepseek_official",
      "name": "DeepSeek（官方）",
      "type": "official",
      "entity_name": "深度求索人工智能基础技术研究有限公司",
      "entity_region": "中国杭州",
      "service_regions": [
        "中国大陆"
      ],
      "payment_methods": [
        "支付宝",
        "微信",
        "对公"
      ],
      "payment_currency": [
        "CNY"
      ],
      "invoice_available": true,
      "min_recharge_cny": 10,
      "api_format": [
        "openai_compatible"
      ],
      "sla_available": false,
      "data_retention_days": null,
      "used_for_training": "no",
      "data_region": "中国",
      "customer_service": [
        "工单",
        "邮件"
      ],
      "status": "active",
      "data_status": "A",
      "website": "https://platform.deepseek.com",
      "description": "国产官方，性价比之王，编程能力强。",
      "risk_note": "高并发时偶有限速"
    },
    {
      "id": "p_zhipu_official",
      "name": "智谱AI（官方）",
      "type": "official",
      "entity_name": "北京智谱华章科技有限公司",
      "entity_region": "中国北京",
      "service_regions": [
        "中国大陆"
      ],
      "payment_methods": [
        "支付宝",
        "微信",
        "对公"
      ],
      "payment_currency": [
        "CNY"
      ],
      "invoice_available": true,
      "min_recharge_cny": 10,
      "api_format": [
        "openai_compatible"
      ],
      "sla_available": true,
      "data_retention_days": 90,
      "used_for_training": "no",
      "data_region": "中国",
      "customer_service": [
        "工单",
        "企微"
      ],
      "status": "active",
      "data_status": "A",
      "website": "https://open.bigmodel.cn",
      "description": "港股上市（2026.1），GLM-5 编程能力强。",
      "risk_note": "GLM Coding Plan 已涨价 30%+"
    },
    {
      "id": "p_aliyun_bailian",
      "name": "阿里云百炼",
      "type": "cloud",
      "entity_name": "阿里云计算有限公司",
      "entity_region": "中国杭州",
      "service_regions": [
        "中国大陆"
      ],
      "payment_methods": [
        "支付宝",
        "对公",
        "阿里云账户"
      ],
      "payment_currency": [
        "CNY"
      ],
      "invoice_available": true,
      "min_recharge_cny": 50,
      "api_format": [
        "openai_compatible",
        "dashscope_native"
      ],
      "sla_available": true,
      "data_retention_days": 90,
      "used_for_training": "no",
      "data_region": "中国",
      "customer_service": [
        "工单",
        "电话"
      ],
      "status": "active",
      "data_status": "A",
      "website": "https://bailian.console.aliyun.com",
      "description": "阿里云旗下，覆盖 Qwen 全系列。",
      "risk_note": "Enterprise 版本有合同"
    },
    {
      "id": "p_siliconflow",
      "name": "硅基流动",
      "type": "aggregator",
      "entity_name": "深圳硅基流动科技有限公司",
      "entity_region": "中国深圳",
      "service_regions": [
        "中国大陆"
      ],
      "payment_methods": [
        "支付宝",
        "微信"
      ],
      "payment_currency": [
        "CNY"
      ],
      "invoice_available": true,
      "min_recharge_cny": 10,
      "api_format": [
        "openai_compatible"
      ],
      "sla_available": false,
      "data_retention_days": 60,
      "used_for_training": "no",
      "data_region": "中国",
      "customer_service": [
        "工单",
        "企微"
      ],
      "status": "active",
      "data_status": "A",
      "website": "https://www.siliconflow.cn",
      "description": "国产聚合平台主力，DeepSeek/Qwen/GLM 都有。",
      "risk_note": "偶有库存紧张"
    },
    {
      "id": "p_openrouter",
      "name": "OpenRouter",
      "type": "aggregator",
      "entity_name": "OpenRouter, Inc.",
      "entity_region": "美国",
      "service_regions": [
        "全球"
      ],
      "payment_methods": [
        "信用卡",
        "加密货币"
      ],
      "payment_currency": [
        "USD"
      ],
      "invoice_available": false,
      "min_recharge_usd": 5,
      "api_format": [
        "openai_compatible"
      ],
      "sla_available": false,
      "data_retention_days": null,
      "used_for_training": "varies",
      "data_region": "varies",
      "customer_service": [
        "邮件"
      ],
      "status": "active",
      "data_status": "A",
      "website": "https://openrouter.ai",
      "description": "全球聚合标杆，100+ 模型。",
      "risk_note": "模型数据政策因底层渠道而异"
    },
    {
      "id": "p_groq",
      "name": "Groq",
      "type": "aggregator",
      "entity_name": "Groq, Inc.",
      "entity_region": "美国",
      "service_regions": [
        "全球"
      ],
      "payment_methods": [
        "信用卡"
      ],
      "payment_currency": [
        "USD"
      ],
      "invoice_available": false,
      "min_recharge_usd": 0,
      "api_format": [
        "openai_compatible"
      ],
      "sla_available": false,
      "data_retention_days": null,
      "used_for_training": "varies",
      "data_region": "美国",
      "customer_service": [
        "邮件",
        "Discord"
      ],
      "status": "active",
      "data_status": "A",
      "website": "https://groq.com",
      "description": "LPU 芯片，推理速度全球最快。",
      "risk_note": "免费额度有限，模型覆盖少"
    },
    {
      "id": "p_302ai",
      "name": "302.AI",
      "type": "aggregator",
      "entity_name": "302.AI Technology Limited",
      "entity_region": "中国香港",
      "service_regions": [
        "全球"
      ],
      "payment_methods": [
        "支付宝",
        "微信",
        "信用卡"
      ],
      "payment_currency": [
        "CNY",
        "USD"
      ],
      "invoice_available": true,
      "min_recharge_cny": 10,
      "api_format": [
        "openai_compatible"
      ],
      "sla_available": false,
      "data_retention_days": 30,
      "used_for_training": "no",
      "data_region": "varies",
      "customer_service": [
        "工单",
        "企微"
      ],
      "status": "active",
      "data_status": "A",
      "website": "https://302.ai",
      "description": "国产聚合，覆盖多模型，按量付费。",
      "risk_note": "价格略高于官方"
    },
    {
      "id": "p_togetherai",
      "name": "Together AI",
      "type": "aggregator",
      "entity_name": "Together AI, Inc.",
      "entity_region": "美国",
      "service_regions": [
        "全球"
      ],
      "payment_methods": [
        "信用卡"
      ],
      "payment_currency": [
        "USD"
      ],
      "invoice_available": true,
      "min_recharge_usd": 5,
      "api_format": [
        "openai_compatible"
      ],
      "sla_available": true,
      "data_retention_days": null,
      "used_for_training": "no",
      "data_region": "美国",
      "customer_service": [
        "邮件"
      ],
      "status": "active",
      "data_status": "A",
      "website": "https://www.together.ai",
      "description": "开源模型丰富，微调平台。",
      "risk_note": "国内访问受限"
    },
    {
      "id": "p_tencent_ti",
      "name": "腾讯云 TI",
      "type": "cloud",
      "entity_name": "腾讯云计算（北京）有限公司",
      "entity_region": "中国深圳",
      "service_regions": [
        "中国大陆"
      ],
      "payment_methods": [
        "对公",
        "腾讯云账户"
      ],
      "payment_currency": [
        "CNY"
      ],
      "invoice_available": true,
      "min_recharge_cny": 50,
      "api_format": [
        "tencent_native"
      ],
      "sla_available": true,
      "data_retention_days": 90,
      "used_for_training": "no",
      "data_region": "中国",
      "customer_service": [
        "工单"
      ],
      "status": "active",
      "data_status": "A",
      "website": "https://cloud.tencent.com/product/ti",
      "description": "腾讯混元系列。",
      "risk_note": "模型覆盖相对窄"
    },
    {
      "id": "p_volcengine",
      "name": "火山引擎豆包",
      "type": "cloud",
      "entity_name": "北京字跳网络技术有限公司",
      "entity_region": "中国北京",
      "service_regions": [
        "中国大陆"
      ],
      "payment_methods": [
        "对公",
        "字节账户"
      ],
      "payment_currency": [
        "CNY"
      ],
      "invoice_available": true,
      "min_recharge_cny": 10,
      "api_format": [
        "openai_compatible"
      ],
      "sla_available": true,
      "data_retention_days": 90,
      "used_for_training": "no",
      "data_region": "中国",
      "customer_service": [
        "工单"
      ],
      "status": "active",
      "data_status": "A",
      "website": "https://www.volcengine.com/product/doubao",
      "description": "字节豆包系列，价格激进。",
      "risk_note": "企业用户为主"
    },
    {
      "id": "p_baidu_qianfan",
      "name": "百度智能云千帆",
      "type": "cloud",
      "entity_name": "百度在线网络技术（北京）有限公司",
      "entity_region": "中国北京",
      "service_regions": [
        "中国大陆"
      ],
      "payment_methods": [
        "对公",
        "百度云账户"
      ],
      "payment_currency": [
        "CNY"
      ],
      "invoice_available": true,
      "min_recharge_cny": 100,
      "api_format": [
        "qianfan_native",
        "openai_compatible"
      ],
      "sla_available": true,
      "data_retention_days": 90,
      "used_for_training": "no",
      "data_region": "中国",
      "customer_service": [
        "工单",
        "电话"
      ],
      "status": "active",
      "data_status": "A",
      "website": "https://cloud.baidu.com/product/qianfan",
      "description": "ERNIE 系列，企业用户为主。",
      "risk_note": "个人开发者门槛较高"
    },
    {
      "id": "p_moonshot_official",
      "name": "月之暗面 Kimi",
      "type": "official",
      "entity_name": "北京月之暗面科技有限公司",
      "entity_region": "中国北京",
      "service_regions": [
        "中国大陆"
      ],
      "payment_methods": [
        "支付宝",
        "微信"
      ],
      "payment_currency": [
        "CNY"
      ],
      "invoice_available": true,
      "min_recharge_cny": 10,
      "api_format": [
        "openai_compatible",
        "anthropic_compatible"
      ],
      "sla_available": false,
      "data_retention_days": 30,
      "used_for_training": "no",
      "data_region": "中国",
      "customer_service": [
        "工单"
      ],
      "status": "active",
      "data_status": "A",
      "website": "https://platform.moonshot.cn",
      "description": "Kimi 长上下文首选。",
      "risk_note": "高峰时段偶有限速"
    },
    {
      "id": "p_mistral_official",
      "name": "Mistral（官方）",
      "type": "official",
      "entity_name": "Mistral AI",
      "entity_region": "法国",
      "service_regions": [
        "全球"
      ],
      "payment_methods": [
        "信用卡"
      ],
      "payment_currency": [
        "EUR",
        "USD"
      ],
      "invoice_available": true,
      "min_recharge_usd": 5,
      "api_format": [
        "openai_compatible"
      ],
      "sla_available": true,
      "data_retention_days": 30,
      "used_for_training": "no",
      "data_region": "欧洲",
      "customer_service": [
        "邮件"
      ],
      "status": "active",
      "data_status": "A",
      "website": "https://console.mistral.ai",
      "description": "欧洲合规选项。",
      "risk_note": "国内访问受限"
    }
  ],
  "offerings": [
    {
      "id": "o1",
      "provider_id": "p_anthropic_official",
      "model_id": "m_claude_sonnet_4",
      "region": "global",
      "status": "active",
      "data_status": "A",
      "is_official": true,
      "multiplier": 1.0
    },
    {
      "id": "o2",
      "provider_id": "p_openrouter",
      "model_id": "m_claude_sonnet_4",
      "region": "global",
      "status": "active",
      "data_status": "A",
      "is_official": false,
      "multiplier": 1.05
    },
    {
      "id": "o3",
      "provider_id": "p_openai_official",
      "model_id": "m_gpt_4o",
      "region": "global",
      "status": "active",
      "data_status": "A",
      "is_official": true,
      "multiplier": 1.0
    },
    {
      "id": "o4",
      "provider_id": "p_openrouter",
      "model_id": "m_gpt_4o",
      "region": "global",
      "status": "active",
      "data_status": "A",
      "is_official": false,
      "multiplier": 1.0
    },
    {
      "id": "o5",
      "provider_id": "p_siliconflow",
      "model_id": "m_gpt_4o",
      "region": "china",
      "status": "active",
      "data_status": "B",
      "is_official": false,
      "multiplier": 0.7,
      "note": "中转渠道，倍率0.7"
    },
    {
      "id": "o6",
      "provider_id": "p_deepseek_official",
      "model_id": "m_deepseek_v3",
      "region": "china",
      "status": "active",
      "data_status": "A",
      "is_official": true,
      "multiplier": 1.0
    },
    {
      "id": "o7",
      "provider_id": "p_siliconflow",
      "model_id": "m_deepseek_v3",
      "region": "china",
      "status": "active",
      "data_status": "A",
      "is_official": false,
      "multiplier": 1.0
    },
    {
      "id": "o8",
      "provider_id": "p_zhipu_official",
      "model_id": "m_glm_5",
      "region": "china",
      "status": "active",
      "data_status": "A",
      "is_official": true,
      "multiplier": 1.0
    },
    {
      "id": "o9",
      "provider_id": "p_siliconflow",
      "model_id": "m_glm_5",
      "region": "china",
      "status": "active",
      "data_status": "A",
      "is_official": false,
      "multiplier": 1.0
    },
    {
      "id": "o10",
      "provider_id": "p_moonshot_official",
      "model_id": "m_kimi_k2",
      "region": "china",
      "status": "active",
      "data_status": "A",
      "is_official": true,
      "multiplier": 1.0
    },
    {
      "id": "o11",
      "provider_id": "p_aliyun_bailian",
      "model_id": "m_qwen_max",
      "region": "china",
      "status": "active",
      "data_status": "A",
      "is_official": true,
      "multiplier": 1.0
    },
    {
      "id": "o12",
      "provider_id": "p_groq",
      "model_id": "m_llama_4_maverick",
      "region": "global",
      "status": "active",
      "data_status": "A",
      "is_official": false,
      "multiplier": 1.0
    },
    {
      "id": "o13",
      "provider_id": "p_togetherai",
      "model_id": "m_llama_4_scout",
      "region": "global",
      "status": "active",
      "data_status": "A",
      "is_official": false,
      "multiplier": 1.0
    },
    {
      "id": "o14",
      "provider_id": "p_volcengine",
      "model_id": "m_doubao_pro",
      "region": "china",
      "status": "active",
      "data_status": "A",
      "is_official": true,
      "multiplier": 1.0
    },
    {
      "id": "o15",
      "provider_id": "p_302ai",
      "model_id": "m_gemini_2_flash",
      "region": "global",
      "status": "active",
      "data_status": "B",
      "is_official": false,
      "multiplier": 1.2
    }
  ],
  "events": [
    {
      "id": "e1",
      "event_type": "price_change",
      "severity": "high",
      "target_type": "model",
      "target_id": "m_claude_sonnet_4",
      "headline": "Claude Sonnet 4 输入价下调 8%",
      "summary": "从 $3.25/M → $3.00/M，缓存读取同步调整",
      "old_value": {
        "input_usd_m": 3.25
      },
      "new_value": {
        "input_usd_m": 3.0
      },
      "change_percent": -0.077,
      "effective_date": "2026-09-18T10:00:00",
      "source_urls": [
        "https://www.anthropic.com/pricing"
      ],
      "source_type": "official",
      "correction_record": null
    },
    {
      "id": "e2",
      "event_type": "price_change",
      "severity": "high",
      "target_type": "model",
      "target_id": "m_deepseek_v3",
      "headline": "DeepSeek V3 价格下调 15%",
      "summary": "输入从 ¥1.2 → ¥1.0，输出从 ¥2.4 → ¥2.0",
      "old_value": {
        "input_cny_m": 1.2,
        "output_cny_m": 2.4
      },
      "new_value": {
        "input_cny_m": 1.0,
        "output_cny_m": 2.0
      },
      "change_percent": -0.167,
      "effective_date": "2026-09-17T08:00:00",
      "source_urls": [
        "https://platform.deepseek.com/api-docs/"
      ],
      "source_type": "official",
      "correction_record": null
    },
    {
      "id": "e3",
      "event_type": "model_release",
      "severity": "high",
      "target_type": "model",
      "target_id": "m_gemini_2_flash",
      "headline": "Gemini 2.0 Flash 正式版发布",
      "summary": "1M 上下文，$0.10/$0.40，价格激进",
      "old_value": null,
      "new_value": {
        "input_usd_m": 0.1,
        "output_usd_m": 0.4,
        "context": 1000000
      },
      "change_percent": null,
      "effective_date": "2024-12-11T00:00:00",
      "source_urls": [
        "https://ai.google.dev/gemini-api"
      ],
      "source_type": "official",
      "correction_record": null
    },
    {
      "id": "e4",
      "event_type": "capability_change",
      "severity": "medium",
      "target_type": "model",
      "target_id": "m_gpt_4o_mini",
      "headline": "GPT-4o mini 新增缓存读取价格",
      "summary": "$0.075/M，缓存命中可大幅降低成本",
      "old_value": null,
      "new_value": {
        "cache_read_usd_m": 0.075
      },
      "change_percent": null,
      "effective_date": "2026-09-15T00:00:00",
      "source_urls": [
        "https://openai.com/pricing"
      ],
      "source_type": "official",
      "correction_record": null
    },
    {
      "id": "e5",
      "event_type": "policy_change",
      "severity": "high",
      "target_type": "provider",
      "target_id": "p_zhipu_official",
      "headline": "智谱 GLM Coding Plan 涨价 30%+",
      "summary": "Lite 20→49元，Pro 100→149元，海外版 API 翻倍",
      "old_value": {
        "lite_cny": 20,
        "pro_cny": 100
      },
      "new_value": {
        "lite_cny": 49,
        "pro_cny": 149
      },
      "change_percent": 0.49,
      "effective_date": "2026-02-12T00:00:00",
      "source_urls": [
        "https://www.zhipuai.cn"
      ],
      "source_type": "official",
      "correction_record": null
    },
    {
      "id": "e6",
      "event_type": "provider_change",
      "severity": "medium",
      "target_type": "provider",
      "target_id": "p_siliconflow",
      "headline": "硅基流动新增 Gemini 2.0 Flash",
      "summary": "官方同价，支持 OpenAI 兼容协议",
      "old_value": null,
      "new_value": {
        "new_model": "gemini-2.0-flash"
      },
      "change_percent": null,
      "effective_date": "2026-09-16T00:00:00",
      "source_urls": [
        "https://www.siliconflow.cn"
      ],
      "source_type": "official",
      "correction_record": null
    },
    {
      "id": "e7",
      "event_type": "outage",
      "severity": "medium",
      "target_type": "provider",
      "target_id": "p_openrouter",
      "headline": "OpenRouter 部分模型路由异常 30 分钟",
      "summary": "Claude Sonnet 4 路由降级至 Anthropic 直连，已恢复",
      "old_value": null,
      "new_value": null,
      "change_percent": null,
      "effective_date": "2026-09-19T15:30:00",
      "source_urls": [
        "https://status.openrouter.ai"
      ],
      "source_type": "official",
      "correction_record": null
    },
    {
      "id": "e8",
      "event_type": "model_release",
      "severity": "high",
      "target_type": "model",
      "target_id": "m_qwen3",
      "headline": "Qwen3 (235B) 发布",
      "summary": "MoE 架构，¥4/¥12，性价比突出",
      "old_value": null,
      "new_value": {
        "input_cny_m": 4.0,
        "output_cny_m": 12.0
      },
      "change_percent": null,
      "effective_date": "2026-04-29T00:00:00",
      "source_urls": [
        "https://tongyi.aliyun.com"
      ],
      "source_type": "official",
      "correction_record": null
    },
    {
      "id": "e9",
      "event_type": "deprecation",
      "severity": "medium",
      "target_type": "model",
      "target_id": "m_gpt_4o_mini",
      "headline": "GPT-3.5-turbo 进入弃用阶段",
      "summary": "2026年9月24日起逐步下线，建议迁移至 GPT-4o mini",
      "old_value": null,
      "new_value": {
        "migration": "gpt-4o-mini"
      },
      "change_percent": null,
      "effective_date": "2026-09-24T00:00:00",
      "source_urls": [
        "https://platform.openai.com/docs/deprecations"
      ],
      "source_type": "official",
      "correction_record": null
    },
    {
      "id": "e10",
      "event_type": "price_change",
      "severity": "low",
      "target_type": "model",
      "target_id": "m_gpt_4o",
      "headline": "GPT-4o 价格微调，缓存读取降至 $1.25/M",
      "summary": "常规输入输出价格未变",
      "old_value": {
        "cache_read_usd_m": 1.875
      },
      "new_value": {
        "cache_read_usd_m": 1.25
      },
      "change_percent": -0.333,
      "effective_date": "2026-09-10T00:00:00",
      "source_urls": [
        "https://openai.com/pricing"
      ],
      "source_type": "official",
      "correction_record": null
    },
    {
      "id": "e11",
      "event_type": "model_release",
      "severity": "high",
      "target_type": "model",
      "target_id": "m_llama_4_scout",
      "headline": "Llama 4 Scout 发布，10M 上下文",
      "summary": "Meta 开源新旗舰，$0.11/$0.34",
      "old_value": null,
      "new_value": {
        "context": 10000000
      },
      "change_percent": null,
      "effective_date": "2025-04-05T00:00:00",
      "source_urls": [
        "https://llama.meta.com"
      ],
      "source_type": "official",
      "correction_record": null
    },
    {
      "id": "e12",
      "event_type": "capability_change",
      "severity": "medium",
      "target_type": "provider",
      "target_id": "p_deepseek_official",
      "headline": "DeepSeek API 新增 OpenAI 兼容工具调用",
      "summary": "原 Function Call 升级为标准 OpenAI tools 接口",
      "old_value": null,
      "new_value": {
        "tools_api": "openai_compatible"
      },
      "change_percent": null,
      "effective_date": "2026-08-20T00:00:00",
      "source_urls": [
        "https://platform.deepseek.com"
      ],
      "source_type": "official",
      "correction_record": null
    }
  ],
  "fx_rate": {
    "USD_CNY": 7.1,
    "EUR_CNY": 7.75,
    "date": "2026-09-20"
  }
};

// 工具函数
function getVendor(vid) { return API_RADAR_DATA.vendors.find(v => v.id === vid); }
function getModel(mid) { return API_RADAR_DATA.models.find(m => m.id === mid); }
function getProvider(pid) { return API_RADAR_DATA.providers.find(p => p.id === pid); }
function getOfferingsForModel(mid) { return API_RADAR_DATA.offerings.filter(o => o.model_id === mid && o.status === 'active'); }
function getOfferingsForProvider(pid) { return API_RADAR_DATA.offerings.filter(o => o.provider_id === pid && o.status === 'active'); }
function getEventsForTarget(targetType, targetId) { return API_RADAR_DATA.events.filter(e => e.target_type === targetType && e.target_id === targetId); }

// 价格标准化（统一为人民币/百万 Token）
function normalizePrice(model, item) {
  const fx = API_RADAR_DATA.fx_rate.USD_CNY;
  let usdM = null, cnyM = null;
  if (item === 'input') {
    if (model.official_input_usd_m) usdM = model.official_input_usd_m;
    if (model.official_input_cny_m) cnyM = model.official_input_cny_m;
  } else if (item === 'output') {
    if (model.official_output_usd_m) usdM = model.official_output_usd_m;
    if (model.official_output_cny_m) cnyM = model.official_output_cny_m;
  } else if (item === 'cache_read') {
    if (model.official_cache_read_usd_m) usdM = model.official_cache_read_usd_m;
    if (model.official_cache_read_cny_m) cnyM = model.official_cache_read_cny_m;
  } else if (item === 'cache_write') {
    if (model.official_cache_write_usd_m) usdM = model.official_cache_write_usd_m;
    if (model.official_cache_write_cny_m) cnyM = model.official_cache_write_cny_m;
  }
  return { usdM, cnyM, cnyPerM: cnyM || (usdM ? usdM * fx : null), usdPerM: usdM || (cnyM ? cnyM / fx : null) };
}

// 计算单次调用的成本（CNY/百万 Token，已应用 multiplier）
function calcCost(model, offering, inputTokens, outputTokens, cacheTokens) {
  const fx = API_RADAR_DATA.fx_rate.USD_CNY;
  const m = offering.multiplier || 1.0;
  let inputCost = 0, outputCost = 0, cacheCost = 0;

  // input
  if (model.official_input_usd_m) {
    inputCost = (inputTokens / 1e6) * model.official_input_usd_m * fx * m;
  } else if (model.official_input_cny_m) {
    inputCost = (inputTokens / 1e6) * model.official_input_cny_m * m;
  }

  // output
  if (model.official_output_usd_m) {
    outputCost = (outputTokens / 1e6) * model.official_output_usd_m * fx * m;
  } else if (model.official_output_cny_m) {
    outputCost = (outputTokens / 1e6) * model.official_output_cny_m * m;
  }

  // cache read
  if (cacheTokens > 0) {
    if (model.official_cache_read_usd_m) {
      cacheCost = (cacheTokens / 1e6) * model.official_cache_read_usd_m * fx * m;
    } else if (model.official_cache_read_cny_m) {
      cacheCost = (cacheTokens / 1e6) * model.official_cache_read_cny_m * m;
    }
  }

  return { inputCost, outputCost, cacheCost, total: inputCost + outputCost + cacheCost };
}

// 格式化货币
function fmtCNY(n) { return '¥' + (n || 0).toLocaleString('zh-CN', {minimumFractionDigits: 0, maximumFractionDigits: 0}); }
function fmtUSD(n) { return '$' + (n || 0).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}); }
function fmtNumber(n) { return (n || 0).toLocaleString('zh-CN'); }

// 上下文长度格式化
function fmtCtx(n) {
  if (n >= 1e6) return (n / 1e6).toFixed(0) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(0) + 'K';
  return n;
}

// 相对时间
function timeAgo(dateStr) {
  const d = new Date(dateStr);
  const now = new Date('2026-09-20T12:00:00');
  const diffMs = now - d;
  const diffH = Math.floor(diffMs / (1000 * 60 * 60));
  if (diffH < 1) return '刚刚';
  if (diffH < 24) return diffH + ' 小时前';
  const diffD = Math.floor(diffH / 24);
  if (diffD < 30) return diffD + ' 天前';
  const diffM = Math.floor(diffD / 30);
  return diffM + ' 个月前';
}
