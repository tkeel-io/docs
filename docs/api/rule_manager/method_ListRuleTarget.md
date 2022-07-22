---
title: '查询路由目标列表'
description: "ListRuleTarget"
sidebar_position: 47
---
## 接口说明
调用该接口查询路由目标列表。

## URI

```
get /rules/{id}/target
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |
| id | path | string | 路由id |  Required | 
| page_num | query | integer | 页码 |  true |
| page_size | query | integer | 每页数量 |  true |
| order_by | query | string | 排序字段 |  false |
| is_descending | query | boolean | 倒序 |  false |
| key_words | query | string | 关键字 |  false |
| search_key | query | string | 关键字值 |  false |

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([ruleListRuleTargetResp](#ruleListRuleTargetResp)) |

#### ruleListRuleTargetResp

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |  
| data | Array[ruleCreateRuleTargetResp] | 路由目标列表 [ 具体参数可见下面 [ruleCreateRuleTargetResp](#ruleCreateRuleTargetResp) ] | 
| last_page | integer | 上一页 | 
| page_num | integer | 页码 | 
| page_size | integer | 每页数量 | 
| total | integer | 总数 |





### ruleCreateRuleTargetResp
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| bucket | string | influxdb bucket | 
| database | string | 数据库 | 
| endpoint | string | 目标地址字符串 |  
| fields | Array[ruleMapField] | 映射表 [ 具体参数可见下面 [ruleMapField](#ruleMapField) ] | 
| host | string | kafka 地址， 仅 kafka 类型使用 | 
| id | string | 路由目标id | 
| org | string | influxdb org | 
| password | string | 密码 | 
| sink_id | string | 验证成功后返回的id | 
| sink_type | string | mysql 或者 clickhouse | 
| table_name | string | 表名 | 
| tags | object | 自定义标签 | 
| type | integer | 类型 1 Kafka, 仅 kafka 类型使用 | 
| user | string | 用户名 | 
| value | string | kafka topic， 仅 kafka 类型使用 |





### ruleMapField
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |
| m_field | Object | 表字段 [ 具体参数可见下面 [ruleField](#ruleField) ]  |
| t_field | Object | 模板字段 [ 具体参数可见下面 [ruleField](#ruleField) ]  |





### ruleField
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| isPK | boolean | 是否为主键 | 
| name | string | 字段名称 | 
| type | string | 字段类型 |





### ruleField
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| isPK | boolean | 是否为主键 | 
| name | string | 字段名称 | 
| type | string | 字段类型 |










