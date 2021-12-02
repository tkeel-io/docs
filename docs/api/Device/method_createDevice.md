---
title: "createDevice"
description: 'create device entity'
---


调用该接口create device entity。



## Request


```
post /devices
```







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
| 200 | OK | Object | [v1CreateDeviceResponse](#v1CreateDeviceResponse) |

#### v1CreateDeviceResponse

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


  
     
 
 


          
     
   
     
 
 


 


