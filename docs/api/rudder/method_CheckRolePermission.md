---
title: "CheckRolePermission"
description: 'check role has the permission'
---
调用该接口check role has the permission。

## Request


```
post /rbac/permissions/check
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1CheckRolePermissionRequest](#v1CheckRolePermissionRequest) |

#### v1CheckRolePermissionRequest

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| path | string | permission path |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1CheckRolePermissionResponse](#v1CheckRolePermissionResponse) |

#### v1CheckRolePermissionResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| allowed | boolean | permission allowed |   



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



