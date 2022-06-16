---
title: "GetSubscription"
description: 'Get subscription'
---
调用该接口Get subscription。

## Request


```
get /subscriptions/{id}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | subscription id |  

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| source | query | string | source id |  false |
| owner | query | string | owner id |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1SubscriptionResponse](#v1SubscriptionResponse) |

#### v1SubscriptionResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| id | string | subscription id |      
| owner | string | owner id |      
| source | string | source id |      
| subscription |  | subscription object |   



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



