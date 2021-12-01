---
title: "Openapi_AddonsIdentify"
description: 'Post addons identify.'
---


调用该接口Post addons identify.。



## Request


```
post /addons/identify
```







### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1AddonsIdentifyRequest](#v1AddonsIdentifyRequest) |

#### v1AddonsIdentifyRequest

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| implementedAddons | Array[v1ImplementedAddons] |  [ 具体参数可见下面 [v1ImplementedAddons](#v1ImplementedAddons) ] |       
| plugin |  |  |   


  
       
         
### v1ImplementedAddons
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| addonsPoint | string |  |      
| implementedEndpoint | string |  |   


  
     
   
     
 
 


          
     
   
     
 
 





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | A successful response. | Object | [v1AddonsIdentifyResponse](#v1AddonsIdentifyResponse) |

#### v1AddonsIdentifyResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| res |  |  |   


  
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


