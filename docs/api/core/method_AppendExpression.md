---
title: '添加实体表达式'
description: "AppendExpression"
sidebar_position: 88
---
## 接口说明
调用该接口添加实体表达式。

## URI

```
post /entities/{entity_id}/expressions
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- | 

| entity_id | path | string | 实体id |  Required | 

| source | query | string | 来源id |  false |
| owner | query | string | 用户id |  false |


### 请求Body
| 字段名 | 类型 | 描述 |
| ----------- | ------ | ------ |
| Body | Object([v1Expressions](#v1Expressions)) | 表达式信息 |

#### v1Expressions

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |  
| expressions | Array[v1Expression] |  [ 具体参数可见下面 [v1Expression](#v1Expression) ] |





### v1Expression
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| description | string | 表达式描述 | 
| expression | string | 表达式 | 
| name | string | 表达式名称 | 
| path | string | 目标属性 |









## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1AppendExpressionResp](#v1AppendExpressionResp)) |

#### v1AppendExpressionResp

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| count | integer | 变更数量 | 
| entity_id | string | 实体id | 
| owner | string | 用户id |










