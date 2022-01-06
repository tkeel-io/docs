---
title: "ListPlugin"
description: '获取插件列表接口'
---调用该接口获取插件列表接口。



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
| brief_installer_info |  | brief installer info only has name,verison,repo_name and installed field. |          
| console_entries | Array[v1ConsoleEntry] | plugin console entries [ 具体参数可见下面 [v1ConsoleEntry](#v1ConsoleEntry) ] |       
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

### v1RegisterAddons
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| addons | string | addons name |      
| upstream | string | upstream path |   



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
| @type | string | A URL/resource name that uniquely identifies the type of the serialized
protocol buffer message. This string must contain at least
one "/" character. The last segment of the URL's path must represent
the fully qualified name of the type (as in
`path/google.protobuf.Duration`). The name should be in a canonical form
(e.g., leading "." is not accepted).

In practice, teams usually precompile into the binary all types that they
expect it to use in the context of Any. However, for URLs which use the
scheme `http`, `https`, or no scheme, one can optionally set up a type
server that maps type URLs to message definitions as follows:

* If no scheme is provided, `https` is assumed.
* An HTTP GET on the URL must yield a [google.protobuf.Type][]
  value in binary format, or produce an error.
* Applications are allowed to cache lookup results based on the
  URL, or have them precompiled into a binary to avoid any
  lookup. Therefore, binary compatibility needs to be preserved
  on changes to types. (Use versioned type names to manage
  breaking changes.)

Note: this functionality is not currently available in the official
protobuf release, and it is not used for type URLs beginning with
type.googleapis.com.

Schemes other than `http`, `https` (or the empty scheme) might be
used with implementation specific semantics. |   



