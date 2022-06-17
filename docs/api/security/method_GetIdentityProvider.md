---
title: "GetIdentityProvider"
description: '获取租户外部认证配置'
---调用该接口获取租户外部认证配置。



## Request


```
get \oauth\id-provider\{tenant_id}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| tenant_id | path | string |  |  

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1GetIdentityProviderResponse](#v1GetIdentityProviderResponse) |

#### v1GetIdentityProviderResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| config | string |  |      
| type | string |  |   



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



