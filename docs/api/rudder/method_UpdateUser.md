---
title: "UpdateUser"
description: '修改用户信息'
---
调用该接口修改用户信息。

## Request

```
put \tenants\{tenant_id}\users\{user_id}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| tenant_id | path | string |  |  
| user_id | path | string |  |  

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1UpdateUserBody](#v1UpdateUserBody) |

#### v1UpdateUserBody

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| nick_name | string |  |         
| roles | Array[ string ] |  |    



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1UpdateUserResponse](#v1UpdateUserResponse) |

#### v1UpdateUserResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| ok | boolean |  |   



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



