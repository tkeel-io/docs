---
title: "IdentityProviderTemplate"
description: '获取外部身份认证配置模板'
---调用该接口获取外部身份认证配置模板。



## Request


```
get \oauth\id-provider\template
```

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| type | query | string |  |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1IdProviderTemplateResponse](#v1IdProviderTemplateResponse) |

#### v1IdProviderTemplateResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| config | string |  |   



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



