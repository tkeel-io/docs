---
title: "DeleteTemplateTelemetryExt"
description: 'delete template telemetry ext'
---
调用该接口delete template telemetry ext。

## Request


```
post /templates/{uid}/telemetry/{id}/ext/delete
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| uid | path | string | 模型ID |  
| id | path | string | 遥测ID |  

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| 扩展配置key 数组 | Object | [apitemplatev1Keys](#apitemplatev1Keys) |

#### apitemplatev1Keys

| Name | Type | Description | 
| ---- | ---- | ----------- |        
| keys | Array[ string ] | key 数组 |    



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



