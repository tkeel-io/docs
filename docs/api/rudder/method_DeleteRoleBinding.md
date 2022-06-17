---
title: "DeleteRoleBinding"
description: '删除用户角色'
---调用该接口删除用户角色。



## Request


```
delete \rbac\roles\{role_id}\users\{user_id}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| role_id | path | string | bind role id |  
| user_id | path | string | bind user id |  

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



