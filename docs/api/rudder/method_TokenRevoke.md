---
title: "TokenRevoke"
description: '注销 access_token'
---
调用该接口注销 access_token。

## Request

```
post \oauth\token\revoke
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1TokenRevokeBody](#v1TokenRevokeBody) |

#### v1TokenRevokeBody

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| refresh_token | string |  |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1TokenRevokeResponse](#v1TokenRevokeResponse) |

#### v1TokenRevokeResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| revoked | boolean |  |      
| tenant_id | string |  |   



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



