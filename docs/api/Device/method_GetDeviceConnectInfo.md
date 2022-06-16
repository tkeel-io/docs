---
title: "GetDeviceConnectInfo"
description: 'get device entity connectInfo'
---


调用该接口get device entity connectInfo。



## Request


```
get /devices/{id}/connectInfo
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | 设备ID |  





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1GetDeviceConnectInfoResponse](#v1GetDeviceConnectInfoResponse) |

#### v1GetDeviceConnectInfoResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |    
| connectInfoObject | Object | 设备连接信息对象   |   


  
    
          
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


