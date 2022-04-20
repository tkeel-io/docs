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
| 200 | OK | Object | [v1SearchResponse](#v1SearchResponse) |

#### v1SearchResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |        
| items | Array[ object ] | items of the results |       
| page_num | integer | 记录开始位置 |      
| page_size | integer | 每页限制条数 |      
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


  
     
 
 


          
     
   
     
 
 


 


