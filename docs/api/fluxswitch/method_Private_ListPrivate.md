---
title: "Private_ListPrivate"
description: ''
---
调用该接口。

## Request

```
get /private
```

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| query | query | string |  |  false |
| order_by | query | string |  |  false |
| page_num | query | integer |  |  false |
| page_size | query | integer |  |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | A successful response. | Object | [v1ListPrivateResponse](#v1ListPrivateResponse) |

#### v1ListPrivateResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| objList | Array[v1PrivateObject] |  [ 具体参数可见下面 [v1PrivateObject](#v1PrivateObject) ] |    

### v1PrivateObject
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| uid | string |  |   



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



