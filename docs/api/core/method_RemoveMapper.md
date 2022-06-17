---
title: "RemoveMapper"
description: 'remove mappers from entity'
---
调用该接口remove mappers from entity。

## Request


```
delete /entities/{entity_id}/mappers
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| entity_id | path | string | entity id |  

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| id | query | string | mapper id |  false |
| type | query | string | entity type |  false |
| owner | query | string | owner id |  false |
| source | query | string | source id |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1RemoveMapperResponse](#v1RemoveMapperResponse) |

#### v1RemoveMapperResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| entity_id | string | entity id |      
| id | string | mapper id |      
| owner | string | owner id |      
| source | string | source id |      
| type | string | entity type |   



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



