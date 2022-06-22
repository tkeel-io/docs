---
title: '删除订阅'
description: "deleteSubscribe"
---
## 接口说明
调用该接口删除订阅。

## URI

```
delete /subscribe/{id}
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |    
| id | path | string | 订阅ID |  Required | 

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1DeleteSubscribeResponse](#v1DeleteSubscribeResponse)) |

#### v1DeleteSubscribeResponse

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| id | string | 订阅ID |







