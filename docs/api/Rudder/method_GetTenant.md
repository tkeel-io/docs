---
title: "GetTenant"
description: 'get a tenant'
---调用该接口get a tenant。



## Request


```
get \tenants\{tenant_id}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| tenant_id | path | string | tenant id |  

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1GetTenantResponse](#v1GetTenantResponse) |

#### v1GetTenantResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| created_at | string | tenant remark |      
| remark | string | tenant remark |      
| tenant_id | string | tenant id |      
| title | string | tenant title |   



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



