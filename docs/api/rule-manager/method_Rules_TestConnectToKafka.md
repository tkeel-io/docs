---
title: "Rules_TestConnectToKafka"
description: ''
---调用该接口。



## Request


```
get /testing/kafka
```

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| host | query | string |  |  false |
| topic | query | string |  |  false |

## Response

### Response  200
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 200 | A successful response. | {   { }} |

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



