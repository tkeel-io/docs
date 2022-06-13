---
title: "AddRolePermission"
description: 'add role permission '
---调用该接口add role permission 。



## Request


```
post \rbac\tenant\{tenant_id}\roles\{role}\permission
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| tenant_id | path | string |  |  
| role | path | string |  |  

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1AddRolePermissionBody](#v1AddRolePermissionBody) |

#### v1AddRolePermissionBody

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| permission_action | string |  |      
| permission_object | string |  |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1AddRolePermissionResponse](#v1AddRolePermissionResponse) |

#### v1AddRolePermissionResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| ok | boolean |  |   



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



