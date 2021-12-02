---
title: "topicEventHandler"
description: 'TopicEvent handler'
---


调用该接口TopicEvent handler。

## Request

```
post /topic
```

### Request Body

| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1TopicEventRequest](#v1TopicEventRequest) |

#### v1TopicEventRequest

| Name | Type | Description | 
| ---- | ---- | ----------- |    
| data | Object |    |      
| data_base64 | string |  |      
| datacontenttype | string |  |      
| id | string |  |      
| pubsubname | string |  |      
| source | string |  |      
| specversion | string |  |      
| subject | string |  |      
| topic | string |  |      
| type | string |  |   

## Response

### Response  200

| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1TopicEventResponse](#v1TopicEventResponse) |

#### v1TopicEventResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
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


  
     
 
 


          
     
   
     
 
 


 


