---
title: "GetDeploymentConfig"
description: '查询 deployment config 接口'
---调用该接口查询 deployment config 接口。



## Request


```
get \config\deployment
```

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1GetDeploymentConfigResponse](#v1GetDeploymentConfigResponse) |

#### v1GetDeploymentConfigResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| admin_host | string | admin_host |      
| port | string | host port |      
| tenant_host | string | tenant_host |   



### Response  400
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 400 | INVALID_TENANT | {   { }} |

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



