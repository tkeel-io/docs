---
title: "UpdateEntityConfigs"
description: 'update entity configs.'
---调用该接口update entity configs.。



## Request


```
put /entities/{id}/configs
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | entity id |  

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| type | query | string | entity type |  false |
| owner | query | string | owner id |  false |
| source | query | string | source id |  false |

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| configs | Object | [](#) |

#### 

| Name | Type | Description | 
| ---- | ---- | ----------- |  



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1EntityResponse](#v1EntityResponse) |

#### v1EntityResponse

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



