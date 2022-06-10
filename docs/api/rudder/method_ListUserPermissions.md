---
title: "ListUserPermissions"
description: 'list user permissions '
---调用该接口list user permissions 。



## Request


```
get \rbac\tenant\{tenant_id}\users\{user_id}\permissions
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| tenant_id | path | string |  |  
| user_id | path | string |  |  

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1ListUserPermissionResponse](#v1ListUserPermissionResponse) |

#### v1ListUserPermissionResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| permissions | Array[v1ListPermissionDetail] |  [ 具体参数可见下面 [v1ListPermissionDetail](#v1ListPermissionDetail) ] |    

### v1ListPermissionDetail
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| permission_action | string |  |      
| permission_object | string |  |      
| role | string |  |   



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



