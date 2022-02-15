---
title: "Identify"
description: 'openapi identify'
---调用该接口openapi identify。



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
| entries | Array[v1ConsoleEntry] |  [ 具体参数可见下面 [v1ConsoleEntry](#v1ConsoleEntry) ] |           
| implemented_plugin | Array[v1ImplementedPlugin] |  [ 具体参数可见下面 [v1ImplementedPlugin](#v1ImplementedPlugin) ] |       
| plugin_id | string |  |      
| res |  |  |      
| tkeel_version | string |  |      
| version | string |  |   

### v1AddonsPoint
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| desc | string |  |      
| name | string |  |   

### v1ConsoleEntry
| Name | Type | Description | 
| ---- | ---- | ----------- |         
| children | Array[v1ConsoleEntry] |  [ 具体参数可见下面 [v1ConsoleEntry](#v1ConsoleEntry) ] |       
| entry | string |  |      
| icon | string |  |      
| id | string |  |      
| name | string |  |      
| path | string |  |   

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



