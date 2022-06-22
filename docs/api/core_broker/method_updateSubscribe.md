---
title: '更新订阅'
description: "updateSubscribe"
---
## 接口说明
调用该接口更新订阅。

## URI

```
patch /subscribe/{id}
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
| 200 | OK | Object([v1UpdateSubscribeResponse](#v1UpdateSubscribeResponse)) |

#### v1UpdateSubscribeResponse

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| description | string | 订阅描述 | 
| endpoint | string | 订阅endpoint | 
| id | string | 订阅ID | 
| is_default | boolean | 是否为默认订阅 | 
| title | string | 订阅名称 |







