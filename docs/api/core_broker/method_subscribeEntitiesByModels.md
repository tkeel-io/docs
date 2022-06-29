---
title: '通过模板添加到订阅'
description: "subscribeEntitiesByModels"
---
## 接口说明
调用该接口通过模板添加到订阅。

## URI

```
post /subscribe/{id}/models
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |    
| id | path | string | 订阅ID |  Required | 

### 请求Body 
| 描述 | 类型 |
| ----------- | ------ |
|  | Object(<业务对象>) |

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1SubscribeEntitiesByModelsResponse](#v1SubscribeEntitiesByModelsResponse)) |

#### v1SubscribeEntitiesByModelsResponse

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| id | string | 订阅ID | 
| status | string | 订阅状态 |







