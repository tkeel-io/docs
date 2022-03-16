---
title: "UpdateAdminPassword"
description: 'admin 重设密码接口'
---调用该接口admin 重设密码接口。



## Request


```
put \oauth2\pwd
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1UpdateAdminPasswordRequest](#v1UpdateAdminPasswordRequest) |

#### v1UpdateAdminPasswordRequest

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| new_password | string | new admin password |   



## Response

### Response  200
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 200 | OK | {   { }} |

### Response  401
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 401 | TOKEN_INVALID | {   { }} |

### Response  500
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 500 | INTERNAL_ERROR | {   { }} |

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



