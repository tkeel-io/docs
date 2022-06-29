---
title: "SetPlatformExtraConfig"
description: '设置 platform config extra 数据接口'
---
调用该接口设置 platform config extra 数据接口。

## Request

```
post \config\platform\update
```

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| key | query | string | key |  false |
| path | query | string | path |  false |

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| extra | Object | [](#) |

#### 

| Name | Type | Description | 
| ---- | ---- | ----------- |  



## Response

### Response  200
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 200 | OK | {object   { }} |

### Response  400
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 400 | INVALID_TENANT | {   { }} |

### Response  500
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 500 | INTERNAL_ERROR | {   { }} |

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



