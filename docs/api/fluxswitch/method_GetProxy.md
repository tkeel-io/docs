---
title: '查询代理服务详情'
description: "GetProxy"
---
## 接口说明
调用该接口查询代理服务详情。

## URI

```
get /proxy/{id}
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |    
| id | path | string | 代理服务ID |  Required | 

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1GetProxyResponse](#v1GetProxyResponse)) |

#### v1GetProxyResponse


| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |
| proxy | Object | 代理服务信息 [ 具体参数可见下面 [v1QueryProxy](#v1QueryProxy) ]  |


### v1QueryProxy

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| client_id | string | 网关ID | 
| create_at | string | 创建时间 | 
| device_id | string | 设备ID | 
| device_name | string | 设备名称 | 
| export_flow | string | 下行流量 | 
| host | string | 服务地址 | 
| id | string | 代理服务ID | 
| inlet_flow | string | 上行流量 | 
| name | string | 名称 | 
| online | string | 在线状态 | 
| port | string | 服务端口 | 
| protocol | string | 协议 | 
| remark | string | 备注 | 
| status | string | 启用状态 | 
| token | string | Token | 
| url | string | 访问地址 |







