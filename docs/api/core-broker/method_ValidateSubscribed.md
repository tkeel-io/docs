---
title: "ValidateSubscribed"
description: 'validate subscribe topic is user request'
---调用该接口validate subscribe topic is user request。



## Request


```
post /validate/subscribe
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1ValidateSubscribedRequest](#v1ValidateSubscribedRequest) |

#### v1ValidateSubscribedRequest

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| topic | string | topic |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1ValidateSubscribedResponse](#v1ValidateSubscribedResponse) |

#### v1ValidateSubscribedResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| status | string | status |   



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



