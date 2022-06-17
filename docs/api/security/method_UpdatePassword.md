---
title: "UpdatePassword"
description: '修改密码'
---调用该接口修改密码。



## Request


```
put \oauth\pwd
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1UpdatePasswordBody](#v1UpdatePasswordBody) |

#### v1UpdatePasswordBody

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| new_password | string |  |      
| refresh_token | string |  |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1UpdatePasswordResponse](#v1UpdatePasswordResponse) |

#### v1UpdatePasswordResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
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



