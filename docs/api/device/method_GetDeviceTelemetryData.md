---
title: "GetDeviceTelemetryData"
description: 'get device entity telemetryData'
---


调用该接口get device entity telemetryData。



## Request


```
get /devices/{id}/telemetryData
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | 设备ID |  





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1GetDeviceTelemetryDataResponse](#v1GetDeviceTelemetryDataResponse) |

#### v1GetDeviceTelemetryDataResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |    
| telemetryDataObject | Object | 设备遥测数据对象   |   


  
    
          
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


