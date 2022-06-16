---
title: "Private_CreatePrivate"
description: ''
---
调用该接口。

## Request

```
post /private
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1CreatePrivateRequest](#v1CreatePrivateRequest) |

#### v1CreatePrivateRequest

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| obj |  |  |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | A successful response. | Object | [v1CreatePrivateResponse](#v1CreatePrivateResponse) |

#### v1CreatePrivateResponse

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



