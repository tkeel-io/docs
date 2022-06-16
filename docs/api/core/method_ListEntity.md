---
title: "ListEntity"
description: 'List entities'
---
调用该接口List entities。

## Request


```
post /entities/search
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1ListEntityRequest](#v1ListEntityRequest) |

#### v1ListEntityRequest

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| condition | Array[v1SearchCondition] | search conditions [ 具体参数可见下面 [v1SearchCondition](#v1SearchCondition) ] |       
| is_descending | boolean | 是否逆序， false：不逆序，true:逆序 |      
| order_by | string | 排序字段 |      
| owner | string | owner id |      
| page_num | integer | 记录开始位置 |      
| page_size | integer | 每页限制条数 |      
| query | string | search keyword |      
| source | string | source id |   

### v1SearchCondition
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| field | string | entity property key |      
| operator | string | operator $gt $gte $eq $lt $lte  |     
| value | Object | value of the key   |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1ListEntityResponse](#v1ListEntityResponse) |

#### v1ListEntityResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| items | Array[v1EntityResponse] | entity list [ 具体参数可见下面 [v1EntityResponse](#v1EntityResponse) ] |       
| page_num | integer | 记录开始位置 |      
| page_size | integer | 每页限制条数 |      
| total | integer | total count of the entities |   

### v1EntityResponse
| Name | Type | Description | 
| ---- | ---- | ----------- |    
| configs | Object | entity configs   |      
| description | string | entity description |      
| id | string | entity id |      
| last_time | string | entity last modify timestamp |          
| mappers | Array[v1Mapper] | entity mappers [ 具体参数可见下面 [v1Mapper](#v1Mapper) ] |       
| owner | string | owner id |     
| properties | Object | entity properties   |      
| source | string | source id |      
| template_id | string | entity template |      
| type | string | entity type |      
| version | string | entity version |   

### v1Mapper
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| description | string | mapper description |      
| id | string | mapper id |      
| name | string | mapper name |      
| tql | string | mapper tql text |   



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



