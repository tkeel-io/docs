---
title: '移除实体表达式'
description: "RemoveExpression"
sidebar_position: 220
---
## 接口说明
调用该接口移除实体表达式。

## URI

```
delete /entities/{entity_id}/expressions
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |    
| entity_id | path | string | 实体id |  Required |  
| paths | query | string | 目标属性 |  false |
| owner | query | string | 用户id |  false |
| source | query | string | 来源id |  false |

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1RemoveExpressionResp](#v1RemoveExpressionResp)) |

#### v1RemoveExpressionResp

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| count | integer | 变更数量 | 
| entity_id | string | 实体id | 
| owner | string | 用户id |







