---
title: "DeleteDevice"
description: 'delete device entity'
---调用该接口delete device entity。



## Request


```
post /devices/delete
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| 设备ID 数组 | Object | [apidevicev1Ids](#apidevicev1Ids) |

#### apidevicev1Ids

| Name | Type | Description | 
| ---- | ---- | ----------- |        
| ids | Array[ string ] | id 字符串数组 |    



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1DeleteDeviceResponse](#v1DeleteDeviceResponse) |

#### v1DeleteDeviceResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| faildDelDevice | Array[v1FaildDelDevice] | 设备删除失败 数组 [ 具体参数可见下面 [v1FaildDelDevice](#v1FaildDelDevice) ] |    

### v1FaildDelDevice
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| id | string | 设备ID |      
| reason | string | 原因 |   



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



