---
title: "UpgradePlugin"
description: '更新插件接口'
---
调用该接口更新插件接口。

## Request

```
put \plugins\{id}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | upgrade plugin id |  

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| installer info | Object | [v1Installer](#v1Installer) |

#### v1Installer

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| configuration | string | installer configuration data |      
| desc | string | installer desc |      
| icon | string | installer icon |          
| maintainers | Array[v1Installermaintainer] | installer maintainers [ 具体参数可见下面 [v1Installermaintainer](#v1Installermaintainer) ] |       
| name | string | installer name |      
| repo | string | repository name |      
| type |  | configuration type |      
| version | string | installer version |   

### v1Installermaintainer
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| email | string | maintainer email |      
| name | string | maintainer name |      
| url | string | maintainer url |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | SUCC | Object | [v1UpgradePluginResponse](#v1UpgradePluginResponse) |

#### v1UpgradePluginResponse

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
| 404 | REPOSITORY_OR_INSTALLER_NOT_FOUND | {   { }} |

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



