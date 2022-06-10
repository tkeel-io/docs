---
title: "CreateRoleBinding"
description: 'create binding to bind role_id with user_id'
---调用该接口create binding to bind role_id with user_id。



## Request


```
post \rbac\roles\{role_id}\users
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| role_id | path | string | bind role name |  

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| bind user id | Object | [CreateRoleBindingRequestUserList](#CreateRoleBindingRequestUserList) |

#### CreateRoleBindingRequestUserList

| Name | Type | Description | 
| ---- | ---- | ----------- |        
| id | Array[ string ] | bind user id |    



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



