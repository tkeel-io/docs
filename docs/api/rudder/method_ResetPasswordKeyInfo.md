---
title: "ResetPasswordKeyInfo"
description: '获取重置密码密钥信息'
---
调用该接口获取重置密码密钥信息。

## Request

```
post \tenants\users\rpk\info
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1RPKInfoBody](#v1RPKInfoBody) |

#### v1RPKInfoBody

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| reset_key | string |  |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1RPKInfoResponse](#v1RPKInfoResponse) |

#### v1RPKInfoResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| nick_name | string |  |      
| tenant_id | string |  |      
| user_id | string |  |      
| username | string |  |   



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



