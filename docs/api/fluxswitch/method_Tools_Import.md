---
title: "Tools_Import"
description: 'TKEEL_COMMENT
{"request":{"raw_data":true}}'
---
调用该接口TKEEL_COMMENT
{"request":{"raw_data":true}}。

## Request

```
post /import
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1ImportRequest](#v1ImportRequest) |

#### v1ImportRequest

| Name | Type | Description | 
| ---- | ---- | ----------- |  



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | A successful response. | Object | [v1ImportResponse](#v1ImportResponse) |

#### v1ImportResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |  



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



