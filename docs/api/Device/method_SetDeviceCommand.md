---
title: "SetDeviceCommand"
description: 'set device command'
---调用该接口set device command。



## Request


```
post /devices/{id}/command/set
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string |  设备Id |  

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  设置内容 | Object | [v1SetContent](#v1SetContent) |

#### v1SetContent

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| id | string | 属性 or  命令 标识符id |     
| value | Object | 设置的 value   |   



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



