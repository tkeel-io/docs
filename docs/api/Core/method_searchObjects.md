---
title: "SearchObjects"
description: 'Search objects by keyword'
---


调用该接口Search objects by keyword。



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
| condition | Array[v1SearchCondition] | conditions list [ 具体参数可见下面 [v1SearchCondition](#v1SearchCondition) ] |       
| page |  | page |      
| query | string | search keyword |   


  
       
         
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
| 200 | OK | Object | [v1SearchResponse](#v1SearchResponse) |

#### v1SearchResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |        
| items | Array[ object ] | items of the results |       
| limit | string | limit |      
| offset | string | offset |      
| page | string | page number |      
| total | string | count of the results |   


  
       
          
     
   
     
   
     
   
     
   
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


