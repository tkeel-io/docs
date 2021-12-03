---
title: "ListPlugin"
description: '获取插件列表接口'
---


调用该接口获取插件列表接口。



## Request


```
get \plugins
```







## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1ListPluginResponse](#v1ListPluginResponse) |

#### v1ListPluginResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| plugin_list | Array[v1PluginObject] | plugin object list [ 具体参数可见下面 [v1PluginObject](#v1PluginObject) ] |    


  
       
         
### v1PluginObject
| Name | Type | Description | 
| ---- | ---- | ----------- |        
| active_tenantes | Array[ string ] | active tenant's id list |           
| addons_point | Array[v1AddonsPoint] | plugin declares addons [ 具体参数可见下面 [v1AddonsPoint](#v1AddonsPoint) ] |       
| id | string | plugin id |          
| implemented_plugin | Array[v1ImplementedPlugin] | plugin implemented plugin list [ 具体参数可见下面 [v1ImplementedPlugin](#v1ImplementedPlugin) ] |       
| plugin_version | string | plugin version |          
| register_addons | Array[v1RegisterAddons] | register addons router [ 具体参数可见下面 [v1RegisterAddons](#v1RegisterAddons) ] |       
| register_timestamp | string | register timestamp |      
| secret | string | plugin registered secret |      
| status |  | register plugin status |      
| tkeel_version | string | plugin depend tkeel version |   


  
       
          
     
   
       
         
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
| addons_point | string |  |      
| implemented_endpoint | string |  |   


  
     
   
     
 
 


          
     
   
     
 
 


          
     
   
     
   
       
         
### v1RegisterAddons
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| addons | string |  |      
| upstream | string |  |   


  
     
   
     
 
 


          
     
   
     
   
     
   
     
   
     
 
 


          
     
 
 


 


### Response  400


| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 400 | INVALID_ARGUMENT | {   { }} |
 


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


  
     
 
 


          
     
   
     
 
 


 


