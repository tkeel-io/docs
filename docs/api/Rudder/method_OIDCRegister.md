---
title: "OIDCRegister"
description: 'oauth OIDC provider register'
---调用该接口oauth OIDC provider register。



## Request


```
post \oauth\oidc\register
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1OIDCRegisterBody](#v1OIDCRegisterBody) |

#### v1OIDCRegisterBody

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| client_id | string |  |      
| client_secret | string |  |      
| email_key | string |  |      
| endpoint |  |  |      
| get_user_info | boolean |  |      
| insecure_skip_verify | boolean |  |      
| issuer | string |  |      
| preferred_username_key | string |  |      
| redirect_url | string |  |         
| scopes | Array[ string ] |  |       
| tenant_id | string |  |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1OIDCRegisterResponse](#v1OIDCRegisterResponse) |

#### v1OIDCRegisterResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| ok | boolean |  |   



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



