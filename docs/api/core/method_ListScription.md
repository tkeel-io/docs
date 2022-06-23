---
title: '查询订阅列表'
description: "ListScription"
sidebar_position: 138
---
## 接口说明
调用该接口查询订阅列表。

## URI

```
get /subscriptions
```


## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1ListSubscriptionResponse](#v1ListSubscriptionResponse)) |

#### v1ListSubscriptionResponse

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| count | integer | 订阅id |  
| items | Array[v1SubscriptionResponse] | 订阅列表 [ 具体参数可见下面 [v1SubscriptionResponse](#v1SubscriptionResponse) ] |





### v1SubscriptionResponse
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










