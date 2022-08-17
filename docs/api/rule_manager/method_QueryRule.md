---
title: '查询路由列表'
description: "QueryRule"
sidebar_position: 49
---
## 接口说明
调用该接口查询路由列表。

## URI

```
get /rules
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |
| page_num | query | integer | 页码 |  true |
| page_size | query | integer | 每页数量 |  true |
| order_by | query | string | 排序字段 |  false |
| is_descending | query | boolean | 倒序 |  false |
| key_words | query | string | 关键字 |  false |
| search_key | query | string | 关键字值 |  false |
| id.value | query | string |  |  false |
| ids | query | array | 路由 id 列表 |  false |
| name.value | query | string |  |  false |
| type | query | integer | 类型 1 消息路由, 类型 2 时序路由 |  false |
| status.value | query | integer |  |  false |

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([ruleRuleQueryResp](#ruleRuleQueryResp)) |

#### ruleRuleQueryResp

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |  
| data | Array[ruleRule] | 路由列表 [ 具体参数可见下面 [ruleRule](#ruleRule) ] | 
| last_page | integer | 上一页 | 
| page_num | integer | 页码 | 
| page_size | integer | 每页数量 | 
| total | integer | 总数 |





### ruleRule
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| created_at | string | 创建时间 | 
| desc | string | 描述 | 
| devices_status | integer | 路由设备数量 | 
| id | string | 路由id | 
| model_id | string | 模板id | 
| model_name | string | 模板名称 | 
| name | string | 名称 | 
| select_expr | string | select语句 | 
| status | integer | 状态 1 运行中, 状态 0 停止 | 
| sub_id | integer | 错误订阅id | 
| targets_status | integer | 路由目标数量 | 
| type | integer | 类型 1 消息路由, 类型 2 时序路由 | 
| updated_at | string | 更新时间 | 
| where_expr | string | where语句 |










