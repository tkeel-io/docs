---
title: "ListDevice"
description: 'list device entity'
---


调用该接口list device entity。



## Request


```
post /devices/search
```







### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| 设备列表请求信息 | Object | [apidevicev1ListEntityQuery](#apidevicev1ListEntityQuery) |

#### apidevicev1ListEntityQuery

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| filter |  | 限制 |      
| query | string | es查询条件 |   


  
     
   
     
 
 





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1ListDeviceResponse](#v1ListDeviceResponse) |

#### v1ListDeviceResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| listDeviceObject |  | 设备列表对象 |   


  
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


