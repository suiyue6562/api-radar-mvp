// 自动生成：backend/scripts/ai_maintain.py（MiniMax M3）
// 每日两次更新，请勿手改。
var API_RADAR_AI = {
 "generated_at": "2026-09-22T16:38:32",
 "providers": {
  "p_huggingface_inference": {
   "ai": {
    "features": [
     "全球部署开源AI模型",
     "按GPU时长灵活计费",
     "兼容OpenAI与Anthropic协议"
    ],
    "highlights": "全球开源模型推理平台，按GPU时长计费灵活可控",
    "suitable_for": [
     "开源模型应用开发者",
     "多协议兼容需求方",
     "成本敏感型AI项目"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 0,
    "latency_ms": 8040,
    "final_url": "",
    "title": "",
    "meta": "",
    "error": "ConnectTimeout: HTTPSConnectionPool(host='huggingface.co', port=443): Max retries exceeded with url: /inference-endpoints (Caused by Con"
   },
   "generated_at": "2026-09-22T16:25:58"
  },
  "p_replicate": {
   "ai": {
    "features": [
     "云端运行开源机器学习模型",
     "按秒计费，按需控制成本",
     "兼容OpenAI与Anthropic协议"
    ],
    "highlights": "云端按秒计费运行开源模型，灵活低成本接入AI能力",
    "suitable_for": [
     "开源模型应用开发者",
     "AI原型快速验证团队",
     "按需付费的小型项目方"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 200,
    "latency_ms": 1293,
    "final_url": "https://replicate.com/",
    "title": "Replicate - Run AI with an API",
    "meta": "Run open-source machine learning models with a cloud API",
    "error": ""
   },
   "generated_at": "2026-09-22T16:25:58"
  },
  "p_cerebrium": {
   "ai": {
    "features": [
     "无服务器GPU基础设施",
     "秒级冷启动，按秒计费",
     "兼容OpenAI与Anthropic协议"
    ],
    "highlights": "无服务器GPU，按秒计费且冷启动极快",
    "suitable_for": [
     "实时语音/视频AI代理",
     "LLM低延迟部署团队",
     "不想运维Kubernetes的开发者"
    ],
    "data_check": {
     "consistent": false,
     "issues": [
      "登记写「按请求计费」，页面实际是「按秒计费」，计费单位不一致"
     ]
    }
   },
   "probe": {
    "status": 200,
    "latency_ms": 1132,
    "final_url": "https://cerebrium.ai/",
    "title": "Serverless GPU Infrastructure for Real-Time AI |Â Cerebrium",
    "meta": "Deploy voice agents, video models, and LLMs on serverless GPUs with sub-second cold starts. Pay-per-second pricing. No Kubernetes.",
    "error": ""
   },
   "generated_at": "2026-09-22T16:25:58"
  },
  "p_lmstudio_cloud": {
   "ai": {
    "features": [
     "支持本地或前沿开源模型",
     "面向工作与编程的AI智能体",
     "可生成文档、幻灯片与软件"
    ],
    "highlights": "本地与云端开源模型驱动的智能体服务",
    "suitable_for": [
     "个人开发者",
     "本地模型用户",
     "文档自动化场景"
    ],
    "data_check": {
     "consistent": false,
     "issues": [
      "页面为LM Studio Bionic智能体，与登记的LM Studio Cloud名称不一致",
      "页面未体现OpenAI协议等API中转站核心特征",
      "页面未提供SLA或99.5%可用性信息"
     ]
    }
   },
   "probe": {
    "status": 200,
    "latency_ms": 1170,
    "final_url": "https://lmstudio.ai/",
    "title": "LM Studio Bionic - Agent for Work and Code",
    "meta": "Bionic is LM Studio&#x27;s agent for work and code. Create documents, slides, PDFs, and software with local or frontier open models.",
    "error": ""
   },
   "generated_at": "2026-09-22T16:25:58"
  },
  "p_coze": {
   "ai": {
    "features": [
     "字节跳动推出的AI Bot平台",
     "支持可视化创建智能体应用",
     "兼容OpenAI和Claude协议"
    ],
    "highlights": "字节系国产GPTs平台，支持多模型协议，企业部署友好",
    "suitable_for": [
     "AI应用开发者",
     "中小企业团队",
     "个人创作者"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 200,
    "latency_ms": 106,
    "final_url": "https://www.coze.cn/",
    "title": "",
    "meta": "",
    "error": ""
   },
   "generated_at": "2026-09-22T16:25:58"
  },
  "p_azure_openai": {
   "ai": {
    "features": [
     "微软Azure官方平台服务",
     "OpenAI协议全兼容",
     "99.9%高可用SLA保障"
    ],
    "highlights": "微软Azure官方OpenAI服务，企业级稳定性与合规保障",
    "suitable_for": [
     "企业级用户",
     "大规模生产部署",
     "合规安全需求"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 0,
    "latency_ms": 7230,
    "final_url": "",
    "title": "",
    "meta": "",
    "error": "ReadTimeout: HTTPSConnectionPool(host='azure.microsoft.com', port=443): Read timed out. (read timeout=7)"
   },
   "generated_at": "2026-09-22T16:25:58"
  },
  "p_bedrock": {
   "ai": {
    "features": [
     "多模型统一托管平台",
     "兼容OpenAI与Anthropic协议",
     "99.9%企业级SLA保障"
    ],
    "highlights": "AWS托管多款主流模型，企业级稳定，支持双协议接入",
    "suitable_for": [
     "企业级AI应用开发",
     "多模型对比测试",
     "生产环境部署"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 200,
    "latency_ms": 886,
    "final_url": "https://aws.amazon.com/bedrock/",
    "title": "Amazon Bedrock – Build genAI applications and agents at production scale – AWS",
    "meta": "Amazon Bedrock: The platform for building generative AI applications and agents at production scale",
    "error": ""
   },
   "generated_at": "2026-09-22T16:25:58"
  },
  "p_vertex_ai": {
   "ai": {
    "features": [
     "基于GCP，全球可用企业级AI平台",
     "支持OpenAI协议，兼容主流接口",
     "提供免费试用，可开发票结算"
    ],
    "highlights": "GCP托管的全球AI模型平台，兼容OpenAI协议",
    "suitable_for": [
     "企业级AI应用开发者",
     "GCP生态用户",
     "多模型集成需求方"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 0,
    "latency_ms": 40108,
    "final_url": "",
    "title": "",
    "meta": "",
    "error": "ConnectTimeout: HTTPSConnectionPool(host='cloud.google.com', port=443): Max retries exceeded with url: /vertex-ai (Caused by ConnectTime"
   },
   "generated_at": "2026-09-22T16:25:58"
  },
  "p_anthropic_official": {
   "probe": {
    "status": 403,
    "latency_ms": 1349,
    "final_url": "https://platform.claude.com/",
    "title": "Just a moment...",
    "meta": "",
    "error": ""
   },
   "generated_at": "2026-09-22T16:29:46",
   "ai_error": "no JSON in response"
  },
  "p_openai_official": {
   "ai": {
    "features": [
     "官方认证渠道，支持开具发票",
     "仅支持 OpenAI 协议",
     "全球区域，美元结算"
    ],
    "highlights": "官方渠道直连 OpenAI API，可开发票",
    "suitable_for": [
     "需开发票的企业用户",
     "OpenAI API 调用者",
     "追求官方授权的用户"
    ],
    "data_check": {
     "consistent": false,
     "issues": [
      "实测页面返回 Cloudflare 403 拦截，与「官方直连」登记说明矛盾",
      "官方页面无法访问，4.0 评分与 SLA 99.5% 难以验证"
     ]
    }
   },
   "probe": {
    "status": 403,
    "latency_ms": 608,
    "final_url": "https://platform.openai.com/",
    "title": "Attention Required! | Cloudflare",
    "meta": "",
    "error": ""
   },
   "generated_at": "2026-09-22T16:29:46"
  },
  "p_google_official": {
   "ai": {
    "features": [
     "Google官方出品，Gemini模型直连",
     "支持OpenAI兼容协议调用",
     "免费额度与付费层并存可选"
    ],
    "highlights": "Google官方Gemini接口，OpenAI协议兼容，全球稳定可用",
    "suitable_for": [
     "Gemini模型开发者测试",
     "OpenAI协议迁移接入",
     "跨境AI业务部署"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 0,
    "latency_ms": 40126,
    "final_url": "",
    "title": "",
    "meta": "",
    "error": "ConnectTimeout: HTTPSConnectionPool(host='aistudio.google.com', port=443): Max retries exceeded with url: / (Caused by ConnectTimeoutErr"
   },
   "generated_at": "2026-09-22T16:29:46"
  },
  "p_xai_official": {
   "ai": {
    "features": [
     "官方直连xAI模型服务",
     "支持OpenAI协议兼容",
     "可开具正规发票"
    ],
    "highlights": "官方直连通道，OpenAI协议兼容，可开正规发票",
    "suitable_for": [
     "企业合规用户",
     "海外业务团队",
     "需发票报销方"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 0,
    "latency_ms": 8050,
    "final_url": "",
    "title": "",
    "meta": "",
    "error": "ConnectTimeout: HTTPSConnectionPool(host='console.x.ai', port=443): Max retries exceeded with url: / (Caused by ConnectTimeoutError(<HTT"
   },
   "generated_at": "2026-09-22T16:29:46"
  },
  "p_deepseek_official": {
   "ai": {
    "features": [
     "DeepSeek 官方直营，原厂API服务",
     "兼容 OpenAI 协议，迁移成本低",
     "支持人民币与美元双币种结算"
    ],
    "highlights": "DeepSeek 官方直营，OpenAI 协议兼容，可开发票",
    "suitable_for": [
     "国内企业开发者",
     "OpenAI 协议迁移项目",
     "海外开发团队"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 200,
    "latency_ms": 194,
    "final_url": "https://platform.deepseek.com/",
    "title": "DeepSeek",
    "meta": "Join DeepSeek API platform to access our AI models, developer resources and API documentation.",
    "error": ""
   },
   "generated_at": "2026-09-22T16:29:46"
  },
  "p_qwen_official": {
   "ai": {
    "features": [
     "阿里云官方Qwen大模型服务平台",
     "支持100+模型，协议兼容OpenAI",
     "模型训练部署推理一站式服务"
    ],
    "highlights": "阿里云官方百炼平台，模型丰富且OpenAI协议兼容",
    "suitable_for": [
     "企业级AI应用开发",
     "Qwen模型使用者",
     "需开具发票的企业用户"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 200,
    "latency_ms": 203,
    "final_url": "https://bailian.console.aliyun.com/",
    "title": "大模型服务平台百炼控制台",
    "meta": "百炼控制台是阿里云大模型服务平台，提供AI模型训练、部署、推理一站式服务，支持多种大模型框架，助力企业快速构建AI应用。",
    "error": ""
   },
   "generated_at": "2026-09-22T16:29:46"
  },
  "p_zhipu_official": {
   "ai": {
    "features": [
     "GLM 官方授权 API 渠道",
     "兼容 OpenAI 接口协议",
     "支持 CNY 与 USD 双币结算"
    ],
    "highlights": "智谱官方直营，国产 GLM 大模型 API 稳定供应",
    "suitable_for": [
     "国产大模型开发者",
     "国内企业级用户",
     "跨境 AI 应用团队"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 200,
    "latency_ms": 188,
    "final_url": "https://bigmodel.cn/",
    "title": "æºè°±ä¸¨BigModel å¹³å°",
    "meta": "æºè°±å¤§æ¨¡åå¼æ¾å¹³å°-æ°ä¸ä»£å½äº§èªä¸»éç¨AIå¤§æ¨¡åå¼æ¾å¹³å°ï¼æ¯å½å å¤§æ¨¡åæåååçå¤§æ¨¡åç½ç«ï¼ç åäºå¤æ¬¾LLMæ¨¡åï¼å¤æ¨¡æè§è§æ¨¡åäº§åï¼è´åäºå°",
    "error": ""
   },
   "generated_at": "2026-09-22T16:29:46"
  },
  "p_moonshot_official": {
   "ai": {
    "features": [
     "1M token超长上下文窗口",
     "支持多模态与Tool Calling",
     "Kimi K3万亿参数大模型"
    ],
    "highlights": "官方Kimi API平台，1M超长上下文加持多模态理解",
    "suitable_for": [
     "长文档处理场景",
     "多模态AI应用开发",
     "企业级API集成"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 200,
    "latency_ms": 741,
    "final_url": "https://platform.kimi.com/",
    "title": "Kimi API 开放平台",
    "meta": "Kimi API 开放平台，提供 2.8 万亿参数的 Kimi K3 大模型 API，支持 1M token 上下文窗口、多模态理解和 Tool Calling。专业代码生成、智能对话、视觉推理，助力开发者构建下一代 AI 应用。",
    "error": ""
   },
   "generated_at": "2026-09-22T16:29:46"
  },
  "p_doubao_official": {
   "ai": {
    "features": [
     "豆包大模型官方直连服务",
     "可开发票并提供免费试用",
     "兼容OpenAI接口协议"
    ],
    "highlights": "豆包官方直连，企业级SLA与发票双重保障",
    "suitable_for": [
     "企业级AI开发团队",
     "国内合规业务方",
     "豆包模型集成者"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 200,
    "latency_ms": 308,
    "final_url": "https://www.volcengine.com/product/doubao",
    "title": "",
    "meta": "",
    "error": ""
   },
   "generated_at": "2026-09-22T16:32:51"
  },
  "p_baidu_qianfan": {
   "ai": {
    "features": [
     "企业级一站式大模型开发平台",
     "模型与应用开发全流程工具链",
     "融合千帆数据智能平台能力"
    ],
    "highlights": "百度智能云官方出品，企业级一站式大模型开发与应用平台",
    "suitable_for": [
     "企业AI应用开发",
     "大模型微调训练",
     "数据智能分析"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 200,
    "latency_ms": 200,
    "final_url": "https://cloud.baidu.com/product-s/qianfan_home",
    "title": "千帆大模型平台-企业级一站式大模型开发及应用开发平台-百度智能云",
    "meta": "百度智能云千帆大模型平台是百度智能云推出的一站式企业级大模型平台，是支持客户做好真实AI应用的“企业级”平台，提供全面易用的模型开发、应用开发全流程工具链，同时融合千帆数据智能平台",
    "error": ""
   },
   "generated_at": "2026-09-22T16:32:51"
  },
  "p_mistral_official": {
   "ai": {
    "features": [
     "Mistral官方直连欧盟合规",
     "兼容OpenAI协议接入便捷",
     "支持USD/EUR结算可开发票"
    ],
    "highlights": "官方直连欧盟合规，99.5% SLA 高口碑稳定服务",
    "suitable_for": [
     "欧洲合规业务团队",
     "企业发票报销用户",
     "OpenAI协议迁移项目"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 0,
    "latency_ms": 8034,
    "final_url": "",
    "title": "",
    "meta": "",
    "error": "ConnectTimeout: HTTPSConnectionPool(host='console.mistral.ai', port=443): Max retries exceeded with url: / (Caused by ConnectTimeoutErro"
   },
   "generated_at": "2026-09-22T16:32:51"
  },
  "p_groq": {
   "ai": {
    "features": [
     "LPU推理引擎，速度领先",
     "兼容OpenAI API协议",
     "提供免费试用额度"
    ],
    "highlights": "自研LPU芯片加持，推理速度行业顶尖",
    "suitable_for": [
     "追求低延迟的开发者",
     "高频并发推理用户",
     "尝鲜新模型的体验者"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 403,
    "latency_ms": 683,
    "final_url": "https://console.groq.com/",
    "title": "",
    "meta": "",
    "error": ""
   },
   "generated_at": "2026-09-22T16:32:51"
  },
  "p_together_ai": {
   "ai": {
    "features": [
     "聚合200+开源模型",
     "支持推理与模型微调",
     "提供OpenAI兼容接口"
    ],
    "highlights": "聚合200+开源模型，按token计费的全栈AI云平台",
    "suitable_for": [
     "开源模型使用者",
     "AI应用开发者",
     "模型微调训练用户"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 200,
    "latency_ms": 924,
    "final_url": "https://www.together.ai/",
    "title": "Together AI | The AI Native Cloud",
    "meta": "Build what&#x27;s next on the AI Native Cloud. Full-stack AI platform for inference, fine-tuning, and GPU clusters — powered by cutting-edge research.",
    "error": ""
   },
   "generated_at": "2026-09-22T16:32:51"
  },
  "p_fireworks_ai": {
   "ai": {
    "features": [
     "专注开源模型推理优化",
     "支持OpenAI兼容协议",
     "全球聚合服务可开票"
    ],
    "highlights": "开源模型推理优化领先，OpenAI协议全球兼容",
    "suitable_for": [
     "AI应用开发者",
     "企业推理部署方",
     "多模型聚合用户"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 200,
    "latency_ms": 1278,
    "final_url": "https://fireworks.ai/",
    "title": "Own Your Specialized Intelligence | Fireworks",
    "meta": "Fireworks’ state of the art training and inference platform take you beyond the frontier, transforming open models into your specialized intelligence.",
    "error": ""
   },
   "generated_at": "2026-09-22T16:32:51"
  },
  "p_anyscale": {
   "probe": {
    "status": 200,
    "latency_ms": 1722,
    "final_url": "https://www.anyscale.com/",
    "title": "Production-scale AI with Ray | Anyscale",
    "meta": "Powered by Ray, Anyscale helps AI builders run data-intensive workloads to build and deploy Foundation Models and AI at scale on any cloud.",
    "error": ""
   },
   "generated_at": "2026-09-22T16:32:51",
   "ai_error": "HTTPSConnectionPool(host='api.minimaxi.com', port=443): Read timed out. (read timeout=90)"
  },
  "p_openrouter": {
   "ai": {
    "features": [
     "聚合300+ AI模型统一调用",
     "兼容 OpenAI 与 Anthropic 协议",
     "按调用量计费另收5.5%平台费"
    ],
    "highlights": "一站式接入300+模型，OpenAI兼容协议统一调度",
    "suitable_for": [
     "多模型比价接入开发者",
     "AI 应用快速集成团队",
     "加密货币支付用户"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 200,
    "latency_ms": 767,
    "final_url": "https://openrouter.ai/",
    "title": "OpenRouter",
    "meta": "The unified interface for every model. Find the best models &amp; prices for your prompts",
    "error": ""
   },
   "generated_at": "2026-09-22T16:32:51"
  },
  "p_litellm": {
   "ai": {
    "features": [
     "140+提供商统一接入",
     "OpenAI协议兼容接口",
     "支持气隙环境离线部署"
    ],
    "highlights": "开源AI网关，统一140+LLM接口，可自托管离线部署",
    "suitable_for": [
     "多模型统一管理",
     "企业自托管部署",
     "LLM成本与路由管控"
    ],
    "data_check": {
     "consistent": false,
     "issues": []
    }
   },
   "probe": {
    "status": 200,
    "latency_ms": 1748,
    "final_url": "https://www.litellm.ai/",
    "title": "LiteLLM — Open-Source AI Gateway &amp; LLM Proxy",
    "meta": "LiteLLM is the open-source AI gateway that puts your full AI stack behind one OpenAI-compatible key. Track and cap LLM spend, route to the right model, and self-host anywhere — even air-gapped. 140+ p",
    "error": ""
   },
   "generated_at": "2026-09-22T16:36:33"
  },
  "p_portkey": {
   "ai": {
    "features": [
     "Apache-2.0开源企业级AI网关",
     "专注Gen AI生产化与组织级部署",
     "统一接入OpenAI协议"
    ],
    "highlights": "开源企业级Gen AI网关，助力生产环境快速落地",
    "suitable_for": [
     "企业AI研发团队",
     "Gen AI应用开发者",
     "多模型统一管理者"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 200,
    "latency_ms": 1417,
    "final_url": "https://portkey.ai/",
    "title": "Production Stack for Gen AI Builders|Portkey",
    "meta": "Democratize and productionize Gen AI across your entire org with Portkey",
    "error": ""
   },
   "generated_at": "2026-09-22T16:36:33"
  },
  "p_helicone": {
   "ai": {
    "features": [
     "专注LLM可观测性监控",
     "免费10K次/月调用额度",
     "OpenAI协议路由网关"
    ],
    "highlights": "可观测性与AI网关一体化，专注LLM应用可靠性",
    "suitable_for": [
     "AI应用开发者",
     "LLMOps运维团队",
     "中小规模AI项目"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 200,
    "latency_ms": 1506,
    "final_url": "https://www.helicone.ai/",
    "title": "Helicone / AI Gateway &amp; LLM Observability",
    "meta": "Routing and monitoring for reliable AI apps - the LLMOps platform behind the fastest-growing AI companies.",
    "error": ""
   },
   "generated_at": "2026-09-22T16:36:33"
  },
  "p_cloudflare_ai": {
   "ai": {
    "features": [
     "内置请求分析与缓存能力",
     "支持模型自动故障转移",
     "兼容OpenAI API协议"
    ],
    "highlights": "Cloudflare全球AI网关，集成分析、缓存、限流与模型故障转移功能",
    "suitable_for": [
     "多模型AI应用开发者",
     "需要统一请求管理的团队",
     "Cloudflare现有用户"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 200,
    "latency_ms": 967,
    "final_url": "https://developers.cloudflare.com/ai-gateway/",
    "title": "Overview Â· Cloudflare AI Gateway docs",
    "meta": "Observe and control your AI applications with analytics, caching, rate limiting, and model fallback through AI Gateway.",
    "error": ""
   },
   "generated_at": "2026-09-22T16:36:33"
  },
  "p_vercel_ai_gateway": {
   "ai": {
    "features": [
     "统一多模型智能路由",
     "内置可观测性监控",
     "零加价透明计费"
    ],
    "highlights": "Vercel 出品的零加价 AI 模型统一路由网关",
    "suitable_for": [
     "Vercel 部署用户",
     "多模型接入项目",
     "成本敏感开发团队"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 200,
    "latency_ms": 1713,
    "final_url": "https://vercel.com/docs/ai-gateway",
    "title": "Vercel AI Gateway: Models, Routing, and Observability",
    "meta": "width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover\"/><link rel=\"preload\" href=\"https://vercel-docs.vercel.sh/vc-ap-0cca3e/_next/static/immutable/media/vercel-light.3_gxxexgi1nmy.",
    "error": ""
   },
   "generated_at": "2026-09-22T16:36:33"
  },
  "p_one_api": {
   "ai": {
    "features": [
     "支持数十种主流大模型统一接口",
     "Docker镜像一键部署开箱即用",
     "开源免费支持自托管与二次分发"
    ],
    "highlights": "开源聚合多模型API，Docker一键部署，统一接口分发利器",
    "suitable_for": [
     "个人开发者自建",
     "小团队统一管理API",
     "需要API分发的场景"
    ],
    "data_check": {
     "consistent": false,
     "issues": [
      "支付币种标CNY，但开源自托管无付费环节",
      "SLA 99.5%不适用自托管工具",
      [
       "协议仅登记openai，实际支持Azure/Anthropic等十余种"
      ]
     ]
    }
   },
   "probe": {
    "status": 200,
    "latency_ms": 1524,
    "final_url": "https://github.com/songquanpeng/one-api",
    "title": "GitHub - songquanpeng/one-api: LLM API 管理 &amp; 分发系统，支持 OpenAI、Azure、Anthropic Claude、Google Gemini、DeepSeek、字节豆包、ChatGL",
    "meta": "LLM API 管理 &amp; 分发系统，支持 OpenAI、Azure、Anthropic Claude、Google Gemini、DeepSeek、字节豆包、ChatGLM、文心一言、讯飞星火、通义千问、360 智脑、腾讯混元等主流模型，统一 API 适配，可用于 key 管理与二次分发。单可执行文件，提供 Docker 镜像，一键部署，开箱即用。LLM API management &a",
    "error": ""
   },
   "generated_at": "2026-09-22T16:36:33"
  },
  "p_new_api": {
   "ai": {
    "features": [
     "开源统一AI模型聚合网关",
     "支持多协议格式互转",
     "One-API的升级分支项目"
    ],
    "highlights": "开源自托管的多协议LLM统一接入网关",
    "suitable_for": [
     "自托管开发者",
     "多模型聚合用户",
     "团队API网关搭建"
    ],
    "data_check": {
     "consistent": false,
     "issues": [
      "登记仅列openai协议，实测页面提及Claude与Gemini兼容"
     ]
    }
   },
   "probe": {
    "status": 200,
    "latency_ms": 1148,
    "final_url": "https://github.com/QuantumNous/new-api",
    "title": "GitHub - QuantumNous/new-api: A unified AI model hub for aggregation &amp; distribution. It supports cross-converting va",
    "meta": "A unified AI model hub for aggregation &amp; distribution. It supports cross-converting various LLMs into OpenAI-compatible, Claude-compatible, or Gemini-compatible formats. A centralized gateway for ",
    "error": ""
   },
   "generated_at": "2026-09-22T16:36:33"
  },
  "p_duckcoding": {
   "ai": {
    "features": [
     "国内中转，价格低于官方30-50%",
     "支持OpenAI协议聚合转发",
     "支持CNY与USD双币种结算"
    ],
    "highlights": "国内OpenAI中转聚合站，价格低于官方三到五成",
    "suitable_for": [
     "国内OpenAI API用户",
     "追求性价比的个人开发者",
     "需要稳定中转的小型团队"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 0,
    "latency_ms": 200,
    "final_url": "",
    "title": "",
    "meta": "",
    "error": "SSLError: HTTPSConnectionPool(host='duckcoding.com', port=443): Max retries exceeded with url: / (Caused by SSLError(SSLCertVerifi"
   },
   "generated_at": "2026-09-22T16:36:33"
  },
  "p_api2d": {
   "ai": {
    "features": [
     "聚合OpenAI兼容接口",
     "支持CNY与USD双币支付",
     "国内老牌API中转服务"
    ],
    "highlights": "国内老牌OpenAI聚合中转站，双币支付、口碑稳定",
    "suitable_for": [
     "国内OpenAI用户",
     "中小开发者团队",
     "需多币种支付的用户"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 200,
    "latency_ms": 705,
    "final_url": "https://api2d.com/",
    "title": "API2D",
    "meta": "",
    "error": ""
   },
   "generated_at": "2026-09-22T16:38:32"
  },
  "p_aicnb": {
   "ai": {
    "features": [
     "国内中转节点，访问稳定",
     "支持发票申请，合规报销",
     "聚合OpenAI协议接口"
    ],
    "highlights": "面向国内用户的聚合中转平台，支持开具发票",
    "suitable_for": [
     "国内企业开发团队",
     "需发票报销的用户",
     "OpenAI协议调用需求者"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 0,
    "latency_ms": 28,
    "final_url": "",
    "title": "",
    "meta": "",
    "error": "ConnectionError: HTTPSConnectionPool(host='aicnb.com', port=443): Max retries exceeded with url: / (Caused by NameResolutionError(\"HTTPSC"
   },
   "generated_at": "2026-09-22T16:38:32"
  },
  "p_closeai": {
   "ai": {
    "features": [
     "国内 Claude API 聚合中转服务",
     "支持人民币 CNY 支付结算",
     "提供 OpenAI 协议兼容接口"
    ],
    "highlights": "国内 Claude 专线聚合，支持人民币直付与 OpenAI 协议",
    "suitable_for": [
     "国内 Claude API 用户",
     "人民币支付需求者",
     "OpenAI 协议接入开发者"
    ],
    "data_check": {
     "consistent": false,
     "issues": [
      "登记区域为 cn（国内专线），实测却返回 HTTP 451 地区访问限制，存在矛盾"
     ]
    }
   },
   "probe": {
    "status": 451,
    "latency_ms": 736,
    "final_url": "https://closeai.info/",
    "title": "地区访问限制 - CloseAI",
    "meta": "",
    "error": ""
   },
   "generated_at": "2026-09-22T16:38:32"
  },
  "p_woka_ai": {
   "ai": {
    "features": [
     "国内中转Claude与GPT模型",
     "采用OpenAI兼容协议",
     "支持人民币CNY结算"
    ],
    "highlights": "国内Claude/GPT中转聚合服务，支付便捷",
    "suitable_for": [
     "国内Claude用户",
     "GPT API开发者",
     "个人中小项目"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 0,
    "latency_ms": 29,
    "final_url": "",
    "title": "",
    "meta": "",
    "error": "ConnectionError: HTTPSConnectionPool(host='wokaai.com', port=443): Max retries exceeded with url: / (Caused by NameResolutionError(\"HTTPS"
   },
   "generated_at": "2026-09-22T16:38:32"
  },
  "p_chatfire": {
   "probe": {
    "status": 200,
    "latency_ms": 171,
    "final_url": "https://chatfire.cn/",
    "title": "New API",
    "meta": "Unified AI API gateway and admin dashboard.",
    "error": ""
   },
   "generated_at": "2026-09-22T16:38:32",
   "ai_error": "no JSON in response"
  },
  "p_volcengine_official": {
   "ai": {
    "features": [
     "字节跳动官方推出的大模型平台",
     "兼容OpenAI接口协议",
     "支持人民币CNY结算"
    ],
    "highlights": "字节跳动旗下豆包官方平台，国产大模型合规首选",
    "suitable_for": [
     "国内大模型应用开发者",
     "需人民币结算的企业项目",
     "豆包模型集成场景"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 200,
    "latency_ms": 386,
    "final_url": "https://www.volcengine.com/product/ark",
    "title": "",
    "meta": "",
    "error": ""
   },
   "generated_at": "2026-09-22T16:38:32"
  },
  "p_tencent_official": {
   "ai": {
    "features": [
     "腾讯官方出品的大语言模型",
     "支持OpenAI兼容API协议",
     "中文创作与逻辑推理能力强"
    ],
    "highlights": "腾讯官方混元大模型，中文理解与创作能力突出",
    "suitable_for": [
     "中文内容创作",
     "逻辑推理任务",
     "国内企业应用"
    ],
    "data_check": {
     "consistent": true,
     "issues": []
    }
   },
   "probe": {
    "status": 200,
    "latency_ms": 410,
    "final_url": "https://cloud.tencent.com/product/tclm",
    "title": "腾讯混元大模型_大语言模型_自然语言大模型- 腾讯云",
    "meta": "腾讯混元大模型（Tencent Hunyuan）是由腾讯研发的大语言模型，具备强大的中文创作能力，复杂语境下的逻辑推理能力，以及可靠的任务执行能力。",
    "error": ""
   },
   "generated_at": "2026-09-22T16:38:32"
  },
  "p_jd_official": {
   "ai": {
    "features": [
     "京东云官方运营的大模型API服务",
     "支持OpenAI协议，人民币支付结算",
     "官方页面显示无法正常访问"
    ],
    "highlights": "京东云官方品牌背书，但官网当前无法访问",
    "suitable_for": [
     "暂不建议使用",
     "需持续关注页面恢复情况",
     "京东云生态潜在用户"
    ],
    "data_check": {
     "consistent": false,
     "issues": [
      "官方页面标题为「无法访问」，与可正常服务状态矛盾",
      "无实际可用入口，99.5% SLA 难以验证"
     ]
    }
   },
   "probe": {
    "status": 200,
    "latency_ms": 573,
    "final_url": "https://www.jdcloud.com/cn/pages/end",
    "title": "抱歉，页面无法访问-京东云",
    "meta": "抱歉，页面无法访问",
    "error": ""
   },
   "generated_at": "2026-09-22T16:38:32"
  }
 }
};
