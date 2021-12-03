---
title: "删除插件"
description: '删除插件接口'
---


调用该接口删除插件接口。



## Request


```
delete \plugins\{id}
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | plugin id |  





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1DeletePluginResponse](#v1DeletePluginResponse) |

#### v1DeletePluginResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| plugin |  | plugin object |   


  
     
 
 


 


### Response  400


| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 400 | INVALID_ARGUMENT | {   { }} |
 


### Response  404


| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 404 | PLUGIN_NOT_FOUND | {   { }} |
 


### Response  500


| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 500 | INTERNAL_ERROR | {   { }} |
 


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


  
     
 
 


          
     
   
     
 
 


 


