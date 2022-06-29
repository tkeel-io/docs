---
title: '获取实体表达式'
description: "GetExpression"
sidebar_position: 89
---
## 接口说明
调用该接口获取实体表达式。

## URI

```
get /entities/{entity_id}/expressions/{path}
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- | 

| entity_id | path | string | 实体id |  Required | 
| path | path | string | 目标属性 |  Required | 

| owner | query | string | 用户id |  false |
| source | query | string | 来源id |  false |


## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1GetExpressionResp](#v1GetExpressionResp)) |

#### v1GetExpressionResp

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| entity_id | string | 实体id |
| expression | Object | 表达式信息 [ 具体参数可见下面 [v1Expression](#v1Expression) ]  | 
| owner | string | 用户id |





### v1Expression
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| description | string | 表达式描述 | 
| expression | string | 表达式 | 
| name | string | 表达式名称 | 
| path | string | 目标属性 |










