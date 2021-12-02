---
title: "CreateGroup"
description: 'create entity group'
---


调用该接口create entity group。



## Request


```
post /groups
```







### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| 设备组信息 | Object | [v1GroupEntity](#v1GroupEntity) |

#### v1GroupEntity

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| desc | string | 设备组说明 |     
| ext | Object | 设备组扩展属性   |      
| name | string | 设备组名称 |      
| parent | string | 父设备组ID |   


  
     
   
    
          
     
   
     
   
     
 
 





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1CreateGroupResponse](#v1CreateGroupResponse) |

#### v1CreateGroupResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| entityInfo |  | 设备组信息 |      
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


  
     
 
 


          
     
   
     
 
 


 


