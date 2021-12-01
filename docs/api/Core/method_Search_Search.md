---
title: "Search_Search"
description: ''
---


调用该接口。



## Request


```
post /search
```







### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1SearchRequest](#v1SearchRequest) |

#### v1SearchRequest

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| condition | Array[v1SearchCondition] |  [ 具体参数可见下面 [v1SearchCondition](#v1SearchCondition) ] |       
| page |  |  |      
| query | string |  |   


  
       
         
### v1SearchCondition
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| field | string |  |      
| operator | string |  |     
| value | Object |    |   


  
     
   
     
   
    
          
     
 
 


          
     
   
     
   
     
 
 





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | A successful response. | Object | [v1SearchResponse](#v1SearchResponse) |

#### v1SearchResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |        
| items | Array[ object ] |  |       
| limit | string |  |      
| offset | string |  |      
| page | string |  |      
| total | string |  |   


  
       
          
     
   
     
   
     
   
     
   
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


