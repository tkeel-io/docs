---
title: '添加设备到路由'
description: "AddDevicesToRule"
sidebar_position: 37
---
## 接口说明
调用该接口添加设备到路由。

## URI

```
post /rules/{id}/devices
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |
| id | path | string | 路由id |  Required | 

### 请求Body
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| devices_ids | Array[ string ] | 设备id列表 |








## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | - |




