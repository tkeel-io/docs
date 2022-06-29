---
title: "ListTenantPlugin"
description: '租户插件列表'
---
调用该接口租户插件列表。

## Request

```
get \tenants\{tenant_id}\plugins
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| tenant_id | path | string |  |  

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1ListTenantPluginResponse](#v1ListTenantPluginResponse) |

#### v1ListTenantPluginResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |        
| plugins | Array[ string ] |  |    



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



