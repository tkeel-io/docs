---
title: '更新路由转发目标'
description: "UpdateRuleTarget"
sidebar_position: 42
---
## 接口说明
调用该接口更新路由转发目标。

## URI

```
put /rules/{id}/target/{target_id}
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |
| id | path | string | 路由id |  Required | 
| target_id | path | string | 目标id |  Required | 

### 请求Body
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| host | string | kafka 地址， 仅 kafka 类型使用 | 
| sink_id | string | 验证成功后返回的id | 
| sink_type | string | mysql 或者 clickhouse | 
| tags | object | 自定义标签 | 
| value | string | kafka topic， 仅 kafka 类型使用 |








## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([ruleUpdateRuleTargetResp](#ruleUpdateRuleTargetResp)) |

#### ruleUpdateRuleTargetResp

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |  
| fields | Array[ruleMapField] | 映射表 [ 具体参数可见下面 [ruleMapField](#ruleMapField) ] | 
| host | string | kafka 地址， 仅 kafka 类型使用 | 
| id | string | 路由id | 
| sink_id | string | 验证成功后返回的id | 
| sink_type | string | mysql 或者 clickhouse | 
| tags | object | 自定义标签 | 
| type | integer | 类型 1 Kafka, 仅 kafka 类型使用 | 
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










