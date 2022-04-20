---
title: "GetExpression"
description: 'get expression by id'
---


调用该接口get expression by id。



## Request


```
get /entities/{entity_id}/expressions/{path}
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| entity_id | path | string | entity id |  
| path | path | string | target property path |  



###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| owner | query | string | owner id |  false |
| source | query | string | source id |  false |



## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1GetExpressionResp](#v1GetExpressionResp) |

#### v1GetExpressionResp

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| entity_id | string | entity id |      
| expression |  | expression information |      
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


  
     
 
 


          
     
   
     
 
 


 


