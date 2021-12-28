---
title: "RegisterPlugin"
description: '注册插件接口'
---


调用该接口注册插件接口。



## Request


```
post \plugins
```







### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1RegisterPluginRequest](#v1RegisterPluginRequest) |

#### v1RegisterPluginRequest

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| id | string | plugin id |      
| secret | string | plugin registered secret |   


  
     
   
     
 
 





## Response



### Response  200


| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 200 | A successful response. | {   { }} |
 


### Response  204


| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 204 | SUCC_AND_NO_CONTENT | {   { }} |
 


### Response  400


| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 400 | INVALID_ARGUMENT | {   { }} |
 


### Response  404


| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 404 | PLUGIN_NOT_FOUND | {   { }} |
 


### Response  409


| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 409 | ALREADY_EXISTS | {   { }} |
 


### Response  500


| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 500 | INTERNAL_STORE | {   { }} |
 


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


  
     
 
 


          
     
   
     
 
 


 


