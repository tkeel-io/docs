---
title: "OauthToken"
description: 'oauth token with code or password'
---调用该接口oauth token with code or password。



## Request


```
get \oauth\{tenant_id}\token
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
| @type | string | A URL/resource name that uniquely identifies the type of the serialized
protocol buffer message. This string must contain at least
one "/" character. The last segment of the URL's path must represent
the fully qualified name of the type (as in
`path/google.protobuf.Duration`). The name should be in a canonical form
(e.g., leading "." is not accepted).

In practice, teams usually precompile into the binary all types that they
expect it to use in the context of Any. However, for URLs which use the
scheme `http`, `https`, or no scheme, one can optionally set up a type
server that maps type URLs to message definitions as follows:

* If no scheme is provided, `https` is assumed.
* An HTTP GET on the URL must yield a [google.protobuf.Type][]
  value in binary format, or produce an error.
* Applications are allowed to cache lookup results based on the
  URL, or have them precompiled into a binary to avoid any
  lookup. Therefore, binary compatibility needs to be preserved
  on changes to types. (Use versioned type names to manage
  breaking changes.)

Note: this functionality is not currently available in the official
protobuf release, and it is not used for type URLs beginning with
type.googleapis.com.

Schemes other than `http`, `https` (or the empty scheme) might be
used with implementation specific semantics. |   



