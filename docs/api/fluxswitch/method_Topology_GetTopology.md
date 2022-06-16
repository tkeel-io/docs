---
title: "Topology_GetTopology"
description: ''
---
调用该接口。

## Request

```
get /topology
```

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| uid | query | string |  |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | A successful response. | Object | [v1GetTopologyResponse](#v1GetTopologyResponse) |

#### v1GetTopologyResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| clients | Array[v1Client] |  [ 具体参数可见下面 [v1Client](#v1Client) ] |    

### v1Client
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| address | string |  |      
| name | string |  |      
| online | string |  |          
| proxies | Array[v1Proxy] |  [ 具体参数可见下面 [v1Proxy](#v1Proxy) ] |       
| status | string |  |   

### v1Proxy
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| device_id | string |  |      
| device_name | string |  |      
| host | string |  |      
| name | string |  |      
| online | string |  |      
| port | string |  |      
| protocol | string |  |      
| status | string |  |   



### Response  default 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| default | An unexpected error response. | Object | [rpcStatus](#rpcStatus) |

#### rpcStatus

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| code | integer |  |          
| details | Array[protobufAny] |  [ 具体参数可见下面 [protobufAny](#protobufAny) ] |       
| message | string |  |   

### protobufAny
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| @type | string |  |   



