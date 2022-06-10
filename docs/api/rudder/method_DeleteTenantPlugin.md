---
title: "DeleteTenantPlugin"
description: 'delete tenant plugin'
---调用该接口delete tenant plugin。



## Request


```
delete \tenants\{tenant_id}\plugins\{plugin_id}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| tenant_id | path | string |  |  
| plugin_id | path | string |  |  

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1DeleteTenantPluginResponse](#v1DeleteTenantPluginResponse) |

#### v1DeleteTenantPluginResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| ok | boolean |  |   



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



