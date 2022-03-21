---
title: "TenantEnable"
description: '插件租户启用接口'
---调用该接口插件租户启用接口。



## Request


```
post \plugins\{id}\tenants
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | plugin id |  

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| extra data | Object | [TenantEnableRequestEnableExtraData](#TenantEnableRequestEnableExtraData) |

#### TenantEnableRequestEnableExtraData

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| desc | string | extra data |      
| extra | string | extra data |   



## Response

### Response  200
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 200 | OK | {   { }} |

### Response  400
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 400 | INVALID_ARGUMENT | {   { }} |

### Response  500
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 500 | INTERNAL_ERROR | {   { }} |

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



