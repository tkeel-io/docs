---
title: "ListPlugin"
description: '获取插件列表接口'
---调用该接口获取插件列表接口。



## Request


```
get \plugins
```

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| page_num | query | integer | query page number |  false |
| page_size | query | integer | query page size |  false |
| order_by | query | string | query items order by field |  false |
| is_descending | query | boolean | query items inverted sort |  false |
| key_words | query | string | query items key |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1ListPluginResponse](#v1ListPluginResponse) |

#### v1ListPluginResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| page_num | integer | query page number |      
| page_size | integer | query page size |          
| plugin_list | Array[v1PluginObject] | plugin object list [ 具体参数可见下面 [v1PluginObject](#v1PluginObject) ] |       
| total | integer | total items |   

### v1PluginObject
| Name | Type | Description | 
| ---- | ---- | ----------- |         
| addons_point | Array[v1AddonsPoint] | plugin declares addons [ 具体参数可见下面 [v1AddonsPoint](#v1AddonsPoint) ] |       
| brief_installer_info |  | brief installer info only has name,verison,repo_name and installed field. |          
| console_entries | Array[v1ConsoleEntry] | plugin console entries [ 具体参数可见下面 [v1ConsoleEntry](#v1ConsoleEntry) ] |           
| enable_tenantes | Array[v1EnabledTenant] | enable tenant's id list [ 具体参数可见下面 [v1EnabledTenant](#v1EnabledTenant) ] |       
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

### v1EnabledTenant
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| enable_timestamp | string | enable timestamp |      
| operator_id | string | operator user id |      
| remark | string | enable tenant remark |      
| tenant_id | string | enable tenant id |      
| title | string | enable tenant title |      
| user_num | integer | enable tenant user number |   

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
| @type | string |  |   



