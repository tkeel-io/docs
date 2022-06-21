---
title: 'openapi tenant enable'
description: "TenantEnable"
---
## 接口说明
调用该接口openapi tenant enable。

## URI

```
post /tenant/enable
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |

### 请求Body
| 字段名 | 类型 | 描述 |
| ----------- | ------ | ------ |
| Body | Object([v1TenantEnableRequest](#v1TenantEnableRequest)) |  |

#### v1TenantEnableRequest
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| extra | string |  | 
| tenant_id | string |  |






## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1TenantEnableResponse](#v1TenantEnableResponse)) |

#### v1TenantEnableResponse


| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |
| res | Object |  [ 具体参数可见下面 [v1Result](#v1Result) ]  |


### v1Result

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| msg | string |  |
| ret | Object |  [ 具体参数可见下面 [v1Retcode](#v1Retcode) ]  |


### v1Retcode

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |







