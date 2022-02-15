---
title: "Subscribe_GetSubscribe"
description: ''
---


调用该接口。



## Request


```
get /subscribe
```







## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | A successful response. | Object | [daprListTopicSubscriptionsResponse](#daprListTopicSubscriptionsResponse) |

#### daprListTopicSubscriptionsResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| subscriptions | Array[daprTopicSubscription] | The list of topics. [ 具体参数可见下面 [daprTopicSubscription](#daprTopicSubscription) ] |    


  
       
         
### daprTopicSubscription
| Name | Type | Description | 
| ---- | ---- | ----------- |    
| metadata | Object |    |      
| pubsub_name | string | Required. The name of the pubsub containing the topic below to subscribe to. |      
| route | string | The optional routing rules to match against. In the gRPC interface, OnTopicEvent
is still invoked but the matching path is sent in the TopicEventRequest. |      
| topic | string |  |   


  
    
          
     
   
     
   
     
   
     
 
 


          
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


