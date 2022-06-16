---
title: "EntityTokenInfo"
description: 'get a entity token info'
---
调用该接口get a entity token info。

## Request


```
get /entity/info/{token}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| token | path | string | entity token  path params |  

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1TokenInfoResponse](#v1TokenInfoResponse) |

#### v1TokenInfoResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| created_at | string |  |      
| entity_id | string |  |      
| entity_type | string |  |      
| expired_at | string |  |      
| owner | string |  |      
| tenant_id | string |  |   



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



