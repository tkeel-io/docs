---
title: "ListRepo"
description: '获取仓库列表接口'
---调用该接口获取仓库列表接口。



## Request


```
get \repos
```

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | SUCC | Object | [v1ListRepoResponse](#v1ListRepoResponse) |

#### v1ListRepoResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| repos | Array[v1RepoObject] | repo list [ 具体参数可见下面 [v1RepoObject](#v1RepoObject) ] |    

### v1RepoObject
| Name | Type | Description | 
| ---- | ---- | ----------- |    
| annotations | Object | repo annotations   |      
| installer_num | integer | installer num |     
| metadata | Object | installer metadata   |      
| name | string | repo name |      
| url | string | repo url |   



### Response  400
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 400 | INVALID_ARGUMENT | {   { }} |

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



