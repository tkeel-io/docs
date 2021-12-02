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
| 限制 | Object | [apigroupv1Filter](#apigroupv1Filter) |

#### apigroupv1Filter

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| condition | Array[apigroupv1Condition] | 组合条件 [ 具体参数可见下面 [apigroupv1Condition](#apigroupv1Condition) ] |       
| page |  | 分页 |   


  
       
         
### apigroupv1Condition
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| field | string | 查询输出字段 |      
| operator | string | 操作符, $eq为相等，$neq为不等，$lt为小于，$gt为大于，$lne为小于等于， $gne为大于等于 |      
| value | string | 值 |   


  
     
   
     
   
     
 
 


          
     
   
     
 
 





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1ListGroupResponse](#v1ListGroupResponse) |

#### v1ListGroupResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| listEntityInfo |  | 设备组列表信息 |      
| result | string | ok  or failed |   


  
     
   
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


