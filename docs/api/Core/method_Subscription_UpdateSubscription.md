---
title: "Subscription_UpdateSubscription"
description: ''
---


调用该接口。



## Request


```
put /plugins/{plugin}/subscriptions/{id}
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



### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1SubscriptionObject](#v1SubscriptionObject) |

#### v1SubscriptionObject

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| filter | string |  |      
| mode | string |  |      
| pubsub_name | string |  |      
| source | string |  |      
| target | string |  |      
| topic | string |  |   


  
     
   
     
   
     
   
     
   
     
   
     
 
 





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | A successful response. | Object | [v1SubscriptionResponse](#v1SubscriptionResponse) |

#### v1SubscriptionResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| id | string |  |      
| owner | string |  |      
| plugin | string |  |      
| source | string |  |      
| subscription |  |  |   


  
     
   
     
   
     
   
     
   
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


