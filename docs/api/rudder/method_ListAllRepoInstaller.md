---
title: "ListAllRepoInstaller"
description: '获取所有仓库的安装包列表接口'
---调用该接口获取所有仓库的安装包列表接口。



## Request


```
get \repos\installers
```

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| page_num | query | integer | query page number |  false |
| page_size | query | integer | query page size |  false |
| order_by | query | string | query items order by field |  false |
| is_descending | query | boolean | query items inverted sort |  false |
| key_words | query | string | query items key |  false |
| installed | query | boolean | installed option |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | SUCC | Object | [v1ListAllRepoInstallerResponse](#v1ListAllRepoInstallerResponse) |

#### v1ListAllRepoInstallerResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| brief_installers | Array[v1InstallerObject] | brief installer info list,only has name and version [ 具体参数可见下面 [v1InstallerObject](#v1InstallerObject) ] |       
| installed_num | integer | installed installer number |      
| page_num | integer | query page number |      
| page_size | integer | query page size |      
| total | integer | total items |   

### v1InstallerObject
| Name | Type | Description | 
| ---- | ---- | ----------- |    
| annotations | Object | installer metadata   |      
| desc | string | installer desc |      
| icon | string | installer icon url |          
| maintainers | Array[v1InstallerObjectmaintainer] | installer maintainers [ 具体参数可见下面 [v1InstallerObjectmaintainer](#v1InstallerObjectmaintainer) ] |      
| metadata | Object | installer metadata   |      
| name | string | installer name |      
| repo | string | installer repo |      
| state |  | installer state |      
| timestamp | string | last change chart timestamp |      
| version | string | installer version |          
| version_list | Array[v1VersionList] | installer version list [ 具体参数可见下面 [v1VersionList](#v1VersionList) ] |    

### v1InstallerObjectmaintainer
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| email | string | maintainer email |      
| name | string | maintainer name |      
| url | string | maintainer url |   

### v1VersionList
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| create_time | string |  |      
| version | string |  |   



### Response  400
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 400 | INVALID_ARGUMENT | {   { }} |

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



