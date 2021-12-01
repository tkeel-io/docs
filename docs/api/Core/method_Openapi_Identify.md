---
title: "Openapi_Identify"
description: 'Query identify.'
---


调用该接口Query identify.。



## Request


```
get /identify
```







## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | A successful response. | Object | [v1IdentifyResponse](#v1IdentifyResponse) |

#### v1IdentifyResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| addonsPoint | Array[v1AddonsPoint] |  [ 具体参数可见下面 [v1AddonsPoint](#v1AddonsPoint) ] |           
| implementedPlugin | Array[v1ImplementedPlugin] |  [ 具体参数可见下面 [v1ImplementedPlugin](#v1ImplementedPlugin) ] |       
| pluginID | string |  |      
| res |  |  |      
| tkeelVersion | string |  |      
| version | string |  |   


  
       
         
### v1AddonsPoint
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| desc | string |  |      
| name | string |  |   


  
     
   
     
 
 


          
     
   
       
         
### v1ImplementedPlugin
| Name | Type | Description | 
| ---- | ---- | ----------- |         
| addons | Array[v1ImplementedAddons] |  [ 具体参数可见下面 [v1ImplementedAddons](#v1ImplementedAddons) ] |       
| plugin |  |  |   


  
       
         
### v1ImplementedAddons
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| addonsPoint | string |  |      
| implementedEndpoint | string |  |   


  
     
   
     
 
 


          
     
   
     
 
 


          
     
   
     
   
     
   
     
   
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


