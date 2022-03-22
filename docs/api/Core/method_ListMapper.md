---
title: "ListMapper"
description: 'list mappers'
---


调用该接口list mappers。



## Request


```
get /entities/{entity_id}/mappers
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| entity_id | path | string | entity id |  



###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| type | query | string | entity type |  false |
| source | query | string | source id |  false |
| owner | query | string | owner id |  false |



## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1ListMapperResponse](#v1ListMapperResponse) |

#### v1ListMapperResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| entity_id | string | entity id |          
| mappers | Array[v1Mapper] | mapper informations [ 具体参数可见下面 [v1Mapper](#v1Mapper) ] |       
| owner | string | owner id |      
| source | string | source id |      
| type | string | entity type |   


  
     
   
       
         
### v1Mapper
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| description | string | mapper description |      
| id | string | mapper id |      
| name | string | mapper name |      
| tql_text | string | mapper tql text |   


  
     
   
     
   
     
   
     
 
 


          
     
   
     
   
     
   
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


