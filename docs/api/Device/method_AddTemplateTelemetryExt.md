---
title: "AddTemplateTelemetryExt"
description: 'add template telemetry ext'
---调用该接口add template telemetry ext。



## Request


```
post /templates/{uid}/telemetry/{id}/ext
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| uid | path | string | 模型ID |  
| id | path | string | 遥测ID |  

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| 扩展配置KV map | Object | [](#) |

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



