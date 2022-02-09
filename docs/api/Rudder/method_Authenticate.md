---
title: "Authenticate"
description: 'tkeel authenticate with header Authorization'
---调用该接口tkeel authenticate with header Authorization。



## Request


```
get \authenticate
```

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| path | query | string | url path |  false |
| verb | query | string | http verb |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [apiauthenticationv1AuthenticateResponse](#apiauthenticationv1AuthenticateResponse) |

#### apiauthenticationv1AuthenticateResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| destination | string | dst plugin id |      
| method | string | dst plugin method |      
| role | string | role |      
| tenant_id | string | tenant id |      
| user_id | string | user id |   



### Response  400
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 400 | INVALID_ARG | {   { }} |

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



