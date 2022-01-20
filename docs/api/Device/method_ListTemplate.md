---
title: "ListTemplate"
description: 'list Template'
---


调用该接口list Template。



## Request


```
post /templates/search
```







### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| 请求条件 | Object | [apitemplatev1ListEntityQuery](#apitemplatev1ListEntityQuery) |

#### apitemplatev1ListEntityQuery

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| filter |  | 限制 |      
| query | string | es 查询条件 |   


  
     
   
     
 
 





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1ListTemplateResponse](#v1ListTemplateResponse) |

#### v1ListTemplateResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| listTemplateObject |  | 模板列表名称 |   


  
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


