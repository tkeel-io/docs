---
title: '删除订阅信息'
description: "DeleteSubscription"
sidebar_position: 141
---
## 接口说明
调用该接口删除订阅信息。

## URI

```
delete /subscriptions/{id}
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- | 

| id | path | string | 订阅id |  Required | 

| source | query | string | 来源id |  false |
| owner | query | string | 用户id |  false |


## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1DeleteSubscriptionResponse](#v1DeleteSubscriptionResponse)) |

#### v1DeleteSubscriptionResponse

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| id | string | 订阅id | 
| status | string | 状态 |










