---
title: "GetDeviceDataRelation"
description: 'get single relation'
---


调用该接口get single relation。



## Request


```
get /devices/{id}/relation/{path}
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | 实体Id |  
| path | path | string | 路径 |  





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1GetDeviceDataRelationResponse](#v1GetDeviceDataRelationResponse) |

#### v1GetDeviceDataRelationResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |    
| expressions | Object | 单个关系表达式   |   


  
    
          
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


