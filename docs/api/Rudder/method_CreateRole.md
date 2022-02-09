---
title: "CreateRole"
description: 'create role in tenant '
---调用该接口create role in tenant 。



## Request


```
post \rbac\tenant\{tenant_id}\roles
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| tenant_id | path | string |  |  

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1TenantRole](#v1TenantRole) |

#### v1TenantRole

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| role | string |  |   



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



