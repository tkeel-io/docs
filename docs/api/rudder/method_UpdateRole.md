---
title: "UpdateRole"
description: '修改角色信息'
---调用该接口修改角色信息。



## Request


```
put \rbac\roles\{id}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | tenant role id |  

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| tenant role | Object | [v1Role](#v1Role) |

#### v1Role

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| bind_num | integer | role bind user number |      
| desc | string | role desc |      
| id | string | tenant role id |      
| name | string | tenant role name |          
| permission_list | Array[apirbacv1Permission] | permission path list [ 具体参数可见下面 [apirbacv1Permission](#apirbacv1Permission) ] |       
| uneditable | boolean | role uneditable |      
| upsert_timestamp | string | role upsert timestamp |   

### apirbacv1Permission
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| path | string | permission path |      
| permission |  | permission |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1UpdateRoleResponse](#v1UpdateRoleResponse) |

#### v1UpdateRoleResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| role |  | tenant role |   



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



