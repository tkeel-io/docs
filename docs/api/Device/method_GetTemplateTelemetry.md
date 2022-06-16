---
title: "GetTemplateTelemetry"
description: 'get Template telemetry'
---
调用该接口get Template telemetry。

## Request


```
get /templates/{uid}/telemetry/{id}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| uid | path | string | 模板ID |  
| id | path | string | 遥测ID |  

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1GetTemplateTelemetryResponse](#v1GetTemplateTelemetryResponse) |

#### v1GetTemplateTelemetryResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |    
| templateTeleSingleObject | Object | 单个遥测对象   |   



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



