---
title: "IdentityProviderRegister"
description: '外部认证注册'
---
调用该接口外部认证注册。

## Request

```
post \oauth\id-provider\register\{tenant_id}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| tenant_id | path | string |  |  

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1IdProviderRegisterRequestBody](#v1IdProviderRegisterRequestBody) |

#### v1IdProviderRegisterRequestBody

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| config | string |  |      
| type | string |  |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1IdProviderRegisterResponse](#v1IdProviderRegisterResponse) |

#### v1IdProviderRegisterResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| registered | boolean |  |   



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



