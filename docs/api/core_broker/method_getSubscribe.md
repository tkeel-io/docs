---
title: '查询订阅'
description: "getSubscribe"
---
## 接口说明
调用该接口查询订阅。

## URI

```
get /subscribe/{id}
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |    
| id | path | string | 订阅ID |  Required | 

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1GetSubscribeResponse](#v1GetSubscribeResponse)) |

#### v1GetSubscribeResponse

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| count | string | 订阅数量 | 
| created_at | string | 订阅创建时间 | 
| description | string | 订阅描述 | 
| endpoint | string | 订阅endpoint | 
| id | string | 订阅ID | 
| is_default | boolean | 是否为默认订阅 | 
| title | string | 订阅名称 | 
| updated_at | string | 订阅更新时间 |







