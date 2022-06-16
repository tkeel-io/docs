---
title: "TenantEnable"
description: 'openapi tenant enable'
---
调用该接口openapi tenant enable。

## Request


```
post /tenant/enable
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1TenantEnableRequest](#v1TenantEnableRequest) |

#### v1TenantEnableRequest

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| extra | string |  |      
| tenant_id | string |  |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1TenantEnableResponse](#v1TenantEnableResponse) |

#### v1TenantEnableResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| res |  |  |   



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



