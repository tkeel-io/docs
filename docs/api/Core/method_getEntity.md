---
title: "getEntity"
description: 'Get a entity'
---


调用该接口Get a entity。



## Request


```
get /plugins/{plugin}/entities/{id}
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| plugin | path | string | plugin id |  
| id | path | string | entity id |  



###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| source | query | string | source id |  false |
| owner | query | string | owner id |  false |



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
| plugin | string | plugin id |     
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


  
     
 
 


          
     
   
     
 
 


 


