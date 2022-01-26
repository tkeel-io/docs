---
title: "ListRepoInstaller"
description: '获取仓库中安装包列表接口'
---调用该接口获取仓库中安装包列表接口。



## Request


```
get \repos\{repo}\installers
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| repo | path | string | repo name |  

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| installed | query | boolean | installed option |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | SUCC | Object | [v1ListRepoInstallerResponse](#v1ListRepoInstallerResponse) |

#### v1ListRepoInstallerResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| brief_installers | Array[v1InstallerObject] | brief installer info list,only has name and version [ 具体参数可见下面 [v1InstallerObject](#v1InstallerObject) ] |    

### v1InstallerObject
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| installed | boolean | whether the installer has been installed |     
| metadata | Object | repo metadata   |      
| name | string | installer name |      
| repo | string | installer repo |      
| version | string | installer version |   



### Response  400
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 400 | INVALID_ARGUMENT | {   { }} |

### Response  404
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 404 | REPO_NOT_FOUND | {   { }} |

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



