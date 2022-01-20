---
title: "CreateSubscription"
description: 'Create subscription'
---


调用该接口Create subscription。



## Request


```
post /subscriptions
```





###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| id | query | string | subscription id |  false |
| source | query | string | source id |  false |
| owner | query | string | owner id |  false |



### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| subscription object | Object | [v1SubscriptionObject](#v1SubscriptionObject) |

#### v1SubscriptionObject

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| filter | string | filter |      
| mode | string | suscription mode |      
| pubsub_name | string | pubsub name |      
| source | string | source id |      
| target | string | target id |      
| topic | string | topic name |   


  
     
   
     
   
     
   
     
   
     
   
     
 
 





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1SubscriptionResponse](#v1SubscriptionResponse) |

#### v1SubscriptionResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| id | string | subscription id |      
| owner | string | owner id |      
| source | string | source id |      
| subscription |  | subscription object |   


  
     
   
     
   
     
   
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


