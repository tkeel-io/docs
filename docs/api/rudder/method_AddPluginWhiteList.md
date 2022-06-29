---
title: "AddPluginWhiteList"
description: '添加 Plugin 白名单 dapr App ID 接口'
---
调用该接口添加 Plugin 白名单 dapr App ID 接口。

## Request

```
post \oauth2\plugin\white-list
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1AddPluginWhiteListRequest](#v1AddPluginWhiteListRequest) |

#### v1AddPluginWhiteListRequest

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| plugin_id | string | plugin id(dapr app id) |   



## Response

### Response  200
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 200 | A successful response. | {   { }} |

### Response  204
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 204 | SUCC_AND_NO_CONTENT | {   { }} |

### Response  409
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 409 | CLIENT_ID_ALREADY_EXISTS | {   { }} |

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



