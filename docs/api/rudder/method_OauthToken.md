---
title: "OauthToken"
description: 'oauth token with code or password'
---
调用该接口oauth token with code or password。

## Request


```
get /oauth/{tenant_id}/token
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| tenant_id | path | string | tenant_id path param |  

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| grant_type | query | string | grant_type 'authorize_code','password', query param |  true |
| code | query | string | code with authorize response,query param |  false |
| redirect_uri | query | string | redirect_uri while grant_type is code,query param |  false |
| username | query | string | username while grant_type is password ,query param |  false |
| password | query | string | password while grant_type is password,query param |  false |
| refresh_token | query | string | refresh token while grant_type is refresh_token,query param |  false |
| disable_redirect | query | boolean | auto redirect if auto_redirect = trueparam |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1TokenResponse](#v1TokenResponse) |

#### v1TokenResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| access_token | string |  |      
| expires_in | string |  |      
| redirect_url | string |  |      
| refresh_token | string |  |      
| token_type | string |  |   



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



