---
title: "EnableDevice"
description: 'enable device'
---


调用该接口enable device。



## Request


```
put /devices/{id}/enable
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string |  |  





### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1Enable](#v1Enable) |

#### v1Enable

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| enable | boolean |  |   


  
     
 
 





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1EnableDeviceResponse](#v1EnableDeviceResponse) |

#### v1EnableDeviceResponse

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


  
     
 
 


          
     
   
     
 
 


 


