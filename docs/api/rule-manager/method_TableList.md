---
title: "TableList"
description: 'Table List'
---调用该接口Table List。



## Request


```
get /sink/{id}/tables
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string |  |  

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [ruleASTableListResp](#ruleASTableListResp) |

#### ruleASTableListResp

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| tables | Array[ruleTable] |  [ 具体参数可见下面 [ruleTable](#ruleTable) ] |    

### ruleTable
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| Engine | string |  |      
| IndexGranularity | string |  |      
| Name | string |  |         
| OrderBy | Array[ string ] |  |          
| Partitions | Array[ string ] |  |       
| Sql | string |  |      
| TTL | string |  |          
| fields | Array[ruleField] |  [ 具体参数可见下面 [ruleField](#ruleField) ] |    

### ruleField
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| isPK | boolean |  |      
| name | string |  |      
| type | string |  |   



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



