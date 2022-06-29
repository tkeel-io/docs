---
title: '查询拓扑结构'
description: "GetTopology"
---
## 接口说明
调用该接口查询拓扑结构。

## URI

```
get /topology
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- | 
| uid | query | string |  |  false |

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1GetTopologyResponse](#v1GetTopologyResponse)) |

#### v1GetTopologyResponse


| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |  
| clients | Array[v1Client] |  [ 具体参数可见下面 [v1Client](#v1Client) ] |


### v1Client

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| address | string | 网关地址 | 
| name | string | 网关名称 | 
| online | string | 在线状态 |  
| proxies | Array[v1Proxy] | 代理服务列表 [ 具体参数可见下面 [v1Proxy](#v1Proxy) ] | 
| status | string | 启用状态 |


### v1Proxy

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| device_id | string | 设备ID | 
| device_name | string | 设备名称 | 
| host | string | 代理服务地址 | 
| name | string | 代理服务名称 | 
| online | string | 在线状态 | 
| port | string | 代理服务端口 | 
| protocol | string | 协议 | 
| status | string | 启用状态 |







