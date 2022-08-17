---
title: '改变错误信息订阅'
description: "ChangeErrSubscribe"
sidebar_position: 40
---
## 接口说明
调用该接口改变错误信息订阅。

## URI

```
put /rules/{id}/subscribe/error
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |
| id | path | string | 路由id |  Required | 

### 请求Body
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| subscribe_id | string | 数据订阅id |








## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | - |




