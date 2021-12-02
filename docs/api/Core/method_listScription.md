---
title: "ListScription"
description: 'List subscriptions'
---


调用该接口List subscriptions。



## Request


```
get /plugins/{plugin}/subscriptions
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| plugin | path | string | plugin id |  



###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| source | query | string | source id |  false |
| owner | query | string | owner id |  false |



## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1ListSubscriptionResponse](#v1ListSubscriptionResponse) |

#### v1ListSubscriptionResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| count | integer | count of the subscriptions |          
| items | Array[v1SubscriptionResponse] | subscription items [ 具体参数可见下面 [v1SubscriptionResponse](#v1SubscriptionResponse) ] |    


  
     
   
       
         
### v1SubscriptionResponse
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| id | string | subscription id |      
| owner | string | owner id |      
| plugin | string | plugin id |      
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


  
     
 
 


          
     
   
     
 
 


 


