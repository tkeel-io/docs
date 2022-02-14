---
title: "UpdateTemplate"
description: 'update Template'
---


调用该接口update Template。



## Request


```
put /templates/{uid}
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| uid | path | string | 模板ID |  





### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| 模板基本信息 | Object | [v1TemplateBasicInfo](#v1TemplateBasicInfo) |

#### v1TemplateBasicInfo

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| description | string | 模板描述 |      
| name | string | 模板名称 |   


  
     
   
     
 
 





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1UpdateTemplateResponse](#v1UpdateTemplateResponse) |

#### v1UpdateTemplateResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| templateObject |  | 模板对象 |   


  
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


