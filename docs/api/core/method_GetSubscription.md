---
title: '查询订阅信息'
description: "GetSubscription"
sidebar_position: 140
---
## 接口说明
调用该接口查询订阅信息。

## URI

```
get /subscriptions/{id}
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
| 200 | OK | Object([v1SubscriptionResponse](#v1SubscriptionResponse)) |

#### v1SubscriptionResponse

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| id | string | 订阅id | 
| owner | string | 用户id | 
| source | string | 来源id |
| subscription | Object | 订阅信息 [ 具体参数可见下面 [v1SubscriptionObject](#v1SubscriptionObject) ]  |





### v1SubscriptionObject
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| filter | string | 过滤规则 | 
| id | string | 订阅id | 
| mode | string | 订阅模式 | 
| owner | string | 订阅者 | 
| pubsub_name | string | pubsub发布订阅名称 | 
| source | string | 来源id | 
| target | string | 目标id | 
| topic | string | topic主题名称 |










