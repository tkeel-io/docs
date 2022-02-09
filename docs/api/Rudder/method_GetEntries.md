---
title: "GetEntries"
description: '查询 console entries 接口'
---调用该接口查询 console entries 接口。



## Request


```
get \entries
```

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1GetEntriesResponse](#v1GetEntriesResponse) |

#### v1GetEntriesResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| entries | Array[v1ConsoleEntry] | tenant entries [ 具体参数可见下面 [v1ConsoleEntry](#v1ConsoleEntry) ] |    

### v1ConsoleEntry
| Name | Type | Description | 
| ---- | ---- | ----------- |         
| children | Array[v1ConsoleEntry] |  [ 具体参数可见下面 [v1ConsoleEntry](#v1ConsoleEntry) ] |       
| entry | string |  |      
| icon | string |  |      
| id | string |  |      
| name | string |  |      
| path | string |  |   



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



