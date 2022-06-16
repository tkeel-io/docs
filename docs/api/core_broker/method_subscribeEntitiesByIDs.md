---
title: "subscribeEntitiesByIDs"
description: 'add subscribe entities by ids'
---
调用该接口add subscribe entities by ids。

## Request


```
post /subscribe/{id}/entities
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | 订阅ID |  

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [](#) |

#### 

| Name | Type | Description | 
| ---- | ---- | ----------- |  



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1SubscribeEntitiesByIDsResponse](#v1SubscribeEntitiesByIDsResponse) |

#### v1SubscribeEntitiesByIDsResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| id | string | 订阅ID |      
| status | string | 订阅状态 |   



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



