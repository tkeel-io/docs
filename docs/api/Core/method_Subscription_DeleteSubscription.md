---
title: "Subscription_DeleteSubscription"
description: ''
---


调用该接口。



## Request


```
delete /plugins/{plugin}/subscriptions/{id}
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| plugin | path | string |  |  
| id | path | string |  |  



###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| source | query | string |  |  false |
| owner | query | string |  |  false |



## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | A successful response. | Object | [v1DeleteSubscriptionResponse](#v1DeleteSubscriptionResponse) |

#### v1DeleteSubscriptionResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| id | string |  |      
| status | string |  |   


  
     
   
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


