---
title: "TMDeletePolicy"
description: 'TM delete policy'
---
调用该接口TM delete policy。

## Request


```
post /tkeel-manager/rbac/policy/delete
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1TMPolicyRequest](#v1TMPolicyRequest) |

#### v1TMPolicyRequest

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| permission | string |  |      
| role | string |  |      
| tenant | string |  |   



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



