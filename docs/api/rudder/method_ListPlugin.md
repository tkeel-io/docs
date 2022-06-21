---
title: "ListPlugin"
description: '获取插件列表接口'
---
调用该接口获取插件列表接口。

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
| display_all_plugin | query | boolean | return all plugin |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1ListPluginResponse](#v1ListPluginResponse) |

#### v1ListPluginResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| enable_num | integer | enable plugin number |      
| page_num | integer | query page number |      
| page_size | integer | query page size |          
| plugin_list | Array[v1PluginBrief] | plugin object list [ 具体参数可见下面 [v1PluginBrief](#v1PluginBrief) ] |       
| total | integer | total items |   

### v1PluginBrief
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| id | string | plugin id |      
| installer_brief |  | brief installer info only has name,verison,repo_name and installed field. |      
| register_timestamp | string | register timestamp |      
| status |  | register plugin status |      
| tenant_enable | boolean | tenant enable |      
| tkeel_version | string | plugin depend tkeel version |      
| version | string | plugin version |   



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



