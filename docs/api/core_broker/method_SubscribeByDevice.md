---
title: '添加设备订阅'
description: "SubscribeByDevice"
---
## 接口说明
调用该接口添加设备订阅。

## URI

```
post /subscribe/device/{id}
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |    
| id | path | string | 设备id |  Required | 

### 请求Body 
| 描述 | 类型 |
| ----------- | ------ |
|  | Object(<业务对象>) |

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1SubscribeByDeviceResponse](#v1SubscribeByDeviceResponse)) |

#### v1SubscribeByDeviceResponse

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| status | string | 状态 |







