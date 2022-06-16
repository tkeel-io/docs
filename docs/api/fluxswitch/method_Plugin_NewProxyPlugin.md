---
title: "Plugin_NewProxyPlugin"
description: 'TKEEL_COMMENT
{"response":{"raw_data":true}}'
---
调用该接口TKEEL_COMMENT
{"response":{"raw_data":true}}。

## Request

```
post /plugin/proxy/new
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1NewProxyObject](#v1NewProxyObject) |

#### v1NewProxyObject

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| content |  |  |      
| op | string |  |      
| version | string |  |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | A successful response. | Object | [v1NewProxyPluginResponse](#v1NewProxyPluginResponse) |

#### v1NewProxyPluginResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| content |  |  |      
| reject | boolean |  |      
| reject_reason | string |  |      
| unchange | boolean |  |   



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



