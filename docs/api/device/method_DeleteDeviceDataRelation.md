---
title: "DeleteDeviceDataRelation"
description: 'delete data relation'
---


调用该接口delete data relation。



## Request


```
post /devices/{id}/relation/delete
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | 实体Id |  





### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| 关系信息path 数组 | Object | [v1Paths](#v1Paths) |

#### v1Paths

| Name | Type | Description | 
| ---- | ---- | ----------- |        
| paths | Array[ string ] | path 字符串数组 |    


  
       
          
     
 
 





## Response



### Response  200


| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 200 | OK | {   { }} |
 


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


  
     
 
 


          
     
   
     
 
 


 


