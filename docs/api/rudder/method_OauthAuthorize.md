---
title: "OauthAuthorize"
description: '获取授权码'
---
调用该接口获取授权码。

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
| @type | string |  |   



