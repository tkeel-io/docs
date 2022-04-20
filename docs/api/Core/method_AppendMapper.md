---
title: "AppendMapper"
description: 'Append mapper for entity'
---


调用该接口Append mapper for entity。



## Request


```
post /entities/{entity_id}/mappers
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



### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| mapper information | Object | [v1Mapper](#v1Mapper) |

#### v1Mapper

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| description | string | mapper description |      
| id | string | mapper id |      
| name | string | mapper name |      
| tql | string | mapper tql text |   


  
     
   
     
   
     
   
     
 
 





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1AppendMapperResponse](#v1AppendMapperResponse) |

#### v1AppendMapperResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| entity_id | string | entity id |      
| mapper |  | mapper information |      
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


  
     
 
 


          
     
   
     
 
 


 


