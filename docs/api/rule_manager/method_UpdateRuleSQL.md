---
title: '更新路由SQL规则'
description: "UpdateRuleSQL"
sidebar_position: 46
---
## 接口说明
调用该接口更新路由SQL规则。

## URI

```
put /rules/{id}/sql
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |
| id | path | string | 路由id |  Required | 

### 请求Body
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| select_expr | string | select语句 | 
| where_expr | string | where语句 |








## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([ruleRuleSqlUpdateResp](#ruleRuleSqlUpdateResp)) |

#### ruleRuleSqlUpdateResp

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| id | string | 路由id | 
| select_expr | string | select语句 | 
| updated_at | string | 更新时间 | 
| where_expr | string | where语句 |










