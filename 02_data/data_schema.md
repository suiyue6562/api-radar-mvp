# API Radar 数据字段字典 v1.0

> 目标：覆盖 `02_data/` 下所有核心数据对象的字段定义。
> 状态：MVP 首发版，字段按"广覆盖 70% 完整度"设计。

---

## 1. 核心数据对象关系图

```
厂商 Vendor
  └── 模型 Model
        └── 渠道模型 Offering（= 某模型在某渠道）
              ├── 价格计划 Price Plan（多个版本的历史快照）
              └── 测试结果 Test（P1 后才填）
      └── 渠道 Provider（独立存在）
            └── 渠道模型 Offering
```

---

## 2. 字段完整度评级

| 评级 | 定义 | 前台规则 |
|---|---|---|
| **A** | 官方公开页或官方 API，近期校验，人工抽检 | 正常展示，可参与排序 |
| **B** | 渠道自有页，主体已认领或人工复核 | 正常展示，标注"渠道来源" |
| **C** | 可靠二手来源或多来源一致 | 参考，不参与关键推荐 |
| **D** | 单一非官方、已过期或冲突 | 待验证，不参与排序 |

---

## 3. Vendor（模型厂商）

| 字段名 | 类型 | 必填 | 说明 |
|---|---|---|---|
| id | UUID | ✅ | 主键 |
| name_zh | 字符串 | ✅ | 中文名，如"OpenAI" |
| name_en | 字符串 | ✅ | 英文名，如"OpenAI" |
| alias | 字符串[] | | 别名/旧称/简称，如["GPT","ChatGPT"] |
| website | URL | ✅ | 官方文档地址 |
| region | 枚举 | ✅ | global / china_mainland / hong_kong |
| logo_url | URL | | 厂商 logo |
| status | 枚举 | ✅ | active / limited / deprecated |
| founded_at | 日期 | | 成立时间 |
| source_id | UUID | | 数据来源 |
| verified_at | 时间 | | 最后复核时间 |
| data_status | 枚举 | ✅ | A / B / C / D（字段完整度评级） |

---

## 4. Model（模型）

| 字段名 | 类型 | 必填 | 说明 |
|---|---|---|---|
| id | UUID | ✅ | 主键 |
| vendor_id | UUID | ✅ | 关联 Vendor |
| name | 字符串 | ✅ | 模型名称，如 "claude-sonnet-4-20250514" |
| display_name | 字符串 | ✅ | 显示名，如 "Claude Sonnet 4" |
| alias | 字符串[] | | 别名，如 ["Claude 4", "Sonnet 4"] |
| modality | 枚举[] | ✅ | text / image / audio / video / multimodal |
| context_window | 整数 | ✅ | 最大上下文 Token 数 |
| max_output_tokens | 整数 | | 最大输出 Token 数（无则为 null） |
| capabilities | 枚举[] | | tool_call / json_mode / vision / caching / batch |
| pricing_official_input | 高精度小数 | | 官方输入价（人民币/百万 Token） |
| pricing_official_output | 高精度小数 | | 官方输出价（人民币/百万 Token） |
| official_price_currency | 字符串 | | 原始币种，如 "USD" |
| official_price_source | URL | | 价格来源页 |
| official_price_updated_at | 时间 | | 官方价格最后更新时间 |
| release_date | 日期 | | 发布日期 |
| deprecation_date | 日期 | | 预计下线日期（无则 null） |
| status | 枚举 | ✅ | available / limited / deprecated / announced |
| source_id | UUID | | 数据来源 |
| verified_at | 时间 | | 最后复核时间 |
| data_status | 枚举 | ✅ | A / B / C / D |

**字段完整度说明**：广覆盖版 MVP，30 模型中，21 个（70%）达到以上全部字段，其余 9 个至少填写 id/name/vendor_id/modality/context_window/status/data_status 共 7 个必填字段。

---

## 5. Provider（API 渠道/服务商）

| 字段名 | 类型 | 必填 | 说明 |
|---|---|---|---|
| id | UUID | ✅ | 主键 |
| name | 字符串 | ✅ | 渠道名，如 "硅基流动" |
| website | URL | ✅ | 官网地址 |
| type | 枚举 | ✅ | official / cloud / aggregator / other |
| entity_name | 字符串 | | 主体公司名（用于企业采购） |
| entity_region | 字符串 | | 主体注册地 |
| service_regions | 字符串[] | | 服务覆盖地区 |
| payment_methods | 枚举[] | | alipay / wechat / bank / paypal / card |
| payment_currency | 枚举[] | | CNY / USD / 混合 |
| invoice_available | 布尔 | | 是否可开票 |
| min_recharge | 高精度小数 | | 最低充值金额（人民币） |
| refund_policy | 字符串 | | 退款政策说明 |
| contract_available | 布尔 | | 是否可签合同 |
| sla_available | 布尔 | | 是否提供 SLA |
| api_format | 枚举[] | | openai_compatible / anthropic_native / 云厂商私有 / 其他 |
| supports_webhook | 布尔 | | 是否支持 webhook |
| supports_batch | 布尔 | | 是否支持批量处理 |
| data_retention_days | 整数 | | 日志保留天数（null=未知） |
| used_for_training | 枚举 | | yes / no / unknown / not_stated（是否用于模型训练） |
| data_region | 字符串 | | 数据存储地区 |
| customer_service | 枚举 | | 微信 / 企微 / 工单 / 邮件 / 群 / 无 |
| established_at | 日期 | | 成立/上线时间 |
| github_repo | URL | | GitHub 地址（技术向渠道） |
| status | 枚举 | ✅ | active / limited / suspended |
| source_id | UUID | | 数据来源 |
| verified_at | 时间 | | 最后复核时间 |
| data_status | 枚举 | ✅ | A / B / C / D |

**字段完整度说明**：15 渠道中，11 个（70%）达到以上全部字段，其余 4 个至少填写 id/name/website/type/status/data_status。

---

## 6. Offering（渠道模型组合）

| 字段名 | 类型 | 必填 | 说明 |
|---|---|---|---|
| id | UUID | ✅ | 主键 |
| provider_id | UUID | ✅ | 关联 Provider |
| model_id | UUID | ✅ | 关联 Model |
| region | 字符串 | | 适用地区（null=全球） |
| api_endpoint | URL | | API 地址 |
| is_default | 布尔 | | 是否为该渠道默认接入点 |
| status | 枚举 | ✅ | active / limited / deprecated |
| source_id | UUID | | 数据来源 |
| verified_at | 时间 | | 最后复核时间 |
| data_status | 枚举 | ✅ | A / B / C / D |

---

## 7. Price Plan（价格计划）——最核心的表

| 字段名 | 类型 | 必填 | 说明 |
|---|---|---|---|
| id | UUID | ✅ | 主键 |
| offering_id | UUID | ✅ | 关联 Offering |
| plan_type | 枚举 | ✅ | per_million / per_unit / subscription / tiered |
| billing_item | 枚举 | ✅ | input / output / cache_read / cache_write / image / audio / video / request |
| unit | 枚举 | ✅ | 1M_tokens / image / second / minute / character / request |
| currency | 字符串 | ✅ | 原始币种，如 "CNY" / "USD" |
| raw_price | 高精度小数 | ✅ | 原始单价（不做覆盖更新） |
| normalized_cny | 高精度小数 | ✅ | 标准化人民币价格（统一单位） |
| exchange_rate | 高精度小数 | | 换算使用的汇率 |
| exchange_rate_date | 日期 | | 汇率日期 |
| tier_rule | JSON | | 阶梯规则：{tiers: [{up_to, price_per_unit}]} |
| context_extra_fee | 高精度小数 | | 长上下文附加费（如有） |
| batch_price | 高精度小数 | | 批量处理单价（如有） |
| subscription_price | 高精度小数 | | 包月/包年价格（如有） |
| discount | 字符串 | | 优惠说明，如 "首月 5 折" |
| discount_end_date | 日期 | | 优惠截止日期 |
| valid_from | 时间 | ✅ | 价格生效开始 |
| valid_to | 时间 | ✅ | 价格失效时间（null=永久） |
| min_purchase | 高精度小数 | | 最低消费要求 |
| notes | 字符串 | | 其他计费说明 |
| source_url | URL | ✅ | 价格来源页 |
| source_id | UUID | | 数据来源 |
| collected_at | 时间 | ✅ | 本次采集时间 |
| verified_at | 时间 | | 最后复核时间 |
| data_status | 枚举 | ✅ | A / B / C / D |

**价格历史快照规则**：
- 每次价格变化**追加新记录**，不覆盖旧记录
- valid_to = 变更前一刻的时间戳
- 通过 offering_id + billing_item + valid_from 查询历史

**高精度小数规则**：一律使用字符串存储（如 "0.123"），前端显示时再解析，避免浮点误差进入账单式计算。

---

## 8. Market Event（行情事件）

| 字段名 | 类型 | 必填 | 说明 |
|---|---|---|---|
| id | UUID | ✅ | 主键 |
| event_type | 枚举 | ✅ | model_release / price_change / capability_change / deprecation / policy_change / outage / provider_change |
| severity | 枚举 | ✅ | high / medium / low |
| target_type | 枚举 | ✅ | model / vendor / provider |
| target_id | UUID | ✅ | 关联对象 |
| headline | 字符串 | ✅ | 事件标题（简短，如"GPT-4o 价格下调 20%"） |
| summary | 字符串 | | 事件摘要（50-200 字） |
| old_value | JSON | | 变化前的值（结构化） |
| new_value | JSON | | 变化后的值（结构化） |
| change_percent | 高精度小数 | | 变化比例（如 -0.20 表示降价 20%） |
| effective_date | 时间 | ✅ | 生效时间 |
| source_urls | URL[] | ✅ | 来源链接（至少 1 个） |
| source_type | 枚举 | | official / community / media / platform_test |
| is_published | 布尔 | ✅ | 是否已发布 |
| correction_record | JSON | | 更正记录：{date, old_value, new_value, reason} |
| created_at | 时间 | ✅ | 创建时间 |
| updated_at | 时间 | ✅ | 更新时间 |

---

## 9. Source（数据来源）

| 字段名 | 类型 | 必填 | 说明 |
|---|---|---|---|
| id | UUID | ✅ | 主键 |
| url | URL | ✅ | 来源 URL |
| source_type | 枚举 | ✅ | official_page / official_api / aggregator_page / community / media / platform_test |
| owner_type | 枚举 | ✅ | vendor / provider / community / media / platform |
| owner_name | 字符串 | ✅ | 来源方名称 |
| crawl_config | JSON | | 抓取配置（URL pattern, 采集周期等） |
| reliability | 枚举 | ✅ | high / medium / low |
| last_crawled_at | 时间 | | 最后一次抓取时间 |
| last_success_at | 时间 | | 最后一次成功时间 |
| status | 枚举 | ✅ | active / error / disabled |
| notes | 字符串 | | 备注 |

---

## 10. User Favorite / Watch（用户关注）

| 字段名 | 类型 | 必填 | 说明 |
|---|---|---|---|
| id | UUID | ✅ | 主键 |
| user_id | UUID | ✅ | 用户 ID（匿名用临时 token） |
| watch_type | 枚举 | ✅ | model / provider / vendor |
| target_id | UUID | ✅ | 关注对象 ID |
| alert_types | 枚举[] | | price_change / outage / new_model / deprecation |
| created_at | 时间 | ✅ | 关注时间 |

---

## 11. 计算器辅助字段（前端用）

| 字段名 | 说明 |
|---|---|
| input_tokens | 用户输入 Token 数 |
| output_tokens | 用户输出 Token 数（默认 input×20%） |
| cache_read_ratio | 缓存命中估算（默认 0） |
| plan_id | 用户选中的 Price Plan |
| monthly_cost_cny | 计算结果：月成本（人民币） |
| monthly_cost_usd | 计算结果：月成本（美元） |
| cost_breakdown | JSON：{input: x, output: y, cache: z, fixed: w} |
| estimate_note | 估算说明（如"此为估算，实际以渠道账单为准"） |

---

## 12. 字段完整度追踪表

| 对象 | 目标条数 | 字段完整（A/B级）目标 | 最低门槛 |
|---|---|---|---|
| Vendor | 10 家 | 8 家 | 10 家全部达 B |
| Model | 30 个 | 21 个（70%） | 全部达必填 7 字段 |
| Provider | 15 家 | 11 个（70%） | 全部达必填 6 字段 |
| Offering | 100+ 条 | 60 条（60%） | 全部达 id/provider_id/model_id/status |
| Price Plan | 300+ 条 | 200 条（65%） | 全部达 id/offering_id/billing_item/unit/price |
| Market Event | 50 条（回填90天） | 50 条 | 全部达 event_type/target/headline/source |

---

## 13. 异常检测规则（后台用）

| 规则 | 触发条件 | 动作 |
|---|---|---|
| 价格突变 | 单次变化 > ±50% | 暂停发布，进入人工复核 |
| 单位冲突 | 同一记录出现不兼容单位 | 阻止入库 |
| 版本缺失 | 价格无法关联具体模型版本 | 进入"待补充"队列 |
| 来源失效 | 页面不可达或内容移除 | 标记 D 级，退出默认推荐 |
| 促销过期 | valid_to <= 今天 | 自动移出价格比较 |
| 异常低价 | normalized_cny < 官方价 10% 且非官方渠道 | 标记"待验证"，不参与最低价排名 |
