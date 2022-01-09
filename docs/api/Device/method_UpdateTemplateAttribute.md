---
title: "UpdateTemplateAttribute"
description: 'update Template attribute'
---


调用该接口update Template attribute。



## Request


```
put /templates/{uid}/attribute
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| uid | path | string | 模板ID |  





### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| 属性对象 | Object | [v1PropConfig](#v1PropConfig) |

#### v1PropConfig

| Name | Type | Description | 
| ---- | ---- | ----------- |    
| define | Object | 数据定义和约束   |      
| des | string | 说明 |      
| id | string | 标识符 |      
| name | string | 名称 |      
| type | string | 数据类型 |   


  
    
          
     
   
     
   
     
   
     
   
     
 
 





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


  
     
 
 


          
     
   
     
 
 


 


