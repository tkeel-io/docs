---
title: "AddPlugin"
description: 'add a plugin'
---调用该接口add a plugin。



## Request


```
post \tenants\{tenant_id}\plugins
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| tenant_id | path | string |  |  

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1AddTenantPluginBody](#v1AddTenantPluginBody) |

#### v1AddTenantPluginBody

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| plugin_id | string |  |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1AddTenantPluginResponse](#v1AddTenantPluginResponse) |

#### v1AddTenantPluginResponse

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



