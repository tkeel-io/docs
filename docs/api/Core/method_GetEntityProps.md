---
title: "GetEntityProps"
description: 'Get Entity Properties'
---


调用该接口Get Entity Properties。



## Request


```
get /entities/{id}/properties
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | entity id |  



###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| source | query | string | source id |  false |
| owner | query | string | owner id |  true |
| type | query | string | entity type |  false |
| pids | query | string | entity property ids, eg: pids=1,2,3 |  false |



## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1EntityResponse](#v1EntityResponse) |

#### v1EntityResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |    
| configs | Object | entity configs   |      
| id | string | entity id |          
| mappers | Array[v1MapperDesc] | entity mappers [ 具体参数可见下面 [v1MapperDesc](#v1MapperDesc) ] |       
| owner | string | owner id |     
| properties | Object | entity properties   |      
| source | string | source id |      
| type | string | entity type |   


  
    
          
     
   
     
   
       
         
### v1MapperDesc
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| name | string | mapper name |      
| tql | string | tql content |   


  
     
   
     
 
 


          
     
   
     
   
    
          
     
   
     
   
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


