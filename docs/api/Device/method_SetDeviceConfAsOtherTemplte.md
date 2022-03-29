---
title: "SetDeviceConfAsOtherTemplte"
description: 'save device confAsOtherTemplate'
---


调用该接口save device confAsOtherTemplate。



## Request


```
post /devices/{id}/configs/saveAsOtherTemplate
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string |  设备Id |  





### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| 另存为模板的基本信息 | Object | [apidevicev1TemplateBasicInfo](#apidevicev1TemplateBasicInfo) |

#### apidevicev1TemplateBasicInfo

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| description | string | 模板描述 |      
| name | string | 模板名称 |   


  
     
   
     
 
 





## Response



### Response  200


| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 200 | OK | {   { }} |
 


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


  
     
 
 


          
     
   
     
 
 


 


