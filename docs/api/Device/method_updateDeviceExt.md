---
title: "updateDeviceExt"
description: 'update device extensions'
---


调用该接口update device extensions。



## Request


```
put /devices/{id}/ext
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | 设备ID |  





### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| 设备扩展属性KV | Object | [v1Ext](#v1Ext) |

#### v1Ext

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| key | string |  |      
| value | string |  |   


  
     
   
     
 
 





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1UpdateDeviceExtResponse](#v1UpdateDeviceExtResponse) |

#### v1UpdateDeviceExtResponse

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


  
     
 
 


          
     
   
     
 
 


 


