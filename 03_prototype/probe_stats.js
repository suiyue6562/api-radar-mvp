// 自动生成：backend/scripts/ai_maintain.py
// 来源：02_data/samples/uptime.jsonl 真实 HTTP 探测，请勿手改。
// survival 口径：2xx/3xx/401/403 计为存活。
var PROBE_STATS = {
 "generated_at": "2026-09-22T18:54:43",
 "stats": {
  "p_anthropic_official": {
   "probes": 9,
   "alive": 9,
   "last_status": 403,
   "last_latency_ms": 1489,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 1712
  },
  "p_openai_official": {
   "probes": 9,
   "alive": 9,
   "last_status": 403,
   "last_latency_ms": 693,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 727
  },
  "p_google_official": {
   "probes": 9,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 40137,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 0.0,
   "latency_avg_ms": 50004
  },
  "p_xai_official": {
   "probes": 7,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 8044,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 0.0,
   "latency_avg_ms": 8511
  },
  "p_deepseek_official": {
   "probes": 7,
   "alive": 7,
   "last_status": 200,
   "last_latency_ms": 176,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 196
  },
  "p_qwen_official": {
   "probes": 6,
   "alive": 6,
   "last_status": 200,
   "last_latency_ms": 386,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 226
  },
  "p_zhipu_official": {
   "probes": 6,
   "alive": 6,
   "last_status": 200,
   "last_latency_ms": 611,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 250
  },
  "p_moonshot_official": {
   "probes": 6,
   "alive": 6,
   "last_status": 200,
   "last_latency_ms": 673,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 776
  },
  "p_doubao_official": {
   "probes": 6,
   "alive": 6,
   "last_status": 200,
   "last_latency_ms": 222,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 310
  },
  "p_baidu_qianfan": {
   "probes": 6,
   "alive": 6,
   "last_status": 200,
   "last_latency_ms": 188,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 247
  },
  "p_mistral_official": {
   "probes": 6,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 8048,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 0.0,
   "latency_avg_ms": 7723
  },
  "p_groq": {
   "probes": 6,
   "alive": 6,
   "last_status": 403,
   "last_latency_ms": 694,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 657
  },
  "p_together_ai": {
   "probes": 6,
   "alive": 6,
   "last_status": 200,
   "last_latency_ms": 710,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 838
  },
  "p_fireworks_ai": {
   "probes": 6,
   "alive": 6,
   "last_status": 200,
   "last_latency_ms": 791,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 1201
  },
  "p_anyscale": {
   "probes": 5,
   "alive": 5,
   "last_status": 200,
   "last_latency_ms": 695,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 1238
  },
  "p_openrouter": {
   "probes": 5,
   "alive": 5,
   "last_status": 200,
   "last_latency_ms": 733,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 780
  },
  "p_litellm": {
   "probes": 5,
   "alive": 5,
   "last_status": 200,
   "last_latency_ms": 1340,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 1777
  },
  "p_portkey": {
   "probes": 5,
   "alive": 5,
   "last_status": 200,
   "last_latency_ms": 845,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 1181
  },
  "p_helicone": {
   "probes": 5,
   "alive": 5,
   "last_status": 200,
   "last_latency_ms": 1415,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 1648
  },
  "p_cloudflare_ai": {
   "probes": 5,
   "alive": 5,
   "last_status": 200,
   "last_latency_ms": 933,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 993
  },
  "p_vercel_ai_gateway": {
   "probes": 5,
   "alive": 5,
   "last_status": 200,
   "last_latency_ms": 398,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 1213
  },
  "p_one_api": {
   "probes": 5,
   "alive": 2,
   "last_status": 0,
   "last_latency_ms": 7249,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 40.0,
   "latency_avg_ms": 4353
  },
  "p_new_api": {
   "probes": 5,
   "alive": 2,
   "last_status": 0,
   "last_latency_ms": 4031,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 40.0,
   "latency_avg_ms": 2907
  },
  "p_duckcoding": {
   "probes": 5,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 381,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 0.0,
   "latency_avg_ms": 407
  },
  "p_api2d": {
   "probes": 5,
   "alive": 5,
   "last_status": 200,
   "last_latency_ms": 775,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 855
  },
  "p_aicnb": {
   "probes": 5,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 28,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 0.0,
   "latency_avg_ms": 166
  },
  "p_closeai": {
   "probes": 5,
   "alive": 0,
   "last_status": 451,
   "last_latency_ms": 737,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 0.0,
   "latency_avg_ms": 952
  },
  "p_woka_ai": {
   "probes": 5,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 30,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 0.0,
   "latency_avg_ms": 31
  },
  "p_chatfire": {
   "probes": 5,
   "alive": 5,
   "last_status": 200,
   "last_latency_ms": 176,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 360
  },
  "p_volcengine_official": {
   "probes": 5,
   "alive": 5,
   "last_status": 200,
   "last_latency_ms": 190,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 424
  },
  "p_tencent_official": {
   "probes": 5,
   "alive": 5,
   "last_status": 200,
   "last_latency_ms": 302,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 409
  },
  "p_jd_official": {
   "probes": 5,
   "alive": 5,
   "last_status": 200,
   "last_latency_ms": 548,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 647
  },
  "p_huggingface_inference": {
   "probes": 4,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 8037,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 0.0,
   "latency_avg_ms": 8044
  },
  "p_replicate": {
   "probes": 4,
   "alive": 4,
   "last_status": 200,
   "last_latency_ms": 1185,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 1250
  },
  "p_cerebrium": {
   "probes": 4,
   "alive": 4,
   "last_status": 200,
   "last_latency_ms": 567,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 771
  },
  "p_lmstudio_cloud": {
   "probes": 4,
   "alive": 4,
   "last_status": 200,
   "last_latency_ms": 764,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 868
  },
  "p_coze": {
   "probes": 4,
   "alive": 4,
   "last_status": 200,
   "last_latency_ms": 120,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 182
  },
  "p_azure_openai": {
   "probes": 4,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 7239,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 0.0,
   "latency_avg_ms": 7656
  },
  "p_bedrock": {
   "probes": 4,
   "alive": 4,
   "last_status": 200,
   "last_latency_ms": 648,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 100.0,
   "latency_avg_ms": 727
  },
  "p_vertex_ai": {
   "probes": 4,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 40130,
   "last_check_at": "2026-09-22T18:54:43",
   "survival": 0.0,
   "latency_avg_ms": 40190
  }
 }
};
