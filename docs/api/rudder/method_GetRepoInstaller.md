---
title: "GetRepoInstaller"
description: '获取仓库中指定安装包'
---
调用该接口获取仓库中指定安装包。

## Request

```
get \repos\{repo}\installers\{installer_name}\{installer_version}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| repo | path | string | repo name |  
| installer_name | path | string | installer name |  
| installer_version | path | string | installer version |  

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | SUCC | Object | [v1GetRepoInstallerResponse](#v1GetRepoInstallerResponse) |

#### v1GetRepoInstallerResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| installer |  | installer |   



### Response  400
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 400 | INVALID_ARGUMENT | {   { }} |

### Response  404
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 404 | INSTALLER_NOT_FOUND | {   { }} |

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



