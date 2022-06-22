---
title: '移动订阅'
description: "changeSubscribe"
---
## 接口说明
调用该接口移动订阅。

## URI

```
put /subscribe/{id}
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |    
| id | path | string | 当前订阅ID |  Required | 

### 请求Body 
| 描述 | 类型 |
| ----------- | ------ |
|  | Object(<业务对象>) |

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1ChangeSubscribedResponse](#v1ChangeSubscribedResponse)) |

#### v1ChangeSubscribedResponse

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| status | string | 请求状态 |







