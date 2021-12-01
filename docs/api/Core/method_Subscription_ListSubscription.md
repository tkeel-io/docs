---
title: "Subscription_ListSubscription"
description: ''
---


调用该接口。



## Request


```
get /plugins/{plugin}/subscriptions
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| plugin | path | string |  |  



###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| source | query | string |  |  false |
| owner | query | string |  |  false |



## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | A successful response. | Object | [v1ListSubscriptionResponse](#v1ListSubscriptionResponse) |

#### v1ListSubscriptionResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| count | integer |  |          
| items | Array[v1SubscriptionResponse] |  [ 具体参数可见下面 [v1SubscriptionResponse](#v1SubscriptionResponse) ] |    


  
     
   
       
         
### v1SubscriptionResponse
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


  
     
 
 


          
     
   
     
 
 


 


