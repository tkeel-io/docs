---
title: "DelDeviceExt"
description: 'delete device extensions'
---


调用该接口delete device extensions。



## Request


```
post /devices/{id}/ext/delete
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | 设备ID |  





### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| 设备扩展属性Key 数组 | Object | [apidevicev1Keys](#apidevicev1Keys) |

#### apidevicev1Keys

| Name | Type | Description | 
| ---- | ---- | ----------- |        
| keys | Array[ string ] | key 字符串数组 |    


  
       
          
     
 
 





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1DeleteDeviceExtResponse](#v1DeleteDeviceExtResponse) |

#### v1DeleteDeviceExtResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| result | string |  |   


  
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


