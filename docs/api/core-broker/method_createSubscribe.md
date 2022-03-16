---
title: "createSubscribe"
description: 'create subscribe'
---调用该接口create subscribe。



## Request


```
post /subscribe
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1CreateSubscribeRequest](#v1CreateSubscribeRequest) |

#### v1CreateSubscribeRequest

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| description | string | 订阅描述 |      
| title | string | 订阅名称 |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1CreateSubscribeResponse](#v1CreateSubscribeResponse) |

#### v1CreateSubscribeResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| description | string | 订阅描述 |      
| endpoint | string | 订阅endpoint |      
| id | string | 订阅ID |      
| is_default | boolean | 是否为默认订阅 |      
| title | string | 订阅名称 |   



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



