---
title: "CreateRole"
description: '创建角色'
---调用该接口创建角色。



## Request


```
post \rbac\roles
```

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
| 200 | OK | Object | [v1CreateRoleResponse](#v1CreateRoleResponse) |

#### v1CreateRoleResponse

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



