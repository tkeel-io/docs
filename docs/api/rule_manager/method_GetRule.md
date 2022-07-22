---
title: '查询路由详情'
description: "GetRule"
sidebar_position: 51
---
## 接口说明
调用该接口查询路由详情。

## URI

```
get /rules/{id}
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |
| id | path | string | 路由id |  Required | 

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([ruleRule](#ruleRule)) |

#### ruleRule

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










