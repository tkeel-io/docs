---
title: "RemoveExpression"
description: 'remove expression from entity'
---


调用该接口remove expression from entity。



## Request


```
delete /entities/{entity_id}/expressions
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| entity_id | path | string | entity id |  



###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| paths | query | string | expression target path |  false |
| owner | query | string | owner id |  false |
| source | query | string | source id |  false |



## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1RemoveExpressionResp](#v1RemoveExpressionResp) |

#### v1RemoveExpressionResp

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


  
     
 
 


          
     
   
     
 
 


 


