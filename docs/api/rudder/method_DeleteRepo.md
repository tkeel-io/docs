---
title: "DeleteRepo"
description: '删除仓库接口'
---
调用该接口删除仓库接口。

## Request

```
delete \repos\{name}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| name | path | string | repo name |  

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | SUCC | Object | [v1DeleteRepoResponse](#v1DeleteRepoResponse) |

#### v1DeleteRepoResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| repo |  | repo |   



### Response  400
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 400 | INVALID_ARGUMENT | {   { }} |

### Response  404
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 404 | REPO_NOT_FOUND | {   { }} |

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



