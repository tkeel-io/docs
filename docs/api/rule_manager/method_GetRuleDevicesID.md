---
title: '查询路由的设备id列表'
description: "GetRuleDevicesID"
sidebar_position: 44
---
## 接口说明
调用该接口查询路由的设备id列表。

## URI

```
get /rules/{id}/devices_id_array
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |
| id | path | string | 路由id |  Required | 

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([ruleRuleDevicesIDResp](#ruleRuleDevicesIDResp)) |

#### ruleRuleDevicesIDResp

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| devices_ids | Array[ string ] | 路由设备id列表 |










