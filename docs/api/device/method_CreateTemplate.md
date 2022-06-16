---
title: "CreateTemplate"
description: 'create Template'
---


调用该接口create Template。



## Request


```
post /templates
```







### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| 模板基本信息 | Object | [apitemplatev1TemplateBasicInfo](#apitemplatev1TemplateBasicInfo) |

#### apitemplatev1TemplateBasicInfo

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| customId | string | 模板自定义id 选填 |      
| description | string | 模板描述 |      
| name | string | 模板名称 |   


  
     
   
     
   
     
 
 





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [apitemplatev1CreateTemplateResponse](#apitemplatev1CreateTemplateResponse) |

#### apitemplatev1CreateTemplateResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |    
| templateObject | Object | 模板对象   |   


  
    
          
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


