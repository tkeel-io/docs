---
title: "CreateUser"
description: 'create a  user at tenant'
---调用该接口create a  user at tenant。



## Request


```
post \tenants\{tenant_id}\users
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| tenant_id | path | string | tenant id |  

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| create user body params | Object | [v1CreateUserBody](#v1CreateUserBody) |

#### v1CreateUserBody

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| nick_name | string | user nick name |      
| password | string | user password |         
| roles | Array[ string ] | user roles |       
| username | string | user name |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1CreateUserResponse](#v1CreateUserResponse) |

#### v1CreateUserResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
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



