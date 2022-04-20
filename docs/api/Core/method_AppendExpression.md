---
title: "AppendExpression"
description: 'Append expressions for entity'
---


调用该接口Append expressions for entity。



## Request


```
post /entities/{entity_id}/expressions
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| entity_id | path | string | entity id |  



###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| source | query | string | source id |  false |
| owner | query | string | owner id |  false |



### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| expression information | Object | [v1Expressions](#v1Expressions) |

#### v1Expressions

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| expressions | Array[v1Expression] |  [ 具体参数可见下面 [v1Expression](#v1Expression) ] |    


  
       
         
### v1Expression
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| description | string | expression description |      
| expression | string | expression text |      
| name | string | expression name |      
| path | string | target property path |   


  
     
   
     
   
     
   
     
 
 


          
     
 
 





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1AppendExpressionResp](#v1AppendExpressionResp) |

#### v1AppendExpressionResp

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| count | integer | effect count |      
| entity_id | string | entity id |      
| owner | string | owner id |   


  
     
   
     
   
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


