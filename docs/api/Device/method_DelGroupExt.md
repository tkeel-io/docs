---
title: "DelGroupExt"
description: 'delete group extensions'
---
调用该接口delete group extensions。

## Request


```
post /groups/{id}/ext/delete
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | 设备组ID |  

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| 扩展配置key 数组 | Object | [apigroupv1Keys](#apigroupv1Keys) |

#### apigroupv1Keys

| Name | Type | Description | 
| ---- | ---- | ----------- |        
| keys | Array[ string ] | key 数组 |    



## Response

### Response  200
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 200 | OK | {   { }} |

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



