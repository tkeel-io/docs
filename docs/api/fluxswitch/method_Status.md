---
title: 'openapi status'
description: "Status"
---
## 接口说明
调用该接口openapi status。

## URI

```
get /status
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1StatusResponse](#v1StatusResponse)) |

#### v1StatusResponse


| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |
| res | Object |  [ 具体参数可见下面 [v1Result](#v1Result) ]  |
| status | Object |  [ 具体参数可见下面 [v1PluginStatus](#v1PluginStatus) ]  |


### v1Result

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| msg | string |  |
| ret | Object |  [ 具体参数可见下面 [v1Retcode](#v1Retcode) ]  |


### v1Retcode

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |


### v1PluginStatus

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |







