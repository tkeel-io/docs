---
title: "UpdateGroupExt"
description: 'update group extensions'
---


调用该接口update group extensions。



## Request


```
post /groups/{id_1}/ext
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id_1 | path | string | 设备组ID |  





### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| 扩展配置kv | Object | [](#) |

#### 

| Name | Type | Description | 
| ---- | ---- | ----------- |  



 





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


  
     
 
 


          
     
   
     
 
 


 


