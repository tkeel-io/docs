---
title: "DeleteTemplateCommand"
description: 'delete template command'
---调用该接口delete template command。



## Request


```
post /templates/{uid}/command/delete
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| uid | path | string | 模板ID |  

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| 命令ID 数组 | Object | [apitemplatev1Ids](#apitemplatev1Ids) |

#### apitemplatev1Ids

| Name | Type | Description | 
| ---- | ---- | ----------- |        
| ids | Array[ string ] | ID 数组 |    



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



