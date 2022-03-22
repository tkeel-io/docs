---
title: "UpdateDeviceExt"
description: 'update device extensions'
---调用该接口update device extensions。



## Request


```
put /devices/{id}/ext
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | 设备ID |  

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| 设备扩展属性KV | Object | [](#) |

#### 

| Name | Type | Description | 
| ---- | ---- | ----------- |  



## Response

### Response  200
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 200 | OK | {   { }} |

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



