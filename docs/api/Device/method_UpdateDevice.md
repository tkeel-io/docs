---
title: "UpdateDevice"
description: 'update device entity'
---


调用该接口update device entity。



## Request


```
put /devices/{id}
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | 设备ID |  





### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| 设备信息 | Object | [v1DeviceEntity](#v1DeviceEntity) |

#### v1DeviceEntity

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| desc | string | 设备描述 |     
| ext | Object | 设备扩展配置   |      
| group | string | 设备组ID |      
| name | string | 设备名称 |   


  
     
   
    
          
     
   
     
   
     
 
 





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1UpdateDeviceResponse](#v1UpdateDeviceResponse) |

#### v1UpdateDeviceResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| dev |  | 设备信息 |      
| sysField |  | 设备系统信息 |   


  
     
   
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


