---
title: "Identify"
description: 'openapi identify'
---
调用该接口openapi identify。

## Request

```
get /identify
```

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1IdentifyResponse](#v1IdentifyResponse) |

#### v1IdentifyResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| addons_point | Array[v1AddonsPoint] |  [ 具体参数可见下面 [v1AddonsPoint](#v1AddonsPoint) ] |           
| dependence | Array[v1BriefPluginInfo] |  [ 具体参数可见下面 [v1BriefPluginInfo](#v1BriefPluginInfo) ] |       
| disable_manual_activation | boolean |  |          
| entries | Array[v1ConsoleEntry] |  [ 具体参数可见下面 [v1ConsoleEntry](#v1ConsoleEntry) ] |           
| implemented_plugin | Array[v1ImplementedPlugin] |  [ 具体参数可见下面 [v1ImplementedPlugin](#v1ImplementedPlugin) ] |           
| permissions | Array[v1Permission] |  [ 具体参数可见下面 [v1Permission](#v1Permission) ] |       
| plugin_id | string |  |      
| res |  |  |      
| tkeel_version | string |  |      
| version | string |  |   

### v1AddonsPoint
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| desc | string |  |      
| name | string |  |   

### v1BriefPluginInfo
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| id | string |  |      
| version | string |  |   

### v1ConsoleEntry
| Name | Type | Description | 
| ---- | ---- | ----------- |         
| children | Array[v1ConsoleEntry] |  [ 具体参数可见下面 [v1ConsoleEntry](#v1ConsoleEntry) ] |       
| entry | string |  |      
| icon | string |  |      
| id | string |  |      
| name | string |  |      
| path | string |  |      
| portal |  |  |   

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

### v1Permission
| Name | Type | Description | 
| ---- | ---- | ----------- |         
| children | Array[v1Permission] |  [ 具体参数可见下面 [v1Permission](#v1Permission) ] |           
| dependences | Array[PermissionDependence] |  [ 具体参数可见下面 [PermissionDependence](#PermissionDependence) ] |       
| desc | string |  |      
| id | string |  |      
| name | string |  |   

### PermissionDependence
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| desc | string | ID>/authority ID.The content in <> is variable. |      
| path | string |  |   



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



