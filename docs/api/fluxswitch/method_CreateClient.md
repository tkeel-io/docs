---
title: '创建网关'
description: "CreateClient"
---
## 接口说明
调用该接口创建网关。

## URI

```
post /client
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |

### 请求Body
| 字段名 | 类型 | 描述 |
| ----------- | ------ | ------ |
| Body | Object([v1UpdateClient](#v1UpdateClient)) | 网关信息 |

#### v1UpdateClient
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| name | string | 网关名称 | 
| status | string | 启用状态 |






## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1CreateClientResponse](#v1CreateClientResponse)) |

#### v1CreateClientResponse


| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |
| client | Object | 网关信息 [ 具体参数可见下面 [v1QueryClient](#v1QueryClient) ]  | 
| command | string | 网关启动命令 |


### v1QueryClient

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| client_address | string | 网关地址 | 
| create_at | string | 创建时间 | 
| export_flow | string | 下行流量 | 
| id | string | 网关ID | 
| inlet_flow | string | 上行流量 | 
| name | string | 名称 | 
| online | string | 在线状态 | 
| status | string | 启用状态 | 
| token | string | Token |







