---
title: "DeleteUserRole"
description: 'delete user role '
---调用该接口delete user role 。



## Request


```
delete \rbac\tenant\{tenant_id}\users\{user_id}\roles\{role}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| tenant_id | path | string |  |  
| user_id | path | string |  |  
| role | path | string |  |  

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



