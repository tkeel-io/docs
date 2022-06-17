---
title: "ActionVerify"
description: 'Action Verify'
---
调用该接口Action Verify。

## Request


```
post /verify/{sink_type}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| sink_type | path | string |  |  

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [](#) |

#### 

| Name | Type | Description | 
| ---- | ---- | ----------- |  



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [ruleASVerifyResp](#ruleASVerifyResp) |

#### ruleASVerifyResp

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| id | string |  |         
| types | Array[ string ] |  |    



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



