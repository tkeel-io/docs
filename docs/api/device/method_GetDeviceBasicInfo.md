---
title: "GetDeviceBasicInfo"
description: 'get device entity basicInfo'
---


调用该接口get device entity basicInfo。



## Request


```
get /devices/{id}/basicInfo
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | 设备ID |  





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1GetDeviceBasicInfoResponse](#v1GetDeviceBasicInfoResponse) |

#### v1GetDeviceBasicInfoResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |    
| basicInfoObject | Object | 设备基本信息对象   |   


  
    
          
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


