---
title: '创建订阅'
description: "createSubscribe"
---
## 接口说明
调用该接口创建订阅。

## URI

```
post /subscribe
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |

### 请求Body
| 字段名 | 类型 | 描述 |
| ----------- | ------ | ------ |
| Body | Object([v1CreateSubscribeRequest](#v1CreateSubscribeRequest)) |  |

#### v1CreateSubscribeRequest| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| description | string | 订阅描述 | 
| title | string | 订阅名称 |






## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1CreateSubscribeResponse](#v1CreateSubscribeResponse)) |

#### v1CreateSubscribeResponse

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| description | string | 订阅描述 | 
| endpoint | string | 订阅endpoint | 
| id | string | 订阅ID | 
| is_default | boolean | 是否为默认订阅 | 
| title | string | 订阅名称 |







