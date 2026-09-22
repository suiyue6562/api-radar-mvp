var API_RADAR_DATA = {
  "vendors": [
    {
      "id": "v_anthropic",
      "name_zh": "Anthropic",
      "name_en": "Anthropic",
      "region": "global",
      "logo": "🅰️",
      "website": "",
      "name": "Anthropic",
      "name_short": "Anthropic",
      "data_status": "A"
    },
    {
      "id": "v_openai",
      "name_zh": "OpenAI",
      "name_en": "OpenAI",
      "region": "global",
      "logo": "🅾",
      "website": "",
      "name": "OpenAI",
      "name_short": "OpenAI",
      "data_status": "A"
    },
    {
      "id": "v_google",
      "name_zh": "Google DeepMind",
      "name_en": "Google DeepMind",
      "region": "global",
      "logo": "🇬",
      "website": "",
      "name": "Google DeepMind",
      "name_short": "Google DeepMind",
      "data_status": "A"
    },
    {
      "id": "v_xai",
      "name_zh": "xAI (Grok)",
      "name_en": "xAI",
      "region": "global",
      "logo": "𝕏",
      "website": "",
      "name": "xAI (Grok)",
      "name_short": "xAI (Grok)",
      "data_status": "A"
    },
    {
      "id": "v_deepseek",
      "name_zh": "深度求索",
      "name_en": "DeepSeek",
      "region": "cn",
      "logo": "🔷",
      "website": "",
      "name": "深度求索",
      "name_short": "深度求索",
      "data_status": "A"
    },
    {
      "id": "v_qwen",
      "name_zh": "阿里通义千问",
      "name_en": "Alibaba Qwen",
      "region": "cn",
      "logo": "🟡",
      "website": "",
      "name": "阿里通义千问",
      "name_short": "阿里通义千问",
      "data_status": "A"
    },
    {
      "id": "v_zhipu",
      "name_zh": "智谱AI",
      "name_en": "Zhipu AI / Z.AI",
      "region": "cn",
      "logo": "🧠",
      "website": "",
      "name": "智谱AI",
      "name_short": "智谱AI",
      "data_status": "A"
    },
    {
      "id": "v_moonshot",
      "name_zh": "月之暗面",
      "name_en": "Moonshot AI",
      "region": "cn",
      "logo": "🌙",
      "website": "",
      "name": "月之暗面",
      "name_short": "月之暗面",
      "data_status": "A"
    },
    {
      "id": "v_doubao",
      "name_zh": "字节豆包",
      "name_en": "ByteDance Seed",
      "region": "cn",
      "logo": "🥟",
      "website": "",
      "name": "字节豆包",
      "name_short": "字节豆包",
      "data_status": "A"
    },
    {
      "id": "v_baidu",
      "name_zh": "百度文心",
      "name_en": "Baidu ERNIE",
      "region": "cn",
      "logo": "🅱",
      "website": "",
      "name": "百度文心",
      "name_short": "百度文心",
      "data_status": "A"
    },
    {
      "id": "v_meta",
      "name_zh": "Meta",
      "name_en": "Meta AI",
      "region": "global",
      "logo": "Ⓜ️",
      "website": "",
      "name": "Meta",
      "name_short": "Meta",
      "data_status": "A"
    },
    {
      "id": "v_mistral",
      "name_zh": "Mistral AI",
      "name_en": "Mistral AI",
      "region": "global",
      "logo": "🅼",
      "website": "",
      "name": "Mistral AI",
      "name_short": "Mistral AI",
      "data_status": "A"
    },
    {
      "id": "v_minimax",
      "name_zh": "稀宇科技",
      "name_en": "MiniMax",
      "region": "cn",
      "logo": "💬",
      "website": "",
      "name": "稀宇科技",
      "name_short": "稀宇科技",
      "data_status": "A"
    },
    {
      "id": "v_stepfun",
      "name_zh": "阶跃星辰",
      "name_en": "StepFun",
      "region": "cn",
      "logo": "🪜",
      "website": "",
      "name": "阶跃星辰",
      "name_short": "阶跃星辰",
      "data_status": "B"
    },
    {
      "id": "v_xiaomi",
      "name_zh": "小米 MiMo",
      "name_en": "Xiaomi MiMo",
      "region": "cn",
      "logo": "📱",
      "website": "",
      "name": "小米 MiMo",
      "name_short": "小米 MiMo",
      "data_status": "B"
    },
    {
      "id": "v_cohere",
      "name_zh": "Cohere",
      "name_en": "Cohere",
      "region": "global",
      "logo": "Ⓒ",
      "website": "",
      "name": "Cohere"
    },
    {
      "id": "v_ai21",
      "name_zh": "AI21 Labs",
      "name_en": "AI21 Labs",
      "region": "global",
      "logo": "Ⓐ",
      "website": "",
      "name": "AI21 Labs"
    },
    {
      "id": "v_tencent",
      "name_zh": "腾讯混元",
      "name_en": "Tencent Hunyuan",
      "region": "cn",
      "logo": "🅣",
      "website": "",
      "name": "Tencent Hunyuan"
    },
    {
      "id": "v_jd",
      "name_zh": "京东灵曦",
      "name_en": "JD Lingxi",
      "region": "cn",
      "logo": "🅙",
      "website": "",
      "name": "JD Lingxi"
    },
    {
      "id": "v_microsoft",
      "name_zh": "微软",
      "name_en": "Microsoft",
      "region": "global",
      "logo": "🅼",
      "website": "",
      "name": "Microsoft"
    },
    {
      "id": "v_01ai",
      "name_zh": "零一万物",
      "name_en": "01.AI",
      "region": "cn",
      "logo": "🅞",
      "website": "",
      "name": "01.AI"
    }
  ],
  "models": [
    {
      "id": "m_claude_fable_5",
      "vendor_id": "v_anthropic",
      "name": "Claude Fable 5",
      "display_name": "Claude Fable 5",
      "family": "Claude 5",
      "release_date": "2026-06",
      "context_window": 1000000,
      "max_output_tokens": 32000,
      "modality": [
        "text",
        "image"
      ],
      "scenes": [
        "coding",
        "knowledge_work",
        "agents"
      ],
      "description": "Anthropic 顶级旗舰，SWE-bench Verified 95%，价格 1M 上下文",
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 10,
      "official_output_usd_m": 50,
      "official_cache_read_usd_m": 1,
      "version": "5.0",
      "capabilities": [
        "agentic_coding",
        "reasoning",
        "long_context",
        "tool_use"
      ],
      "official_cache_write_usd_m": 12.5,
      "official_reasoning_usd_m": 50,
      "popularity": 5,
      "weekly_tokens": 67719361284,
      "monthly_tokens": 293224834359,
      "trend_week_pct": 23.7,
      "best_for": [
        "coding",
        "reasoning",
        "agentic",
        "long_context",
        "multimodal"
      ],
      "fingerprint_signature": "Claude Fable",
      "overall_score": 15,
      "capability_icons": [
        "🧠",
        "🔧",
        "🖼️"
      ]
    },
    {
      "id": "m_claude_opus_5",
      "vendor_id": "v_anthropic",
      "name": "Claude Opus 5",
      "display_name": "Claude Opus 5",
      "family": "Claude 5",
      "release_date": "2026-07",
      "context_window": 1000000,
      "max_output_tokens": 32000,
      "modality": [
        "text",
        "image"
      ],
      "scenes": [
        "coding",
        "agents",
        "research"
      ],
      "description": "Anthropic 旗舰，性价比更高，适合 Agent 编码",
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 5,
      "official_output_usd_m": 25,
      "official_cache_read_usd_m": 0.5,
      "version": "5.0",
      "capabilities": [
        "agentic_coding",
        "reasoning",
        "tool_use",
        "computer_use"
      ],
      "official_cache_write_usd_m": 6.25,
      "official_reasoning_usd_m": 25,
      "popularity": 5,
      "weekly_tokens": 42717196044,
      "monthly_tokens": 184965458870,
      "trend_week_pct": -4.8,
      "best_for": [
        "coding",
        "reasoning",
        "agentic",
        "long_context",
        "multimodal"
      ],
      "fingerprint_signature": "Claude Opus ",
      "overall_score": 15,
      "capability_icons": [
        "🧠",
        "🔧",
        "🖼️"
      ]
    },
    {
      "id": "m_claude_sonnet_5",
      "vendor_id": "v_anthropic",
      "name": "Claude Sonnet 5",
      "display_name": "Claude Sonnet 5",
      "family": "Claude 5",
      "release_date": "2026-06",
      "context_window": 1000000,
      "max_output_tokens": 16000,
      "modality": [
        "text",
        "image"
      ],
      "scenes": [
        "coding",
        "agents",
        "production"
      ],
      "description": "Anthropic 主力，性价比最优",
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 3,
      "official_output_usd_m": 15,
      "official_cache_read_usd_m": 0.3,
      "version": "5.0",
      "capabilities": [
        "balanced",
        "agentic_coding",
        "reasoning"
      ],
      "official_cache_write_usd_m": 3.75,
      "official_reasoning_usd_m": 15,
      "popularity": 4,
      "weekly_tokens": 28117940871,
      "monthly_tokens": 121750683971,
      "trend_week_pct": 29.2,
      "best_for": [
        "coding",
        "reasoning",
        "long_context",
        "multimodal"
      ],
      "fingerprint_signature": "Claude Sonne",
      "overall_score": 15,
      "capability_icons": [
        "🧠",
        "🖼️"
      ]
    },
    {
      "id": "m_claude_opus_4_7",
      "vendor_id": "v_anthropic",
      "name": "Claude Opus 4.7",
      "display_name": "Claude Opus 4.7",
      "family": "Claude 4",
      "release_date": "2026-04",
      "context_window": 1000000,
      "max_output_tokens": 32000,
      "modality": [
        "text",
        "image"
      ],
      "scenes": [
        "coding",
        "agents"
      ],
      "description": "上代旗舰，仍领先",
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 5,
      "official_output_usd_m": 25,
      "official_cache_read_usd_m": 0,
      "version": "4.7",
      "capabilities": [
        "agentic_coding",
        "reasoning",
        "computer_use"
      ],
      "official_cache_write_usd_m": 6.25,
      "official_reasoning_usd_m": 25,
      "popularity": 4,
      "weekly_tokens": 14643391005,
      "monthly_tokens": 63405883051,
      "trend_week_pct": 44.1,
      "best_for": [
        "coding",
        "reasoning",
        "long_context",
        "multimodal"
      ],
      "fingerprint_signature": "Claude Opus ",
      "overall_score": 15,
      "capability_icons": [
        "🧠",
        "🖼️"
      ]
    },
    {
      "id": "m_gpt_5_6_sol",
      "vendor_id": "v_openai",
      "name": "GPT-5.6 Sol",
      "display_name": "GPT-5.6 Sol",
      "family": "GPT-5.6",
      "release_date": "2026-07",
      "context_window": 1050000,
      "max_output_tokens": 32000,
      "modality": [
        "text",
        "image",
        "audio"
      ],
      "scenes": [
        "agents",
        "terminal",
        "reasoning"
      ],
      "description": "OpenAI 最新旗舰，BrowseComp 90.4%",
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 5,
      "official_output_usd_m": 30,
      "official_cache_read_usd_m": 0,
      "version": "5.6",
      "capabilities": [
        "agentic_reasoning",
        "terminal",
        "tool_use",
        "reasoning"
      ],
      "official_cache_write_usd_m": 6.25,
      "official_reasoning_usd_m": 30,
      "popularity": 5,
      "weekly_tokens": 97536488780,
      "monthly_tokens": 422332996417,
      "trend_week_pct": -9.9,
      "best_for": [
        "reasoning",
        "agentic",
        "long_context",
        "multimodal"
      ],
      "fingerprint_signature": "GPT-5.6 Sol",
      "overall_score": 15,
      "capability_icons": [
        "🧠",
        "🔧",
        "🖼️",
        "🎤"
      ]
    },
    {
      "id": "m_gpt_5_5",
      "vendor_id": "v_openai",
      "name": "GPT-5.5",
      "display_name": "GPT-5.5",
      "family": "GPT-5",
      "release_date": "2026-04",
      "context_window": 1050000,
      "max_output_tokens": 32000,
      "modality": [
        "text",
        "image"
      ],
      "scenes": [
        "coding",
        "reasoning",
        "production"
      ],
      "description": "AIME 2025 100%，GPQA 93.6%",
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 5,
      "official_output_usd_m": 30,
      "official_cache_read_usd_m": 0,
      "version": "5.5",
      "capabilities": [
        "reasoning",
        "coding",
        "tool_use"
      ],
      "official_cache_write_usd_m": 6.25,
      "official_reasoning_usd_m": 30,
      "popularity": 5,
      "weekly_tokens": 81231706202,
      "monthly_tokens": 351733287854,
      "trend_week_pct": 1.5,
      "best_for": [
        "coding",
        "reasoning",
        "agentic",
        "long_context",
        "multimodal"
      ],
      "fingerprint_signature": "GPT-5.5",
      "overall_score": 15,
      "capability_icons": [
        "🧠",
        "🔧",
        "🖼️"
      ]
    },
    {
      "id": "m_gpt_5_5_pro",
      "vendor_id": "v_openai",
      "name": "GPT-5.5 Pro",
      "display_name": "GPT-5.5 Pro",
      "family": "GPT-5",
      "release_date": "2026-04",
      "context_window": 1050000,
      "max_output_tokens": 32000,
      "modality": [
        "text",
        "image"
      ],
      "scenes": [
        "research",
        "hard_problem"
      ],
      "description": "OpenAI 高级推理，$30/$180 顶配",
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 30,
      "official_output_usd_m": 180,
      "official_cache_read_usd_m": 0,
      "version": "5.5",
      "capabilities": [
        "reasoning",
        "agents"
      ],
      "official_cache_write_usd_m": 37.5,
      "official_reasoning_usd_m": 180,
      "popularity": 5,
      "weekly_tokens": 64768234176,
      "monthly_tokens": 280446453982,
      "trend_week_pct": -19.1,
      "best_for": [
        "reasoning",
        "long_context",
        "multimodal"
      ],
      "fingerprint_signature": "GPT-5.5 Pro",
      "overall_score": 15,
      "capability_icons": [
        "🧠",
        "🖼️"
      ]
    },
    {
      "id": "m_gpt_5_2",
      "vendor_id": "v_openai",
      "name": "GPT-5.2",
      "display_name": "GPT-5.2",
      "family": "GPT-5",
      "release_date": "2026-02",
      "context_window": 400000,
      "max_output_tokens": 16000,
      "modality": [
        "text"
      ],
      "scenes": [
        "coding",
        "agents"
      ],
      "description": "GPT-5.2 中端，性价比",
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 1.75,
      "official_output_usd_m": 14,
      "official_cache_read_usd_m": 0,
      "version": "5.2",
      "capabilities": [
        "reasoning",
        "agentic_coding"
      ],
      "official_cache_write_usd_m": 2.1875,
      "official_reasoning_usd_m": 14,
      "popularity": 4,
      "weekly_tokens": 11857099068,
      "monthly_tokens": 51341238964,
      "trend_week_pct": 1.8,
      "best_for": [
        "coding",
        "reasoning"
      ],
      "fingerprint_signature": "GPT-5.2",
      "overall_score": 11,
      "capability_icons": [
        "🧠"
      ]
    },
    {
      "id": "m_gemini_3_1_pro",
      "vendor_id": "v_google",
      "name": "Gemini 3.1 Pro",
      "display_name": "Gemini 3.1 Pro",
      "family": "Gemini 3",
      "release_date": "2026-04",
      "context_window": 1000000,
      "max_output_tokens": 64000,
      "modality": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "scenes": [
        "science",
        "multimodal",
        "long_doc"
      ],
      "description": "Google 旗舰，GPQA 94.3%，原生多模态",
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 2,
      "official_output_usd_m": 12,
      "official_cache_read_usd_m": 0,
      "version": "3.1",
      "capabilities": [
        "multimodal",
        "reasoning",
        "long_context",
        "scientific_reasoning"
      ],
      "official_cache_write_usd_m": 2.5,
      "official_reasoning_usd_m": 12,
      "popularity": 5,
      "weekly_tokens": 70816298906,
      "monthly_tokens": 306634574262,
      "trend_week_pct": -11.3,
      "best_for": [
        "reasoning",
        "long_context",
        "multimodal",
        "throughput"
      ],
      "fingerprint_signature": "Gemini 3.1 P",
      "overall_score": 19,
      "capability_icons": [
        "🧠",
        "🖼️",
        "🎤"
      ]
    },
    {
      "id": "m_gemini_3_5_flash",
      "vendor_id": "v_google",
      "name": "Gemini 3.5 Flash",
      "display_name": "Gemini 3.5 Flash",
      "family": "Gemini 3.5",
      "release_date": "2026-05",
      "context_window": 1000000,
      "max_output_tokens": 64000,
      "modality": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "scenes": [
        "high_volume",
        "multimodal"
      ],
      "description": "Google 性价比，速度最优",
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 1.5,
      "official_output_usd_m": 9,
      "official_cache_read_usd_m": 0,
      "version": "3.5",
      "capabilities": [
        "multimodal",
        "speed",
        "agentic"
      ],
      "official_cache_write_usd_m": 1.875,
      "popularity": 4,
      "weekly_tokens": 19848120694,
      "monthly_tokens": 85942362605,
      "trend_week_pct": 5,
      "best_for": [
        "long_context",
        "multimodal",
        "throughput"
      ],
      "fingerprint_signature": "Gemini 3.5 F",
      "overall_score": 27,
      "capability_icons": [
        "🖼️",
        "🎤"
      ]
    },
    {
      "id": "m_gemini_3_flash_preview",
      "vendor_id": "v_google",
      "name": "Gemini 3 Flash Preview",
      "display_name": "Gemini 3 Flash Preview",
      "family": "Gemini 3",
      "release_date": "2026-04",
      "context_window": 1000000,
      "max_output_tokens": 32000,
      "modality": [
        "text",
        "image",
        "audio"
      ],
      "scenes": [
        "realtime",
        "chat"
      ],
      "description": "Google 实时推理",
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 0.5,
      "official_output_usd_m": 3,
      "official_cache_read_usd_m": 0,
      "version": "3.0-preview",
      "capabilities": [
        "multimodal",
        "speed",
        "reasoning"
      ],
      "official_cache_write_usd_m": 0.625,
      "official_reasoning_usd_m": 3,
      "popularity": 4,
      "weekly_tokens": 17313130331,
      "monthly_tokens": 74965854333,
      "trend_week_pct": -8.7,
      "best_for": [
        "reasoning",
        "long_context",
        "multimodal",
        "cheapest",
        "throughput"
      ],
      "fingerprint_signature": "Gemini 3 Fla",
      "overall_score": 42,
      "capability_icons": [
        "🧠",
        "🖼️",
        "🎤"
      ]
    },
    {
      "id": "m_grok_4_3",
      "vendor_id": "v_xai",
      "name": "Grok 4.3",
      "display_name": "Grok 4.3",
      "family": "Grok 4",
      "release_date": "2026-04",
      "context_window": 1000000,
      "max_output_tokens": 32000,
      "modality": [
        "text",
        "image"
      ],
      "scenes": [
        "realtime_research",
        "tools"
      ],
      "description": "xAI 实时联网 + 工具调用",
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 1.25,
      "official_output_usd_m": 2.5,
      "official_cache_read_usd_m": 0,
      "version": "4.3",
      "capabilities": [
        "real_time",
        "tool_use",
        "reasoning"
      ],
      "official_reasoning_usd_m": 2.5,
      "popularity": 5,
      "weekly_tokens": 46342959138,
      "monthly_tokens": 200665013067,
      "trend_week_pct": 21.4,
      "best_for": [
        "reasoning",
        "agentic",
        "long_context",
        "multimodal"
      ],
      "fingerprint_signature": "Grok 4.3",
      "overall_score": 39,
      "capability_icons": [
        "🧠",
        "🔧",
        "🖼️"
      ]
    },
    {
      "id": "m_grok_4_fast",
      "vendor_id": "v_xai",
      "name": "Grok 4 Fast",
      "display_name": "Grok 4 Fast",
      "family": "Grok 4",
      "release_date": "2026-03",
      "context_window": 1000000,
      "max_output_tokens": 16000,
      "modality": [
        "text"
      ],
      "scenes": [
        "high_volume",
        "realtime"
      ],
      "description": "xAI 高速版",
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 0.5,
      "official_output_usd_m": 1.5,
      "official_cache_read_usd_m": 0,
      "version": "4.0-fast",
      "capabilities": [
        "speed",
        "reasoning"
      ],
      "official_reasoning_usd_m": 1.5,
      "popularity": 4,
      "weekly_tokens": 27671889429,
      "monthly_tokens": 119819281227,
      "trend_week_pct": -2.5,
      "best_for": [
        "reasoning",
        "long_context",
        "cheapest"
      ],
      "fingerprint_signature": "Grok 4 Fast",
      "overall_score": 45,
      "capability_icons": [
        "🧠"
      ]
    },
    {
      "id": "m_deepseek_v4_pro",
      "vendor_id": "v_deepseek",
      "name": "DeepSeek V4 Pro",
      "display_name": "DeepSeek V4 Pro",
      "family": "DeepSeek V4",
      "release_date": "2026-04",
      "context_window": 1000000,
      "max_output_tokens": 32000,
      "modality": [
        "text"
      ],
      "scenes": [
        "coding",
        "agents",
        "production"
      ],
      "description": "国产开源最强，SWE-bench 80.6%，1M 上下文",
      "license": "MIT",
      "is_open_weight": true,
      "official_input_usd_m": 0.435,
      "official_output_usd_m": 0.87,
      "official_cache_read_usd_m": 0.028,
      "version": "4.0-pro",
      "capabilities": [
        "reasoning",
        "agentic_coding",
        "long_context",
        "sparse_attention"
      ],
      "official_cache_write_usd_m": 0.5437,
      "official_reasoning_usd_m": 0.87,
      "popularity": 5,
      "weekly_tokens": 64118991490,
      "monthly_tokens": 277635233151,
      "trend_week_pct": -18.3,
      "best_for": [
        "coding",
        "reasoning",
        "long_context",
        "cheapest"
      ],
      "fingerprint_signature": "DeepSeek V4 ",
      "overall_score": 46,
      "capability_icons": [
        "🧠"
      ]
    },
    {
      "id": "m_deepseek_v4_flash",
      "vendor_id": "v_deepseek",
      "name": "DeepSeek V4 Flash",
      "display_name": "DeepSeek V4 Flash",
      "family": "DeepSeek V4",
      "release_date": "2026-04",
      "context_window": 1000000,
      "max_output_tokens": 32000,
      "modality": [
        "text",
        "image"
      ],
      "scenes": [
        "high_volume",
        "coding"
      ],
      "description": "全球最便宜 $0.14/$0.28，1M 上下文",
      "license": "MIT",
      "is_open_weight": true,
      "official_input_usd_m": 0.14,
      "official_output_usd_m": 0.28,
      "official_cache_read_usd_m": 0.0028,
      "version": "4.0-flash",
      "capabilities": [
        "speed",
        "reasoning",
        "coding"
      ],
      "official_cache_write_usd_m": 0.175,
      "official_reasoning_usd_m": 0.28,
      "popularity": 4,
      "weekly_tokens": 19414278285,
      "monthly_tokens": 84063824974,
      "trend_week_pct": -10,
      "best_for": [
        "coding",
        "reasoning",
        "long_context",
        "multimodal",
        "cheapest",
        "throughput"
      ],
      "fingerprint_signature": "DeepSeek V4 ",
      "overall_score": 49,
      "capability_icons": [
        "🧠",
        "🖼️"
      ]
    },
    {
      "id": "m_deepseek_v3_2",
      "vendor_id": "v_deepseek",
      "name": "DeepSeek V3.2",
      "display_name": "DeepSeek V3.2",
      "family": "DeepSeek V3",
      "release_date": "2025-12",
      "context_window": 164000,
      "max_output_tokens": 16000,
      "modality": [
        "text"
      ],
      "scenes": [
        "production",
        "cost_effective"
      ],
      "description": "DeepSeek 通用版，AIME 89.3%",
      "license": "MIT",
      "is_open_weight": true,
      "official_input_usd_m": 0.27,
      "official_output_usd_m": 1.1,
      "official_cache_read_usd_m": 0,
      "version": "3.2",
      "capabilities": [
        "general",
        "coding",
        "reasoning"
      ],
      "official_cache_write_usd_m": 0.3375,
      "official_reasoning_usd_m": 1.1,
      "popularity": 4,
      "weekly_tokens": 23777499570,
      "monthly_tokens": 102956573138,
      "trend_week_pct": 33.3,
      "best_for": [
        "reasoning",
        "cheapest"
      ],
      "fingerprint_signature": "DeepSeek V3.",
      "overall_score": 34,
      "capability_icons": [
        "🧠"
      ]
    },
    {
      "id": "m_deepseek_r1",
      "vendor_id": "v_deepseek",
      "name": "DeepSeek R1",
      "display_name": "DeepSeek R1",
      "family": "DeepSeek R1",
      "release_date": "2025-01",
      "context_window": 128000,
      "max_output_tokens": 32000,
      "modality": [
        "text"
      ],
      "scenes": [
        "reasoning",
        "math",
        "research"
      ],
      "description": "推理王者，MATH-500 97.3%",
      "license": "MIT",
      "is_open_weight": true,
      "official_input_usd_m": 0.55,
      "official_output_usd_m": 2.19,
      "official_cache_read_usd_m": 0,
      "version": "1.0",
      "capabilities": [
        "reasoning",
        "math",
        "chain_of_thought"
      ],
      "official_cache_write_usd_m": 0.6875,
      "official_reasoning_usd_m": 2.19,
      "popularity": 3,
      "weekly_tokens": 7419527179,
      "monthly_tokens": 32126552685,
      "trend_week_pct": -10,
      "best_for": [
        "reasoning",
        "cheapest"
      ],
      "fingerprint_signature": "DeepSeek R1",
      "overall_score": 30,
      "capability_icons": [
        "🧠"
      ]
    },
    {
      "id": "m_qwen3_8_max",
      "vendor_id": "v_qwen",
      "name": "Qwen3.8 Max",
      "display_name": "Qwen3.8 Max",
      "family": "Qwen3.8",
      "release_date": "2026-08",
      "context_window": 1000000,
      "max_output_tokens": 32000,
      "modality": [
        "text",
        "image",
        "audio"
      ],
      "scenes": [
        "multimodal",
        "agents",
        "coding"
      ],
      "description": "阿里旗舰，多模态 APAC 第一",
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 2,
      "official_output_usd_m": 6,
      "official_cache_read_usd_m": 0,
      "version": "3.8-max",
      "capabilities": [
        "reasoning",
        "agentic",
        "multimodal",
        "linear_attention"
      ],
      "official_reasoning_usd_m": 6,
      "popularity": 5,
      "weekly_tokens": 54059039556,
      "monthly_tokens": 234075641277,
      "trend_week_pct": 16.4,
      "best_for": [
        "coding",
        "reasoning",
        "long_context",
        "multimodal"
      ],
      "fingerprint_signature": "Qwen3.8 Max",
      "overall_score": 28,
      "capability_icons": [
        "🧠",
        "🖼️",
        "🎤"
      ]
    },
    {
      "id": "m_qwen3_7_max",
      "vendor_id": "v_qwen",
      "name": "Qwen3.7 Max",
      "display_name": "Qwen3.7 Max",
      "family": "Qwen3.7",
      "release_date": "2026-05",
      "context_window": 1000000,
      "max_output_tokens": 32000,
      "modality": [
        "text",
        "image"
      ],
      "scenes": [
        "long_horizon_agents",
        "coding"
      ],
      "description": "阿里 Qwen3.7，扩展思考模式",
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 2.5,
      "official_output_usd_m": 7.5,
      "official_cache_read_usd_m": 0,
      "version": "3.7-max",
      "capabilities": [
        "long_context",
        "extended_thinking",
        "agentic"
      ],
      "popularity": 4,
      "weekly_tokens": 16126099941,
      "monthly_tokens": 69826012744,
      "trend_week_pct": -15.7,
      "best_for": [
        "coding",
        "long_context",
        "multimodal"
      ],
      "fingerprint_signature": "Qwen3.7 Max",
      "overall_score": 23,
      "capability_icons": [
        "🖼️"
      ]
    },
    {
      "id": "m_qwen3_6_max_preview",
      "vendor_id": "v_qwen",
      "name": "Qwen3.6 Max Preview",
      "display_name": "Qwen3.6 Max Preview",
      "family": "Qwen3.6",
      "release_date": "2026-04",
      "context_window": 262000,
      "max_output_tokens": 16000,
      "modality": [
        "text",
        "image"
      ],
      "scenes": [
        "agents",
        "multimodal"
      ],
      "description": "Qwen3.6 Max 预览",
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 1.04,
      "official_output_usd_m": 6.24,
      "official_cache_read_usd_m": 0,
      "version": "3.6-max-preview",
      "capabilities": [
        "agentic",
        "multimodal"
      ],
      "popularity": 4,
      "weekly_tokens": 28974008389,
      "monthly_tokens": 125457456324,
      "trend_week_pct": 33.1,
      "best_for": [
        "multimodal"
      ],
      "fingerprint_signature": "Qwen3.6 Max ",
      "overall_score": 23,
      "capability_icons": [
        "🖼️"
      ]
    },
    {
      "id": "m_qwen3_8_flash",
      "vendor_id": "v_qwen",
      "name": "Qwen3.8 Flash",
      "display_name": "Qwen3.8 Flash",
      "family": "Qwen3.8",
      "release_date": "2026-08",
      "context_window": 1000000,
      "max_output_tokens": 32000,
      "modality": [
        "text",
        "image"
      ],
      "scenes": [
        "high_volume",
        "multimodal"
      ],
      "description": "Qwen3.8 Flash，便宜版",
      "license": "Apache-2.0",
      "is_open_weight": true,
      "official_input_usd_m": 0.188,
      "official_output_usd_m": 1.5,
      "official_cache_read_usd_m": 0,
      "version": "3.8-flash",
      "capabilities": [
        "speed",
        "multimodal"
      ],
      "popularity": 4,
      "weekly_tokens": 29452719152,
      "monthly_tokens": 127530273928,
      "trend_week_pct": -13.6,
      "best_for": [
        "long_context",
        "multimodal",
        "cheapest",
        "throughput"
      ],
      "fingerprint_signature": "Qwen3.8 Flas",
      "overall_score": 46,
      "capability_icons": [
        "🖼️"
      ]
    },
    {
      "id": "m_glm_5_2",
      "vendor_id": "v_zhipu",
      "name": "GLM-5.2",
      "display_name": "GLM-5.2",
      "family": "GLM-5",
      "release_date": "2026-06",
      "context_window": 1000000,
      "max_output_tokens": 32000,
      "modality": [
        "text",
        "image"
      ],
      "scenes": [
        "agents",
        "coding",
        "domestic"
      ],
      "description": "智谱 Agent 工程最强，适配 7 大国产芯片",
      "license": "MIT",
      "is_open_weight": true,
      "official_input_usd_m": 1.4,
      "official_output_usd_m": 4.4,
      "official_cache_read_usd_m": 0,
      "version": "5.2",
      "capabilities": [
        "agentic",
        "coding",
        "open_chip",
        "long_context"
      ],
      "popularity": 5,
      "weekly_tokens": 49004750250,
      "monthly_tokens": 212190568582,
      "trend_week_pct": 46.9,
      "best_for": [
        "coding",
        "long_context",
        "multimodal"
      ],
      "fingerprint_signature": "GLM-5.2",
      "overall_score": 35,
      "capability_icons": [
        "🖼️"
      ]
    },
    {
      "id": "m_glm_5_1",
      "vendor_id": "v_zhipu",
      "name": "GLM-5.1",
      "display_name": "GLM-5.1",
      "family": "GLM-5",
      "release_date": "2026-03",
      "context_window": 200000,
      "max_output_tokens": 16000,
      "modality": [
        "text",
        "image"
      ],
      "scenes": [
        "agents",
        "coding"
      ],
      "description": "智谱 GLM-5.1，MIT 开源",
      "license": "MIT",
      "is_open_weight": true,
      "official_input_usd_m": 1.2,
      "official_output_usd_m": 4,
      "official_cache_read_usd_m": 0,
      "version": "5.1",
      "capabilities": [
        "agentic",
        "coding"
      ],
      "popularity": 4,
      "weekly_tokens": 17863394437,
      "monthly_tokens": 77348497912,
      "trend_week_pct": 47,
      "best_for": [
        "coding",
        "multimodal"
      ],
      "fingerprint_signature": "GLM-5.1",
      "overall_score": 24,
      "capability_icons": [
        "🖼️"
      ]
    },
    {
      "id": "m_glm_4_6v",
      "vendor_id": "v_zhipu",
      "name": "GLM-4.6V",
      "display_name": "GLM-4.6V",
      "family": "GLM-4.6",
      "release_date": "2026-01",
      "context_window": 131000,
      "max_output_tokens": 8000,
      "modality": [
        "text",
        "image",
        "video"
      ],
      "scenes": [
        "video_understanding"
      ],
      "description": "GLM-4.6V 多模态视觉版",
      "license": "MIT",
      "is_open_weight": true,
      "official_input_usd_m": 0.9,
      "official_output_usd_m": 3,
      "official_cache_read_usd_m": 0,
      "version": "4.6-V",
      "capabilities": [
        "multimodal",
        "vision"
      ],
      "popularity": 2,
      "weekly_tokens": 1311949133,
      "monthly_tokens": 5680739745,
      "trend_week_pct": 22.4,
      "best_for": [
        "multimodal",
        "cheapest"
      ],
      "fingerprint_signature": "GLM-4.6V",
      "overall_score": 27,
      "capability_icons": [
        "🖼️"
      ]
    },
    {
      "id": "m_kimi_k3",
      "vendor_id": "v_moonshot",
      "name": "Kimi K3",
      "display_name": "Kimi K3",
      "family": "Kimi K",
      "release_date": "2026-07",
      "context_window": 262000,
      "max_output_tokens": 32000,
      "modality": [
        "text",
        "image"
      ],
      "scenes": [
        "agents",
        "browsing",
        "coding"
      ],
      "description": "Moonshot K3，开源倒计时 7/27",
      "license": "modified-MIT",
      "is_open_weight": false,
      "official_input_usd_m": 3,
      "official_output_usd_m": 15,
      "official_cache_read_usd_m": 0,
      "version": "3.0",
      "capabilities": [
        "agentic",
        "coding",
        "long_horizon",
        "browsing"
      ],
      "popularity": 5,
      "weekly_tokens": 88192925900,
      "monthly_tokens": 381875369147,
      "trend_week_pct": 24.9,
      "best_for": [
        "coding",
        "multimodal"
      ],
      "fingerprint_signature": "Kimi K3",
      "overall_score": 4,
      "capability_icons": [
        "🖼️"
      ]
    },
    {
      "id": "m_kimi_k2_6",
      "vendor_id": "v_moonshot",
      "name": "Kimi K2.6",
      "display_name": "Kimi K2.6",
      "family": "Kimi K2",
      "release_date": "2026-04",
      "context_window": 256000,
      "max_output_tokens": 32000,
      "modality": [
        "text",
        "image"
      ],
      "scenes": [
        "agents",
        "coding"
      ],
      "description": "Moonshot K2.6，SWE-Bench 80.2%",
      "license": "modified-MIT",
      "is_open_weight": true,
      "official_input_usd_m": 0.95,
      "official_output_usd_m": 4,
      "official_cache_read_usd_m": 0,
      "version": "2.6",
      "capabilities": [
        "agentic",
        "long_horizon_coding",
        "browsing"
      ],
      "popularity": 4,
      "weekly_tokens": 12460182262,
      "monthly_tokens": 53952589194,
      "trend_week_pct": 32.3,
      "best_for": [
        "coding",
        "multimodal",
        "cheapest"
      ],
      "fingerprint_signature": "Kimi K2.6",
      "overall_score": 27,
      "capability_icons": [
        "🖼️"
      ]
    },
    {
      "id": "m_doubao_seed_2_pro",
      "vendor_id": "v_doubao",
      "name": "Doubao Seed 2.0 Pro",
      "display_name": "Doubao Seed 2.0 Pro",
      "family": "Doubao Seed",
      "release_date": "2026-04",
      "context_window": 256000,
      "max_output_tokens": 32000,
      "modality": [
        "text",
        "image",
        "audio",
        "video"
      ],
      "scenes": [
        "multimodal",
        "chinese"
      ],
      "description": "字节豆包 Pro，国产多模态最强",
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 1.5,
      "official_output_usd_m": 8,
      "official_cache_read_usd_m": 0,
      "version": "2.0-pro",
      "capabilities": [
        "multimodal",
        "scientific_reasoning",
        "chinese"
      ],
      "popularity": 5,
      "weekly_tokens": 76880145484,
      "monthly_tokens": 332891029945,
      "trend_week_pct": 47.5,
      "best_for": [
        "multimodal"
      ],
      "fingerprint_signature": "Doubao Seed ",
      "overall_score": 17,
      "capability_icons": [
        "🖼️",
        "🎤"
      ]
    },
    {
      "id": "m_doubao_seed_2_lite",
      "vendor_id": "v_doubao",
      "name": "Doubao Seed 2.0 Lite",
      "display_name": "Doubao Seed 2.0 Lite",
      "family": "Doubao Seed",
      "release_date": "2026-04",
      "context_window": 128000,
      "max_output_tokens": 16000,
      "modality": [
        "text",
        "image"
      ],
      "scenes": [
        "realtime",
        "production"
      ],
      "description": "字节豆包 Lite 版",
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 0.3,
      "official_output_usd_m": 1.5,
      "official_cache_read_usd_m": 0,
      "version": "2.0-lite",
      "capabilities": [
        "speed",
        "multimodal"
      ],
      "popularity": 4,
      "weekly_tokens": 9844348447,
      "monthly_tokens": 42626028775,
      "trend_week_pct": -20.2,
      "best_for": [
        "multimodal",
        "cheapest",
        "throughput"
      ],
      "fingerprint_signature": "Doubao Seed ",
      "overall_score": 33,
      "capability_icons": [
        "🖼️"
      ]
    },
    {
      "id": "m_ernie_5_1",
      "vendor_id": "v_baidu",
      "name": "ERNIE 5.1",
      "display_name": "ERNIE 5.1",
      "family": "ERNIE 5",
      "release_date": "2026-04",
      "context_window": 128000,
      "max_output_tokens": 8000,
      "modality": [
        "text"
      ],
      "scenes": [
        "search",
        "chinese",
        "qa"
      ],
      "description": "百度文心 5.1，搜索增强",
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 0.8,
      "official_output_usd_m": 3.2,
      "official_cache_read_usd_m": 0,
      "version": "5.1",
      "capabilities": [
        "search_augmented",
        "chinese",
        "instruction_following"
      ],
      "popularity": 4,
      "weekly_tokens": 13154100439,
      "monthly_tokens": 56957254900,
      "trend_week_pct": 48.7,
      "best_for": [
        "cheapest"
      ],
      "fingerprint_signature": "ERNIE 5.1",
      "overall_score": 27,
      "capability_icons": [
        "💬"
      ]
    },
    {
      "id": "m_llama_4_maverick",
      "vendor_id": "v_meta",
      "name": "Llama 4 Maverick",
      "display_name": "Llama 4 Maverick",
      "family": "Llama 4",
      "release_date": "2025-04",
      "context_window": 10485760,
      "max_output_tokens": 16000,
      "modality": [
        "text",
        "image"
      ],
      "scenes": [
        "long_doc",
        "self_host"
      ],
      "description": "Meta Llama 4，10M 上下文 + 2600 t/s",
      "license": "Llama-3",
      "is_open_weight": true,
      "official_input_usd_m": 0.6,
      "official_output_usd_m": 2.4,
      "official_cache_read_usd_m": 0,
      "version": "4.0",
      "capabilities": [
        "long_context",
        "speed",
        "multimodal",
        "open_weight"
      ],
      "popularity": 5,
      "weekly_tokens": 79016510126,
      "monthly_tokens": 342141488845,
      "trend_week_pct": -5.3,
      "best_for": [
        "long_context",
        "multimodal",
        "cheapest"
      ],
      "fingerprint_signature": "Llama 4 Mave",
      "overall_score": 43,
      "capability_icons": [
        "🖼️"
      ]
    },
    {
      "id": "m_llama_4_scout",
      "vendor_id": "v_meta",
      "name": "Llama 4 Scout",
      "display_name": "Llama 4 Scout",
      "family": "Llama 4",
      "release_date": "2025-04",
      "context_window": 10485760,
      "max_output_tokens": 16000,
      "modality": [
        "text",
        "image"
      ],
      "scenes": [
        "realtime",
        "long_doc"
      ],
      "description": "Llama 4 Scout，便宜版",
      "license": "Llama-3",
      "is_open_weight": true,
      "official_input_usd_m": 0.4,
      "official_output_usd_m": 1.6,
      "official_cache_read_usd_m": 0,
      "version": "4.0",
      "capabilities": [
        "speed",
        "long_context",
        "open_weight"
      ],
      "popularity": 5,
      "weekly_tokens": 90240883531,
      "monthly_tokens": 390743025689,
      "trend_week_pct": -29.1,
      "best_for": [
        "long_context",
        "multimodal",
        "cheapest"
      ],
      "fingerprint_signature": "Llama 4 Scou",
      "overall_score": 45,
      "capability_icons": [
        "🖼️"
      ]
    },
    {
      "id": "m_mistral_large_3",
      "vendor_id": "v_mistral",
      "name": "Mistral Large 3",
      "display_name": "Mistral Large 3",
      "family": "Mistral Large",
      "release_date": "2026-04",
      "context_window": 256000,
      "max_output_tokens": 16000,
      "modality": [
        "text"
      ],
      "scenes": [
        "enterprise",
        "multilingual"
      ],
      "description": "Mistral Large 3，欧洲合规",
      "license": "Apache-2.0",
      "is_open_weight": true,
      "official_input_usd_m": 1.5,
      "official_output_usd_m": 7.5,
      "official_cache_read_usd_m": 0,
      "version": "3.0",
      "capabilities": [
        "reasoning",
        "multilingual"
      ],
      "official_reasoning_usd_m": 7.5,
      "popularity": 4,
      "weekly_tokens": 27100100303,
      "monthly_tokens": 117343434311,
      "trend_week_pct": 2.2,
      "best_for": [
        "reasoning"
      ],
      "fingerprint_signature": "Mistral Larg",
      "overall_score": 18,
      "capability_icons": [
        "🧠"
      ]
    },
    {
      "id": "m_mistral_medium_3_5",
      "vendor_id": "v_mistral",
      "name": "Mistral Medium 3.5",
      "display_name": "Mistral Medium 3.5",
      "family": "Mistral Medium",
      "release_date": "2026-04",
      "context_window": 256000,
      "max_output_tokens": 16000,
      "modality": [
        "text"
      ],
      "scenes": [
        "agentic_coding"
      ],
      "description": "Mistral Medium 3.5，256K 上下文",
      "license": "Apache-2.0",
      "is_open_weight": true,
      "official_input_usd_m": 1.5,
      "official_output_usd_m": 7.5,
      "official_cache_read_usd_m": 0,
      "version": "3.5",
      "capabilities": [
        "coding",
        "agentic"
      ],
      "popularity": 4,
      "weekly_tokens": 23949493452,
      "monthly_tokens": 103701306647,
      "trend_week_pct": 38.8,
      "best_for": [
        "general"
      ],
      "fingerprint_signature": "Mistral Medi",
      "overall_score": 18,
      "capability_icons": [
        "💬"
      ]
    },
    {
      "id": "m_devstral_2",
      "vendor_id": "v_mistral",
      "name": "Devstral 2",
      "display_name": "Devstral 2",
      "family": "Devstral",
      "release_date": "2025-12",
      "context_window": 262000,
      "max_output_tokens": 16000,
      "modality": [
        "text"
      ],
      "scenes": [
        "agentic_coding"
      ],
      "description": "Mistral Devstral 2，专注 Agent 编码",
      "license": "Apache-2.0",
      "is_open_weight": true,
      "official_input_usd_m": 2,
      "official_output_usd_m": 8,
      "official_cache_read_usd_m": 0,
      "version": "2.0",
      "capabilities": [
        "coding",
        "agentic",
        "open_weight"
      ],
      "popularity": 4,
      "weekly_tokens": 18389693245,
      "monthly_tokens": 79627371750,
      "trend_week_pct": -2.4,
      "best_for": [
        "general"
      ],
      "fingerprint_signature": "Devstral 2",
      "overall_score": 14,
      "capability_icons": [
        "💬"
      ]
    },
    {
      "id": "m_minimax_m3",
      "vendor_id": "v_minimax",
      "name": "MiniMax M3",
      "display_name": "MiniMax M3",
      "family": "MiniMax M",
      "release_date": "2026-08",
      "context_window": 1000000,
      "max_output_tokens": 32000,
      "modality": [
        "text",
        "image"
      ],
      "scenes": [
        "long_doc",
        "multimodal"
      ],
      "description": "MiniMax M3，国产长上下文",
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 0.5,
      "official_output_usd_m": 2.5,
      "official_cache_read_usd_m": 0,
      "version": "3.0",
      "capabilities": [
        "long_context",
        "multimodal"
      ],
      "popularity": 5,
      "weekly_tokens": 41029887678,
      "monthly_tokens": 177659413645,
      "trend_week_pct": 12.6,
      "best_for": [
        "long_context",
        "multimodal",
        "cheapest",
        "throughput"
      ],
      "fingerprint_signature": "MiniMax M3",
      "overall_score": 43,
      "capability_icons": [
        "🖼️"
      ]
    },
    {
      "id": "m_minimax_m2_7",
      "vendor_id": "v_minimax",
      "name": "MiniMax M2.7",
      "display_name": "MiniMax M2.7",
      "family": "MiniMax M",
      "release_date": "2026-03",
      "context_window": 205000,
      "max_output_tokens": 16000,
      "modality": [
        "text"
      ],
      "scenes": [
        "agents",
        "coding"
      ],
      "description": "MiniMax M2.7，自我进化 Agent",
      "license": "modified-MIT",
      "is_open_weight": true,
      "official_input_usd_m": 1.2,
      "official_output_usd_m": 4.8,
      "official_cache_read_usd_m": 0,
      "version": "2.7",
      "capabilities": [
        "agentic",
        "self_evolving",
        "coding"
      ],
      "popularity": 4,
      "weekly_tokens": 19443296474,
      "monthly_tokens": 84189473732,
      "trend_week_pct": 49.9,
      "best_for": [
        "coding",
        "throughput"
      ],
      "fingerprint_signature": "MiniMax M2.7",
      "overall_score": 23,
      "capability_icons": [
        "💬"
      ]
    },
    {
      "id": "m_step_3_5_flash",
      "vendor_id": "v_stepfun",
      "name": "Step-3.5 Flash",
      "display_name": "Step-3.5 Flash",
      "family": "Step-3.5",
      "release_date": "2025-11",
      "context_window": 196000,
      "max_output_tokens": 8000,
      "modality": [
        "text"
      ],
      "scenes": [
        "high_volume"
      ],
      "description": "阶跃星辰 Flash，便宜高速",
      "license": "Apache-2.0",
      "is_open_weight": true,
      "official_input_usd_m": 0.2,
      "official_output_usd_m": 0.8,
      "official_cache_read_usd_m": 0,
      "version": "3.5-flash",
      "capabilities": [
        "speed",
        "open_weight"
      ],
      "popularity": 2,
      "weekly_tokens": 406251210,
      "monthly_tokens": 1759067739,
      "trend_week_pct": 33.3,
      "best_for": [
        "cheapest",
        "throughput"
      ],
      "fingerprint_signature": "Step-3.5 Fla",
      "overall_score": 35,
      "capability_icons": [
        "💬"
      ]
    },
    {
      "id": "m_mimo_v2_flash",
      "vendor_id": "v_xiaomi",
      "name": "MiMo-V2 Flash",
      "display_name": "MiMo-V2 Flash",
      "family": "MiMo-V2",
      "release_date": "2026-01",
      "context_window": 256000,
      "max_output_tokens": 8000,
      "modality": [
        "text"
      ],
      "scenes": [
        "edge",
        "realtime"
      ],
      "description": "小米 MiMo-V2 Flash，国产边缘",
      "license": "Apache-2.0",
      "is_open_weight": true,
      "official_input_usd_m": 0.3,
      "official_output_usd_m": 1.2,
      "official_cache_read_usd_m": 0,
      "version": "2.0-flash",
      "capabilities": [
        "speed",
        "on_device"
      ],
      "popularity": 2,
      "weekly_tokens": 1109857750,
      "monthly_tokens": 4805684057,
      "trend_week_pct": 8.8,
      "best_for": [
        "cheapest",
        "throughput"
      ],
      "fingerprint_signature": "MiMo-V2 Flas",
      "overall_score": 35,
      "capability_icons": [
        "💬"
      ]
    },
    {
      "id": "m_claude_haiku_4_5",
      "vendor_id": "v_anthropic",
      "name": "Claude Haiku 4.5",
      "display_name": "Claude Haiku 4.5",
      "family": null,
      "release_date": "2026-08",
      "context_window": 200000,
      "max_output_tokens": 0,
      "modality": [
        "text"
      ],
      "scenes": [],
      "description": null,
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 1,
      "official_output_usd_m": 5,
      "official_cache_read_usd_m": 0.1,
      "capabilities": [
        "tool_use",
        "json_mode",
        "streaming"
      ],
      "capability_icons": [
        "🔧"
      ],
      "weekly_tokens": 0,
      "trend_week_pct": "0%",
      "overall_score": null,
      "best_for": []
    },
    {
      "id": "m_gemini_3_flash_lite",
      "vendor_id": "v_google",
      "name": "Gemini 3 Flash-Lite",
      "display_name": "Gemini 3 Flash-Lite",
      "family": null,
      "release_date": "2026-06",
      "context_window": 1000000,
      "max_output_tokens": 0,
      "modality": [
        "text"
      ],
      "scenes": [],
      "description": null,
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 0.075,
      "official_output_usd_m": 0.3,
      "official_cache_read_usd_m": 0,
      "capabilities": [
        "vision",
        "json_mode",
        "streaming"
      ],
      "capability_icons": [
        "🖼️"
      ],
      "weekly_tokens": 0,
      "trend_week_pct": "0%",
      "overall_score": null,
      "best_for": []
    },
    {
      "id": "m_grok_4_standard",
      "vendor_id": "v_xai",
      "name": "Grok 4 Standard",
      "display_name": "Grok 4 Standard",
      "family": null,
      "release_date": "2026-05",
      "context_window": 256000,
      "max_output_tokens": 0,
      "modality": [
        "text"
      ],
      "scenes": [],
      "description": null,
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 2,
      "official_output_usd_m": 10,
      "official_cache_read_usd_m": 0,
      "capabilities": [
        "json_mode",
        "streaming"
      ],
      "capability_icons": [],
      "weekly_tokens": 0,
      "trend_week_pct": "0%",
      "overall_score": null,
      "best_for": []
    },
    {
      "id": "m_llama_4_behemoth",
      "vendor_id": "v_meta",
      "name": "Llama 4 Behemoth",
      "display_name": "Llama 4 Behemoth",
      "family": null,
      "release_date": "2026-05",
      "context_window": 10500000,
      "max_output_tokens": 0,
      "modality": [
        "text"
      ],
      "scenes": [],
      "description": null,
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 2.5,
      "official_output_usd_m": 5,
      "official_cache_read_usd_m": 0,
      "capabilities": [
        "json_mode",
        "streaming"
      ],
      "capability_icons": [],
      "weekly_tokens": 0,
      "trend_week_pct": "0%",
      "overall_score": null,
      "best_for": []
    },
    {
      "id": "m_mistral_large_4",
      "vendor_id": "v_mistral",
      "name": "Mistral Large 4",
      "display_name": "Mistral Large 4",
      "family": null,
      "release_date": "2026-07",
      "context_window": 256000,
      "max_output_tokens": 0,
      "modality": [
        "text"
      ],
      "scenes": [],
      "description": null,
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 2,
      "official_output_usd_m": 6,
      "official_cache_read_usd_m": 0,
      "capabilities": [
        "tool_use",
        "json_mode",
        "streaming"
      ],
      "capability_icons": [
        "🔧"
      ],
      "weekly_tokens": 0,
      "trend_week_pct": "0%",
      "overall_score": null,
      "best_for": []
    },
    {
      "id": "m_command_r_plus",
      "vendor_id": "v_cohere",
      "name": "Command R+",
      "display_name": "Command R+",
      "family": null,
      "release_date": "2026-04",
      "context_window": 200000,
      "max_output_tokens": 0,
      "modality": [
        "text"
      ],
      "scenes": [],
      "description": null,
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 2.5,
      "official_output_usd_m": 10,
      "official_cache_read_usd_m": 0,
      "capabilities": [
        "json_mode",
        "streaming"
      ],
      "capability_icons": [],
      "weekly_tokens": 0,
      "trend_week_pct": "0%",
      "overall_score": null,
      "best_for": []
    },
    {
      "id": "m_jamba_2",
      "vendor_id": "v_ai21",
      "name": "Jamba 2",
      "display_name": "Jamba 2",
      "family": null,
      "release_date": "2026-03",
      "context_window": 256000,
      "max_output_tokens": 0,
      "modality": [
        "text"
      ],
      "scenes": [],
      "description": null,
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 0.4,
      "official_output_usd_m": 0.8,
      "official_cache_read_usd_m": 0,
      "capabilities": [
        "json_mode",
        "streaming"
      ],
      "capability_icons": [],
      "weekly_tokens": 0,
      "trend_week_pct": "0%",
      "overall_score": null,
      "best_for": []
    },
    {
      "id": "m_qwen3_coder",
      "vendor_id": "v_qwen",
      "name": "Qwen3-Coder",
      "display_name": "Qwen3-Coder",
      "family": null,
      "release_date": "2026-06",
      "context_window": 256000,
      "max_output_tokens": 0,
      "modality": [
        "text"
      ],
      "scenes": [],
      "description": null,
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 0.5,
      "official_output_usd_m": 2,
      "official_cache_read_usd_m": 0,
      "capabilities": [
        "tool_use",
        "json_mode",
        "streaming"
      ],
      "capability_icons": [
        "🔧"
      ],
      "weekly_tokens": 0,
      "trend_week_pct": "0%",
      "overall_score": null,
      "best_for": []
    },
    {
      "id": "m_qwen3_vl_max",
      "vendor_id": "v_qwen",
      "name": "Qwen3-VL-Max",
      "display_name": "Qwen3-VL-Max",
      "family": null,
      "release_date": "2026-08",
      "context_window": 1000000,
      "max_output_tokens": 0,
      "modality": [
        "text"
      ],
      "scenes": [],
      "description": null,
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 0.8,
      "official_output_usd_m": 4,
      "official_cache_read_usd_m": 0,
      "capabilities": [
        "vision",
        "json_mode",
        "streaming"
      ],
      "capability_icons": [
        "🖼️"
      ],
      "weekly_tokens": 0,
      "trend_week_pct": "0%",
      "overall_score": null,
      "best_for": []
    },
    {
      "id": "m_kimi_k2_7",
      "vendor_id": "v_moonshot",
      "name": "Kimi K2.7",
      "display_name": "Kimi K2.7",
      "family": null,
      "release_date": "2026-09",
      "context_window": 200000,
      "max_output_tokens": 0,
      "modality": [
        "text"
      ],
      "scenes": [],
      "description": null,
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 0.3,
      "official_output_usd_m": 1.2,
      "official_cache_read_usd_m": 0,
      "capabilities": [
        "tool_use",
        "json_mode",
        "streaming"
      ],
      "capability_icons": [
        "🔧"
      ],
      "weekly_tokens": 0,
      "trend_week_pct": "0%",
      "overall_score": null,
      "best_for": []
    },
    {
      "id": "m_glm_5_3_flash",
      "vendor_id": "v_zhipu",
      "name": "GLM-5.3-Flash",
      "display_name": "GLM-5.3-Flash",
      "family": null,
      "release_date": "2026-09",
      "context_window": 200000,
      "max_output_tokens": 0,
      "modality": [
        "text"
      ],
      "scenes": [],
      "description": null,
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 0.1,
      "official_output_usd_m": 0.4,
      "official_cache_read_usd_m": 0,
      "capabilities": [
        "vision",
        "json_mode",
        "streaming"
      ],
      "capability_icons": [
        "🖼️"
      ],
      "weekly_tokens": 0,
      "trend_week_pct": "0%",
      "overall_score": null,
      "best_for": []
    },
    {
      "id": "m_step_3_5_pro",
      "vendor_id": "v_stepfun",
      "name": "Step-3.5 Pro",
      "display_name": "Step-3.5 Pro",
      "family": null,
      "release_date": "2026-09",
      "context_window": 196000,
      "max_output_tokens": 0,
      "modality": [
        "text"
      ],
      "scenes": [],
      "description": null,
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 0.5,
      "official_output_usd_m": 2,
      "official_cache_read_usd_m": 0,
      "capabilities": [
        "vision",
        "json_mode",
        "streaming"
      ],
      "capability_icons": [
        "🖼️"
      ],
      "weekly_tokens": 0,
      "trend_week_pct": "0%",
      "overall_score": null,
      "best_for": []
    },
    {
      "id": "m_yi_large",
      "vendor_id": "v_01ai",
      "name": "Yi-Large",
      "display_name": "Yi-Large",
      "family": null,
      "release_date": "2026-04",
      "context_window": 200000,
      "max_output_tokens": 0,
      "modality": [
        "text"
      ],
      "scenes": [],
      "description": null,
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 0.8,
      "official_output_usd_m": 3,
      "official_cache_read_usd_m": 0,
      "capabilities": [
        "json_mode",
        "streaming"
      ],
      "capability_icons": [],
      "weekly_tokens": 0,
      "trend_week_pct": "0%",
      "overall_score": null,
      "best_for": []
    },
    {
      "id": "m_ernie_5_turbo",
      "vendor_id": "v_baidu",
      "name": "ERNIE 5 Turbo",
      "display_name": "ERNIE 5 Turbo",
      "family": null,
      "release_date": "2026-08",
      "context_window": 128000,
      "max_output_tokens": 0,
      "modality": [
        "text"
      ],
      "scenes": [],
      "description": null,
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 0.4,
      "official_output_usd_m": 1.2,
      "official_cache_read_usd_m": 0,
      "capabilities": [
        "json_mode",
        "streaming"
      ],
      "capability_icons": [],
      "weekly_tokens": 0,
      "trend_week_pct": "0%",
      "overall_score": null,
      "best_for": []
    },
    {
      "id": "m_minimax_text_02",
      "vendor_id": "v_minimax",
      "name": "MiniMax-Text-02",
      "display_name": "MiniMax-Text-02",
      "family": null,
      "release_date": "2026-07",
      "context_window": 1000000,
      "max_output_tokens": 0,
      "modality": [
        "text"
      ],
      "scenes": [],
      "description": null,
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 0.3,
      "official_output_usd_m": 1.2,
      "official_cache_read_usd_m": 0,
      "capabilities": [
        "json_mode",
        "streaming"
      ],
      "capability_icons": [],
      "weekly_tokens": 0,
      "trend_week_pct": "0%",
      "overall_score": null,
      "best_for": []
    },
    {
      "id": "m_deepseek_v4_coder",
      "vendor_id": "v_deepseek",
      "name": "DeepSeek V4 Coder",
      "display_name": "DeepSeek V4 Coder",
      "family": null,
      "release_date": "2026-09",
      "context_window": 164000,
      "max_output_tokens": 0,
      "modality": [
        "text"
      ],
      "scenes": [],
      "description": null,
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 0.27,
      "official_output_usd_m": 1.1,
      "official_cache_read_usd_m": 0,
      "capabilities": [
        "tool_use",
        "json_mode",
        "streaming"
      ],
      "capability_icons": [
        "🔧"
      ],
      "weekly_tokens": 0,
      "trend_week_pct": "0%",
      "overall_score": null,
      "best_for": []
    },
    {
      "id": "m_hunyuan_turbo",
      "vendor_id": "v_tencent",
      "name": "Hunyuan Turbo",
      "display_name": "Hunyuan Turbo",
      "family": null,
      "release_date": "2026-08",
      "context_window": 128000,
      "max_output_tokens": 0,
      "modality": [
        "text"
      ],
      "scenes": [],
      "description": null,
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 0.5,
      "official_output_usd_m": 1.5,
      "official_cache_read_usd_m": 0,
      "capabilities": [
        "json_mode",
        "streaming"
      ],
      "capability_icons": [],
      "weekly_tokens": 0,
      "trend_week_pct": "0%",
      "overall_score": null,
      "best_for": []
    },
    {
      "id": "m_llama_4_70b",
      "vendor_id": "v_meta",
      "name": "Llama 4 70B",
      "display_name": "Llama 4 70B",
      "family": null,
      "release_date": "2026-04",
      "context_window": 128000,
      "max_output_tokens": 0,
      "modality": [
        "text"
      ],
      "scenes": [],
      "description": null,
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 0.3,
      "official_output_usd_m": 0.6,
      "official_cache_read_usd_m": 0,
      "capabilities": [
        "json_mode",
        "streaming"
      ],
      "capability_icons": [],
      "weekly_tokens": 0,
      "trend_week_pct": "0%",
      "overall_score": null,
      "best_for": []
    },
    {
      "id": "m_mistral_7b_v3",
      "vendor_id": "v_mistral",
      "name": "Mistral 7B v3",
      "display_name": "Mistral 7B v3",
      "family": null,
      "release_date": "2026-05",
      "context_window": 32000,
      "max_output_tokens": 0,
      "modality": [
        "text"
      ],
      "scenes": [],
      "description": null,
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 0.05,
      "official_output_usd_m": 0.1,
      "official_cache_read_usd_m": 0,
      "capabilities": [
        "json_mode",
        "streaming"
      ],
      "capability_icons": [],
      "weekly_tokens": 0,
      "trend_week_pct": "0%",
      "overall_score": null,
      "best_for": []
    },
    {
      "id": "m_phi_4",
      "vendor_id": "v_microsoft",
      "name": "Phi-4",
      "display_name": "Phi-4",
      "family": null,
      "release_date": "2026-01",
      "context_window": 16000,
      "max_output_tokens": 0,
      "modality": [
        "text"
      ],
      "scenes": [],
      "description": null,
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 0.07,
      "official_output_usd_m": 0.14,
      "official_cache_read_usd_m": 0,
      "capabilities": [
        "json_mode",
        "streaming"
      ],
      "capability_icons": [],
      "weekly_tokens": 0,
      "trend_week_pct": "0%",
      "overall_score": null,
      "best_for": []
    },
    {
      "id": "m_qwen2_5_coder_32b",
      "vendor_id": "v_qwen",
      "name": "Qwen2.5-Coder-32B",
      "display_name": "Qwen2.5-Coder-32B",
      "family": null,
      "release_date": "2025-12",
      "context_window": 32000,
      "max_output_tokens": 0,
      "modality": [
        "text"
      ],
      "scenes": [],
      "description": null,
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 0.2,
      "official_output_usd_m": 0.6,
      "official_cache_read_usd_m": 0,
      "capabilities": [
        "tool_use",
        "json_mode",
        "streaming"
      ],
      "capability_icons": [
        "🔧"
      ],
      "weekly_tokens": 0,
      "trend_week_pct": "0%",
      "overall_score": null,
      "best_for": []
    },
    {
      "id": "m_deepseek_coder_v3",
      "vendor_id": "v_deepseek",
      "name": "DeepSeek-Coder-V3",
      "display_name": "DeepSeek-Coder-V3",
      "family": null,
      "release_date": "2026-03",
      "context_window": 128000,
      "max_output_tokens": 0,
      "modality": [
        "text"
      ],
      "scenes": [],
      "description": null,
      "license": "proprietary",
      "is_open_weight": false,
      "official_input_usd_m": 0.14,
      "official_output_usd_m": 0.28,
      "official_cache_read_usd_m": 0,
      "capabilities": [
        "tool_use",
        "json_mode",
        "streaming"
      ],
      "capability_icons": [
        "🔧"
      ],
      "weekly_tokens": 0,
      "trend_week_pct": "0%",
      "overall_score": null,
      "best_for": []
    }
  ],
  "providers": [
    {
      "id": "p_anthropic_official",
      "name_zh": "Anthropic 官方",
      "name_en": "Anthropic",
      "type": "official",
      "region": "global",
      "website": "https://console.anthropic.com",
      "invoice_available": 1,
      "min_charge": 5,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "官方直连，USD 充值",
      "payment_currency": [
        "USD"
      ],
      "api_protocol": [
        "anthropic"
      ],
      "regions_available": [
        "global",
        "cn"
      ],
      "name": "Anthropic 官方",
      "name_short": "Anthropic 官方",
      "status": "online",
      "rating": 4.4,
      "review_count": 1236,
      "tags": [
        "可开发票",
        "官方"
      ],
      "browse_count": 5671,
      "last_check_at": "2026-09-15",
      "compliance": [
        "发票",
        "GDPR",
        "SOC2"
      ],
      "signup_date": "2025-11-05",
      "models_count": 5
    },
    {
      "id": "p_openai_official",
      "name_zh": "OpenAI 官方",
      "name_en": "OpenAI",
      "type": "official",
      "region": "global",
      "website": "https://platform.openai.com",
      "invoice_available": 1,
      "min_charge": 5,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "官方直连",
      "payment_currency": [
        "USD"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "global",
        "cn"
      ],
      "name": "OpenAI 官方",
      "name_short": "OpenAI 官方",
      "status": "online",
      "rating": 4,
      "review_count": 4696,
      "tags": [
        "可开发票",
        "官方"
      ],
      "browse_count": 67513,
      "last_check_at": "2026-09-17",
      "compliance": [
        "发票",
        "GDPR"
      ],
      "signup_date": "2025-10-31",
      "models_count": 4
    },
    {
      "id": "p_google_official",
      "name_zh": "Google AI Studio",
      "name_en": "Google AI Studio",
      "type": "official",
      "region": "global",
      "website": "https://aistudio.google.com",
      "invoice_available": 1,
      "min_charge": 0,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "免费额度+付费层",
      "payment_currency": [
        "USD"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "global",
        "cn"
      ],
      "name": "Google AI Studio",
      "name_short": "Google AI Studio",
      "status": "online",
      "rating": 4.9,
      "review_count": 879,
      "tags": [
        "可开发票",
        "免费试用",
        "官方"
      ],
      "browse_count": 30354,
      "last_check_at": "2026-09-18",
      "compliance": [
        "发票",
        "GDPR"
      ],
      "signup_date": "2026-02-15",
      "models_count": 4
    },
    {
      "id": "p_xai_official",
      "name_zh": "xAI 官方",
      "name_en": "xAI Console",
      "type": "official",
      "region": "global",
      "website": "https://console.x.ai",
      "invoice_available": 1,
      "min_charge": 5,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "官方直连",
      "payment_currency": [
        "USD"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "global",
        "cn"
      ],
      "name": "xAI 官方",
      "name_short": "xAI 官方",
      "status": "online",
      "rating": 3.9,
      "review_count": 3460,
      "tags": [
        "可开发票",
        "官方"
      ],
      "browse_count": 24571,
      "last_check_at": "2026-09-21",
      "compliance": [
        "发票",
        "GDPR"
      ],
      "signup_date": "2026-02-25",
      "models_count": 3
    },
    {
      "id": "p_deepseek_official",
      "name_zh": "DeepSeek 官方",
      "name_en": "DeepSeek Platform",
      "type": "official",
      "region": "cn/global",
      "website": "https://platform.deepseek.com",
      "invoice_available": 1,
      "min_charge": 1,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "国内可直接，海外 OpenAI 兼容",
      "payment_currency": [
        "CNY",
        "USD"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "global"
      ],
      "name": "DeepSeek 官方",
      "name_short": "DeepSeek 官方",
      "status": "online",
      "rating": 4.8,
      "review_count": 1090,
      "tags": [
        "可开发票",
        "官方"
      ],
      "browse_count": 23399,
      "promo": "⚡ 限时充 ¥100 送 ¥20",
      "last_check_at": "2026-09-20",
      "compliance": [
        "发票",
        "ICP备案",
        "GDPR",
        "SOC2"
      ],
      "signup_date": "2026-03-01",
      "models_count": 6
    },
    {
      "id": "p_qwen_official",
      "name_zh": "阿里云百炼",
      "name_en": "Alibaba Bailian",
      "type": "official",
      "region": "cn/global",
      "website": "https://bailian.console.aliyun.com",
      "invoice_available": 1,
      "min_charge": 0,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "Qwen 官方，支持 100+ 模型",
      "payment_currency": [
        "CNY"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "global"
      ],
      "name": "阿里云百炼",
      "name_short": "阿里云百炼",
      "status": "limited",
      "rating": 3.9,
      "review_count": 2263,
      "tags": [
        "可开发票",
        "免费试用",
        "官方"
      ],
      "browse_count": 14460,
      "last_check_at": "2026-09-20",
      "compliance": [
        "发票",
        "ICP备案",
        "GDPR"
      ],
      "signup_date": "2025-10-30",
      "models_count": 7
    },
    {
      "id": "p_zhipu_official",
      "name_zh": "智谱 BigModel",
      "name_en": "Zhipu BigModel",
      "type": "official",
      "region": "cn/global",
      "website": "https://bigmodel.cn",
      "invoice_available": 1,
      "min_charge": 1,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "GLM 官方",
      "payment_currency": [
        "CNY",
        "USD"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "global"
      ],
      "name": "智谱 BigModel",
      "name_short": "智谱 BigModel",
      "status": "online",
      "rating": 3.8,
      "review_count": 1476,
      "tags": [
        "可开发票",
        "官方"
      ],
      "browse_count": 24041,
      "promo": {
        "type": "discount",
        "text": "🎁 月付 9 折",
        "amount": 10
      },
      "last_check_at": "2026-09-15",
      "compliance": [
        "发票",
        "ICP备案",
        "GDPR",
        "ISO27001"
      ],
      "signup_date": "2026-06-24",
      "models_count": 4
    },
    {
      "id": "p_moonshot_official",
      "name_zh": "Moonshot 官方",
      "name_en": "Moonshot Platform",
      "type": "official",
      "region": "cn/global",
      "website": "https://platform.moonshot.cn",
      "invoice_available": 1,
      "min_charge": 5,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "Kimi 官方",
      "payment_currency": [
        "CNY",
        "USD"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "global"
      ],
      "name": "Moonshot 官方",
      "name_short": "Moonshot 官方",
      "status": "online",
      "rating": 3.9,
      "review_count": 2003,
      "tags": [
        "可开发票",
        "官方"
      ],
      "browse_count": 69524,
      "promo": "🎁 新用户首单 8 折",
      "last_check_at": "2026-09-19",
      "compliance": [
        "发票",
        "ICP备案",
        "GDPR",
        "ISO27001"
      ],
      "signup_date": "2026-07-22",
      "models_count": 3
    },
    {
      "id": "p_doubao_official",
      "name_zh": "字节火山引擎",
      "name_en": "Volcano Engine",
      "type": "official",
      "region": "cn",
      "website": "https://www.volcengine.com/product/doubao",
      "invoice_available": 1,
      "min_charge": 0,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "豆包官方，企业级",
      "payment_currency": [
        "CNY"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "cn"
      ],
      "name": "字节火山引擎",
      "name_short": "字节火山引擎",
      "status": "online",
      "rating": 3.6,
      "review_count": 2612,
      "tags": [
        "可开发票",
        "免费试用",
        "官方"
      ],
      "browse_count": 48543,
      "last_check_at": "2026-09-18",
      "compliance": [
        "发票",
        "ICP备案",
        "SOC2"
      ],
      "signup_date": "2026-02-07",
      "models_count": 2
    },
    {
      "id": "p_baidu_qianfan",
      "name_zh": "百度千帆",
      "name_en": "Baidu Qianfan",
      "type": "official",
      "region": "cn",
      "website": "https://cloud.baidu.com/product/qianfan",
      "invoice_available": 1,
      "min_charge": 0,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "文心官方",
      "payment_currency": [
        "CNY"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "cn"
      ],
      "name": "百度千帆",
      "name_short": "百度千帆",
      "status": "offline",
      "rating": 3.6,
      "review_count": 358,
      "tags": [
        "可开发票",
        "免费试用",
        "官方"
      ],
      "browse_count": 99545,
      "last_check_at": "2026-09-17",
      "compliance": [
        "发票",
        "ICP备案",
        "ISO27001"
      ],
      "signup_date": "2026-04-28",
      "models_count": 1
    },
    {
      "id": "p_mistral_official",
      "name_zh": "Mistral 官方",
      "name_en": "Mistral La Plateforme",
      "type": "official",
      "region": "global",
      "website": "https://console.mistral.ai",
      "invoice_available": 1,
      "min_charge": 5,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "官方直连，欧盟合规",
      "payment_currency": [
        "USD",
        "EUR"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "global",
        "cn"
      ],
      "name": "Mistral 官方",
      "name_short": "Mistral 官方",
      "status": "online",
      "rating": 4.9,
      "review_count": 584,
      "tags": [
        "可开发票",
        "官方"
      ],
      "browse_count": 26857,
      "last_check_at": "2026-09-17",
      "compliance": [
        "发票",
        "GDPR"
      ],
      "signup_date": "2026-08-09",
      "models_count": 5
    },
    {
      "id": "p_groq",
      "name_zh": "GroqCloud",
      "name_en": "GroqCloud",
      "type": "official",
      "region": "global",
      "website": "https://console.groq.com",
      "invoice_available": 0,
      "min_charge": 0,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "LPU 推理，极速",
      "payment_currency": [
        "USD"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "global",
        "cn"
      ],
      "name": "GroqCloud",
      "name_short": "GroqCloud",
      "status": "online",
      "rating": 3.6,
      "review_count": 1357,
      "tags": [
        "免费试用",
        "官方"
      ],
      "browse_count": 4428,
      "last_check_at": "2026-09-15",
      "compliance": [
        "GDPR"
      ],
      "signup_date": "2026-03-29",
      "models_count": 12
    },
    {
      "id": "p_together_ai",
      "name_zh": "Together AI",
      "name_en": "Together AI",
      "type": "aggregator",
      "region": "global",
      "website": "https://www.together.ai",
      "invoice_available": 1,
      "min_charge": 5,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "200+ 开源模型，按 token 计费",
      "payment_currency": [
        "USD"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "global",
        "cn"
      ],
      "name": "Together AI",
      "name_short": "Together AI",
      "status": "online",
      "rating": 3.6,
      "review_count": 1211,
      "tags": [
        "可开发票",
        "聚合"
      ],
      "browse_count": 44342,
      "last_check_at": "2026-09-21",
      "compliance": [
        "发票",
        "GDPR"
      ],
      "signup_date": "2026-08-22",
      "models_count": 34
    },
    {
      "id": "p_fireworks_ai",
      "name_zh": "Fireworks AI",
      "name_en": "Fireworks AI",
      "type": "aggregator",
      "region": "global",
      "website": "https://fireworks.ai",
      "invoice_available": 1,
      "min_charge": 5,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "开源模型优化推理",
      "payment_currency": [
        "USD"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "global",
        "cn"
      ],
      "name": "Fireworks AI",
      "name_short": "Fireworks AI",
      "status": "online",
      "rating": 4.2,
      "review_count": 173,
      "tags": [
        "可开发票",
        "聚合"
      ],
      "browse_count": 35306,
      "promo": "🎁 新用户首单 8 折",
      "last_check_at": "2026-09-18",
      "compliance": [
        "发票",
        "GDPR",
        "SOC2"
      ],
      "signup_date": "2026-06-12",
      "models_count": 32
    },
    {
      "id": "p_anyscale",
      "name_zh": "Anyscale",
      "name_en": "Anyscale Endpoints",
      "type": "aggregator",
      "region": "global",
      "website": "https://www.anyscale.com",
      "invoice_available": 1,
      "min_charge": 0,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "开源模型生产部署",
      "payment_currency": [
        "USD"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "global",
        "cn"
      ],
      "name": "Anyscale",
      "name_short": "Anyscale",
      "status": "online",
      "rating": 4.7,
      "review_count": 1120,
      "tags": [
        "可开发票",
        "免费试用",
        "聚合"
      ],
      "browse_count": 22407,
      "last_check_at": "2026-09-20",
      "compliance": [
        "发票",
        "GDPR",
        "ISO27001"
      ],
      "signup_date": "2026-08-04",
      "models_count": 60
    },
    {
      "id": "p_openrouter",
      "name_zh": "OpenRouter",
      "name_en": "OpenRouter",
      "type": "aggregator",
      "region": "global",
      "website": "https://openrouter.ai",
      "invoice_available": 0,
      "min_charge": 5,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "300+ 模型，OpenAI 兼容，5.5% 平台费",
      "payment_currency": [
        "USD",
        "CRYPTO"
      ],
      "api_protocol": [
        "openai",
        "anthropic"
      ],
      "regions_available": [
        "global",
        "cn"
      ],
      "name": "OpenRouter",
      "name_short": "OpenRouter",
      "status": "online",
      "rating": 4.5,
      "review_count": 3023,
      "tags": [
        "聚合"
      ],
      "browse_count": 26930,
      "last_check_at": "2026-09-18",
      "compliance": [
        "GDPR"
      ],
      "signup_date": "2026-02-16",
      "models_count": 60
    },
    {
      "id": "p_litellm",
      "name_zh": "LiteLLM (自托管)",
      "name_en": "LiteLLM Proxy",
      "type": "self_host",
      "region": "self",
      "website": "https://litellm.ai",
      "invoice_available": 0,
      "min_charge": 0,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "MIT 开源自托管，140+ 提供商",
      "payment_currency": [
        "-"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "global"
      ],
      "name": "LiteLLM (自托管)",
      "name_short": "LiteLLM (自托管)",
      "status": "online",
      "rating": 4.7,
      "review_count": 3113,
      "tags": [
        "免费试用",
        "自托管"
      ],
      "browse_count": 84804,
      "promo": {
        "type": "discount",
        "text": "💰 首单 8 折",
        "amount": 20
      },
      "last_check_at": "2026-09-19",
      "compliance": [
        "SOC2"
      ],
      "signup_date": "2026-07-16",
      "models_count": 60
    },
    {
      "id": "p_portkey",
      "name_zh": "Portkey",
      "name_en": "Portkey AI Gateway",
      "type": "gateway",
      "region": "global",
      "website": "https://portkey.ai",
      "invoice_available": 1,
      "min_charge": 0,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "Apache-2.0 企业级网关",
      "payment_currency": [
        "USD"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "global",
        "cn"
      ],
      "name": "Portkey",
      "name_short": "Portkey",
      "status": "limited",
      "rating": 4.3,
      "review_count": 442,
      "tags": [
        "可开发票",
        "免费试用",
        "网关"
      ],
      "browse_count": 4709,
      "last_check_at": "2026-09-15",
      "compliance": [
        "发票",
        "GDPR"
      ],
      "signup_date": "2026-05-19",
      "models_count": 32
    },
    {
      "id": "p_helicone",
      "name_zh": "Helicone",
      "name_en": "Helicone AI Gateway",
      "type": "gateway",
      "region": "global",
      "website": "https://helicone.ai",
      "invoice_available": 0,
      "min_charge": 0,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "可观测性优先，免费 10K/月",
      "payment_currency": [
        "USD"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "global",
        "cn"
      ],
      "name": "Helicone",
      "name_short": "Helicone",
      "status": "online",
      "rating": 3.6,
      "review_count": 3669,
      "tags": [
        "免费试用",
        "网关"
      ],
      "browse_count": 33448,
      "last_check_at": "2026-09-15",
      "compliance": [
        "GDPR"
      ],
      "signup_date": "2025-11-02",
      "models_count": 33
    },
    {
      "id": "p_cloudflare_ai",
      "name_zh": "Cloudflare AI Gateway",
      "name_en": "Cloudflare AI Gateway",
      "type": "gateway",
      "region": "global",
      "website": "https://developers.cloudflare.com/ai-gateway",
      "invoice_available": 1,
      "min_charge": 0,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "Cloudflare 用户免费",
      "payment_currency": [
        "USD"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "global",
        "cn"
      ],
      "name": "Cloudflare AI Gateway",
      "name_short": "Cloudflare AI Gateway",
      "status": "maintenance",
      "rating": 3.8,
      "review_count": 1242,
      "tags": [
        "可开发票",
        "免费试用",
        "网关"
      ],
      "browse_count": 51791,
      "last_check_at": "2026-09-21",
      "compliance": [
        "发票",
        "GDPR",
        "SOC2"
      ],
      "signup_date": "2026-08-01",
      "models_count": 33
    },
    {
      "id": "p_vercel_ai_gateway",
      "name_zh": "Vercel AI Gateway",
      "name_en": "Vercel AI Gateway",
      "type": "gateway",
      "region": "global",
      "website": "https://vercel.com/docs/ai-gateway",
      "invoice_available": 0,
      "min_charge": 5,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "0 标记费",
      "payment_currency": [
        "USD"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "global",
        "cn"
      ],
      "name": "Vercel AI Gateway",
      "name_short": "Vercel AI Gateway",
      "status": "online",
      "rating": 4.9,
      "review_count": 1251,
      "tags": [
        "网关"
      ],
      "browse_count": 86974,
      "promo": "⚡ 限时充 ¥100 送 ¥20",
      "last_check_at": "2026-09-20",
      "compliance": [
        "GDPR"
      ],
      "signup_date": "2026-04-19",
      "models_count": 34
    },
    {
      "id": "p_one_api",
      "name_zh": "One-API (开源)",
      "name_en": "One-API (开源)",
      "type": "self_host",
      "region": "cn",
      "website": "https://github.com/songquanpeng/one-api",
      "invoice_available": 0,
      "min_charge": 0,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "国内最流行的开源聚合，docker 镜像",
      "payment_currency": [
        "CNY"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "cn"
      ],
      "name": "One-API (开源)",
      "name_short": "One-API (开源)",
      "status": "limited",
      "rating": 3.7,
      "review_count": 3549,
      "tags": [
        "免费试用",
        "自托管"
      ],
      "browse_count": 97250,
      "last_check_at": "2026-09-16",
      "compliance": [
        "ICP备案",
        "ISO27001"
      ],
      "signup_date": "2026-02-26",
      "models_count": 60
    },
    {
      "id": "p_new_api",
      "name_zh": "New-API (开源)",
      "name_en": "New-API (开源)",
      "type": "self_host",
      "region": "cn",
      "website": "https://github.com/QuantumNous/new-api",
      "invoice_available": 0,
      "min_charge": 0,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "One-API 升级版",
      "payment_currency": [
        "CNY"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "cn"
      ],
      "name": "New-API (开源)",
      "name_short": "New-API (开源)",
      "status": "online",
      "rating": 4.1,
      "review_count": 1061,
      "tags": [
        "免费试用",
        "自托管"
      ],
      "browse_count": 13096,
      "promo": {
        "type": "discount",
        "text": "💰 首单 8 折",
        "amount": 20
      },
      "last_check_at": "2026-09-18",
      "compliance": [
        "ICP备案",
        "SOC2"
      ],
      "signup_date": "2025-12-05",
      "models_count": 60
    },
    {
      "id": "p_duckcoding",
      "name_zh": "DuckCoding",
      "name_en": "DuckCoding",
      "type": "aggregator",
      "region": "cn",
      "website": "https://duckcoding.com",
      "invoice_available": 0,
      "min_charge": 10,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "国内中转，比官方低 30-50%",
      "payment_currency": [
        "CNY",
        "USD"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "cn"
      ],
      "name": "DuckCoding",
      "name_short": "DuckCoding",
      "status": "online",
      "rating": 4.7,
      "review_count": 31,
      "tags": [
        "聚合"
      ],
      "browse_count": 39586,
      "last_check_at": "2026-09-21",
      "compliance": [
        "ICP备案"
      ],
      "signup_date": "2026-08-17",
      "models_count": 60
    },
    {
      "id": "p_api2d",
      "name_zh": "API2D",
      "name_en": "API2D",
      "type": "aggregator",
      "region": "cn",
      "website": "https://api2d.com",
      "invoice_available": 0,
      "min_charge": 5,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "国内老牌中转",
      "payment_currency": [
        "CNY",
        "USD"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "cn"
      ],
      "name": "API2D",
      "name_short": "API2D",
      "status": "online",
      "rating": 4.5,
      "review_count": 384,
      "tags": [
        "聚合"
      ],
      "browse_count": 93069,
      "last_check_at": "2026-09-18",
      "compliance": [
        "ICP备案",
        "ISO27001"
      ],
      "signup_date": "2025-11-13",
      "models_count": 60
    },
    {
      "id": "p_aicnb",
      "name_zh": "AIcnb",
      "name_en": "AIcnb",
      "type": "aggregator",
      "region": "cn",
      "website": "https://aicnb.com",
      "invoice_available": 0,
      "min_charge": 5,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "国内中转，含发票申请",
      "payment_currency": [
        "CNY"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "cn"
      ],
      "name": "AIcnb",
      "name_short": "AIcnb",
      "status": "online",
      "rating": 5,
      "review_count": 739,
      "tags": [
        "聚合"
      ],
      "browse_count": 78864,
      "promo": {
        "type": "discount",
        "text": "💰 首单 8 折",
        "amount": 20
      },
      "last_check_at": "2026-09-19",
      "compliance": [
        "ICP备案"
      ],
      "signup_date": "2026-05-12",
      "models_count": 60
    },
    {
      "id": "p_closeai",
      "name_zh": "CloseAI",
      "name_en": "CloseAI",
      "type": "aggregator",
      "region": "cn",
      "website": "https://closeai.info",
      "invoice_available": 0,
      "min_charge": 5,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "国内 Claude 专线",
      "payment_currency": [
        "CNY"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "cn"
      ],
      "name": "CloseAI",
      "name_short": "CloseAI",
      "status": "online",
      "rating": 4.9,
      "review_count": 2608,
      "tags": [
        "聚合"
      ],
      "browse_count": 69027,
      "promo": {
        "type": "bonus",
        "text": "⚡ 充 ¥100 送 ¥30",
        "amount": 30
      },
      "last_check_at": "2026-09-21",
      "compliance": [
        "ICP备案",
        "ISO27001"
      ],
      "signup_date": "2026-08-30",
      "models_count": 60
    },
    {
      "id": "p_woka_ai",
      "name_zh": "WokaAI",
      "name_en": "WokaAI",
      "type": "aggregator",
      "region": "cn",
      "website": "https://wokaai.com",
      "invoice_available": 0,
      "min_charge": 5,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "国内 Claude/GPT 中转",
      "payment_currency": [
        "CNY"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "cn"
      ],
      "name": "WokaAI",
      "name_short": "WokaAI",
      "status": "online",
      "rating": 3.6,
      "review_count": 3063,
      "tags": [
        "聚合"
      ],
      "browse_count": 37722,
      "last_check_at": "2026-09-21",
      "compliance": [
        "ICP备案",
        "ISO27001"
      ],
      "signup_date": "2026-07-06",
      "models_count": 60
    },
    {
      "id": "p_chatfire",
      "name_zh": "ChatFire",
      "name_en": "ChatFire",
      "type": "aggregator",
      "region": "cn",
      "website": "https://chatfire.cn",
      "invoice_available": 0,
      "min_charge": 1,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "国内低价中转",
      "payment_currency": [
        "CNY"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "cn"
      ],
      "name": "ChatFire",
      "name_short": "ChatFire",
      "status": "online",
      "rating": 4.7,
      "review_count": 1968,
      "tags": [
        "聚合"
      ],
      "browse_count": 45303,
      "last_check_at": "2026-09-18",
      "compliance": [
        "ICP备案",
        "ISO27001"
      ],
      "signup_date": "2026-08-26",
      "models_count": 60
    },
    {
      "id": "p_volcengine_official",
      "name_zh": "火山引擎方舟",
      "name_en": "Volcano Ark",
      "type": "official",
      "region": "cn",
      "website": "https://www.volcengine.com/product/ark",
      "invoice_available": 1,
      "min_charge": 50,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "字节跳动旗下，豆包官方平台",
      "payment_currency": [
        "CNY"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "cn"
      ],
      "name": "Volcano Ark",
      "status": "online",
      "models_count": 0
    },
    {
      "id": "p_tencent_official",
      "name_zh": "腾讯云大模型",
      "name_en": "Tencent Cloud LLM",
      "type": "official",
      "region": "cn",
      "website": "https://cloud.tencent.com/product/hunyuan",
      "invoice_available": 1,
      "min_charge": 50,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "腾讯混元官方",
      "payment_currency": [
        "CNY"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "cn"
      ],
      "name": "Tencent Cloud LLM",
      "status": "online",
      "models_count": 1
    },
    {
      "id": "p_jd_official",
      "name_zh": "京东云灵曦",
      "name_en": "JD Cloud Lingxi",
      "type": "official",
      "region": "cn",
      "website": "https://www.jdcloud.com/cn/products/lingxi",
      "invoice_available": 1,
      "min_charge": 100,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "京东云大模型",
      "payment_currency": [
        "CNY"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "cn"
      ],
      "name": "JD Cloud Lingxi",
      "status": "online",
      "models_count": 0
    },
    {
      "id": "p_huggingface_inference",
      "name_zh": "Hugging Face Inference",
      "name_en": "HF Inference Endpoints",
      "type": "platform",
      "region": "global",
      "website": "https://huggingface.co/inference-endpoints",
      "invoice_available": 1,
      "min_charge": 0,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "HF 部署开源模型，按 GPU 时长收费",
      "payment_currency": [
        "USD"
      ],
      "api_protocol": [
        "openai",
        "anthropic"
      ],
      "regions_available": [
        "global",
        "cn"
      ],
      "name": "HF Inference Endpoints",
      "status": "online",
      "models_count": 60
    },
    {
      "id": "p_replicate",
      "name_zh": "Replicate",
      "name_en": "Replicate",
      "type": "platform",
      "region": "global",
      "website": "https://replicate.com",
      "invoice_available": 1,
      "min_charge": 0,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "云端跑开源模型，按秒计费",
      "payment_currency": [
        "USD"
      ],
      "api_protocol": [
        "openai",
        "anthropic"
      ],
      "regions_available": [
        "global",
        "cn"
      ],
      "name": "Replicate",
      "status": "online",
      "models_count": 60
    },
    {
      "id": "p_cerebrium",
      "name_zh": "Cerebrium",
      "name_en": "Cerebrium",
      "type": "platform",
      "region": "global",
      "website": "https://www.cerebrium.ai",
      "invoice_available": 0,
      "min_charge": 0,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "无服务器 GPU，按请求计费",
      "payment_currency": [
        "USD"
      ],
      "api_protocol": [
        "openai",
        "anthropic"
      ],
      "regions_available": [
        "global",
        "cn"
      ],
      "name": "Cerebrium",
      "status": "online",
      "models_count": 60
    },
    {
      "id": "p_lmstudio_cloud",
      "name_zh": "LM Studio Cloud",
      "name_en": "LM Studio Cloud",
      "type": "individual",
      "region": "global",
      "website": "https://lmstudio.ai",
      "invoice_available": 0,
      "min_charge": 0,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "本地/云端混合，个人开发者常用",
      "payment_currency": [
        "USD"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "global",
        "cn"
      ],
      "name": "LM Studio Cloud",
      "status": "online",
      "models_count": 60
    },
    {
      "id": "p_coze",
      "name_zh": "扣子 Coze",
      "name_en": "Coze",
      "type": "platform",
      "region": "cn",
      "website": "https://www.coze.cn",
      "invoice_available": 1,
      "min_charge": 0,
      "sla_uptime": 99.5,
      "concurrent_rpm": 1000,
      "notes": "字节扣子，国产 GPTs 平台",
      "payment_currency": [
        "CNY"
      ],
      "api_protocol": [
        "openai",
        "anthropic"
      ],
      "regions_available": [
        "cn"
      ],
      "name": "Coze",
      "status": "online",
      "models_count": 60
    },
    {
      "id": "p_azure_openai",
      "name_zh": "Azure OpenAI",
      "name_en": "Azure OpenAI Service",
      "type": "platform",
      "region": "global",
      "website": "https://azure.microsoft.com/en-us/products/ai-services/openai-service",
      "invoice_available": 1,
      "min_charge": 0,
      "sla_uptime": 99.9,
      "concurrent_rpm": 1000,
      "notes": "微软 Azure 上的 OpenAI 服务，需企业订阅",
      "payment_currency": [
        "USD"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "global"
      ],
      "name": "Azure OpenAI",
      "name_short": "Azure OpenAI",
      "status": "online",
      "rating": 4.1,
      "review_count": 1972,
      "tags": [
        "可开发票",
        "免费试用"
      ],
      "browse_count": 5921,
      "last_check_at": "2026-09-19",
      "compliance": [
        "发票",
        "GDPR"
      ],
      "signup_date": "2026-04-24",
      "models_count": 28
    },
    {
      "id": "p_bedrock",
      "name_zh": "AWS Bedrock",
      "name_en": "AWS Bedrock",
      "type": "platform",
      "region": "global",
      "website": "https://aws.amazon.com/bedrock",
      "invoice_available": 1,
      "min_charge": 0,
      "sla_uptime": 99.9,
      "concurrent_rpm": 2000,
      "notes": "AWS 托管的多种模型，含 Claude/Titan/Llama",
      "payment_currency": [
        "USD"
      ],
      "api_protocol": [
        "openai",
        "anthropic"
      ],
      "regions_available": [
        "global"
      ],
      "name": "AWS Bedrock",
      "name_short": "AWS Bedrock",
      "status": "online",
      "rating": 5,
      "review_count": 1938,
      "tags": [
        "可开发票",
        "免费试用"
      ],
      "browse_count": 23229,
      "last_check_at": "2026-09-16",
      "compliance": [
        "发票",
        "GDPR",
        "ISO27001"
      ],
      "signup_date": "2026-06-06",
      "models_count": 28
    },
    {
      "id": "p_vertex_ai",
      "name_zh": "Vertex AI",
      "name_en": "Google Cloud Vertex AI",
      "type": "platform",
      "region": "global",
      "website": "https://cloud.google.com/vertex-ai",
      "invoice_available": 1,
      "min_charge": 0,
      "sla_uptime": 99.9,
      "concurrent_rpm": 1000,
      "notes": "GCP 托管的模型，含 Gemini/Palm",
      "payment_currency": [
        "USD"
      ],
      "api_protocol": [
        "openai"
      ],
      "regions_available": [
        "global"
      ],
      "name": "Vertex AI",
      "name_short": "Vertex AI",
      "status": "online",
      "rating": 3.9,
      "review_count": 3151,
      "tags": [
        "可开发票",
        "免费试用"
      ],
      "browse_count": 35460,
      "last_check_at": "2026-09-19",
      "compliance": [
        "发票",
        "GDPR"
      ],
      "signup_date": "2026-02-24",
      "models_count": 28
    }
  ],
  "offerings": [
    {
      "model_id": "m_grok_4_fast",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 0.86,
      "output_usd_m": 2.58,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_grok_4_fast",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 1.12,
      "input_usd_m": 1.12,
      "output_usd_m": 3.36,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_grok_4_fast",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 1.1,
      "input_usd_m": 1.1,
      "output_usd_m": 3.3,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_grok_4_fast",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 0.85,
      "output_usd_m": 2.55,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_grok_4_fast",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.9,
      "output_usd_m": 2.7,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_deepseek_v4_pro",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.61,
      "input_usd_m": 0.61,
      "output_usd_m": 1.83,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_deepseek_v4_pro",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_deepseek_v4_pro",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 0.88,
      "output_usd_m": 2.64,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_deepseek_v4_pro",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 0.83,
      "output_usd_m": 2.49,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_deepseek_v4_pro",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 0.79,
      "output_usd_m": 2.37,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_deepseek_v4_pro",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.94,
      "input_usd_m": 0.94,
      "output_usd_m": 2.82,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_deepseek_v4_pro",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 0.81,
      "output_usd_m": 2.43,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_deepseek_v4_pro",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.55,
      "input_usd_m": 0.55,
      "output_usd_m": 1.65,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_deepseek_v4_pro",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 1.08,
      "input_usd_m": 1.08,
      "output_usd_m": 3.24,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_deepseek_v4_pro",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 0.87,
      "output_usd_m": 2.61,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_deepseek_v4_pro",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 1.02,
      "input_usd_m": 1.02,
      "output_usd_m": 3.06,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_deepseek_v4_pro",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 0.88,
      "output_usd_m": 2.64,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_deepseek_v4_pro",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.8,
      "output_usd_m": 2.4,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_deepseek_v4_flash",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.6,
      "input_usd_m": 0.6,
      "output_usd_m": 1.8,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_deepseek_v4_flash",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_mistral_large_4",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 1.64,
      "output_usd_m": 4.92,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_mistral_large_4",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 1.46,
      "output_usd_m": 4.38,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_mistral_large_4",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 2,
      "output_usd_m": 6,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_command_r_plus",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.75,
      "input_usd_m": 1.875,
      "output_usd_m": 7.5,
      "cache_read_usd_m": 0,
      "source_url": "https://www.together.ai"
    },
    {
      "model_id": "m_command_r_plus",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.59,
      "input_usd_m": 1.475,
      "output_usd_m": 5.9,
      "cache_read_usd_m": 0,
      "source_url": "https://fireworks.ai"
    },
    {
      "model_id": "m_command_r_plus",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.69,
      "input_usd_m": 1.725,
      "output_usd_m": 6.9,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_command_r_plus",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 2.625,
      "output_usd_m": 10.5,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_command_r_plus",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.68,
      "input_usd_m": 1.7,
      "output_usd_m": 6.8,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_command_r_plus",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 2.05,
      "output_usd_m": 8.2,
      "cache_read_usd_m": 0,
      "source_url": "https://portkey.ai"
    },
    {
      "model_id": "m_command_r_plus",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 2.225,
      "output_usd_m": 8.9,
      "cache_read_usd_m": 0,
      "source_url": "https://helicone.ai"
    },
    {
      "model_id": "m_command_r_plus",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.68,
      "input_usd_m": 1.7,
      "output_usd_m": 6.8,
      "cache_read_usd_m": 0,
      "source_url": "https://developers.cloudflare.com/ai-gateway"
    },
    {
      "model_id": "m_command_r_plus",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 2.075,
      "output_usd_m": 8.3,
      "cache_read_usd_m": 0,
      "source_url": "https://vercel.com/docs/ai-gateway"
    },
    {
      "model_id": "m_command_r_plus",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 1.675,
      "output_usd_m": 6.7,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_command_r_plus",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.93,
      "input_usd_m": 2.325,
      "output_usd_m": 9.3,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_command_r_plus",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 2.2,
      "output_usd_m": 8.8,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_command_r_plus",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 1.925,
      "output_usd_m": 7.7,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_command_r_plus",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 1.825,
      "output_usd_m": 7.3,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_command_r_plus",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.68,
      "input_usd_m": 1.7,
      "output_usd_m": 6.8,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_command_r_plus",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.68,
      "input_usd_m": 1.7,
      "output_usd_m": 6.8,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_command_r_plus",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.94,
      "input_usd_m": 2.35,
      "output_usd_m": 9.4,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_hunyuan_turbo",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 0.365,
      "output_usd_m": 1.095,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_hunyuan_turbo",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 0.39,
      "output_usd_m": 1.17,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_hunyuan_turbo",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.42,
      "output_usd_m": 1.26,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_hunyuan_turbo",
      "provider_id": "p_tencent_official",
      "is_official": 1,
      "multiplier": 1,
      "input_usd_m": 0.5,
      "output_usd_m": 1.5,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.tencent.com/product/hunyuan"
    },
    {
      "model_id": "m_hunyuan_turbo",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 0.395,
      "output_usd_m": 1.185,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_hunyuan_turbo",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 0.435,
      "output_usd_m": 1.305,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_hunyuan_turbo",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 0.525,
      "output_usd_m": 1.575,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_hunyuan_turbo",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.57,
      "input_usd_m": 0.285,
      "output_usd_m": 0.855,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_hunyuan_turbo",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.4,
      "output_usd_m": 1.2,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_llama_4_70b",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 0.231,
      "output_usd_m": 0.462,
      "cache_read_usd_m": 0,
      "source_url": "https://www.together.ai"
    },
    {
      "model_id": "m_llama_4_70b",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.27,
      "output_usd_m": 0.54,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_llama_4_70b",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 1.07,
      "input_usd_m": 0.321,
      "output_usd_m": 0.642,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_llama_4_70b",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.51,
      "input_usd_m": 0.153,
      "output_usd_m": 0.306,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_llama_4_70b",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.96,
      "input_usd_m": 0.288,
      "output_usd_m": 0.576,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_mistral_7b_v3",
      "provider_id": "p_mistral_official",
      "is_official": 1,
      "multiplier": 1,
      "input_usd_m": 0.05,
      "output_usd_m": 0.1,
      "cache_read_usd_m": 0,
      "source_url": "https://console.mistral.ai"
    },
    {
      "model_id": "m_mistral_7b_v3",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 0.036,
      "output_usd_m": 0.073,
      "cache_read_usd_m": 0,
      "source_url": "https://www.together.ai"
    },
    {
      "model_id": "m_mistral_7b_v3",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 0.041,
      "output_usd_m": 0.082,
      "cache_read_usd_m": 0,
      "source_url": "https://fireworks.ai"
    },
    {
      "model_id": "m_mistral_7b_v3",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 0.041,
      "output_usd_m": 0.082,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_mistral_7b_v3",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 0.053,
      "output_usd_m": 0.105,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_mistral_7b_v3",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 0.039,
      "output_usd_m": 0.078,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_mistral_7b_v3",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 0.044,
      "output_usd_m": 0.088,
      "cache_read_usd_m": 0,
      "source_url": "https://portkey.ai"
    },
    {
      "model_id": "m_mistral_7b_v3",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.93,
      "input_usd_m": 0.047,
      "output_usd_m": 0.093,
      "cache_read_usd_m": 0,
      "source_url": "https://helicone.ai"
    },
    {
      "model_id": "m_mistral_7b_v3",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.59,
      "input_usd_m": 0.029,
      "output_usd_m": 0.059,
      "cache_read_usd_m": 0,
      "source_url": "https://developers.cloudflare.com/ai-gateway"
    },
    {
      "model_id": "m_mistral_7b_v3",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 0.032,
      "output_usd_m": 0.064,
      "cache_read_usd_m": 0,
      "source_url": "https://vercel.com/docs/ai-gateway"
    },
    {
      "model_id": "m_mistral_7b_v3",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.56,
      "input_usd_m": 0.028,
      "output_usd_m": 0.056,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_mistral_7b_v3",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.045,
      "output_usd_m": 0.09,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_mistral_7b_v3",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 0.039,
      "output_usd_m": 0.077,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_mistral_7b_v3",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 0.046,
      "output_usd_m": 0.092,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_mistral_7b_v3",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 0.032,
      "output_usd_m": 0.064,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_mistral_7b_v3",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.58,
      "input_usd_m": 0.029,
      "output_usd_m": 0.058,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_minimax_m2_7",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 0.876,
      "output_usd_m": 3.504,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_step_3_5_flash",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.18,
      "output_usd_m": 0.72,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_step_3_5_flash",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.68,
      "input_usd_m": 0.136,
      "output_usd_m": 0.544,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_step_3_5_flash",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.178,
      "output_usd_m": 0.712,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_step_3_5_flash",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.72,
      "input_usd_m": 0.144,
      "output_usd_m": 0.576,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_step_3_5_flash",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.178,
      "output_usd_m": 0.712,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_mimo_v2_flash",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 0.3,
      "output_usd_m": 1.2,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_mimo_v2_flash",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.252,
      "output_usd_m": 1.008,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_mimo_v2_flash",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.7,
      "input_usd_m": 0.21,
      "output_usd_m": 0.84,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_mimo_v2_flash",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 0.246,
      "output_usd_m": 0.984,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_mimo_v2_flash",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.72,
      "input_usd_m": 0.216,
      "output_usd_m": 0.864,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_mimo_v2_flash",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 0.234,
      "output_usd_m": 0.936,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_claude_fable_5",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 0.81,
      "output_usd_m": 2.43,
      "cache_read_usd_m": 0,
      "source_url": "https://www.together.ai"
    },
    {
      "model_id": "m_claude_fable_5",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.56,
      "input_usd_m": 0.56,
      "output_usd_m": 1.68,
      "cache_read_usd_m": 0,
      "source_url": "https://fireworks.ai"
    },
    {
      "model_id": "m_claude_fable_5",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.66,
      "input_usd_m": 0.66,
      "output_usd_m": 1.98,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_claude_fable_5",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 0.64,
      "output_usd_m": 1.92,
      "cache_read_usd_m": 0,
      "source_url": "https://portkey.ai"
    },
    {
      "model_id": "m_claude_fable_5",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.84,
      "output_usd_m": 2.52,
      "cache_read_usd_m": 0,
      "source_url": "https://developers.cloudflare.com/ai-gateway"
    },
    {
      "model_id": "m_claude_fable_5",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 0.82,
      "output_usd_m": 2.46,
      "cache_read_usd_m": 0,
      "source_url": "https://vercel.com/docs/ai-gateway"
    },
    {
      "model_id": "m_claude_fable_5",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.91,
      "input_usd_m": 0.91,
      "output_usd_m": 2.73,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_claude_fable_5",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.58,
      "input_usd_m": 0.58,
      "output_usd_m": 1.74,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_claude_fable_5",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.72,
      "input_usd_m": 0.72,
      "output_usd_m": 2.16,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_claude_fable_5",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.56,
      "input_usd_m": 0.56,
      "output_usd_m": 1.68,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_claude_fable_5",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 0.64,
      "output_usd_m": 1.92,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_claude_fable_5",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.75,
      "input_usd_m": 0.75,
      "output_usd_m": 2.25,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_claude_fable_5",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.97,
      "input_usd_m": 0.97,
      "output_usd_m": 2.91,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_claude_fable_5",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.84,
      "output_usd_m": 2.52,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_claude_fable_5",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.99,
      "input_usd_m": 0.99,
      "output_usd_m": 2.97,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_claude_fable_5",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 0.82,
      "output_usd_m": 2.46,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_claude_fable_5",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.75,
      "input_usd_m": 0.75,
      "output_usd_m": 2.25,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_claude_opus_5",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 0.87,
      "output_usd_m": 2.61,
      "cache_read_usd_m": 0,
      "source_url": "https://fireworks.ai"
    },
    {
      "model_id": "m_claude_opus_5",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 0.83,
      "output_usd_m": 2.49,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_claude_opus_5",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.69,
      "input_usd_m": 0.69,
      "output_usd_m": 2.07,
      "cache_read_usd_m": 0,
      "source_url": "https://portkey.ai"
    },
    {
      "model_id": "m_claude_opus_5",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.61,
      "input_usd_m": 0.61,
      "output_usd_m": 1.83,
      "cache_read_usd_m": 0,
      "source_url": "https://helicone.ai"
    },
    {
      "model_id": "m_claude_opus_5",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.93,
      "input_usd_m": 0.93,
      "output_usd_m": 2.79,
      "cache_read_usd_m": 0,
      "source_url": "https://developers.cloudflare.com/ai-gateway"
    },
    {
      "model_id": "m_claude_opus_5",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.68,
      "input_usd_m": 0.68,
      "output_usd_m": 2.04,
      "cache_read_usd_m": 0,
      "source_url": "https://vercel.com/docs/ai-gateway"
    },
    {
      "model_id": "m_claude_opus_5",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.59,
      "input_usd_m": 0.59,
      "output_usd_m": 1.77,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_claude_opus_5",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.59,
      "input_usd_m": 0.59,
      "output_usd_m": 1.77,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_claude_opus_5",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.89,
      "output_usd_m": 2.67,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_claude_opus_5",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 0.79,
      "output_usd_m": 2.37,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_claude_opus_5",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 0.87,
      "output_usd_m": 2.61,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_claude_opus_5",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.84,
      "output_usd_m": 2.52,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_claude_opus_5",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.76,
      "input_usd_m": 0.76,
      "output_usd_m": 2.28,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_claude_opus_5",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 1.08,
      "input_usd_m": 1.08,
      "output_usd_m": 3.24,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_claude_opus_5",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 1,
      "output_usd_m": 3,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_claude_opus_5",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 1.09,
      "input_usd_m": 1.09,
      "output_usd_m": 3.27,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_claude_opus_5",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 0.73,
      "output_usd_m": 2.19,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_claude_opus_5",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 1.03,
      "input_usd_m": 1.03,
      "output_usd_m": 3.09,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_claude_sonnet_5",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.57,
      "input_usd_m": 0.57,
      "output_usd_m": 1.71,
      "cache_read_usd_m": 0,
      "source_url": "https://www.together.ai"
    },
    {
      "model_id": "m_claude_sonnet_5",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 0.64,
      "output_usd_m": 1.92,
      "cache_read_usd_m": 0,
      "source_url": "https://fireworks.ai"
    },
    {
      "model_id": "m_claude_sonnet_5",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_claude_sonnet_5",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 0.67,
      "output_usd_m": 2.01,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_claude_sonnet_5",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.58,
      "input_usd_m": 0.58,
      "output_usd_m": 1.74,
      "cache_read_usd_m": 0,
      "source_url": "https://portkey.ai"
    },
    {
      "model_id": "m_claude_fable_5",
      "provider_id": "p_anthropic_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 10,
      "output_usd_m": 50,
      "cache_read_usd_m": 1,
      "source_url": "https://console.anthropic.com"
    },
    {
      "model_id": "m_claude_fable_5",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.71,
      "input_usd_m": 7.1,
      "output_usd_m": 35.5,
      "cache_read_usd_m": 0.71,
      "source_url": ""
    },
    {
      "model_id": "m_claude_fable_5",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 8.5,
      "output_usd_m": 42.5,
      "cache_read_usd_m": 0.85,
      "source_url": ""
    },
    {
      "model_id": "m_claude_fable_5",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 8.3,
      "output_usd_m": 41.5,
      "cache_read_usd_m": 0.83,
      "source_url": ""
    },
    {
      "model_id": "m_claude_fable_5",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 8.9,
      "output_usd_m": 44.5,
      "cache_read_usd_m": 0.89,
      "source_url": ""
    },
    {
      "model_id": "m_claude_fable_5",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 6.7,
      "output_usd_m": 33.5,
      "cache_read_usd_m": 0.67,
      "source_url": ""
    },
    {
      "model_id": "m_claude_opus_5",
      "provider_id": "p_anthropic_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 5,
      "output_usd_m": 25,
      "cache_read_usd_m": 0.5,
      "source_url": "https://console.anthropic.com"
    },
    {
      "model_id": "m_claude_opus_5",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.71,
      "input_usd_m": 3.55,
      "output_usd_m": 17.75,
      "cache_read_usd_m": 0.355,
      "source_url": ""
    },
    {
      "model_id": "m_claude_opus_5",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 4.05,
      "output_usd_m": 20.25,
      "cache_read_usd_m": 0.405,
      "source_url": ""
    },
    {
      "model_id": "m_claude_opus_5",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 4,
      "output_usd_m": 20,
      "cache_read_usd_m": 0.4,
      "source_url": ""
    },
    {
      "model_id": "m_claude_opus_5",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 4.2,
      "output_usd_m": 21,
      "cache_read_usd_m": 0.42,
      "source_url": ""
    },
    {
      "model_id": "m_claude_sonnet_5",
      "provider_id": "p_anthropic_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 3,
      "output_usd_m": 15,
      "cache_read_usd_m": 0.3,
      "source_url": "https://console.anthropic.com"
    },
    {
      "model_id": "m_claude_sonnet_5",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 2.61,
      "output_usd_m": 13.05,
      "cache_read_usd_m": 0.261,
      "source_url": ""
    },
    {
      "model_id": "m_claude_sonnet_5",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.65,
      "input_usd_m": 1.95,
      "output_usd_m": 9.75,
      "cache_read_usd_m": 0.195,
      "source_url": ""
    },
    {
      "model_id": "m_claude_sonnet_5",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 2.61,
      "output_usd_m": 13.05,
      "cache_read_usd_m": 0.261,
      "source_url": ""
    },
    {
      "model_id": "m_claude_sonnet_5",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 2.52,
      "output_usd_m": 12.6,
      "cache_read_usd_m": 0.252,
      "source_url": ""
    },
    {
      "model_id": "m_claude_sonnet_5",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.74,
      "input_usd_m": 2.22,
      "output_usd_m": 11.1,
      "cache_read_usd_m": 0.222,
      "source_url": ""
    },
    {
      "model_id": "m_claude_opus_4_7",
      "provider_id": "p_anthropic_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 5,
      "output_usd_m": 25,
      "cache_read_usd_m": 0,
      "source_url": "https://console.anthropic.com"
    },
    {
      "model_id": "m_claude_opus_4_7",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.68,
      "input_usd_m": 3.4,
      "output_usd_m": 17,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_claude_opus_4_7",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.75,
      "input_usd_m": 3.75,
      "output_usd_m": 18.75,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_claude_opus_4_7",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.75,
      "input_usd_m": 3.75,
      "output_usd_m": 18.75,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gpt_5_6_sol",
      "provider_id": "p_openai_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 5,
      "output_usd_m": 30,
      "cache_read_usd_m": 0,
      "source_url": "https://platform.openai.com"
    },
    {
      "model_id": "m_gpt_5_6_sol",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 3.85,
      "output_usd_m": 23.1,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gpt_5_6_sol",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.68,
      "input_usd_m": 3.4,
      "output_usd_m": 20.4,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gpt_5_6_sol",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 4.5,
      "output_usd_m": 27,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gpt_5_6_sol",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 3.35,
      "output_usd_m": 20.1,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gpt_5_5",
      "provider_id": "p_openai_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 5,
      "output_usd_m": 30,
      "cache_read_usd_m": 0,
      "source_url": "https://platform.openai.com"
    },
    {
      "model_id": "m_gpt_5_5",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 3.35,
      "output_usd_m": 20.1,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gpt_5_5",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 4.15,
      "output_usd_m": 24.9,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gpt_5_5",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 4.3,
      "output_usd_m": 25.8,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gpt_5_5",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 4.6,
      "output_usd_m": 27.6,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gpt_5_5_pro",
      "provider_id": "p_openai_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 30,
      "output_usd_m": 180,
      "cache_read_usd_m": 0,
      "source_url": "https://platform.openai.com"
    },
    {
      "model_id": "m_gpt_5_5_pro",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 23.1,
      "output_usd_m": 138.6,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gpt_5_5_pro",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 26.4,
      "output_usd_m": 158.4,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gpt_5_5_pro",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.69,
      "input_usd_m": 20.7,
      "output_usd_m": 124.2,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gpt_5_2",
      "provider_id": "p_openai_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 1.75,
      "output_usd_m": 14,
      "cache_read_usd_m": 0,
      "source_url": "https://platform.openai.com"
    },
    {
      "model_id": "m_gpt_5_2",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 1.575,
      "output_usd_m": 12.6,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gpt_5_2",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 1.435,
      "output_usd_m": 11.48,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gpt_5_2",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 1.4175,
      "output_usd_m": 11.34,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gpt_5_2",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.7,
      "input_usd_m": 1.225,
      "output_usd_m": 9.8,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gemini_3_1_pro",
      "provider_id": "p_google_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 2,
      "output_usd_m": 12,
      "cache_read_usd_m": 0,
      "source_url": "https://aistudio.google.com"
    },
    {
      "model_id": "m_gemini_3_1_pro",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 1.84,
      "output_usd_m": 11.04,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gemini_3_1_pro",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 1.64,
      "output_usd_m": 9.84,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gemini_3_1_pro",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 1.6,
      "output_usd_m": 9.6,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gemini_3_1_pro",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 1.66,
      "output_usd_m": 9.96,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gemini_3_1_pro",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 1.76,
      "output_usd_m": 10.56,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gemini_3_5_flash",
      "provider_id": "p_google_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 1.5,
      "output_usd_m": 9,
      "cache_read_usd_m": 0,
      "source_url": "https://aistudio.google.com"
    },
    {
      "model_id": "m_gemini_3_5_flash",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 1.305,
      "output_usd_m": 7.83,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gemini_3_5_flash",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.76,
      "input_usd_m": 1.14,
      "output_usd_m": 6.84,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gemini_3_5_flash",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 1.005,
      "output_usd_m": 6.03,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gemini_3_flash_preview",
      "provider_id": "p_google_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 0.5,
      "output_usd_m": 3,
      "cache_read_usd_m": 0,
      "source_url": "https://aistudio.google.com"
    },
    {
      "model_id": "m_gemini_3_flash_preview",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.445,
      "output_usd_m": 2.67,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gemini_3_flash_preview",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 0.41,
      "output_usd_m": 2.46,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gemini_3_flash_preview",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.69,
      "input_usd_m": 0.345,
      "output_usd_m": 2.07,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gemini_3_flash_preview",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.69,
      "input_usd_m": 0.345,
      "output_usd_m": 2.07,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_gemini_3_flash_preview",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 0.425,
      "output_usd_m": 2.55,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_grok_4_3",
      "provider_id": "p_xai_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 1.25,
      "output_usd_m": 2.5,
      "cache_read_usd_m": 0,
      "source_url": "https://console.x.ai"
    },
    {
      "model_id": "m_grok_4_3",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.76,
      "input_usd_m": 0.95,
      "output_usd_m": 1.9,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_grok_4_3",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.71,
      "input_usd_m": 0.8875,
      "output_usd_m": 1.775,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_grok_4_3",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 1.15,
      "output_usd_m": 2.3,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_grok_4_3",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 0.9875,
      "output_usd_m": 1.975,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_grok_4_3",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 0.8375,
      "output_usd_m": 1.675,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_grok_4_fast",
      "provider_id": "p_xai_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 0.5,
      "output_usd_m": 1.5,
      "cache_read_usd_m": 0,
      "source_url": "https://console.x.ai"
    },
    {
      "model_id": "m_grok_4_fast",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.69,
      "input_usd_m": 0.345,
      "output_usd_m": 1.035,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_grok_4_fast",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 0.415,
      "output_usd_m": 1.245,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_grok_4_fast",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 0.405,
      "output_usd_m": 1.215,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_deepseek_v4_pro",
      "provider_id": "p_deepseek_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 0.435,
      "output_usd_m": 0.87,
      "cache_read_usd_m": 0.028,
      "source_url": "https://platform.deepseek.com"
    },
    {
      "model_id": "m_deepseek_v4_pro",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.72,
      "input_usd_m": 0.3132,
      "output_usd_m": 0.6264,
      "cache_read_usd_m": 0.0202,
      "source_url": ""
    },
    {
      "model_id": "m_deepseek_v4_pro",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.348,
      "output_usd_m": 0.696,
      "cache_read_usd_m": 0.0224,
      "source_url": ""
    },
    {
      "model_id": "m_deepseek_v4_pro",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.3915,
      "output_usd_m": 0.783,
      "cache_read_usd_m": 0.0252,
      "source_url": ""
    },
    {
      "model_id": "m_deepseek_v4_pro",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 0.361,
      "output_usd_m": 0.7221,
      "cache_read_usd_m": 0.0232,
      "source_url": ""
    },
    {
      "model_id": "m_deepseek_v4_flash",
      "provider_id": "p_deepseek_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 0.14,
      "output_usd_m": 0.28,
      "cache_read_usd_m": 0.0028,
      "source_url": "https://platform.deepseek.com"
    },
    {
      "model_id": "m_deepseek_v4_flash",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.74,
      "input_usd_m": 0.1036,
      "output_usd_m": 0.2072,
      "cache_read_usd_m": 0.0021,
      "source_url": ""
    },
    {
      "model_id": "m_deepseek_v4_flash",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 0.1022,
      "output_usd_m": 0.2044,
      "cache_read_usd_m": 0.002,
      "source_url": ""
    },
    {
      "model_id": "m_deepseek_v4_flash",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.69,
      "input_usd_m": 0.0966,
      "output_usd_m": 0.1932,
      "cache_read_usd_m": 0.0019,
      "source_url": ""
    },
    {
      "model_id": "m_deepseek_v3_2",
      "provider_id": "p_deepseek_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 0.27,
      "output_usd_m": 1.1,
      "cache_read_usd_m": 0,
      "source_url": "https://platform.deepseek.com"
    },
    {
      "model_id": "m_deepseek_v3_2",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.7,
      "input_usd_m": 0.189,
      "output_usd_m": 0.77,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_deepseek_v3_2",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.243,
      "output_usd_m": 0.99,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_deepseek_v3_2",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.2403,
      "output_usd_m": 0.979,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_deepseek_r1",
      "provider_id": "p_deepseek_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 0.55,
      "output_usd_m": 2.19,
      "cache_read_usd_m": 0,
      "source_url": "https://platform.deepseek.com"
    },
    {
      "model_id": "m_deepseek_r1",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.69,
      "input_usd_m": 0.3795,
      "output_usd_m": 1.5111,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_deepseek_r1",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.91,
      "input_usd_m": 0.5005,
      "output_usd_m": 1.9929,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_deepseek_r1",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.495,
      "output_usd_m": 1.971,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_deepseek_r1",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.495,
      "output_usd_m": 1.971,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_qwen3_8_max",
      "provider_id": "p_qwen_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 2,
      "output_usd_m": 6,
      "cache_read_usd_m": 0,
      "source_url": "https://bailian.console.aliyun.com"
    },
    {
      "model_id": "m_qwen3_8_max",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 1.78,
      "output_usd_m": 5.34,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_qwen3_8_max",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 1.74,
      "output_usd_m": 5.22,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_qwen3_8_max",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 1.46,
      "output_usd_m": 4.38,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_qwen3_8_max",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 1.34,
      "output_usd_m": 4.02,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_qwen3_8_max",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 1.78,
      "output_usd_m": 5.34,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_qwen3_7_max",
      "provider_id": "p_qwen_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 2.5,
      "output_usd_m": 7.5,
      "cache_read_usd_m": 0,
      "source_url": "https://bailian.console.aliyun.com"
    },
    {
      "model_id": "m_qwen3_7_max",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 2.175,
      "output_usd_m": 6.525,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_qwen3_7_max",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.91,
      "input_usd_m": 2.275,
      "output_usd_m": 6.825,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_qwen3_7_max",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 1.975,
      "output_usd_m": 5.925,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_qwen3_6_max_preview",
      "provider_id": "p_qwen_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 1.04,
      "output_usd_m": 6.24,
      "cache_read_usd_m": 0,
      "source_url": "https://bailian.console.aliyun.com"
    },
    {
      "model_id": "m_qwen3_6_max_preview",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.91,
      "input_usd_m": 0.9464,
      "output_usd_m": 5.6784,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_qwen3_6_max_preview",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.69,
      "input_usd_m": 0.7176,
      "output_usd_m": 4.3056,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_qwen3_6_max_preview",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 0.8216,
      "output_usd_m": 4.9296,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_qwen3_8_flash",
      "provider_id": "p_qwen_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 0.188,
      "output_usd_m": 1.5,
      "cache_read_usd_m": 0,
      "source_url": "https://bailian.console.aliyun.com"
    },
    {
      "model_id": "m_qwen3_8_flash",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.1579,
      "output_usd_m": 1.26,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_qwen3_8_flash",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.1579,
      "output_usd_m": 1.26,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_qwen3_8_flash",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.76,
      "input_usd_m": 0.1429,
      "output_usd_m": 1.14,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_qwen3_8_flash",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 0.156,
      "output_usd_m": 1.245,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_qwen3_8_flash",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.75,
      "input_usd_m": 0.141,
      "output_usd_m": 1.125,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_glm_5_2",
      "provider_id": "p_zhipu_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 1.4,
      "output_usd_m": 4.4,
      "cache_read_usd_m": 0,
      "source_url": "https://bigmodel.cn"
    },
    {
      "model_id": "m_glm_5_2",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.74,
      "input_usd_m": 1.036,
      "output_usd_m": 3.256,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_glm_5_2",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 1.134,
      "output_usd_m": 3.564,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_glm_5_2",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.71,
      "input_usd_m": 0.994,
      "output_usd_m": 3.124,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_glm_5_2",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.71,
      "input_usd_m": 0.994,
      "output_usd_m": 3.124,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_glm_5_2",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 0.938,
      "output_usd_m": 2.948,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_glm_5_1",
      "provider_id": "p_zhipu_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 1.2,
      "output_usd_m": 4,
      "cache_read_usd_m": 0,
      "source_url": "https://bigmodel.cn"
    },
    {
      "model_id": "m_glm_5_1",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 0.804,
      "output_usd_m": 2.68,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_glm_5_1",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.71,
      "input_usd_m": 0.852,
      "output_usd_m": 2.84,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_glm_5_1",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 0.996,
      "output_usd_m": 3.32,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_glm_5_1",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 0.71,
      "input_usd_m": 0.852,
      "output_usd_m": 2.84,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_glm_5_1",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.69,
      "input_usd_m": 0.828,
      "output_usd_m": 2.76,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_glm_4_6v",
      "provider_id": "p_zhipu_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 0.9,
      "output_usd_m": 3,
      "cache_read_usd_m": 0,
      "source_url": "https://bigmodel.cn"
    },
    {
      "model_id": "m_glm_4_6v",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.7,
      "input_usd_m": 0.63,
      "output_usd_m": 2.1,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_glm_4_6v",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.68,
      "input_usd_m": 0.612,
      "output_usd_m": 2.04,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_glm_4_6v",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 0.693,
      "output_usd_m": 2.31,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_glm_4_6v",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.76,
      "input_usd_m": 0.684,
      "output_usd_m": 2.28,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_glm_4_6v",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 0.702,
      "output_usd_m": 2.34,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_kimi_k3",
      "provider_id": "p_moonshot_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 3,
      "output_usd_m": 15,
      "cache_read_usd_m": 0,
      "source_url": "https://platform.moonshot.cn"
    },
    {
      "model_id": "m_kimi_k3",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 2.01,
      "output_usd_m": 10.05,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_kimi_k3",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 2.55,
      "output_usd_m": 12.75,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_kimi_k3",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 2.61,
      "output_usd_m": 13.05,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_kimi_k3",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.68,
      "input_usd_m": 2.04,
      "output_usd_m": 10.2,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_kimi_k3",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.7,
      "input_usd_m": 2.1,
      "output_usd_m": 10.5,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_kimi_k2_6",
      "provider_id": "p_moonshot_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 0.95,
      "output_usd_m": 4,
      "cache_read_usd_m": 0,
      "source_url": "https://platform.moonshot.cn"
    },
    {
      "model_id": "m_kimi_k2_6",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 0.7315,
      "output_usd_m": 3.08,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_kimi_k2_6",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.8455,
      "output_usd_m": 3.56,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_kimi_k2_6",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 0.6365,
      "output_usd_m": 2.68,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_kimi_k2_6",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 0.8265,
      "output_usd_m": 3.48,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_kimi_k2_6",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 0.836,
      "output_usd_m": 3.52,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_doubao_seed_2_pro",
      "provider_id": "p_doubao_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 1.5,
      "output_usd_m": 8,
      "cache_read_usd_m": 0,
      "source_url": "https://www.volcengine.com/product/doubao"
    },
    {
      "model_id": "m_doubao_seed_2_pro",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 1.32,
      "output_usd_m": 7.04,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_doubao_seed_2_pro",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.91,
      "input_usd_m": 1.365,
      "output_usd_m": 7.28,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_doubao_seed_2_pro",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 1.35,
      "output_usd_m": 7.2,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_doubao_seed_2_lite",
      "provider_id": "p_doubao_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 0.3,
      "output_usd_m": 1.5,
      "cache_read_usd_m": 0,
      "source_url": "https://www.volcengine.com/product/doubao"
    },
    {
      "model_id": "m_doubao_seed_2_lite",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 0.234,
      "output_usd_m": 1.17,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_doubao_seed_2_lite",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 0.264,
      "output_usd_m": 1.32,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_doubao_seed_2_lite",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.267,
      "output_usd_m": 1.335,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_ernie_5_1",
      "provider_id": "p_baidu_qianfan",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 0.8,
      "output_usd_m": 3.2,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.baidu.com/product/qianfan"
    },
    {
      "model_id": "m_ernie_5_1",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.72,
      "input_usd_m": 0.576,
      "output_usd_m": 2.304,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_ernie_5_1",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 0.688,
      "output_usd_m": 2.752,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_ernie_5_1",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 0.616,
      "output_usd_m": 2.464,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_llama_4_maverick",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 0.6,
      "output_usd_m": 2.4,
      "cache_read_usd_m": 0,
      "source_url": "https://www.together.ai"
    },
    {
      "model_id": "m_llama_4_maverick",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.71,
      "input_usd_m": 0.426,
      "output_usd_m": 1.704,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_llama_4_maverick",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 0.402,
      "output_usd_m": 1.608,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_llama_4_maverick",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 0.51,
      "output_usd_m": 2.04,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_llama_4_maverick",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 0.402,
      "output_usd_m": 1.608,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_llama_4_scout",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 0.316,
      "output_usd_m": 1.264,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_llama_4_scout",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 0.352,
      "output_usd_m": 1.408,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_llama_4_scout",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.69,
      "input_usd_m": 0.276,
      "output_usd_m": 1.104,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_llama_4_scout",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.91,
      "input_usd_m": 0.364,
      "output_usd_m": 1.456,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_mistral_large_3",
      "provider_id": "p_mistral_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 1.5,
      "output_usd_m": 7.5,
      "cache_read_usd_m": 0,
      "source_url": "https://console.mistral.ai"
    },
    {
      "model_id": "m_mistral_large_3",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 1.005,
      "output_usd_m": 5.025,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_mistral_large_3",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 1.32,
      "output_usd_m": 6.6,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_mistral_large_3",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.76,
      "input_usd_m": 1.14,
      "output_usd_m": 5.7,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_mistral_medium_3_5",
      "provider_id": "p_mistral_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 1.5,
      "output_usd_m": 7.5,
      "cache_read_usd_m": 0,
      "source_url": "https://console.mistral.ai"
    },
    {
      "model_id": "m_mistral_medium_3_5",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 1.005,
      "output_usd_m": 5.025,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_mistral_medium_3_5",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 1.245,
      "output_usd_m": 6.225,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_mistral_medium_3_5",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 1.2,
      "output_usd_m": 6,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_mistral_medium_3_5",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 0.74,
      "input_usd_m": 1.11,
      "output_usd_m": 5.55,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_mistral_medium_3_5",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.72,
      "input_usd_m": 1.08,
      "output_usd_m": 5.4,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_devstral_2",
      "provider_id": "p_mistral_official",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 2,
      "output_usd_m": 8,
      "cache_read_usd_m": 0,
      "source_url": "https://console.mistral.ai"
    },
    {
      "model_id": "m_devstral_2",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 1.66,
      "output_usd_m": 6.64,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_devstral_2",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 1.46,
      "output_usd_m": 5.84,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_devstral_2",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.74,
      "input_usd_m": 1.48,
      "output_usd_m": 5.92,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_devstral_2",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 1.7,
      "output_usd_m": 6.8,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_devstral_2",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 1.34,
      "output_usd_m": 5.36,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_minimax_m3",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 0.5,
      "output_usd_m": 2.5,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_minimax_m3",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 0.395,
      "output_usd_m": 1.975,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_minimax_m3",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.69,
      "input_usd_m": 0.345,
      "output_usd_m": 1.725,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_minimax_m3",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.74,
      "input_usd_m": 0.37,
      "output_usd_m": 1.85,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_minimax_m3",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 0.335,
      "output_usd_m": 1.675,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_minimax_m2_7",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 1.2,
      "output_usd_m": 4.8,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_minimax_m2_7",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 0.924,
      "output_usd_m": 3.696,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_minimax_m2_7",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.96,
      "output_usd_m": 3.84,
      "cache_read_usd_m": 0,
      "source_url": ""
    },
    {
      "model_id": "m_deepseek_v4_flash",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.59,
      "input_usd_m": 0.59,
      "output_usd_m": 1.77,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_deepseek_v4_flash",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 0.77,
      "output_usd_m": 2.31,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_deepseek_v4_flash",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.66,
      "input_usd_m": 0.66,
      "output_usd_m": 1.98,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_deepseek_v4_flash",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 0.79,
      "output_usd_m": 2.37,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_deepseek_v4_flash",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.84,
      "output_usd_m": 2.52,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_deepseek_v4_flash",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.63,
      "input_usd_m": 0.63,
      "output_usd_m": 1.89,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_deepseek_v4_flash",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 1,
      "output_usd_m": 3,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_deepseek_v4_flash",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 0.86,
      "output_usd_m": 2.58,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_deepseek_v4_flash",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.95,
      "input_usd_m": 0.95,
      "output_usd_m": 2.85,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_deepseek_v4_flash",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 0.86,
      "output_usd_m": 2.58,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_deepseek_v4_flash",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 1.09,
      "input_usd_m": 1.09,
      "output_usd_m": 3.27,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_deepseek_v3_2",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.59,
      "input_usd_m": 0.59,
      "output_usd_m": 1.77,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_deepseek_v3_2",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_deepseek_v3_2",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.72,
      "input_usd_m": 0.72,
      "output_usd_m": 2.16,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_deepseek_v3_2",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.66,
      "input_usd_m": 0.66,
      "output_usd_m": 1.98,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_deepseek_v3_2",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.55,
      "input_usd_m": 0.55,
      "output_usd_m": 1.65,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_deepseek_v3_2",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 0.86,
      "output_usd_m": 2.58,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_deepseek_v3_2",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.8,
      "output_usd_m": 2.4,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_deepseek_v3_2",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.65,
      "input_usd_m": 0.65,
      "output_usd_m": 1.95,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_deepseek_v3_2",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_deepseek_v3_2",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.97,
      "input_usd_m": 0.97,
      "output_usd_m": 2.91,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_deepseek_v3_2",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 0.92,
      "output_usd_m": 2.76,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_deepseek_v3_2",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.5,
      "input_usd_m": 0.5,
      "output_usd_m": 1.5,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_deepseek_v3_2",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 0.78,
      "output_usd_m": 2.34,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_deepseek_r1",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.9,
      "output_usd_m": 2.7,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_deepseek_r1",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_deepseek_r1",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.91,
      "input_usd_m": 0.91,
      "output_usd_m": 2.73,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_deepseek_r1",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 0.77,
      "output_usd_m": 2.31,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_deepseek_r1",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 0.88,
      "output_usd_m": 2.64,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_deepseek_r1",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 0.78,
      "output_usd_m": 2.34,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_deepseek_r1",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.61,
      "input_usd_m": 0.61,
      "output_usd_m": 1.83,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_deepseek_r1",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.6,
      "input_usd_m": 0.6,
      "output_usd_m": 1.8,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_deepseek_r1",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 0.67,
      "output_usd_m": 2.01,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_deepseek_r1",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.91,
      "input_usd_m": 0.91,
      "output_usd_m": 2.73,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_deepseek_r1",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 1.07,
      "input_usd_m": 1.07,
      "output_usd_m": 3.21,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_deepseek_r1",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 1.09,
      "input_usd_m": 1.09,
      "output_usd_m": 3.27,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_deepseek_r1",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 1.11,
      "input_usd_m": 1.11,
      "output_usd_m": 3.33,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_deepseek_r1",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.58,
      "input_usd_m": 0.58,
      "output_usd_m": 1.74,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_deepseek_r1",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 0.85,
      "output_usd_m": 2.55,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_qwen3_8_max",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.59,
      "input_usd_m": 0.59,
      "output_usd_m": 1.77,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_qwen3_8_max",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 0.86,
      "output_usd_m": 2.58,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_qwen3_8_max",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.9,
      "output_usd_m": 2.7,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_qwen3_8_max",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.71,
      "input_usd_m": 0.71,
      "output_usd_m": 2.13,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_qwen3_8_max",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.8,
      "output_usd_m": 2.4,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_qwen3_8_max",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.61,
      "input_usd_m": 0.61,
      "output_usd_m": 1.83,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_qwen3_8_max",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 0.92,
      "output_usd_m": 2.76,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_qwen3_8_max",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.9,
      "output_usd_m": 2.7,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_qwen3_8_max",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.94,
      "input_usd_m": 0.94,
      "output_usd_m": 2.82,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_qwen3_8_max",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 1.07,
      "input_usd_m": 1.07,
      "output_usd_m": 3.21,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_qwen3_8_max",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 1.1,
      "input_usd_m": 1.1,
      "output_usd_m": 3.3,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_qwen3_8_max",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.76,
      "input_usd_m": 0.76,
      "output_usd_m": 2.28,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_qwen3_8_max",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 0.79,
      "output_usd_m": 2.37,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_qwen3_8_max",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 0.88,
      "output_usd_m": 2.64,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_qwen3_7_max",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 0.92,
      "output_usd_m": 2.76,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_qwen3_7_max",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_qwen3_7_max",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 0.87,
      "output_usd_m": 2.61,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_qwen3_7_max",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.9,
      "output_usd_m": 2.7,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_qwen3_7_max",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 0.87,
      "output_usd_m": 2.61,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_qwen3_7_max",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.66,
      "input_usd_m": 0.66,
      "output_usd_m": 1.98,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_qwen3_7_max",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 0.86,
      "output_usd_m": 2.58,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_qwen3_7_max",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.59,
      "input_usd_m": 0.59,
      "output_usd_m": 1.77,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_qwen3_7_max",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.9,
      "output_usd_m": 2.7,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_qwen3_7_max",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.89,
      "output_usd_m": 2.67,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_qwen3_7_max",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.84,
      "output_usd_m": 2.52,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_qwen3_7_max",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 1.08,
      "input_usd_m": 1.08,
      "output_usd_m": 3.24,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_qwen3_7_max",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.93,
      "input_usd_m": 0.93,
      "output_usd_m": 2.79,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_qwen3_7_max",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.62,
      "input_usd_m": 0.62,
      "output_usd_m": 1.86,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_qwen3_7_max",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 1.07,
      "input_usd_m": 1.07,
      "output_usd_m": 3.21,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_qwen3_6_max_preview",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 0.64,
      "output_usd_m": 1.92,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_qwen3_6_max_preview",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_qwen3_6_max_preview",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.56,
      "input_usd_m": 0.56,
      "output_usd_m": 1.68,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_qwen3_6_max_preview",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.63,
      "input_usd_m": 0.63,
      "output_usd_m": 1.89,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_qwen3_6_max_preview",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.68,
      "input_usd_m": 0.68,
      "output_usd_m": 2.04,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_qwen3_6_max_preview",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.9,
      "output_usd_m": 2.7,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_qwen3_6_max_preview",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.94,
      "input_usd_m": 0.94,
      "output_usd_m": 2.82,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_qwen3_6_max_preview",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.66,
      "input_usd_m": 0.66,
      "output_usd_m": 1.98,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_qwen3_6_max_preview",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 0.81,
      "output_usd_m": 2.43,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_qwen3_6_max_preview",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.71,
      "input_usd_m": 0.71,
      "output_usd_m": 2.13,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_qwen3_6_max_preview",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 1.14,
      "input_usd_m": 1.14,
      "output_usd_m": 3.42,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_qwen3_6_max_preview",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.96,
      "input_usd_m": 0.96,
      "output_usd_m": 2.88,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_qwen3_6_max_preview",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 1.13,
      "input_usd_m": 1.13,
      "output_usd_m": 3.39,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_qwen3_6_max_preview",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.55,
      "input_usd_m": 0.55,
      "output_usd_m": 1.65,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_qwen3_6_max_preview",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 1.14,
      "input_usd_m": 1.14,
      "output_usd_m": 3.42,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_qwen3_8_flash",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_qwen3_8_flash",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.62,
      "input_usd_m": 0.62,
      "output_usd_m": 1.86,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_qwen3_8_flash",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.94,
      "input_usd_m": 0.94,
      "output_usd_m": 2.82,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_qwen3_8_flash",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.66,
      "input_usd_m": 0.66,
      "output_usd_m": 1.98,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_qwen3_8_flash",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.59,
      "input_usd_m": 0.59,
      "output_usd_m": 1.77,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_qwen3_8_flash",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.72,
      "input_usd_m": 0.72,
      "output_usd_m": 2.16,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_qwen3_8_flash",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 1.04,
      "input_usd_m": 1.04,
      "output_usd_m": 3.12,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_qwen3_8_flash",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 0.88,
      "output_usd_m": 2.64,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_qwen3_8_flash",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.99,
      "input_usd_m": 0.99,
      "output_usd_m": 2.97,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_qwen3_8_flash",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.7,
      "input_usd_m": 0.7,
      "output_usd_m": 2.1,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_qwen3_8_flash",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.9,
      "output_usd_m": 2.7,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_glm_5_2",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_glm_5_2",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 0.78,
      "output_usd_m": 2.34,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_glm_5_2",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.65,
      "input_usd_m": 0.65,
      "output_usd_m": 1.95,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_glm_5_2",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 0.83,
      "output_usd_m": 2.49,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_glm_5_2",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.55,
      "input_usd_m": 0.55,
      "output_usd_m": 1.65,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_glm_5_2",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 0.92,
      "output_usd_m": 2.76,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_glm_5_2",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 0.77,
      "output_usd_m": 2.31,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_glm_5_2",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 1.04,
      "input_usd_m": 1.04,
      "output_usd_m": 3.12,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_glm_5_2",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_glm_5_2",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 1.02,
      "input_usd_m": 1.02,
      "output_usd_m": 3.06,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_glm_5_2",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.65,
      "input_usd_m": 0.65,
      "output_usd_m": 1.95,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_glm_5_2",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 0.78,
      "output_usd_m": 2.34,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_glm_5_1",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 0.82,
      "output_usd_m": 2.46,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_glm_5_1",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.68,
      "input_usd_m": 0.68,
      "output_usd_m": 2.04,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_glm_5_1",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.68,
      "input_usd_m": 0.68,
      "output_usd_m": 2.04,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_glm_5_1",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.89,
      "output_usd_m": 2.67,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_glm_5_1",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.84,
      "output_usd_m": 2.52,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_glm_5_1",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 0.67,
      "output_usd_m": 2.01,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_glm_5_1",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 0.67,
      "output_usd_m": 2.01,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_glm_5_1",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.71,
      "input_usd_m": 0.71,
      "output_usd_m": 2.13,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_glm_5_1",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.91,
      "input_usd_m": 0.91,
      "output_usd_m": 2.73,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_glm_5_1",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 0.87,
      "output_usd_m": 2.61,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_glm_5_1",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.8,
      "output_usd_m": 2.4,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_glm_5_1",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 0.67,
      "output_usd_m": 2.01,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_glm_5_1",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 1.13,
      "input_usd_m": 1.13,
      "output_usd_m": 3.39,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_glm_4_6v",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_glm_4_6v",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 0.82,
      "output_usd_m": 2.46,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_glm_4_6v",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.91,
      "input_usd_m": 0.91,
      "output_usd_m": 2.73,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_glm_4_6v",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.8,
      "output_usd_m": 2.4,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_glm_4_6v",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 0.67,
      "output_usd_m": 2.01,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_glm_4_6v",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 0.77,
      "output_usd_m": 2.31,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_glm_4_6v",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.55,
      "input_usd_m": 0.55,
      "output_usd_m": 1.65,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_glm_4_6v",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.66,
      "input_usd_m": 0.66,
      "output_usd_m": 1.98,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_glm_4_6v",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 0.92,
      "output_usd_m": 2.76,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_glm_4_6v",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.98,
      "input_usd_m": 0.98,
      "output_usd_m": 2.94,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_glm_4_6v",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 1.01,
      "input_usd_m": 1.01,
      "output_usd_m": 3.03,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_glm_4_6v",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.69,
      "input_usd_m": 0.69,
      "output_usd_m": 2.07,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_glm_4_6v",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.93,
      "input_usd_m": 0.93,
      "output_usd_m": 2.79,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_kimi_k3",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 0.64,
      "output_usd_m": 1.92,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_kimi_k3",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_kimi_k3",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.74,
      "input_usd_m": 0.74,
      "output_usd_m": 2.22,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_kimi_k3",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.91,
      "input_usd_m": 0.91,
      "output_usd_m": 2.73,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_kimi_k3",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 0.87,
      "output_usd_m": 2.61,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_kimi_k3",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.62,
      "input_usd_m": 0.62,
      "output_usd_m": 1.86,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_kimi_k3",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.58,
      "input_usd_m": 0.58,
      "output_usd_m": 1.74,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_kimi_k3",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.96,
      "input_usd_m": 0.96,
      "output_usd_m": 2.88,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_kimi_k3",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 1,
      "output_usd_m": 3,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_kimi_k3",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 0.88,
      "output_usd_m": 2.64,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_kimi_k3",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 0.83,
      "output_usd_m": 2.49,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_kimi_k3",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_kimi_k2_6",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 0.82,
      "output_usd_m": 2.46,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_kimi_k2_6",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_kimi_k2_6",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 0.64,
      "output_usd_m": 1.92,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_kimi_k2_6",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.63,
      "input_usd_m": 0.63,
      "output_usd_m": 1.89,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_kimi_k2_6",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.56,
      "input_usd_m": 0.56,
      "output_usd_m": 1.68,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_kimi_k2_6",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.65,
      "input_usd_m": 0.65,
      "output_usd_m": 1.95,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_kimi_k2_6",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.74,
      "input_usd_m": 0.74,
      "output_usd_m": 2.22,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_kimi_k2_6",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.89,
      "output_usd_m": 2.67,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_kimi_k2_6",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.58,
      "input_usd_m": 0.58,
      "output_usd_m": 1.74,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_kimi_k2_6",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 0.92,
      "output_usd_m": 2.76,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_kimi_k2_6",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 1,
      "output_usd_m": 3,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_kimi_k2_6",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 0.83,
      "output_usd_m": 2.49,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_kimi_k2_6",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 0.78,
      "output_usd_m": 2.34,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_kimi_k2_6",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.95,
      "input_usd_m": 0.95,
      "output_usd_m": 2.85,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_doubao_seed_2_pro",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.65,
      "input_usd_m": 0.65,
      "output_usd_m": 1.95,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_doubao_seed_2_pro",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_doubao_seed_2_pro",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 0.81,
      "output_usd_m": 2.43,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_doubao_seed_2_pro",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.55,
      "input_usd_m": 0.55,
      "output_usd_m": 1.65,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_doubao_seed_2_pro",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 0.85,
      "output_usd_m": 2.55,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_doubao_seed_2_pro",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 0.86,
      "output_usd_m": 2.58,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_doubao_seed_2_pro",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.59,
      "input_usd_m": 0.59,
      "output_usd_m": 1.77,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_doubao_seed_2_pro",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.72,
      "input_usd_m": 0.72,
      "output_usd_m": 2.16,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_doubao_seed_2_pro",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.62,
      "input_usd_m": 0.62,
      "output_usd_m": 1.86,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_doubao_seed_2_pro",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 1.13,
      "input_usd_m": 1.13,
      "output_usd_m": 3.39,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_doubao_seed_2_pro",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.96,
      "input_usd_m": 0.96,
      "output_usd_m": 2.88,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_doubao_seed_2_pro",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 0.77,
      "output_usd_m": 2.31,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_doubao_seed_2_pro",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.6,
      "input_usd_m": 0.6,
      "output_usd_m": 1.8,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_doubao_seed_2_pro",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 1.09,
      "input_usd_m": 1.09,
      "output_usd_m": 3.27,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_doubao_seed_2_lite",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 0.73,
      "output_usd_m": 2.19,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_doubao_seed_2_lite",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_doubao_seed_2_lite",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 0.87,
      "output_usd_m": 2.61,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_doubao_seed_2_lite",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 0.82,
      "output_usd_m": 2.46,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_doubao_seed_2_lite",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.95,
      "input_usd_m": 0.95,
      "output_usd_m": 2.85,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_doubao_seed_2_lite",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 0.79,
      "output_usd_m": 2.37,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_doubao_seed_2_lite",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.93,
      "input_usd_m": 0.93,
      "output_usd_m": 2.79,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_doubao_seed_2_lite",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.91,
      "input_usd_m": 0.91,
      "output_usd_m": 2.73,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_doubao_seed_2_lite",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.8,
      "output_usd_m": 2.4,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_doubao_seed_2_lite",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.84,
      "output_usd_m": 2.52,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_doubao_seed_2_lite",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.75,
      "input_usd_m": 0.75,
      "output_usd_m": 2.25,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_doubao_seed_2_lite",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 1.08,
      "input_usd_m": 1.08,
      "output_usd_m": 3.24,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_doubao_seed_2_lite",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.97,
      "input_usd_m": 0.97,
      "output_usd_m": 2.91,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_doubao_seed_2_lite",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 1.11,
      "input_usd_m": 1.11,
      "output_usd_m": 3.33,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_doubao_seed_2_lite",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.8,
      "output_usd_m": 2.4,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_doubao_seed_2_lite",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.94,
      "input_usd_m": 0.94,
      "output_usd_m": 2.82,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_ernie_5_1",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.65,
      "input_usd_m": 0.65,
      "output_usd_m": 1.95,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_ernie_5_1",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.65,
      "input_usd_m": 0.65,
      "output_usd_m": 1.95,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_ernie_5_1",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 0.81,
      "output_usd_m": 2.43,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_ernie_5_1",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 0.86,
      "output_usd_m": 2.58,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_ernie_5_1",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.76,
      "input_usd_m": 0.76,
      "output_usd_m": 2.28,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_ernie_5_1",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.8,
      "output_usd_m": 2.4,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_ernie_5_1",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.66,
      "input_usd_m": 0.66,
      "output_usd_m": 1.98,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_ernie_5_1",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.58,
      "input_usd_m": 0.58,
      "output_usd_m": 1.74,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_ernie_5_1",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.66,
      "input_usd_m": 0.66,
      "output_usd_m": 1.98,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_ernie_5_1",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 0.86,
      "output_usd_m": 2.58,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_ernie_5_1",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 0.88,
      "output_usd_m": 2.64,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_ernie_5_1",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.97,
      "input_usd_m": 0.97,
      "output_usd_m": 2.91,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_ernie_5_1",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.56,
      "input_usd_m": 0.56,
      "output_usd_m": 1.68,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_ernie_5_1",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.84,
      "output_usd_m": 2.52,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_llama_4_maverick",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_llama_4_maverick",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 0.83,
      "output_usd_m": 2.49,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_llama_4_maverick",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 0.83,
      "output_usd_m": 2.49,
      "cache_read_usd_m": 0,
      "source_url": "https://portkey.ai"
    },
    {
      "model_id": "m_llama_4_maverick",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.58,
      "input_usd_m": 0.58,
      "output_usd_m": 1.74,
      "cache_read_usd_m": 0,
      "source_url": "https://developers.cloudflare.com/ai-gateway"
    },
    {
      "model_id": "m_llama_4_maverick",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.71,
      "input_usd_m": 0.71,
      "output_usd_m": 2.13,
      "cache_read_usd_m": 0,
      "source_url": "https://vercel.com/docs/ai-gateway"
    },
    {
      "model_id": "m_llama_4_maverick",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 0.77,
      "output_usd_m": 2.31,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_llama_4_maverick",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.72,
      "input_usd_m": 0.72,
      "output_usd_m": 2.16,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_llama_4_maverick",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.63,
      "input_usd_m": 0.63,
      "output_usd_m": 1.89,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_devstral_2",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.95,
      "input_usd_m": 0.95,
      "output_usd_m": 2.85,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_devstral_2",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.89,
      "output_usd_m": 2.67,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_devstral_2",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 1.09,
      "input_usd_m": 1.09,
      "output_usd_m": 3.27,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_devstral_2",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 0.83,
      "output_usd_m": 2.49,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_devstral_2",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 0.79,
      "output_usd_m": 2.37,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_minimax_m3",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.93,
      "input_usd_m": 0.93,
      "output_usd_m": 2.79,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_minimax_m3",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.8,
      "output_usd_m": 2.4,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_minimax_m3",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 0.88,
      "output_usd_m": 2.64,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_minimax_m3",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 0.83,
      "output_usd_m": 2.49,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_minimax_m3",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.72,
      "input_usd_m": 0.72,
      "output_usd_m": 2.16,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_minimax_m3",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.84,
      "output_usd_m": 2.52,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_minimax_m3",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.94,
      "input_usd_m": 0.94,
      "output_usd_m": 2.82,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_minimax_m3",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 0.86,
      "output_usd_m": 2.58,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_minimax_m3",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 1.07,
      "input_usd_m": 1.07,
      "output_usd_m": 3.21,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_minimax_m3",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.97,
      "input_usd_m": 0.97,
      "output_usd_m": 2.91,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_minimax_m3",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.69,
      "input_usd_m": 0.69,
      "output_usd_m": 2.07,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_minimax_m3",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 0.92,
      "output_usd_m": 2.76,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_minimax_m2_7",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.84,
      "output_usd_m": 2.52,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_minimax_m2_7",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.66,
      "input_usd_m": 0.66,
      "output_usd_m": 1.98,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_minimax_m2_7",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.89,
      "output_usd_m": 2.67,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_minimax_m2_7",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 0.88,
      "output_usd_m": 2.64,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_minimax_m2_7",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.58,
      "input_usd_m": 0.58,
      "output_usd_m": 1.74,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_minimax_m2_7",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.9,
      "output_usd_m": 2.7,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_minimax_m2_7",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.65,
      "input_usd_m": 0.65,
      "output_usd_m": 1.95,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_minimax_m2_7",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.74,
      "input_usd_m": 0.74,
      "output_usd_m": 2.22,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_minimax_m2_7",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 0.79,
      "output_usd_m": 2.37,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_minimax_m2_7",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.9,
      "output_usd_m": 2.7,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_minimax_m2_7",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.76,
      "input_usd_m": 0.76,
      "output_usd_m": 2.28,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_minimax_m2_7",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 1.09,
      "input_usd_m": 1.09,
      "output_usd_m": 3.27,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_minimax_m2_7",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.57,
      "input_usd_m": 0.57,
      "output_usd_m": 1.71,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_minimax_m2_7",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 0.83,
      "output_usd_m": 2.49,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_step_3_5_flash",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 0.87,
      "output_usd_m": 2.61,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_step_3_5_flash",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.69,
      "input_usd_m": 0.69,
      "output_usd_m": 2.07,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_step_3_5_flash",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.9,
      "output_usd_m": 2.7,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_step_3_5_flash",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 0.83,
      "output_usd_m": 2.49,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_step_3_5_flash",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.66,
      "input_usd_m": 0.66,
      "output_usd_m": 1.98,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_step_3_5_flash",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.55,
      "input_usd_m": 0.55,
      "output_usd_m": 1.65,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_step_3_5_flash",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.93,
      "input_usd_m": 0.93,
      "output_usd_m": 2.79,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_step_3_5_flash",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 0.78,
      "output_usd_m": 2.34,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_step_3_5_flash",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 1.04,
      "input_usd_m": 1.04,
      "output_usd_m": 3.12,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_step_3_5_flash",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.95,
      "input_usd_m": 0.95,
      "output_usd_m": 2.85,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_step_3_5_flash",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.8,
      "output_usd_m": 2.4,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_step_3_5_flash",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 1.03,
      "input_usd_m": 1.03,
      "output_usd_m": 3.09,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_mimo_v2_flash",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 0.81,
      "output_usd_m": 2.43,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_mimo_v2_flash",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.75,
      "input_usd_m": 0.75,
      "output_usd_m": 2.25,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_mimo_v2_flash",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 0.87,
      "output_usd_m": 2.61,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_mimo_v2_flash",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.59,
      "input_usd_m": 0.59,
      "output_usd_m": 1.77,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_mimo_v2_flash",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 0.64,
      "output_usd_m": 1.92,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_mimo_v2_flash",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 0.83,
      "output_usd_m": 2.49,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_mimo_v2_flash",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 0.87,
      "output_usd_m": 2.61,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_mimo_v2_flash",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.98,
      "input_usd_m": 0.98,
      "output_usd_m": 2.94,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_mimo_v2_flash",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.94,
      "input_usd_m": 0.94,
      "output_usd_m": 2.82,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_mimo_v2_flash",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.71,
      "input_usd_m": 0.71,
      "output_usd_m": 2.13,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_mimo_v2_flash",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 0.92,
      "output_usd_m": 2.76,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_claude_haiku_4_5",
      "provider_id": "p_anthropic_official",
      "is_official": 1,
      "multiplier": 1,
      "input_usd_m": 1,
      "output_usd_m": 5,
      "cache_read_usd_m": 0.1,
      "source_url": "https://console.anthropic.com"
    },
    {
      "model_id": "m_claude_haiku_4_5",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 0.85,
      "output_usd_m": 4.25,
      "cache_read_usd_m": 0.085,
      "source_url": "https://www.together.ai"
    },
    {
      "model_id": "m_claude_haiku_4_5",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.68,
      "input_usd_m": 0.68,
      "output_usd_m": 3.4,
      "cache_read_usd_m": 0.068,
      "source_url": "https://fireworks.ai"
    },
    {
      "model_id": "m_claude_haiku_4_5",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 0.83,
      "output_usd_m": 4.15,
      "cache_read_usd_m": 0.083,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_claude_haiku_4_5",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 5.25,
      "cache_read_usd_m": 0.105,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_claude_haiku_4_5",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.66,
      "input_usd_m": 0.66,
      "output_usd_m": 3.3,
      "cache_read_usd_m": 0.066,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_qwen3_coder",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.7,
      "input_usd_m": 0.35,
      "output_usd_m": 1.4,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_qwen3_coder",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 0.46,
      "output_usd_m": 1.84,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_qwen3_coder",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.75,
      "input_usd_m": 0.375,
      "output_usd_m": 1.5,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_qwen3_coder",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.45,
      "output_usd_m": 1.8,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_qwen3_coder",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.45,
      "output_usd_m": 1.8,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_qwen3_coder",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 0.43,
      "output_usd_m": 1.72,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_qwen3_coder",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 1.07,
      "input_usd_m": 0.535,
      "output_usd_m": 2.14,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_qwen3_coder",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 0.46,
      "output_usd_m": 1.84,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_qwen3_coder",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 0.435,
      "output_usd_m": 1.74,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_qwen3_coder",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.95,
      "input_usd_m": 0.475,
      "output_usd_m": 1.9,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_qwen3_vl_max",
      "provider_id": "p_qwen_official",
      "is_official": 1,
      "multiplier": 1,
      "input_usd_m": 0.8,
      "output_usd_m": 4,
      "cache_read_usd_m": 0,
      "source_url": "https://bailian.console.aliyun.com"
    },
    {
      "model_id": "m_qwen3_vl_max",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 0.704,
      "output_usd_m": 3.52,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_qwen3_vl_max",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 0.84,
      "output_usd_m": 4.2,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_qwen3_vl_max",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.66,
      "input_usd_m": 0.528,
      "output_usd_m": 2.64,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_qwen3_vl_max",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 0.536,
      "output_usd_m": 2.68,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_qwen3_vl_max",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 0.624,
      "output_usd_m": 3.12,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_qwen3_vl_max",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.95,
      "input_usd_m": 0.76,
      "output_usd_m": 3.8,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_qwen3_vl_max",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.75,
      "input_usd_m": 0.6,
      "output_usd_m": 3,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_qwen3_vl_max",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.61,
      "input_usd_m": 0.488,
      "output_usd_m": 2.44,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_qwen3_vl_max",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 0.616,
      "output_usd_m": 3.08,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_qwen3_vl_max",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.69,
      "input_usd_m": 0.552,
      "output_usd_m": 2.76,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_qwen3_vl_max",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 0.616,
      "output_usd_m": 3.08,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_qwen3_vl_max",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.97,
      "input_usd_m": 0.776,
      "output_usd_m": 3.88,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_qwen3_vl_max",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.93,
      "input_usd_m": 0.744,
      "output_usd_m": 3.72,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_qwen3_vl_max",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 0.704,
      "output_usd_m": 3.52,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_qwen3_vl_max",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.58,
      "input_usd_m": 0.464,
      "output_usd_m": 2.32,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_qwen3_vl_max",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 1.03,
      "input_usd_m": 0.824,
      "output_usd_m": 4.12,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_kimi_k2_7",
      "provider_id": "p_moonshot_official",
      "is_official": 1,
      "multiplier": 1,
      "input_usd_m": 0.3,
      "output_usd_m": 1.2,
      "cache_read_usd_m": 0,
      "source_url": "https://platform.moonshot.cn"
    },
    {
      "model_id": "m_kimi_k2_7",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 0.234,
      "output_usd_m": 0.936,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_kimi_k2_7",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 0.315,
      "output_usd_m": 1.26,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_kimi_k2_7",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 0.192,
      "output_usd_m": 0.768,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_kimi_k2_7",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 0.258,
      "output_usd_m": 1.032,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_kimi_k2_7",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.57,
      "input_usd_m": 0.171,
      "output_usd_m": 0.684,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_kimi_k2_7",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 0.255,
      "output_usd_m": 1.02,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_kimi_k2_7",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 0.249,
      "output_usd_m": 0.996,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_kimi_k2_7",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 0.261,
      "output_usd_m": 1.044,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_kimi_k2_7",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.7,
      "input_usd_m": 0.21,
      "output_usd_m": 0.84,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_kimi_k2_7",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 0.246,
      "output_usd_m": 0.984,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_kimi_k2_7",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 0.264,
      "output_usd_m": 1.056,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_kimi_k2_7",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 1.14,
      "input_usd_m": 0.342,
      "output_usd_m": 1.368,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_kimi_k2_7",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.95,
      "input_usd_m": 0.285,
      "output_usd_m": 1.14,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_kimi_k2_7",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.76,
      "input_usd_m": 0.228,
      "output_usd_m": 0.912,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_kimi_k2_7",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.7,
      "input_usd_m": 0.21,
      "output_usd_m": 0.84,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_kimi_k2_7",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.99,
      "input_usd_m": 0.297,
      "output_usd_m": 1.188,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_glm_5_3_flash",
      "provider_id": "p_zhipu_official",
      "is_official": 1,
      "multiplier": 1,
      "input_usd_m": 0.1,
      "output_usd_m": 0.4,
      "cache_read_usd_m": 0,
      "source_url": "https://bigmodel.cn"
    },
    {
      "model_id": "m_glm_5_3_flash",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.09,
      "output_usd_m": 0.36,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_glm_5_3_flash",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 0.105,
      "output_usd_m": 0.42,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_glm_5_3_flash",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.09,
      "output_usd_m": 0.36,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_glm_5_3_flash",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 0.073,
      "output_usd_m": 0.292,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_glm_5_3_flash",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.76,
      "input_usd_m": 0.076,
      "output_usd_m": 0.304,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_glm_5_3_flash",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 0.073,
      "output_usd_m": 0.292,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_glm_5_3_flash",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.084,
      "output_usd_m": 0.336,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_glm_5_3_flash",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.71,
      "input_usd_m": 0.071,
      "output_usd_m": 0.284,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_glm_5_3_flash",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 0.081,
      "output_usd_m": 0.324,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_glm_5_3_flash",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.61,
      "input_usd_m": 0.061,
      "output_usd_m": 0.244,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_glm_5_3_flash",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.74,
      "input_usd_m": 0.074,
      "output_usd_m": 0.296,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_glm_5_3_flash",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 1.14,
      "input_usd_m": 0.114,
      "output_usd_m": 0.456,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_glm_5_3_flash",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.089,
      "output_usd_m": 0.356,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_glm_5_3_flash",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 1.03,
      "input_usd_m": 0.103,
      "output_usd_m": 0.412,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_glm_5_3_flash",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.76,
      "input_usd_m": 0.076,
      "output_usd_m": 0.304,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_glm_5_3_flash",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 1.09,
      "input_usd_m": 0.109,
      "output_usd_m": 0.436,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_step_3_5_pro",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.445,
      "output_usd_m": 1.78,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_step_3_5_pro",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 0.525,
      "output_usd_m": 2.1,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_step_3_5_pro",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.445,
      "output_usd_m": 1.78,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_step_3_5_pro",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.7,
      "input_usd_m": 0.35,
      "output_usd_m": 1.4,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_step_3_5_pro",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.68,
      "input_usd_m": 0.34,
      "output_usd_m": 1.36,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_step_3_5_pro",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.42,
      "output_usd_m": 1.68,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_step_3_5_pro",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 0.425,
      "output_usd_m": 1.7,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_step_3_5_pro",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.45,
      "output_usd_m": 1.8,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_step_3_5_pro",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.56,
      "input_usd_m": 0.28,
      "output_usd_m": 1.12,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_step_3_5_pro",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.58,
      "input_usd_m": 0.29,
      "output_usd_m": 1.16,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_step_3_5_pro",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.4,
      "output_usd_m": 1.6,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_step_3_5_pro",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 1.12,
      "input_usd_m": 0.56,
      "output_usd_m": 2.24,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_step_3_5_pro",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 1.15,
      "input_usd_m": 0.575,
      "output_usd_m": 2.3,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_step_3_5_pro",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 0.525,
      "output_usd_m": 2.1,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_step_3_5_pro",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 0.335,
      "output_usd_m": 1.34,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_step_3_5_pro",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 0.395,
      "output_usd_m": 1.58,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_yi_large",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.64,
      "output_usd_m": 2.4,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_yi_large",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 0.84,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_yi_large",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.72,
      "output_usd_m": 2.7,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_yi_large",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 0.584,
      "output_usd_m": 2.19,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_yi_large",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 0.664,
      "output_usd_m": 2.49,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_yi_large",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.91,
      "input_usd_m": 0.728,
      "output_usd_m": 2.73,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_yi_large",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.57,
      "input_usd_m": 0.456,
      "output_usd_m": 1.71,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_yi_large",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 0.696,
      "output_usd_m": 2.61,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_yi_large",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 0.536,
      "output_usd_m": 2.01,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_yi_large",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.7,
      "input_usd_m": 0.56,
      "output_usd_m": 2.1,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_yi_large",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.61,
      "input_usd_m": 0.488,
      "output_usd_m": 1.83,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_yi_large",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.96,
      "input_usd_m": 0.768,
      "output_usd_m": 2.88,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_yi_large",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.98,
      "input_usd_m": 0.784,
      "output_usd_m": 2.94,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_yi_large",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 1.07,
      "input_usd_m": 0.856,
      "output_usd_m": 3.21,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_yi_large",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.57,
      "input_usd_m": 0.456,
      "output_usd_m": 1.71,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_yi_large",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 0.624,
      "output_usd_m": 2.34,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_ernie_5_turbo",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.36,
      "output_usd_m": 1.08,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_ernie_5_turbo",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 0.42,
      "output_usd_m": 1.26,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_ernie_5_turbo",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.32,
      "output_usd_m": 0.96,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_ernie_5_turbo",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.65,
      "input_usd_m": 0.26,
      "output_usd_m": 0.78,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_ernie_5_turbo",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 0.368,
      "output_usd_m": 1.104,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_ernie_5_turbo",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.61,
      "input_usd_m": 0.244,
      "output_usd_m": 0.732,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_ernie_5_turbo",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 0.292,
      "output_usd_m": 0.876,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_ernie_5_turbo",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.65,
      "input_usd_m": 0.26,
      "output_usd_m": 0.78,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_ernie_5_turbo",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.65,
      "input_usd_m": 0.26,
      "output_usd_m": 0.78,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_ernie_5_turbo",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.55,
      "input_usd_m": 0.22,
      "output_usd_m": 0.66,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_ernie_5_turbo",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 0.348,
      "output_usd_m": 1.044,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_ernie_5_turbo",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 1.11,
      "input_usd_m": 0.444,
      "output_usd_m": 1.332,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_ernie_5_turbo",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 1.02,
      "input_usd_m": 0.408,
      "output_usd_m": 1.224,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_ernie_5_turbo",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 0.324,
      "output_usd_m": 0.972,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_ernie_5_turbo",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.68,
      "input_usd_m": 0.272,
      "output_usd_m": 0.816,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_ernie_5_turbo",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.356,
      "output_usd_m": 1.068,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_minimax_text_02",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 0.237,
      "output_usd_m": 0.948,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_minimax_text_02",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 0.315,
      "output_usd_m": 1.26,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_minimax_text_02",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 0.243,
      "output_usd_m": 0.972,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_minimax_text_02",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.72,
      "input_usd_m": 0.216,
      "output_usd_m": 0.864,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_minimax_text_02",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.65,
      "input_usd_m": 0.195,
      "output_usd_m": 0.78,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_minimax_text_02",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.267,
      "output_usd_m": 1.068,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_minimax_text_02",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.63,
      "input_usd_m": 0.189,
      "output_usd_m": 0.756,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_minimax_text_02",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.7,
      "input_usd_m": 0.21,
      "output_usd_m": 0.84,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_minimax_text_02",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.74,
      "input_usd_m": 0.222,
      "output_usd_m": 0.888,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_minimax_text_02",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 0.192,
      "output_usd_m": 0.768,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_minimax_text_02",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 0.234,
      "output_usd_m": 0.936,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_minimax_text_02",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.98,
      "input_usd_m": 0.294,
      "output_usd_m": 1.176,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_minimax_text_02",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 1.15,
      "input_usd_m": 0.345,
      "output_usd_m": 1.38,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_minimax_text_02",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 0.261,
      "output_usd_m": 1.044,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_minimax_text_02",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.267,
      "output_usd_m": 1.068,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_minimax_text_02",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 1.01,
      "input_usd_m": 0.303,
      "output_usd_m": 1.212,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_deepseek_v4_coder",
      "provider_id": "p_deepseek_official",
      "is_official": 1,
      "multiplier": 1,
      "input_usd_m": 0.27,
      "output_usd_m": 1.1,
      "cache_read_usd_m": 0,
      "source_url": "https://platform.deepseek.com"
    },
    {
      "model_id": "m_deepseek_v4_coder",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.66,
      "input_usd_m": 0.178,
      "output_usd_m": 0.726,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_deepseek_v4_coder",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 0.284,
      "output_usd_m": 1.155,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_deepseek_v4_coder",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 0.211,
      "output_usd_m": 0.858,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_deepseek_v4_coder",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 0.221,
      "output_usd_m": 0.902,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_deepseek_v4_coder",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 0.23,
      "output_usd_m": 0.935,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_deepseek_v4_coder",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.57,
      "input_usd_m": 0.154,
      "output_usd_m": 0.627,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_deepseek_v4_coder",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 0.213,
      "output_usd_m": 0.869,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_deepseek_v4_coder",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.75,
      "input_usd_m": 0.203,
      "output_usd_m": 0.825,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_deepseek_v4_coder",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.91,
      "input_usd_m": 0.246,
      "output_usd_m": 1.001,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_deepseek_v4_coder",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.66,
      "input_usd_m": 0.178,
      "output_usd_m": 0.726,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_deepseek_v4_coder",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 0.235,
      "output_usd_m": 0.957,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_deepseek_v4_coder",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.99,
      "input_usd_m": 0.267,
      "output_usd_m": 1.089,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_deepseek_v4_coder",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.24,
      "output_usd_m": 0.979,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_deepseek_v4_coder",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 0.27,
      "output_usd_m": 1.1,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_deepseek_v4_coder",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.75,
      "input_usd_m": 0.203,
      "output_usd_m": 0.825,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_deepseek_v4_coder",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 1.02,
      "input_usd_m": 0.275,
      "output_usd_m": 1.122,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_hunyuan_turbo",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.42,
      "output_usd_m": 1.26,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_hunyuan_turbo",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 0.525,
      "output_usd_m": 1.575,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_hunyuan_turbo",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 0.405,
      "output_usd_m": 1.215,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_hunyuan_turbo",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.445,
      "output_usd_m": 1.335,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_hunyuan_turbo",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.4,
      "output_usd_m": 1.2,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_hunyuan_turbo",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.91,
      "input_usd_m": 0.455,
      "output_usd_m": 1.365,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_hunyuan_turbo",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 0.405,
      "output_usd_m": 1.215,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_hunyuan_turbo",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 0.335,
      "output_usd_m": 1.005,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_qwen2_5_coder_32b",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 0.146,
      "output_usd_m": 0.438,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_qwen2_5_coder_32b",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 0.164,
      "output_usd_m": 0.492,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_qwen2_5_coder_32b",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 0.162,
      "output_usd_m": 0.486,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_qwen2_5_coder_32b",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 0.158,
      "output_usd_m": 0.474,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_qwen2_5_coder_32b",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.56,
      "input_usd_m": 0.112,
      "output_usd_m": 0.336,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_qwen2_5_coder_32b",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 0.172,
      "output_usd_m": 0.516,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_qwen2_5_coder_32b",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.65,
      "input_usd_m": 0.13,
      "output_usd_m": 0.39,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_qwen2_5_coder_32b",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.16,
      "output_usd_m": 0.48,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_qwen2_5_coder_32b",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.98,
      "input_usd_m": 0.196,
      "output_usd_m": 0.588,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_qwen2_5_coder_32b",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 0.156,
      "output_usd_m": 0.468,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_qwen2_5_coder_32b",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 0.162,
      "output_usd_m": 0.486,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_qwen2_5_coder_32b",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 0.166,
      "output_usd_m": 0.498,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_deepseek_coder_v3",
      "provider_id": "p_deepseek_official",
      "is_official": 1,
      "multiplier": 1,
      "input_usd_m": 0.14,
      "output_usd_m": 0.28,
      "cache_read_usd_m": 0,
      "source_url": "https://platform.deepseek.com"
    },
    {
      "model_id": "m_deepseek_coder_v3",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 0.09,
      "output_usd_m": 0.179,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_deepseek_coder_v3",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 0.147,
      "output_usd_m": 0.294,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_deepseek_coder_v3",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.126,
      "output_usd_m": 0.252,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_deepseek_coder_v3",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.68,
      "input_usd_m": 0.095,
      "output_usd_m": 0.19,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_deepseek_coder_v3",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.61,
      "input_usd_m": 0.085,
      "output_usd_m": 0.171,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_deepseek_coder_v3",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.91,
      "input_usd_m": 0.127,
      "output_usd_m": 0.255,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_deepseek_coder_v3",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.55,
      "input_usd_m": 0.077,
      "output_usd_m": 0.154,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_deepseek_coder_v3",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.125,
      "output_usd_m": 0.249,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_deepseek_coder_v3",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.61,
      "input_usd_m": 0.085,
      "output_usd_m": 0.171,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_deepseek_coder_v3",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.6,
      "input_usd_m": 0.084,
      "output_usd_m": 0.168,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_deepseek_coder_v3",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.65,
      "input_usd_m": 0.091,
      "output_usd_m": 0.182,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_deepseek_coder_v3",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 0.115,
      "output_usd_m": 0.23,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_deepseek_coder_v3",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 1.01,
      "input_usd_m": 0.141,
      "output_usd_m": 0.283,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_deepseek_coder_v3",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.76,
      "input_usd_m": 0.106,
      "output_usd_m": 0.213,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_deepseek_coder_v3",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.51,
      "input_usd_m": 0.071,
      "output_usd_m": 0.143,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_deepseek_coder_v3",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 1.07,
      "input_usd_m": 0.15,
      "output_usd_m": 0.3,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_claude_fable_5",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.56,
      "input_usd_m": 0.56,
      "output_usd_m": 1.68,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_claude_fable_5",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.63,
      "input_usd_m": 0.63,
      "output_usd_m": 1.89,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_claude_fable_5",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 0.81,
      "output_usd_m": 2.43,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_claude_opus_5",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.94,
      "input_usd_m": 0.94,
      "output_usd_m": 2.82,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_claude_opus_5",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.7,
      "input_usd_m": 0.7,
      "output_usd_m": 2.1,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_claude_opus_5",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 0.77,
      "output_usd_m": 2.31,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_claude_sonnet_5",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 0.64,
      "output_usd_m": 1.92,
      "cache_read_usd_m": 0,
      "source_url": "https://developers.cloudflare.com/ai-gateway"
    },
    {
      "model_id": "m_claude_sonnet_5",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.59,
      "input_usd_m": 0.59,
      "output_usd_m": 1.77,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_claude_sonnet_5",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.66,
      "input_usd_m": 0.66,
      "output_usd_m": 1.98,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_claude_sonnet_5",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.8,
      "output_usd_m": 2.4,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_claude_sonnet_5",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.7,
      "input_usd_m": 0.7,
      "output_usd_m": 2.1,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_claude_sonnet_5",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.7,
      "input_usd_m": 0.7,
      "output_usd_m": 2.1,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_claude_sonnet_5",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.63,
      "input_usd_m": 0.63,
      "output_usd_m": 1.89,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_claude_sonnet_5",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.66,
      "input_usd_m": 0.66,
      "output_usd_m": 1.98,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_claude_sonnet_5",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 0.92,
      "output_usd_m": 2.76,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_claude_sonnet_5",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 0.81,
      "output_usd_m": 2.43,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_claude_sonnet_5",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.99,
      "input_usd_m": 0.99,
      "output_usd_m": 2.97,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_claude_sonnet_5",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 0.82,
      "output_usd_m": 2.46,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_claude_sonnet_5",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 1.04,
      "input_usd_m": 1.04,
      "output_usd_m": 3.12,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_claude_sonnet_5",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.57,
      "input_usd_m": 0.57,
      "output_usd_m": 1.71,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_claude_sonnet_5",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.9,
      "output_usd_m": 2.7,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_claude_opus_4_7",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.95,
      "input_usd_m": 0.95,
      "output_usd_m": 2.85,
      "cache_read_usd_m": 0,
      "source_url": "https://www.together.ai"
    },
    {
      "model_id": "m_claude_opus_4_7",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 0.81,
      "output_usd_m": 2.43,
      "cache_read_usd_m": 0,
      "source_url": "https://fireworks.ai"
    },
    {
      "model_id": "m_claude_opus_4_7",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 0.77,
      "output_usd_m": 2.31,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_claude_opus_4_7",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_claude_opus_4_7",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 0.82,
      "output_usd_m": 2.46,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_claude_opus_4_7",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.89,
      "output_usd_m": 2.67,
      "cache_read_usd_m": 0,
      "source_url": "https://helicone.ai"
    },
    {
      "model_id": "m_claude_opus_4_7",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 0.86,
      "output_usd_m": 2.58,
      "cache_read_usd_m": 0,
      "source_url": "https://vercel.com/docs/ai-gateway"
    },
    {
      "model_id": "m_claude_opus_4_7",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 0.64,
      "output_usd_m": 1.92,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_claude_opus_4_7",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.56,
      "input_usd_m": 0.56,
      "output_usd_m": 1.68,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_claude_opus_4_7",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.68,
      "input_usd_m": 0.68,
      "output_usd_m": 2.04,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_claude_opus_4_7",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.66,
      "input_usd_m": 0.66,
      "output_usd_m": 1.98,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_claude_opus_4_7",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.63,
      "input_usd_m": 0.63,
      "output_usd_m": 1.89,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_claude_opus_4_7",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.93,
      "input_usd_m": 0.93,
      "output_usd_m": 2.79,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_claude_opus_4_7",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.9,
      "output_usd_m": 2.7,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_claude_opus_4_7",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.68,
      "input_usd_m": 0.68,
      "output_usd_m": 2.04,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_claude_opus_4_7",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 0.81,
      "output_usd_m": 2.43,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_claude_opus_4_7",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.71,
      "input_usd_m": 0.71,
      "output_usd_m": 2.13,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_claude_opus_4_7",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 1.12,
      "input_usd_m": 1.12,
      "output_usd_m": 3.36,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_claude_opus_4_7",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.93,
      "input_usd_m": 0.93,
      "output_usd_m": 2.79,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_claude_opus_4_7",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 0.86,
      "output_usd_m": 2.58,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_claude_opus_4_7",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.6,
      "input_usd_m": 0.6,
      "output_usd_m": 1.8,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_claude_opus_4_7",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.97,
      "input_usd_m": 0.97,
      "output_usd_m": 2.91,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_gpt_5_6_sol",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.66,
      "input_usd_m": 0.66,
      "output_usd_m": 1.98,
      "cache_read_usd_m": 0,
      "source_url": "https://www.together.ai"
    },
    {
      "model_id": "m_gpt_5_6_sol",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 0.78,
      "output_usd_m": 2.34,
      "cache_read_usd_m": 0,
      "source_url": "https://fireworks.ai"
    },
    {
      "model_id": "m_gpt_5_6_sol",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.91,
      "input_usd_m": 0.91,
      "output_usd_m": 2.73,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_gpt_5_6_sol",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.71,
      "input_usd_m": 0.71,
      "output_usd_m": 2.13,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_gpt_5_6_sol",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 0.64,
      "output_usd_m": 1.92,
      "cache_read_usd_m": 0,
      "source_url": "https://portkey.ai"
    },
    {
      "model_id": "m_gpt_5_6_sol",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.95,
      "input_usd_m": 0.95,
      "output_usd_m": 2.85,
      "cache_read_usd_m": 0,
      "source_url": "https://helicone.ai"
    },
    {
      "model_id": "m_gpt_5_6_sol",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.75,
      "input_usd_m": 0.75,
      "output_usd_m": 2.25,
      "cache_read_usd_m": 0,
      "source_url": "https://developers.cloudflare.com/ai-gateway"
    },
    {
      "model_id": "m_gpt_5_6_sol",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.59,
      "input_usd_m": 0.59,
      "output_usd_m": 1.77,
      "cache_read_usd_m": 0,
      "source_url": "https://vercel.com/docs/ai-gateway"
    },
    {
      "model_id": "m_gpt_5_6_sol",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.57,
      "input_usd_m": 0.57,
      "output_usd_m": 1.71,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_gpt_5_6_sol",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.59,
      "input_usd_m": 0.59,
      "output_usd_m": 1.77,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_gpt_5_6_sol",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.8,
      "output_usd_m": 2.4,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_gpt_5_6_sol",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 0.87,
      "output_usd_m": 2.61,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_gpt_5_6_sol",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.72,
      "input_usd_m": 0.72,
      "output_usd_m": 2.16,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_gpt_5_6_sol",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.58,
      "input_usd_m": 0.58,
      "output_usd_m": 1.74,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_gpt_5_6_sol",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.7,
      "input_usd_m": 0.7,
      "output_usd_m": 2.1,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_gpt_5_6_sol",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.95,
      "input_usd_m": 0.95,
      "output_usd_m": 2.85,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_gpt_5_6_sol",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.96,
      "input_usd_m": 0.96,
      "output_usd_m": 2.88,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_gpt_5_6_sol",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 1.14,
      "input_usd_m": 1.14,
      "output_usd_m": 3.42,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_gpt_5_6_sol",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 1.09,
      "input_usd_m": 1.09,
      "output_usd_m": 3.27,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_gpt_5_6_sol",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.5,
      "input_usd_m": 0.5,
      "output_usd_m": 1.5,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_gpt_5_6_sol",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 1.04,
      "input_usd_m": 1.04,
      "output_usd_m": 3.12,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_gpt_5_5",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 0.82,
      "output_usd_m": 2.46,
      "cache_read_usd_m": 0,
      "source_url": "https://www.together.ai"
    },
    {
      "model_id": "m_gpt_5_5",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.76,
      "input_usd_m": 0.76,
      "output_usd_m": 2.28,
      "cache_read_usd_m": 0,
      "source_url": "https://fireworks.ai"
    },
    {
      "model_id": "m_gpt_5_5",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_gpt_5_5",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.66,
      "input_usd_m": 0.66,
      "output_usd_m": 1.98,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_gpt_5_5",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 0.81,
      "output_usd_m": 2.43,
      "cache_read_usd_m": 0,
      "source_url": "https://portkey.ai"
    },
    {
      "model_id": "m_gpt_5_5",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.59,
      "input_usd_m": 0.59,
      "output_usd_m": 1.77,
      "cache_read_usd_m": 0,
      "source_url": "https://helicone.ai"
    },
    {
      "model_id": "m_gpt_5_5",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.72,
      "input_usd_m": 0.72,
      "output_usd_m": 2.16,
      "cache_read_usd_m": 0,
      "source_url": "https://developers.cloudflare.com/ai-gateway"
    },
    {
      "model_id": "m_gpt_5_5",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 0.73,
      "output_usd_m": 2.19,
      "cache_read_usd_m": 0,
      "source_url": "https://vercel.com/docs/ai-gateway"
    },
    {
      "model_id": "m_gpt_5_5",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.93,
      "input_usd_m": 0.93,
      "output_usd_m": 2.79,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_gpt_5_5",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.9,
      "output_usd_m": 2.7,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_gpt_5_5",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.66,
      "input_usd_m": 0.66,
      "output_usd_m": 1.98,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_gpt_5_5",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.75,
      "input_usd_m": 0.75,
      "output_usd_m": 2.25,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_gpt_5_5",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.62,
      "input_usd_m": 0.62,
      "output_usd_m": 1.86,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_gpt_5_5",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 0.92,
      "output_usd_m": 2.76,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_gpt_5_5",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.9,
      "output_usd_m": 2.7,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_gpt_5_5",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 0.67,
      "output_usd_m": 2.01,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_gpt_5_5",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 1.01,
      "input_usd_m": 1.01,
      "output_usd_m": 3.03,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_gpt_5_5",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.99,
      "input_usd_m": 0.99,
      "output_usd_m": 2.97,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_gpt_5_5",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 0.81,
      "output_usd_m": 2.43,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_gpt_5_5",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 0.81,
      "output_usd_m": 2.43,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_gpt_5_5",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.97,
      "input_usd_m": 0.97,
      "output_usd_m": 2.91,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_gpt_5_5_pro",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 0.86,
      "output_usd_m": 2.58,
      "cache_read_usd_m": 0,
      "source_url": "https://www.together.ai"
    },
    {
      "model_id": "m_gpt_5_5_pro",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.76,
      "input_usd_m": 0.76,
      "output_usd_m": 2.28,
      "cache_read_usd_m": 0,
      "source_url": "https://fireworks.ai"
    },
    {
      "model_id": "m_gpt_5_5_pro",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_gpt_5_5_pro",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.55,
      "input_usd_m": 0.55,
      "output_usd_m": 1.65,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_gpt_5_5_pro",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.68,
      "input_usd_m": 0.68,
      "output_usd_m": 2.04,
      "cache_read_usd_m": 0,
      "source_url": "https://portkey.ai"
    },
    {
      "model_id": "m_gpt_5_5_pro",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.56,
      "input_usd_m": 0.56,
      "output_usd_m": 1.68,
      "cache_read_usd_m": 0,
      "source_url": "https://vercel.com/docs/ai-gateway"
    },
    {
      "model_id": "m_gpt_5_5_pro",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 0.92,
      "output_usd_m": 2.76,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_gpt_5_5_pro",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.9,
      "output_usd_m": 2.7,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_gpt_5_5_pro",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 0.88,
      "output_usd_m": 2.64,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_gpt_5_5_pro",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 0.67,
      "output_usd_m": 2.01,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_gpt_5_5_pro",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.57,
      "input_usd_m": 0.57,
      "output_usd_m": 1.71,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_gpt_5_5_pro",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.9,
      "output_usd_m": 2.7,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_gpt_5_5_pro",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.93,
      "input_usd_m": 0.93,
      "output_usd_m": 2.79,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_gpt_5_5_pro",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.58,
      "input_usd_m": 0.58,
      "output_usd_m": 1.74,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_gpt_5_5_pro",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.74,
      "input_usd_m": 0.74,
      "output_usd_m": 2.22,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_gpt_5_5_pro",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.58,
      "input_usd_m": 0.58,
      "output_usd_m": 1.74,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_gpt_5_5_pro",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 0.85,
      "output_usd_m": 2.55,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_gpt_5_5_pro",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 1.06,
      "input_usd_m": 1.06,
      "output_usd_m": 3.18,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_gpt_5_5_pro",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.8,
      "output_usd_m": 2.4,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_gpt_5_5_pro",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.94,
      "input_usd_m": 0.94,
      "output_usd_m": 2.82,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_gpt_5_5_pro",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.72,
      "input_usd_m": 0.72,
      "output_usd_m": 2.16,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_gpt_5_5_pro",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 0.86,
      "output_usd_m": 2.58,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_gpt_5_2",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.9,
      "output_usd_m": 2.7,
      "cache_read_usd_m": 0,
      "source_url": "https://www.together.ai"
    },
    {
      "model_id": "m_gpt_5_2",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.72,
      "input_usd_m": 0.72,
      "output_usd_m": 2.16,
      "cache_read_usd_m": 0,
      "source_url": "https://fireworks.ai"
    },
    {
      "model_id": "m_gpt_5_2",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.63,
      "input_usd_m": 0.63,
      "output_usd_m": 1.89,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_gpt_5_2",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_gpt_5_2",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 0.77,
      "output_usd_m": 2.31,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_gpt_5_2",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.84,
      "output_usd_m": 2.52,
      "cache_read_usd_m": 0,
      "source_url": "https://portkey.ai"
    },
    {
      "model_id": "m_gpt_5_2",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.63,
      "input_usd_m": 0.63,
      "output_usd_m": 1.89,
      "cache_read_usd_m": 0,
      "source_url": "https://vercel.com/docs/ai-gateway"
    },
    {
      "model_id": "m_gpt_5_2",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 0.67,
      "output_usd_m": 2.01,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_gpt_5_2",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.95,
      "input_usd_m": 0.95,
      "output_usd_m": 2.85,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_gpt_5_2",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 0.81,
      "output_usd_m": 2.43,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_gpt_5_2",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 0.73,
      "output_usd_m": 2.19,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_gpt_5_2",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.76,
      "input_usd_m": 0.76,
      "output_usd_m": 2.28,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_gpt_5_2",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.6,
      "input_usd_m": 0.6,
      "output_usd_m": 1.8,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_gpt_5_2",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 0.64,
      "output_usd_m": 1.92,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_gpt_5_2",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.69,
      "input_usd_m": 0.69,
      "output_usd_m": 2.07,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_gpt_5_2",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 0.79,
      "output_usd_m": 2.37,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_gpt_5_2",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.84,
      "output_usd_m": 2.52,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_gpt_5_2",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.84,
      "output_usd_m": 2.52,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_gpt_5_2",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 0.78,
      "output_usd_m": 2.34,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_gpt_5_2",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.75,
      "input_usd_m": 0.75,
      "output_usd_m": 2.25,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_gpt_5_2",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.84,
      "output_usd_m": 2.52,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_gemini_3_1_pro",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.91,
      "input_usd_m": 0.91,
      "output_usd_m": 2.73,
      "cache_read_usd_m": 0,
      "source_url": "https://www.together.ai"
    },
    {
      "model_id": "m_gemini_3_1_pro",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.89,
      "output_usd_m": 2.67,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_gemini_3_1_pro",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_gemini_3_1_pro",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.58,
      "input_usd_m": 0.58,
      "output_usd_m": 1.74,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_gemini_3_1_pro",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.65,
      "input_usd_m": 0.65,
      "output_usd_m": 1.95,
      "cache_read_usd_m": 0,
      "source_url": "https://portkey.ai"
    },
    {
      "model_id": "m_gemini_3_1_pro",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 0.82,
      "output_usd_m": 2.46,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_gemini_3_1_pro",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 0.64,
      "output_usd_m": 1.92,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_gemini_3_1_pro",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.6,
      "input_usd_m": 0.6,
      "output_usd_m": 1.8,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_gemini_3_1_pro",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 0.92,
      "output_usd_m": 2.76,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_gemini_3_1_pro",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 0.78,
      "output_usd_m": 2.34,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_gemini_3_1_pro",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.74,
      "input_usd_m": 0.74,
      "output_usd_m": 2.22,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_gemini_3_1_pro",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 0.86,
      "output_usd_m": 2.58,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_gemini_3_1_pro",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 0.87,
      "output_usd_m": 2.61,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_gemini_3_1_pro",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.63,
      "input_usd_m": 0.63,
      "output_usd_m": 1.89,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_gemini_3_1_pro",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.59,
      "input_usd_m": 0.59,
      "output_usd_m": 1.77,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_gemini_3_1_pro",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 0.92,
      "output_usd_m": 2.76,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_gemini_3_1_pro",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 0.92,
      "output_usd_m": 2.76,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_gemini_3_1_pro",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.94,
      "input_usd_m": 0.94,
      "output_usd_m": 2.82,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_gemini_3_1_pro",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 0.79,
      "output_usd_m": 2.37,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_gemini_3_1_pro",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 1.02,
      "input_usd_m": 1.02,
      "output_usd_m": 3.06,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_gemini_3_5_flash",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.94,
      "input_usd_m": 0.94,
      "output_usd_m": 2.82,
      "cache_read_usd_m": 0,
      "source_url": "https://www.together.ai"
    },
    {
      "model_id": "m_gemini_3_5_flash",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.59,
      "input_usd_m": 0.59,
      "output_usd_m": 1.77,
      "cache_read_usd_m": 0,
      "source_url": "https://fireworks.ai"
    },
    {
      "model_id": "m_gemini_3_5_flash",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.71,
      "input_usd_m": 0.71,
      "output_usd_m": 2.13,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_gemini_3_5_flash",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.69,
      "input_usd_m": 0.69,
      "output_usd_m": 2.07,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_gemini_3_5_flash",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.89,
      "output_usd_m": 2.67,
      "cache_read_usd_m": 0,
      "source_url": "https://portkey.ai"
    },
    {
      "model_id": "m_gemini_3_5_flash",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.65,
      "input_usd_m": 0.65,
      "output_usd_m": 1.95,
      "cache_read_usd_m": 0,
      "source_url": "https://helicone.ai"
    },
    {
      "model_id": "m_gemini_3_5_flash",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.63,
      "input_usd_m": 0.63,
      "output_usd_m": 1.89,
      "cache_read_usd_m": 0,
      "source_url": "https://developers.cloudflare.com/ai-gateway"
    },
    {
      "model_id": "m_gemini_3_5_flash",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 0.73,
      "output_usd_m": 2.19,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_gemini_3_5_flash",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.72,
      "input_usd_m": 0.72,
      "output_usd_m": 2.16,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_gemini_3_5_flash",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.66,
      "input_usd_m": 0.66,
      "output_usd_m": 1.98,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_gemini_3_5_flash",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.65,
      "input_usd_m": 0.65,
      "output_usd_m": 1.95,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_gemini_3_5_flash",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 0.92,
      "output_usd_m": 2.76,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_gemini_3_5_flash",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 0.73,
      "output_usd_m": 2.19,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_gemini_3_5_flash",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.89,
      "output_usd_m": 2.67,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_gemini_3_5_flash",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 0.77,
      "output_usd_m": 2.31,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_gemini_3_5_flash",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.57,
      "input_usd_m": 0.57,
      "output_usd_m": 1.71,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_gemini_3_5_flash",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.95,
      "input_usd_m": 0.95,
      "output_usd_m": 2.85,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_gemini_3_5_flash",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 1.08,
      "input_usd_m": 1.08,
      "output_usd_m": 3.24,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_gemini_3_5_flash",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 1.14,
      "input_usd_m": 1.14,
      "output_usd_m": 3.42,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_gemini_3_5_flash",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 1.12,
      "input_usd_m": 1.12,
      "output_usd_m": 3.36,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_gemini_3_5_flash",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.84,
      "output_usd_m": 2.52,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_gemini_3_5_flash",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 0.82,
      "output_usd_m": 2.46,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_gemini_3_flash_preview",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.74,
      "input_usd_m": 0.74,
      "output_usd_m": 2.22,
      "cache_read_usd_m": 0,
      "source_url": "https://www.together.ai"
    },
    {
      "model_id": "m_gemini_3_flash_preview",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 0.64,
      "output_usd_m": 1.92,
      "cache_read_usd_m": 0,
      "source_url": "https://fireworks.ai"
    },
    {
      "model_id": "m_gemini_3_flash_preview",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_gemini_3_flash_preview",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.71,
      "input_usd_m": 0.71,
      "output_usd_m": 2.13,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_gemini_3_flash_preview",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.57,
      "input_usd_m": 0.57,
      "output_usd_m": 1.71,
      "cache_read_usd_m": 0,
      "source_url": "https://portkey.ai"
    },
    {
      "model_id": "m_gemini_3_flash_preview",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.7,
      "input_usd_m": 0.7,
      "output_usd_m": 2.1,
      "cache_read_usd_m": 0,
      "source_url": "https://helicone.ai"
    },
    {
      "model_id": "m_gemini_3_flash_preview",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.94,
      "input_usd_m": 0.94,
      "output_usd_m": 2.82,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_gemini_3_flash_preview",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.66,
      "input_usd_m": 0.66,
      "output_usd_m": 1.98,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_gemini_3_flash_preview",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 0.86,
      "output_usd_m": 2.58,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_gemini_3_flash_preview",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 0.73,
      "output_usd_m": 2.19,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_gemini_3_flash_preview",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.72,
      "input_usd_m": 0.72,
      "output_usd_m": 2.16,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_gemini_3_flash_preview",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.93,
      "input_usd_m": 0.93,
      "output_usd_m": 2.79,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_gemini_3_flash_preview",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.95,
      "input_usd_m": 0.95,
      "output_usd_m": 2.85,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_gemini_3_flash_preview",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 0.77,
      "output_usd_m": 2.31,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_gemini_3_flash_preview",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.84,
      "output_usd_m": 2.52,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_gemini_3_flash_preview",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 0.81,
      "output_usd_m": 2.43,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_gemini_3_flash_preview",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 0.87,
      "output_usd_m": 2.61,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_gemini_3_flash_preview",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 1.14,
      "input_usd_m": 1.14,
      "output_usd_m": 3.42,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_gemini_3_flash_preview",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 0.73,
      "output_usd_m": 2.19,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_gemini_3_flash_preview",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.97,
      "input_usd_m": 0.97,
      "output_usd_m": 2.91,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_grok_4_3",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 0.85,
      "output_usd_m": 2.55,
      "cache_read_usd_m": 0,
      "source_url": "https://www.together.ai"
    },
    {
      "model_id": "m_grok_4_3",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.57,
      "input_usd_m": 0.57,
      "output_usd_m": 1.71,
      "cache_read_usd_m": 0,
      "source_url": "https://fireworks.ai"
    },
    {
      "model_id": "m_grok_4_3",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 0.78,
      "output_usd_m": 2.34,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_grok_4_3",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_grok_4_3",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.75,
      "input_usd_m": 0.75,
      "output_usd_m": 2.25,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_grok_4_3",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.89,
      "output_usd_m": 2.67,
      "cache_read_usd_m": 0,
      "source_url": "https://portkey.ai"
    },
    {
      "model_id": "m_grok_4_3",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.61,
      "input_usd_m": 0.61,
      "output_usd_m": 1.83,
      "cache_read_usd_m": 0,
      "source_url": "https://helicone.ai"
    },
    {
      "model_id": "m_grok_4_3",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.93,
      "input_usd_m": 0.93,
      "output_usd_m": 2.79,
      "cache_read_usd_m": 0,
      "source_url": "https://vercel.com/docs/ai-gateway"
    },
    {
      "model_id": "m_grok_4_3",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.58,
      "input_usd_m": 0.58,
      "output_usd_m": 1.74,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_grok_4_3",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.62,
      "input_usd_m": 0.62,
      "output_usd_m": 1.86,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_grok_4_3",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 0.79,
      "output_usd_m": 2.37,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_grok_4_3",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 0.82,
      "output_usd_m": 2.46,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_grok_4_3",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 0.64,
      "output_usd_m": 1.92,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_grok_4_3",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.6,
      "input_usd_m": 0.6,
      "output_usd_m": 1.8,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_grok_4_3",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.91,
      "input_usd_m": 0.91,
      "output_usd_m": 2.73,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_grok_4_3",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 0.85,
      "output_usd_m": 2.55,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_grok_4_3",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.99,
      "input_usd_m": 0.99,
      "output_usd_m": 2.97,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_grok_4_3",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 1,
      "input_usd_m": 1,
      "output_usd_m": 3,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_grok_4_3",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 0.67,
      "output_usd_m": 2.01,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_grok_4_3",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.98,
      "input_usd_m": 0.98,
      "output_usd_m": 2.94,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_grok_4_fast",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.76,
      "input_usd_m": 0.76,
      "output_usd_m": 2.28,
      "cache_read_usd_m": 0,
      "source_url": "https://www.together.ai"
    },
    {
      "model_id": "m_grok_4_fast",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_grok_4_fast",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 0.92,
      "output_usd_m": 2.76,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_grok_4_fast",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.63,
      "input_usd_m": 0.63,
      "output_usd_m": 1.89,
      "cache_read_usd_m": 0,
      "source_url": "https://portkey.ai"
    },
    {
      "model_id": "m_grok_4_fast",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.84,
      "output_usd_m": 2.52,
      "cache_read_usd_m": 0,
      "source_url": "https://helicone.ai"
    },
    {
      "model_id": "m_grok_4_fast",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.65,
      "input_usd_m": 0.65,
      "output_usd_m": 1.95,
      "cache_read_usd_m": 0,
      "source_url": "https://developers.cloudflare.com/ai-gateway"
    },
    {
      "model_id": "m_grok_4_fast",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.71,
      "input_usd_m": 0.71,
      "output_usd_m": 2.13,
      "cache_read_usd_m": 0,
      "source_url": "https://vercel.com/docs/ai-gateway"
    },
    {
      "model_id": "m_grok_4_fast",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 0.82,
      "output_usd_m": 2.46,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_grok_4_fast",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 0.67,
      "output_usd_m": 2.01,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_grok_4_fast",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.68,
      "input_usd_m": 0.68,
      "output_usd_m": 2.04,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_grok_4_fast",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 0.85,
      "output_usd_m": 2.55,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_grok_4_fast",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.58,
      "input_usd_m": 0.58,
      "output_usd_m": 1.74,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_grok_4_fast",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 0.73,
      "output_usd_m": 2.19,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_grok_4_fast",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.95,
      "input_usd_m": 0.95,
      "output_usd_m": 2.85,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_grok_4_fast",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.95,
      "input_usd_m": 0.95,
      "output_usd_m": 2.85,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_grok_4_fast",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.58,
      "input_usd_m": 0.58,
      "output_usd_m": 1.74,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_grok_4_fast",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 0.64,
      "output_usd_m": 1.92,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_llama_4_maverick",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.72,
      "input_usd_m": 0.72,
      "output_usd_m": 2.16,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_llama_4_maverick",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.91,
      "input_usd_m": 0.91,
      "output_usd_m": 2.73,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_llama_4_maverick",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 0.78,
      "output_usd_m": 2.34,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_llama_4_maverick",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 0.83,
      "output_usd_m": 2.49,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_llama_4_maverick",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.89,
      "output_usd_m": 2.67,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_llama_4_maverick",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 0.86,
      "output_usd_m": 2.58,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_llama_4_maverick",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.7,
      "input_usd_m": 0.7,
      "output_usd_m": 2.1,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_llama_4_maverick",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.75,
      "input_usd_m": 0.75,
      "output_usd_m": 2.25,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_llama_4_maverick",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.89,
      "output_usd_m": 2.67,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_llama_4_maverick",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_llama_4_maverick",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.84,
      "output_usd_m": 2.52,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_llama_4_maverick",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 1.13,
      "input_usd_m": 1.13,
      "output_usd_m": 3.39,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_llama_4_scout",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.72,
      "input_usd_m": 0.72,
      "output_usd_m": 2.16,
      "cache_read_usd_m": 0,
      "source_url": "https://fireworks.ai"
    },
    {
      "model_id": "m_llama_4_scout",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 0.77,
      "output_usd_m": 2.31,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_llama_4_scout",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 0.85,
      "output_usd_m": 2.55,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_llama_4_scout",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 0.79,
      "output_usd_m": 2.37,
      "cache_read_usd_m": 0,
      "source_url": "https://portkey.ai"
    },
    {
      "model_id": "m_llama_4_scout",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 0.64,
      "output_usd_m": 1.92,
      "cache_read_usd_m": 0,
      "source_url": "https://helicone.ai"
    },
    {
      "model_id": "m_llama_4_scout",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 0.64,
      "output_usd_m": 1.92,
      "cache_read_usd_m": 0,
      "source_url": "https://developers.cloudflare.com/ai-gateway"
    },
    {
      "model_id": "m_llama_4_scout",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.56,
      "input_usd_m": 0.56,
      "output_usd_m": 1.68,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_llama_4_scout",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.72,
      "input_usd_m": 0.72,
      "output_usd_m": 2.16,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_llama_4_scout",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.71,
      "input_usd_m": 0.71,
      "output_usd_m": 2.13,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_llama_4_scout",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.74,
      "input_usd_m": 0.74,
      "output_usd_m": 2.22,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_llama_4_scout",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.6,
      "input_usd_m": 0.6,
      "output_usd_m": 1.8,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_llama_4_scout",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.8,
      "output_usd_m": 2.4,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_llama_4_scout",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.56,
      "input_usd_m": 0.56,
      "output_usd_m": 1.68,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_llama_4_scout",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.91,
      "input_usd_m": 0.91,
      "output_usd_m": 2.73,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_llama_4_scout",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.98,
      "input_usd_m": 0.98,
      "output_usd_m": 2.94,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_llama_4_scout",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.76,
      "input_usd_m": 0.76,
      "output_usd_m": 2.28,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_llama_4_scout",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.76,
      "input_usd_m": 0.76,
      "output_usd_m": 2.28,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_llama_4_scout",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.8,
      "output_usd_m": 2.4,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_mistral_large_3",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 0.73,
      "output_usd_m": 2.19,
      "cache_read_usd_m": 0,
      "source_url": "https://fireworks.ai"
    },
    {
      "model_id": "m_llama_4_scout",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 0.82,
      "output_usd_m": 2.46,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_mistral_large_3",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.57,
      "input_usd_m": 0.57,
      "output_usd_m": 1.71,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_llama_4_scout",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.62,
      "input_usd_m": 0.62,
      "output_usd_m": 1.86,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_mistral_large_3",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_mistral_large_3",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.7,
      "input_usd_m": 0.7,
      "output_usd_m": 2.1,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_mistral_large_3",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.68,
      "input_usd_m": 0.68,
      "output_usd_m": 2.04,
      "cache_read_usd_m": 0,
      "source_url": "https://developers.cloudflare.com/ai-gateway"
    },
    {
      "model_id": "m_mistral_large_3",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.63,
      "input_usd_m": 0.63,
      "output_usd_m": 1.89,
      "cache_read_usd_m": 0,
      "source_url": "https://helicone.ai"
    },
    {
      "model_id": "m_llama_4_scout",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.68,
      "input_usd_m": 0.68,
      "output_usd_m": 2.04,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_mistral_large_3",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 0.85,
      "output_usd_m": 2.55,
      "cache_read_usd_m": 0,
      "source_url": "https://vercel.com/docs/ai-gateway"
    },
    {
      "model_id": "m_mistral_large_3",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.7,
      "input_usd_m": 0.7,
      "output_usd_m": 2.1,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_mistral_large_3",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 0.88,
      "output_usd_m": 2.64,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_mistral_large_3",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 0.85,
      "output_usd_m": 2.55,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_mistral_large_3",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.65,
      "input_usd_m": 0.65,
      "output_usd_m": 1.95,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_mistral_large_3",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.58,
      "input_usd_m": 0.58,
      "output_usd_m": 1.74,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_mistral_large_3",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.56,
      "input_usd_m": 0.56,
      "output_usd_m": 1.68,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_mistral_large_3",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.69,
      "input_usd_m": 0.69,
      "output_usd_m": 2.07,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_mistral_large_3",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 0.77,
      "output_usd_m": 2.31,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_mistral_large_3",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 0.81,
      "output_usd_m": 2.43,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_mistral_large_3",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.95,
      "input_usd_m": 0.95,
      "output_usd_m": 2.85,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_mistral_large_3",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 1.06,
      "input_usd_m": 1.06,
      "output_usd_m": 3.18,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_mistral_large_3",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 1.01,
      "input_usd_m": 1.01,
      "output_usd_m": 3.03,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_mistral_large_3",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_mistral_large_3",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 0.88,
      "output_usd_m": 2.64,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_mistral_large_3",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 0.83,
      "output_usd_m": 2.49,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_mistral_medium_3_5",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.56,
      "input_usd_m": 0.56,
      "output_usd_m": 1.68,
      "cache_read_usd_m": 0,
      "source_url": "https://www.together.ai"
    },
    {
      "model_id": "m_mistral_medium_3_5",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.6,
      "input_usd_m": 0.6,
      "output_usd_m": 1.8,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_mistral_medium_3_5",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 0.82,
      "output_usd_m": 2.46,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_mistral_medium_3_5",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 0.78,
      "output_usd_m": 2.34,
      "cache_read_usd_m": 0,
      "source_url": "https://portkey.ai"
    },
    {
      "model_id": "m_mistral_medium_3_5",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.61,
      "input_usd_m": 0.61,
      "output_usd_m": 1.83,
      "cache_read_usd_m": 0,
      "source_url": "https://fireworks.ai"
    },
    {
      "model_id": "m_mistral_medium_3_5",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 0.83,
      "output_usd_m": 2.49,
      "cache_read_usd_m": 0,
      "source_url": "https://developers.cloudflare.com/ai-gateway"
    },
    {
      "model_id": "m_mistral_medium_3_5",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 0.64,
      "output_usd_m": 1.92,
      "cache_read_usd_m": 0,
      "source_url": "https://helicone.ai"
    },
    {
      "model_id": "m_mistral_medium_3_5",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 0.86,
      "output_usd_m": 2.58,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_mistral_medium_3_5",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.62,
      "input_usd_m": 0.62,
      "output_usd_m": 1.86,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_mistral_medium_3_5",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 0.85,
      "output_usd_m": 2.55,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_mistral_medium_3_5",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 0.79,
      "output_usd_m": 2.37,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_mistral_medium_3_5",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.6,
      "input_usd_m": 0.6,
      "output_usd_m": 1.8,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_mistral_medium_3_5",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 0.88,
      "output_usd_m": 2.64,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_mistral_medium_3_5",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.94,
      "input_usd_m": 0.94,
      "output_usd_m": 2.82,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_mistral_medium_3_5",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.59,
      "input_usd_m": 0.59,
      "output_usd_m": 1.77,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_mistral_medium_3_5",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.76,
      "input_usd_m": 0.76,
      "output_usd_m": 2.28,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_mistral_medium_3_5",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 1.02,
      "input_usd_m": 1.02,
      "output_usd_m": 3.06,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_mistral_medium_3_5",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 0.87,
      "output_usd_m": 2.61,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_mistral_medium_3_5",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.91,
      "input_usd_m": 0.91,
      "output_usd_m": 2.73,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_devstral_2",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 1.05,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_mistral_medium_3_5",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 0.88,
      "output_usd_m": 2.64,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_devstral_2",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.84,
      "output_usd_m": 2.52,
      "cache_read_usd_m": 0,
      "source_url": "https://www.together.ai"
    },
    {
      "model_id": "m_devstral_2",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.58,
      "input_usd_m": 0.58,
      "output_usd_m": 1.74,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_devstral_2",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 0.83,
      "output_usd_m": 2.49,
      "cache_read_usd_m": 0,
      "source_url": "https://portkey.ai"
    },
    {
      "model_id": "m_devstral_2",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.8,
      "output_usd_m": 2.4,
      "cache_read_usd_m": 0,
      "source_url": "https://vercel.com/docs/ai-gateway"
    },
    {
      "model_id": "m_devstral_2",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.89,
      "output_usd_m": 2.67,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_devstral_2",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 0.86,
      "output_usd_m": 2.58,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_devstral_2",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 0.79,
      "output_usd_m": 2.37,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_devstral_2",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.6,
      "input_usd_m": 0.6,
      "output_usd_m": 1.8,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_devstral_2",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.94,
      "input_usd_m": 0.94,
      "output_usd_m": 2.82,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_devstral_2",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 0.86,
      "output_usd_m": 2.58,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_devstral_2",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.72,
      "input_usd_m": 0.72,
      "output_usd_m": 2.16,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_claude_haiku_4_5",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.6,
      "input_usd_m": 0.6,
      "output_usd_m": 3,
      "cache_read_usd_m": 0.06,
      "source_url": "https://helicone.ai"
    },
    {
      "model_id": "m_claude_haiku_4_5",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.63,
      "input_usd_m": 0.63,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0.063,
      "source_url": "https://developers.cloudflare.com/ai-gateway"
    },
    {
      "model_id": "m_devstral_2",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.69,
      "input_usd_m": 0.69,
      "output_usd_m": 2.07,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_claude_haiku_4_5",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.6,
      "input_usd_m": 0.6,
      "output_usd_m": 3,
      "cache_read_usd_m": 0.06,
      "source_url": "https://vercel.com/docs/ai-gateway"
    },
    {
      "model_id": "m_claude_haiku_4_5",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.76,
      "input_usd_m": 0.76,
      "output_usd_m": 3.8,
      "cache_read_usd_m": 0.076,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_claude_haiku_4_5",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 0.85,
      "output_usd_m": 4.25,
      "cache_read_usd_m": 0.085,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_claude_haiku_4_5",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.65,
      "input_usd_m": 0.65,
      "output_usd_m": 3.25,
      "cache_read_usd_m": 0.065,
      "source_url": "https://portkey.ai"
    },
    {
      "model_id": "m_claude_haiku_4_5",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.62,
      "input_usd_m": 0.62,
      "output_usd_m": 3.1,
      "cache_read_usd_m": 0.062,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_claude_haiku_4_5",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 0.64,
      "output_usd_m": 3.2,
      "cache_read_usd_m": 0.064,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_devstral_2",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.7,
      "input_usd_m": 0.7,
      "output_usd_m": 2.1,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_claude_haiku_4_5",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.74,
      "input_usd_m": 0.74,
      "output_usd_m": 3.7,
      "cache_read_usd_m": 0.074,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_claude_haiku_4_5",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.84,
      "output_usd_m": 4.2,
      "cache_read_usd_m": 0.084,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_claude_haiku_4_5",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.94,
      "input_usd_m": 0.94,
      "output_usd_m": 4.7,
      "cache_read_usd_m": 0.094,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_claude_haiku_4_5",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.66,
      "input_usd_m": 0.66,
      "output_usd_m": 3.3,
      "cache_read_usd_m": 0.066,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_claude_haiku_4_5",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.76,
      "input_usd_m": 0.76,
      "output_usd_m": 3.8,
      "cache_read_usd_m": 0.076,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_claude_haiku_4_5",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.59,
      "input_usd_m": 0.59,
      "output_usd_m": 2.95,
      "cache_read_usd_m": 0.059,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_claude_haiku_4_5",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.84,
      "output_usd_m": 4.2,
      "cache_read_usd_m": 0.084,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_claude_haiku_4_5",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.63,
      "input_usd_m": 0.63,
      "output_usd_m": 3.15,
      "cache_read_usd_m": 0.063,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_claude_haiku_4_5",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 0.82,
      "output_usd_m": 4.1,
      "cache_read_usd_m": 0.082,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_claude_haiku_4_5",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.76,
      "input_usd_m": 0.76,
      "output_usd_m": 3.8,
      "cache_read_usd_m": 0.076,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_claude_haiku_4_5",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.71,
      "input_usd_m": 0.71,
      "output_usd_m": 3.55,
      "cache_read_usd_m": 0.071,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_claude_haiku_4_5",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 0.86,
      "output_usd_m": 4.3,
      "cache_read_usd_m": 0.086,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_gemini_3_flash_lite",
      "provider_id": "p_google_official",
      "is_official": 1,
      "multiplier": 1,
      "input_usd_m": 0.075,
      "output_usd_m": 0.3,
      "cache_read_usd_m": 0,
      "source_url": "https://aistudio.google.com"
    },
    {
      "model_id": "m_gemini_3_flash_lite",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.94,
      "input_usd_m": 0.07,
      "output_usd_m": 0.282,
      "cache_read_usd_m": 0,
      "source_url": "https://www.together.ai"
    },
    {
      "model_id": "m_gemini_3_flash_lite",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 0.058,
      "output_usd_m": 0.231,
      "cache_read_usd_m": 0,
      "source_url": "https://fireworks.ai"
    },
    {
      "model_id": "m_gemini_3_flash_lite",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 0.062,
      "output_usd_m": 0.249,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_gemini_3_flash_lite",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 0.079,
      "output_usd_m": 0.315,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_gemini_3_flash_lite",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.6,
      "input_usd_m": 0.045,
      "output_usd_m": 0.18,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_gemini_3_flash_lite",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.068,
      "output_usd_m": 0.27,
      "cache_read_usd_m": 0,
      "source_url": "https://portkey.ai"
    },
    {
      "model_id": "m_gemini_3_flash_lite",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.75,
      "input_usd_m": 0.056,
      "output_usd_m": 0.225,
      "cache_read_usd_m": 0,
      "source_url": "https://helicone.ai"
    },
    {
      "model_id": "m_gemini_3_flash_lite",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.068,
      "output_usd_m": 0.27,
      "cache_read_usd_m": 0,
      "source_url": "https://developers.cloudflare.com/ai-gateway"
    },
    {
      "model_id": "m_gemini_3_flash_lite",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.74,
      "input_usd_m": 0.056,
      "output_usd_m": 0.222,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_gemini_3_flash_lite",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 0.058,
      "output_usd_m": 0.234,
      "cache_read_usd_m": 0,
      "source_url": "https://vercel.com/docs/ai-gateway"
    },
    {
      "model_id": "m_gemini_3_flash_lite",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 0.055,
      "output_usd_m": 0.219,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_gemini_3_flash_lite",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.62,
      "input_usd_m": 0.046,
      "output_usd_m": 0.186,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_gemini_3_flash_lite",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.57,
      "input_usd_m": 0.043,
      "output_usd_m": 0.171,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_gemini_3_flash_lite",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.93,
      "input_usd_m": 0.07,
      "output_usd_m": 0.279,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_gemini_3_flash_lite",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.74,
      "input_usd_m": 0.056,
      "output_usd_m": 0.222,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_gemini_3_flash_lite",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 0.066,
      "output_usd_m": 0.264,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_gemini_3_flash_lite",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.71,
      "input_usd_m": 0.053,
      "output_usd_m": 0.213,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_gemini_3_flash_lite",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.57,
      "input_usd_m": 0.043,
      "output_usd_m": 0.171,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_gemini_3_flash_lite",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.58,
      "input_usd_m": 0.043,
      "output_usd_m": 0.174,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_gemini_3_flash_lite",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 0.061,
      "output_usd_m": 0.243,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_gemini_3_flash_lite",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.06,
      "output_usd_m": 0.24,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_gemini_3_flash_lite",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.98,
      "input_usd_m": 0.073,
      "output_usd_m": 0.294,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_gemini_3_flash_lite",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 0.065,
      "output_usd_m": 0.261,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_gemini_3_flash_lite",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.9,
      "input_usd_m": 0.068,
      "output_usd_m": 0.27,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_devstral_2",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.59,
      "input_usd_m": 0.59,
      "output_usd_m": 1.77,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_gemini_3_flash_lite",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.06,
      "output_usd_m": 0.24,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_grok_4_standard",
      "provider_id": "p_xai_official",
      "is_official": 1,
      "multiplier": 1,
      "input_usd_m": 2,
      "output_usd_m": 10,
      "cache_read_usd_m": 0,
      "source_url": "https://console.x.ai"
    },
    {
      "model_id": "m_grok_4_standard",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.86,
      "input_usd_m": 1.72,
      "output_usd_m": 8.6,
      "cache_read_usd_m": 0,
      "source_url": "https://www.together.ai"
    },
    {
      "model_id": "m_grok_4_standard",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 1.74,
      "output_usd_m": 8.7,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_grok_4_standard",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 1.58,
      "output_usd_m": 7.9,
      "cache_read_usd_m": 0,
      "source_url": "https://fireworks.ai"
    },
    {
      "model_id": "m_grok_4_standard",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 2.1,
      "output_usd_m": 10.5,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_grok_4_standard",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 1.46,
      "output_usd_m": 7.3,
      "cache_read_usd_m": 0,
      "source_url": "https://helicone.ai"
    },
    {
      "model_id": "m_grok_4_standard",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.76,
      "input_usd_m": 1.52,
      "output_usd_m": 7.6,
      "cache_read_usd_m": 0,
      "source_url": "https://portkey.ai"
    },
    {
      "model_id": "m_grok_4_standard",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 1.46,
      "output_usd_m": 7.3,
      "cache_read_usd_m": 0,
      "source_url": "https://developers.cloudflare.com/ai-gateway"
    },
    {
      "model_id": "m_grok_4_standard",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 1.28,
      "output_usd_m": 6.4,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_grok_4_standard",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 1.78,
      "output_usd_m": 8.9,
      "cache_read_usd_m": 0,
      "source_url": "https://vercel.com/docs/ai-gateway"
    },
    {
      "model_id": "m_grok_4_standard",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.95,
      "input_usd_m": 1.9,
      "output_usd_m": 9.5,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_grok_4_standard",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 1.34,
      "output_usd_m": 6.7,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_grok_4_standard",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 1.6,
      "output_usd_m": 8,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_grok_4_standard",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 1.7,
      "output_usd_m": 8.5,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_grok_4_standard",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.93,
      "input_usd_m": 1.86,
      "output_usd_m": 9.3,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_grok_4_standard",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 1.58,
      "output_usd_m": 7.9,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_grok_4_standard",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.63,
      "input_usd_m": 1.26,
      "output_usd_m": 6.3,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_grok_4_standard",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.63,
      "input_usd_m": 1.26,
      "output_usd_m": 6.3,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_grok_4_standard",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 1.62,
      "output_usd_m": 8.1,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_grok_4_standard",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 1.56,
      "output_usd_m": 7.8,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_grok_4_standard",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.62,
      "input_usd_m": 1.24,
      "output_usd_m": 6.2,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_llama_4_behemoth",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 2.075,
      "output_usd_m": 4.15,
      "cache_read_usd_m": 0,
      "source_url": "https://fireworks.ai"
    },
    {
      "model_id": "m_grok_4_standard",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.93,
      "input_usd_m": 1.86,
      "output_usd_m": 9.3,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_grok_4_standard",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.75,
      "input_usd_m": 1.5,
      "output_usd_m": 7.5,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_grok_4_standard",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 1.74,
      "output_usd_m": 8.7,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_grok_4_standard",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.74,
      "input_usd_m": 1.48,
      "output_usd_m": 7.4,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_grok_4_standard",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.61,
      "input_usd_m": 1.22,
      "output_usd_m": 6.1,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_llama_4_behemoth",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 2.075,
      "output_usd_m": 4.15,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_llama_4_behemoth",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 2.625,
      "output_usd_m": 5.25,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_llama_4_behemoth",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 2.3,
      "output_usd_m": 4.6,
      "cache_read_usd_m": 0,
      "source_url": "https://helicone.ai"
    },
    {
      "model_id": "m_llama_4_behemoth",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 2.05,
      "output_usd_m": 4.1,
      "cache_read_usd_m": 0,
      "source_url": "https://portkey.ai"
    },
    {
      "model_id": "m_llama_4_behemoth",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 1.825,
      "output_usd_m": 3.65,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_llama_4_behemoth",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 2.175,
      "output_usd_m": 4.35,
      "cache_read_usd_m": 0,
      "source_url": "https://developers.cloudflare.com/ai-gateway"
    },
    {
      "model_id": "m_llama_4_behemoth",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 1.6,
      "output_usd_m": 3.2,
      "cache_read_usd_m": 0,
      "source_url": "https://www.together.ai"
    },
    {
      "model_id": "m_llama_4_behemoth",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 2,
      "output_usd_m": 4,
      "cache_read_usd_m": 0,
      "source_url": "https://vercel.com/docs/ai-gateway"
    },
    {
      "model_id": "m_llama_4_behemoth",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 2.025,
      "output_usd_m": 4.05,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_llama_4_behemoth",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 2.3,
      "output_usd_m": 4.6,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_llama_4_behemoth",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.72,
      "input_usd_m": 1.8,
      "output_usd_m": 3.6,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_llama_4_behemoth",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 1.925,
      "output_usd_m": 3.85,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_llama_4_behemoth",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 2.2,
      "output_usd_m": 4.4,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_llama_4_behemoth",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.58,
      "input_usd_m": 1.45,
      "output_usd_m": 2.9,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_llama_4_behemoth",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.62,
      "input_usd_m": 1.55,
      "output_usd_m": 3.1,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_llama_4_behemoth",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 1.675,
      "output_usd_m": 3.35,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_llama_4_behemoth",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 2.125,
      "output_usd_m": 4.25,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_llama_4_behemoth",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.91,
      "input_usd_m": 2.275,
      "output_usd_m": 4.55,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_llama_4_behemoth",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.81,
      "input_usd_m": 2.025,
      "output_usd_m": 4.05,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_llama_4_behemoth",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.98,
      "input_usd_m": 2.45,
      "output_usd_m": 4.9,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_llama_4_behemoth",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 2.175,
      "output_usd_m": 4.35,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_llama_4_behemoth",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 2,
      "output_usd_m": 4,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_llama_4_behemoth",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 1.95,
      "output_usd_m": 3.9,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_llama_4_behemoth",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 1.03,
      "input_usd_m": 2.575,
      "output_usd_m": 5.15,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_mistral_large_4",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.93,
      "input_usd_m": 1.86,
      "output_usd_m": 5.58,
      "cache_read_usd_m": 0,
      "source_url": "https://www.together.ai"
    },
    {
      "model_id": "m_mistral_large_4",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.75,
      "input_usd_m": 1.5,
      "output_usd_m": 4.5,
      "cache_read_usd_m": 0,
      "source_url": "https://fireworks.ai"
    },
    {
      "model_id": "m_mistral_large_4",
      "provider_id": "p_mistral_official",
      "is_official": 1,
      "multiplier": 1,
      "input_usd_m": 2,
      "output_usd_m": 6,
      "cache_read_usd_m": 0,
      "source_url": "https://console.mistral.ai"
    },
    {
      "model_id": "m_mistral_large_4",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.75,
      "input_usd_m": 1.5,
      "output_usd_m": 4.5,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_mistral_large_4",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 2.1,
      "output_usd_m": 6.3,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_mistral_large_4",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.57,
      "input_usd_m": 1.14,
      "output_usd_m": 3.42,
      "cache_read_usd_m": 0,
      "source_url": "https://portkey.ai"
    },
    {
      "model_id": "m_mistral_large_4",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.68,
      "input_usd_m": 1.36,
      "output_usd_m": 4.08,
      "cache_read_usd_m": 0,
      "source_url": "https://developers.cloudflare.com/ai-gateway"
    },
    {
      "model_id": "m_mistral_large_4",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.65,
      "input_usd_m": 1.3,
      "output_usd_m": 3.9,
      "cache_read_usd_m": 0,
      "source_url": "https://vercel.com/docs/ai-gateway"
    },
    {
      "model_id": "m_mistral_large_4",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.59,
      "input_usd_m": 1.18,
      "output_usd_m": 3.54,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_mistral_large_4",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.58,
      "input_usd_m": 1.16,
      "output_usd_m": 3.48,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_mistral_large_4",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 1.76,
      "output_usd_m": 5.28,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_mistral_large_4",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.72,
      "input_usd_m": 1.44,
      "output_usd_m": 4.32,
      "cache_read_usd_m": 0,
      "source_url": "https://helicone.ai"
    },
    {
      "model_id": "m_mistral_large_4",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.93,
      "input_usd_m": 1.86,
      "output_usd_m": 5.58,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_mistral_large_4",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.78,
      "input_usd_m": 1.56,
      "output_usd_m": 4.68,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_mistral_large_4",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.93,
      "input_usd_m": 1.86,
      "output_usd_m": 5.58,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_mistral_large_4",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 1.7,
      "output_usd_m": 5.1,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_mistral_large_4",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 1.12,
      "input_usd_m": 2.24,
      "output_usd_m": 6.72,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_mistral_large_4",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.74,
      "input_usd_m": 1.48,
      "output_usd_m": 4.44,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_command_r_plus",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.76,
      "input_usd_m": 1.9,
      "output_usd_m": 7.6,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_command_r_plus",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.71,
      "input_usd_m": 1.775,
      "output_usd_m": 7.1,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_mistral_large_4",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 1.64,
      "output_usd_m": 4.92,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_mistral_large_4",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.66,
      "input_usd_m": 1.32,
      "output_usd_m": 3.96,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_mistral_large_4",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.95,
      "input_usd_m": 1.9,
      "output_usd_m": 5.7,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_command_r_plus",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.95,
      "input_usd_m": 2.375,
      "output_usd_m": 9.5,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_command_r_plus",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 1.01,
      "input_usd_m": 2.525,
      "output_usd_m": 10.1,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_command_r_plus",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 2.3,
      "output_usd_m": 9.2,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_mistral_large_4",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.57,
      "input_usd_m": 1.14,
      "output_usd_m": 3.42,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_command_r_plus",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 2.225,
      "output_usd_m": 8.9,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_command_r_plus",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.97,
      "input_usd_m": 2.425,
      "output_usd_m": 9.7,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_command_r_plus",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.58,
      "input_usd_m": 1.45,
      "output_usd_m": 5.8,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_jamba_2",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 0.34,
      "output_usd_m": 0.68,
      "cache_read_usd_m": 0,
      "source_url": "https://www.together.ai"
    },
    {
      "model_id": "m_mistral_large_4",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 1.01,
      "input_usd_m": 2.02,
      "output_usd_m": 6.06,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_jamba_2",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.32,
      "output_usd_m": 0.64,
      "cache_read_usd_m": 0,
      "source_url": "https://fireworks.ai"
    },
    {
      "model_id": "m_jamba_2",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 0.34,
      "output_usd_m": 0.68,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_jamba_2",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 0.42,
      "output_usd_m": 0.84,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_jamba_2",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.63,
      "input_usd_m": 0.252,
      "output_usd_m": 0.504,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_jamba_2",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 0.308,
      "output_usd_m": 0.616,
      "cache_read_usd_m": 0,
      "source_url": "https://portkey.ai"
    },
    {
      "model_id": "m_jamba_2",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 0.368,
      "output_usd_m": 0.736,
      "cache_read_usd_m": 0,
      "source_url": "https://helicone.ai"
    },
    {
      "model_id": "m_jamba_2",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.83,
      "input_usd_m": 0.332,
      "output_usd_m": 0.664,
      "cache_read_usd_m": 0,
      "source_url": "https://vercel.com/docs/ai-gateway"
    },
    {
      "model_id": "m_jamba_2",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 0.292,
      "output_usd_m": 0.584,
      "cache_read_usd_m": 0,
      "source_url": "https://developers.cloudflare.com/ai-gateway"
    },
    {
      "model_id": "m_jamba_2",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.6,
      "input_usd_m": 0.24,
      "output_usd_m": 0.48,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_jamba_2",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.94,
      "input_usd_m": 0.376,
      "output_usd_m": 0.752,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_jamba_2",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 0.316,
      "output_usd_m": 0.632,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_jamba_2",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 0.308,
      "output_usd_m": 0.616,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_jamba_2",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.59,
      "input_usd_m": 0.236,
      "output_usd_m": 0.472,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_jamba_2",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.61,
      "input_usd_m": 0.244,
      "output_usd_m": 0.488,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_jamba_2",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 0.292,
      "output_usd_m": 0.584,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_jamba_2",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 0.308,
      "output_usd_m": 0.616,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_jamba_2",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 0.368,
      "output_usd_m": 0.736,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_jamba_2",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 0.8,
      "input_usd_m": 0.32,
      "output_usd_m": 0.64,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_jamba_2",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.95,
      "input_usd_m": 0.38,
      "output_usd_m": 0.76,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_jamba_2",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.65,
      "input_usd_m": 0.26,
      "output_usd_m": 0.52,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_jamba_2",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 1.08,
      "input_usd_m": 0.432,
      "output_usd_m": 0.864,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_jamba_2",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.95,
      "input_usd_m": 0.38,
      "output_usd_m": 0.76,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_jamba_2",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.79,
      "input_usd_m": 0.316,
      "output_usd_m": 0.632,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_qwen3_coder",
      "provider_id": "p_qwen_official",
      "is_official": 1,
      "multiplier": 1,
      "input_usd_m": 0.5,
      "output_usd_m": 2,
      "cache_read_usd_m": 0,
      "source_url": "https://bailian.console.aliyun.com"
    },
    {
      "model_id": "m_jamba_2",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.95,
      "input_usd_m": 0.38,
      "output_usd_m": 0.76,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_qwen3_coder",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.66,
      "input_usd_m": 0.33,
      "output_usd_m": 1.32,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_qwen3_coder",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 0.525,
      "output_usd_m": 2.1,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_qwen3_coder",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 0.44,
      "output_usd_m": 1.76,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_qwen3_coder",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.94,
      "input_usd_m": 0.47,
      "output_usd_m": 1.88,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_llama_4_70b",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 0.264,
      "output_usd_m": 0.528,
      "cache_read_usd_m": 0,
      "source_url": "https://portkey.ai"
    },
    {
      "model_id": "m_qwen3_coder",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.65,
      "input_usd_m": 0.325,
      "output_usd_m": 1.3,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_llama_4_70b",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.76,
      "input_usd_m": 0.228,
      "output_usd_m": 0.456,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_llama_4_70b",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 0.315,
      "output_usd_m": 0.63,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_qwen3_coder",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.77,
      "input_usd_m": 0.385,
      "output_usd_m": 1.54,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_llama_4_70b",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.92,
      "input_usd_m": 0.276,
      "output_usd_m": 0.552,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_llama_4_70b",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.94,
      "input_usd_m": 0.282,
      "output_usd_m": 0.564,
      "cache_read_usd_m": 0,
      "source_url": "https://fireworks.ai"
    },
    {
      "model_id": "m_llama_4_70b",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.65,
      "input_usd_m": 0.195,
      "output_usd_m": 0.39,
      "cache_read_usd_m": 0,
      "source_url": "https://helicone.ai"
    },
    {
      "model_id": "m_llama_4_70b",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 0.264,
      "output_usd_m": 0.528,
      "cache_read_usd_m": 0,
      "source_url": "https://developers.cloudflare.com/ai-gateway"
    },
    {
      "model_id": "m_llama_4_70b",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 0.255,
      "output_usd_m": 0.51,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_llama_4_70b",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.61,
      "input_usd_m": 0.183,
      "output_usd_m": 0.366,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_llama_4_70b",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.69,
      "input_usd_m": 0.207,
      "output_usd_m": 0.414,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_llama_4_70b",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.94,
      "input_usd_m": 0.282,
      "output_usd_m": 0.564,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_llama_4_70b",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.6,
      "input_usd_m": 0.18,
      "output_usd_m": 0.36,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_llama_4_70b",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 0.261,
      "output_usd_m": 0.522,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_llama_4_70b",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.94,
      "input_usd_m": 0.282,
      "output_usd_m": 0.564,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_llama_4_70b",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.267,
      "output_usd_m": 0.534,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_llama_4_70b",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.84,
      "input_usd_m": 0.252,
      "output_usd_m": 0.504,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_llama_4_70b",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.94,
      "input_usd_m": 0.282,
      "output_usd_m": 0.564,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_mistral_7b_v3",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.88,
      "input_usd_m": 0.044,
      "output_usd_m": 0.088,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_llama_4_70b",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 1.07,
      "input_usd_m": 0.321,
      "output_usd_m": 0.642,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_llama_4_70b",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.74,
      "input_usd_m": 0.222,
      "output_usd_m": 0.444,
      "cache_read_usd_m": 0,
      "source_url": "https://vercel.com/docs/ai-gateway"
    },
    {
      "model_id": "m_llama_4_70b",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.94,
      "input_usd_m": 0.282,
      "output_usd_m": 0.564,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_mistral_7b_v3",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.91,
      "input_usd_m": 0.046,
      "output_usd_m": 0.091,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_mistral_7b_v3",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.67,
      "input_usd_m": 0.034,
      "output_usd_m": 0.067,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_mistral_7b_v3",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.71,
      "input_usd_m": 0.035,
      "output_usd_m": 0.071,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_mistral_7b_v3",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.61,
      "input_usd_m": 0.03,
      "output_usd_m": 0.061,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_mistral_7b_v3",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 1.13,
      "input_usd_m": 0.056,
      "output_usd_m": 0.113,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_mistral_7b_v3",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.87,
      "input_usd_m": 0.044,
      "output_usd_m": 0.087,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_mistral_7b_v3",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 0.95,
      "input_usd_m": 0.048,
      "output_usd_m": 0.095,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_mistral_7b_v3",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 1.1,
      "input_usd_m": 0.055,
      "output_usd_m": 0.11,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_mistral_7b_v3",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.54,
      "input_usd_m": 0.027,
      "output_usd_m": 0.054,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_phi_4",
      "provider_id": "p_together_ai",
      "is_official": 0,
      "multiplier": 0.6,
      "input_usd_m": 0.042,
      "output_usd_m": 0.084,
      "cache_read_usd_m": 0,
      "source_url": "https://www.together.ai"
    },
    {
      "model_id": "m_phi_4",
      "provider_id": "p_fireworks_ai",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 0.051,
      "output_usd_m": 0.102,
      "cache_read_usd_m": 0,
      "source_url": "https://fireworks.ai"
    },
    {
      "model_id": "m_phi_4",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.82,
      "input_usd_m": 0.057,
      "output_usd_m": 0.115,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_phi_4",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 0.06,
      "output_usd_m": 0.119,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_phi_4",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 0.074,
      "output_usd_m": 0.147,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_phi_4",
      "provider_id": "p_helicone",
      "is_official": 0,
      "multiplier": 0.72,
      "input_usd_m": 0.05,
      "output_usd_m": 0.101,
      "cache_read_usd_m": 0,
      "source_url": "https://helicone.ai"
    },
    {
      "model_id": "m_phi_4",
      "provider_id": "p_cloudflare_ai",
      "is_official": 0,
      "multiplier": 0.85,
      "input_usd_m": 0.06,
      "output_usd_m": 0.119,
      "cache_read_usd_m": 0,
      "source_url": "https://developers.cloudflare.com/ai-gateway"
    },
    {
      "model_id": "m_phi_4",
      "provider_id": "p_duckcoding",
      "is_official": 0,
      "multiplier": 0.75,
      "input_usd_m": 0.053,
      "output_usd_m": 0.105,
      "cache_read_usd_m": 0,
      "source_url": "https://duckcoding.com"
    },
    {
      "model_id": "m_phi_4",
      "provider_id": "p_portkey",
      "is_official": 0,
      "multiplier": 0.93,
      "input_usd_m": 0.065,
      "output_usd_m": 0.13,
      "cache_read_usd_m": 0,
      "source_url": "https://portkey.ai"
    },
    {
      "model_id": "m_phi_4",
      "provider_id": "p_api2d",
      "is_official": 0,
      "multiplier": 0.71,
      "input_usd_m": 0.05,
      "output_usd_m": 0.099,
      "cache_read_usd_m": 0,
      "source_url": "https://api2d.com"
    },
    {
      "model_id": "m_phi_4",
      "provider_id": "p_new_api",
      "is_official": 0,
      "multiplier": 0.59,
      "input_usd_m": 0.041,
      "output_usd_m": 0.083,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/QuantumNous/new-api"
    },
    {
      "model_id": "m_phi_4",
      "provider_id": "p_closeai",
      "is_official": 0,
      "multiplier": 0.56,
      "input_usd_m": 0.039,
      "output_usd_m": 0.078,
      "cache_read_usd_m": 0,
      "source_url": "https://closeai.info"
    },
    {
      "model_id": "m_phi_4",
      "provider_id": "p_aicnb",
      "is_official": 0,
      "multiplier": 0.93,
      "input_usd_m": 0.065,
      "output_usd_m": 0.13,
      "cache_read_usd_m": 0,
      "source_url": "https://aicnb.com"
    },
    {
      "model_id": "m_phi_4",
      "provider_id": "p_woka_ai",
      "is_official": 0,
      "multiplier": 0.7,
      "input_usd_m": 0.049,
      "output_usd_m": 0.098,
      "cache_read_usd_m": 0,
      "source_url": "https://wokaai.com"
    },
    {
      "model_id": "m_phi_4",
      "provider_id": "p_azure_openai",
      "is_official": 0,
      "multiplier": 0.93,
      "input_usd_m": 0.065,
      "output_usd_m": 0.13,
      "cache_read_usd_m": 0,
      "source_url": "https://oai.azure.com"
    },
    {
      "model_id": "m_phi_4",
      "provider_id": "p_chatfire",
      "is_official": 0,
      "multiplier": 0.73,
      "input_usd_m": 0.051,
      "output_usd_m": 0.102,
      "cache_read_usd_m": 0,
      "source_url": "https://chatfire.cn"
    },
    {
      "model_id": "m_phi_4",
      "provider_id": "p_vertex_ai",
      "is_official": 0,
      "multiplier": 0.59,
      "input_usd_m": 0.041,
      "output_usd_m": 0.083,
      "cache_read_usd_m": 0,
      "source_url": "https://cloud.google.com/vertex-ai"
    },
    {
      "model_id": "m_phi_4",
      "provider_id": "p_bedrock",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.062,
      "output_usd_m": 0.125,
      "cache_read_usd_m": 0,
      "source_url": "https://aws.amazon.com/bedrock"
    },
    {
      "model_id": "m_phi_4",
      "provider_id": "p_huggingface_inference",
      "is_official": 0,
      "multiplier": 1.02,
      "input_usd_m": 0.071,
      "output_usd_m": 0.143,
      "cache_read_usd_m": 0,
      "source_url": "https://huggingface.co/inference-endpoints"
    },
    {
      "model_id": "m_phi_4",
      "provider_id": "p_replicate",
      "is_official": 0,
      "multiplier": 0.97,
      "input_usd_m": 0.068,
      "output_usd_m": 0.136,
      "cache_read_usd_m": 0,
      "source_url": "https://replicate.com"
    },
    {
      "model_id": "m_phi_4",
      "provider_id": "p_cerebrium",
      "is_official": 0,
      "multiplier": 1.14,
      "input_usd_m": 0.08,
      "output_usd_m": 0.16,
      "cache_read_usd_m": 0,
      "source_url": "https://www.cerebrium.ai"
    },
    {
      "model_id": "m_phi_4",
      "provider_id": "p_lmstudio_cloud",
      "is_official": 0,
      "multiplier": 0.64,
      "input_usd_m": 0.045,
      "output_usd_m": 0.09,
      "cache_read_usd_m": 0,
      "source_url": "https://lmstudio.ai"
    },
    {
      "model_id": "m_phi_4",
      "provider_id": "p_coze",
      "is_official": 0,
      "multiplier": 0.91,
      "input_usd_m": 0.064,
      "output_usd_m": 0.127,
      "cache_read_usd_m": 0,
      "source_url": "https://www.coze.cn"
    },
    {
      "model_id": "m_qwen2_5_coder_32b",
      "provider_id": "p_qwen_official",
      "is_official": 1,
      "multiplier": 1,
      "input_usd_m": 0.2,
      "output_usd_m": 0.6,
      "cache_read_usd_m": 0,
      "source_url": "https://bailian.console.aliyun.com"
    },
    {
      "model_id": "m_qwen2_5_coder_32b",
      "provider_id": "p_anyscale",
      "is_official": 0,
      "multiplier": 0.63,
      "input_usd_m": 0.126,
      "output_usd_m": 0.378,
      "cache_read_usd_m": 0,
      "source_url": "https://www.anyscale.com"
    },
    {
      "model_id": "m_phi_4",
      "provider_id": "p_vercel_ai_gateway",
      "is_official": 0,
      "multiplier": 0.61,
      "input_usd_m": 0.043,
      "output_usd_m": 0.085,
      "cache_read_usd_m": 0,
      "source_url": "https://vercel.com/docs/ai-gateway"
    },
    {
      "model_id": "m_qwen2_5_coder_32b",
      "provider_id": "p_openrouter",
      "is_official": 0,
      "multiplier": 1.05,
      "input_usd_m": 0.21,
      "output_usd_m": 0.63,
      "cache_read_usd_m": 0,
      "source_url": "https://openrouter.ai"
    },
    {
      "model_id": "m_qwen2_5_coder_32b",
      "provider_id": "p_litellm",
      "is_official": 0,
      "multiplier": 0.6,
      "input_usd_m": 0.12,
      "output_usd_m": 0.36,
      "cache_read_usd_m": 0,
      "source_url": "https://litellm.ai"
    },
    {
      "model_id": "m_qwen2_5_coder_32b",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.89,
      "input_usd_m": 0.178,
      "output_usd_m": 0.534,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    },
    {
      "model_id": "m_phi_4",
      "provider_id": "p_one_api",
      "is_official": 0,
      "multiplier": 0.72,
      "input_usd_m": 0.05,
      "output_usd_m": 0.101,
      "cache_read_usd_m": 0,
      "source_url": "https://github.com/songquanpeng/one-api"
    }
  ],
  "events": [
    {
      "id": "e_2026_07_qwen38max",
      "date": "2026-08-15",
      "title": "阿里发布 Qwen3.8 Max，多模态 APAC 第一",
      "description": "Qwen3.8 Max 采用全新线性注意力架构，90% 标准注意力被替换，1M 上下文原生多模态",
      "event_type": "new_model",
      "target_type": "model",
      "target_name": "Qwen3.8 Max",
      "severity": "medium",
      "tags": [
        "new_model"
      ],
      "source_urls": [
        "https://qwen.ai"
      ]
    },
    {
      "id": "e_2026_08_minimax_m3",
      "date": "2026-08-12",
      "title": "MiniMax 发布 M3，1M 上下文长文档",
      "description": "MiniMax M3 升级 1M 上下文窗口，主打长文档处理",
      "event_type": "new_model",
      "target_type": "model",
      "target_name": "MiniMax M3",
      "severity": "low",
      "tags": [
        "new_model"
      ],
      "source_urls": [
        "https://api.minimax.chat"
      ]
    },
    {
      "id": "e_2026_07_kimi_k3",
      "date": "2026-07-27",
      "title": "Moonshot Kimi K3 API 上线，开源倒计时",
      "description": "Kimi K3 (1T MoE, 32B 激活) API 开放，权重将于 2026-07-27 开源",
      "event_type": "new_model",
      "target_type": "model",
      "target_name": "Kimi K3",
      "severity": "medium",
      "tags": [
        "new_model"
      ],
      "source_urls": [
        "https://kimi.moonshot.cn"
      ]
    },
    {
      "id": "e_2026_07_claude_opus_5",
      "date": "2026-07-24",
      "title": "Anthropic 发布 Claude Opus 5，价格不变",
      "description": "Opus 5 在深度推理和 long-horizon agent 工作上大幅提升，价格保持 $5/$25",
      "event_type": "new_model",
      "target_type": "model",
      "target_name": "Claude Opus 5",
      "severity": "high",
      "tags": [
        "new_model",
        "capability_update"
      ],
      "source_urls": [
        "https://anthropic.com"
      ]
    },
    {
      "id": "e_2026_07_gpt_5_6_sol",
      "date": "2026-07-09",
      "title": "OpenAI 发布 GPT-5.6 Sol，3 个版本",
      "description": "GPT-5.6 Sol / Terra / Luna 三个版本，主打 agentic 终端工作流",
      "event_type": "new_model",
      "target_type": "model",
      "target_name": "GPT-5.6 Sol",
      "severity": "high",
      "tags": [
        "new_model",
        "capability_update"
      ],
      "source_urls": [
        "https://openai.com"
      ]
    },
    {
      "id": "e_2026_06_glm_5_2",
      "date": "2026-06-13",
      "title": "智谱发布 GLM-5.2，国产最强 Agent",
      "description": "GLM-5.2 (753B MoE, ~40B 激活) 适配 7 大国产芯片平台，1M 上下文",
      "event_type": "new_model",
      "target_type": "model",
      "target_name": "GLM-5.2",
      "severity": "medium",
      "tags": [
        "new_model"
      ],
      "source_urls": [
        "https://zhipuai.cn"
      ]
    },
    {
      "id": "e_2026_05_deepseek_v4",
      "date": "2026-05-31",
      "title": "DeepSeek V4 永久降价 75%",
      "description": "DeepSeek V4 Pro 价格从 $1.74/$3.48 永久降至 $0.435/$0.87",
      "event_type": "price_change",
      "target_type": "model",
      "target_name": "DeepSeek V4 Pro",
      "severity": "medium",
      "tags": [
        "price_change"
      ],
      "source_urls": [
        "https://platform.deepseek.com"
      ]
    },
    {
      "id": "e_2026_05_qwen3_7",
      "date": "2026-05-20",
      "title": "Qwen3.7 Max 在云栖大会发布",
      "description": "Qwen3.7 Max (1M 上下文 + Extended Thinking) 在杭州云栖发布",
      "event_type": "new_model",
      "target_type": "model",
      "target_name": "Qwen3.7 Max",
      "severity": "medium",
      "tags": [
        "new_model"
      ],
      "source_urls": [
        "https://qwen.ai"
      ]
    },
    {
      "id": "e_2026_04_deepseek_v4",
      "date": "2026-04-24",
      "title": "DeepSeek V4 系列发布，1M 上下文普惠",
      "description": "DeepSeek V4 Pro / Flash / 完整 1M 上下文标准，Agent 与代码能力对标顶尖闭源",
      "event_type": "new_model",
      "target_type": "model",
      "target_name": "DeepSeek V4 Pro",
      "severity": "high",
      "tags": [
        "new_model",
        "capability_update"
      ],
      "source_urls": [
        "https://platform.deepseek.com"
      ]
    },
    {
      "id": "e_2026_04_kimi_k2_6",
      "date": "2026-04-20",
      "title": "Moonshot K2.6 + Qwen3.6 Max 同日发布",
      "description": "K2.6 SWE-bench 80.2% 反超 GPT-5.4，Qwen3.6 Max 横扫 6 项 Agent 基准",
      "event_type": "new_model",
      "target_type": "model",
      "target_name": "Kimi K2.6",
      "severity": "medium",
      "tags": [
        "new_model"
      ],
      "source_urls": [
        "https://kimi.moonshot.cn"
      ]
    },
    {
      "id": "e_2026_03_glm_5_1",
      "date": "2026-03-27",
      "title": "GLM-5.1 发布，94% Claude Opus 4.6 编码能力",
      "description": "MIT 许可证，适配国产芯片，编码能力达 Claude Opus 4.6 的 94%",
      "event_type": "new_model",
      "target_type": "model",
      "target_name": "GLM-5.1",
      "severity": "low",
      "tags": [
        "new_model"
      ],
      "source_urls": [
        "https://zhipuai.cn"
      ]
    },
    {
      "id": "e_2026_06_portkey_open",
      "date": "2026-03-24",
      "title": "Portkey 网关 Apache 2.0 开源",
      "description": "Portkey 把完整网关代码 Apache 2.0 开源，企业级护城河+开源优势",
      "event_type": "policy_change",
      "target_type": "provider",
      "target_name": "Portkey",
      "severity": "low",
      "tags": [
        "policy_change"
      ],
      "source_urls": [
        "https://portkey.ai"
      ]
    },
    {
      "id": "e_2026_03_minimax_m2_7",
      "date": "2026-03-18",
      "title": "MiniMax M2.7 发布，自我进化 Agent",
      "description": "MiniMax M2.7 引入 self-evolving agent 能力，200K 上下文",
      "event_type": "new_model",
      "target_type": "model",
      "target_name": "MiniMax M2.7",
      "severity": "low",
      "tags": [
        "new_model",
        "capability_update"
      ],
      "source_urls": [
        "https://api.minimax.chat"
      ]
    }
  ],
  "fx_rate": {
    "USD_CNY": 7.1,
    "date": "2026-09-20"
  }
};
