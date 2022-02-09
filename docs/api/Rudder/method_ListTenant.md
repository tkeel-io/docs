---
title: "ListTenant"
description: 'tenant list'
---调用该接口tenant list。



## Request


```
get \tenants
```

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1ListTenantResponse](#v1ListTenantResponse) |

#### v1ListTenantResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| tenants | Array[v1TenantDetail] | tenants [ 具体参数可见下面 [v1TenantDetail](#v1TenantDetail) ] |    

### v1TenantDetail
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| created_at | string | user number in tenant |      
| num_user | integer | user number in tenant |      
| remark | string | tenant remark |         
| roles | Array[ string ] | user roles in tenant |       
| tenant_id | string | tenant id |      
| title | string | tenant id |   



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



