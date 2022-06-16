---
title: "listSubscribe"
description: 'get subscribe list'
---
调用该接口get subscribe list。

## Request


```
post /subscribe/list
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1ListSubscribeRequest](#v1ListSubscribeRequest) |

#### v1ListSubscribeRequest

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| is_descending | boolean | Is descending |      
| key_words | string | Key words |      
| order_by | string | Order by |      
| page_num | string | Page number |      
| page_size | string | Page size |      
| search_key | string | Search Key |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1ListSubscribeResponse](#v1ListSubscribeResponse) |

#### v1ListSubscribeResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| data | Array[v1SubscribeObject] |  [ 具体参数可见下面 [v1SubscribeObject](#v1SubscribeObject) ] |       
| last_page | string | Last page |      
| page_num | string | Page number |      
| page_size | string | Page size |      
| total | string | Total |   

### v1SubscribeObject
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



