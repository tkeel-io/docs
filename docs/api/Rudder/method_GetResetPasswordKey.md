---
title: "GetResetPasswordKey"
description: 'get reset user password key '
---调用该接口get reset user password key 。



## Request


```
get \tenants\{tenant_id}\users\{user_id}\rpk
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| tenant_id | path | string |  |  
| user_id | path | string |  |  

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1GetResetPasswordKeyResponse](#v1GetResetPasswordKeyResponse) |

#### v1GetResetPasswordKeyResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| nick_name | string |  |      
| reset_key | string |  |      
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



