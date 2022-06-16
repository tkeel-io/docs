---
title: "GetTenant"
description: 'get a tenant'
---
调用该接口get a tenant。

## Request


```
get /tenants/{tenant_id}
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
| admins | Array[v1TenantAdmin] | admins in tenant [ 具体参数可见下面 [v1TenantAdmin](#v1TenantAdmin) ] |       
| auth_type | string | auth type : internal / external |      
| created_at | string | tenant remark |      
| num_user | integer | user number in tenant |      
| remark | string | tenant remark |      
| tenant_id | string | tenant id |      
| title | string | tenant title |   

### v1TenantAdmin
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| password | string |  Tenant Admin password  |      
| username | string |  Tenant Admin username  |   



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



