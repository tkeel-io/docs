---
title: "TMDeleteRoleBinding"
description: 'TM delete policy 测试专用'
---调用该接口TM delete policy 测试专用。



## Request


```
post \tkeel-manager\rbac\binding\delete
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1TMRoleBindingRequest](#v1TMRoleBindingRequest) |

#### v1TMRoleBindingRequest

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| role | string |  |      
| tenant | string |  |      
| user | string |  |   



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



