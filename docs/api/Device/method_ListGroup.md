---
title: "ListGroup"
description: 'list entity group'
---


调用该接口list entity group。



## Request


```
post /groups/search
```







### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [apigroupv1ListEntityQuery](#apigroupv1ListEntityQuery) |

#### apigroupv1ListEntityQuery

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| filter |  | 限制 |      
| query | string | es查询条件 |   


  
     
   
     
 
 





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1ListGroupResponse](#v1ListGroupResponse) |

#### v1ListGroupResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| listEntityInfo |  | 设备组列表信息 |   


  
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


