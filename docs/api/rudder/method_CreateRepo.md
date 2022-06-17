---
title: "CreateRepo"
description: '创建仓库接口'
---调用该接口创建仓库接口。



## Request


```
post \repos\{name}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| name | path | string | repo name |  

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| repo url | Object | [CreateRepoRequestRepoUrl](#CreateRepoRequestRepoUrl) |

#### CreateRepoRequestRepoUrl

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| url | string | repo url |   



## Response

### Response  200
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 200 | SUCC | {   { }} |

### Response  400
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 400 | INVALID_ARGUMENT | {   { }} |

### Response  409
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 409 | ALREADY_EXISTS | {   { }} |

### Response  500
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 500 | INTERNAL_STORE | {   { }} |

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



