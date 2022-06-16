---
title: "getSubscribe"
description: 'get subscribe'
---
调用该接口get subscribe。

## Request


```
get /subscribe/{id}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | 订阅ID |  

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1GetSubscribeResponse](#v1GetSubscribeResponse) |

#### v1GetSubscribeResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| count | string | 订阅数量 |      
| created_at | string | 订阅创建时间 |      
| description | string | 订阅描述 |      
| endpoint | string | 订阅endpoint |      
| id | string | 订阅ID |      
| is_default | boolean | 是否为默认订阅 |      
| title | string | 订阅名称 |      
| updated_at | string | 订阅更新时间 |   



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



