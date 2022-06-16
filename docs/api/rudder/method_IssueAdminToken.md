---
title: "IssueAdminToken"
description: '平台管理员 Token 颁发接口'
---
调用该接口平台管理员 Token 颁发接口。

## Request


```
get /oauth2/admin
```

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| password | query | string | admin password |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1IssueTokenResponse](#v1IssueTokenResponse) |

#### v1IssueTokenResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| access_token | string | oauth2 access token |      
| expires_in | integer | oauth2 token expires |      
| refresh_token | string | oauth2 refresh token |      
| token_type | string | oauth2 token type |   



### Response  401
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 401 | PASSWORD_NOT_MATCH | {   { }} |

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



