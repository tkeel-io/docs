---
title: '校验订阅信息'
description: "ValidateSubscribed"
---
## 接口说明
调用该接口校验订阅信息。

## URI

```
post /validate/subscribe
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |

### 请求Body
| 字段名 | 类型 | 描述 |
| ----------- | ------ | ------ |
| Body | Object([v1ValidateSubscribedRequest](#v1ValidateSubscribedRequest)) |  |

#### v1ValidateSubscribedRequest| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| topic | string | topic |






## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1ValidateSubscribedResponse](#v1ValidateSubscribedResponse)) |

#### v1ValidateSubscribedResponse

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| status | string | 状态 |







