---
title: "TenantByExactSearch"
description: 'tenant exact search'
---调用该接口tenant exact search。



## Request


```
get \tenants\exact
```

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| title | query | string |  |  false |
| tenant_id | query | string |  |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1ExactTenantResponse](#v1ExactTenantResponse) |

#### v1ExactTenantResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| auth_type | string |  |      
| tenant_id | string |  |      
| title | string |  |   



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



