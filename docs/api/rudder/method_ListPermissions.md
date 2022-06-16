---
title: "ListPermissions"
description: 'list permissions '
---
调用该接口list permissions 。

## Request


```
get /rbac/permissions
```

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| key_words | query | string | permission name search words |  false |
| role | query | string | tenant role name,default is current role |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1ListPermissionResponse](#v1ListPermissionResponse) |

#### v1ListPermissionResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| permissions | Array[apirbacv1Permission] | role permissions [ 具体参数可见下面 [apirbacv1Permission](#apirbacv1Permission) ] |    

### apirbacv1Permission
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| path | string | permission path |      
| permission |  | permission |   



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



