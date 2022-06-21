---
title: "ResetPassword"
description: '重置密码'
---
调用该接口重置密码。

## Request

```
post \oauth\rspwd
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1ResetPasswordBody](#v1ResetPasswordBody) |

#### v1ResetPasswordBody

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| new_password | string |  |      
| reset_key | string |  |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1ResetPasswordResponse](#v1ResetPasswordResponse) |

#### v1ResetPasswordResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| has_reset | boolean |  |      
| tenant_id | string |  |      
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



