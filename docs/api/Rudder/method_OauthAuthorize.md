---
title: "OauthAuthorize"
description: 'oauth authorize code with username and password'
---调用该接口oauth authorize code with username and password。



## Request


```
get \oauth\{tenant_id}\authorize
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| tenant_id | path | string | tenantID path param |  

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| response_type | query | string | authorize response type, this must 'code',query param |  true |
| username | query | string | username query param |  true |
| password | query | string | password query param |  true |
| redirect_uri | query | string | redirect uri with code |  true |
| state | query | string | state |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1AuthorizeResponse](#v1AuthorizeResponse) |

#### v1AuthorizeResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| code | string |  |   



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



