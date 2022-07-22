---
title: '创建路由'
description: "CreateRule"
sidebar_position: 50
---
## 接口说明
调用该接口创建路由。

## URI

```
post /rules
```


### 请求Body
| 字段名 | 类型 | 描述 |
| ----------- | ------ | ------ |
| Body | Object([ruleRuleCreateReq](#ruleRuleCreateReq)) |  |

#### ruleRuleCreateReq

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| desc | string | 描述 | 
| model_id | string | 模板id | 
| model_name | string | 模板名称 | 
| name | string | 名称 | 
| type | integer | 类型 1 消息路由, 类型 2 时序路由 |







## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([ruleRuleCreateResp](#ruleRuleCreateResp)) |

#### ruleRuleCreateResp

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| created_at | string | 创建时间 | 
| desc | string | 描述 | 
| id | string | 路由id | 
| model_id | string | 模板id | 
| model_name | string | 模板名称 | 
| name | string | 名称 | 
| status | integer | 状态 1 运行中, 状态 0 停止 | 
| type | integer | 类型 1 消息路由, 类型 2 时序路由 | 
| updated_at | string | 更新时间 |










