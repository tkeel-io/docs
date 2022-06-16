---
title: "ListTenant"
description: 'tenant list'
---
调用该接口tenant list。

## Request


```
get /tenants
```

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| page_num | query | integer |  |  false |
| page_size | query | integer |  |  false |
| order_by | query | string |  |  false |
| is_descending | query | boolean |  |  false |
| key_words | query | string |  |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1ListTenantResponse](#v1ListTenantResponse) |

#### v1ListTenantResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| page_num | integer |  |      
| page_size | integer |  |          
| tenants | Array[v1TenantDetail] | tenants [ 具体参数可见下面 [v1TenantDetail](#v1TenantDetail) ] |       
| total | integer |  |   

### v1TenantDetail
| Name | Type | Description | 
| ---- | ---- | ----------- |         
| admins | Array[v1TenantAdmin] | admins in tenant [ 具体参数可见下面 [v1TenantAdmin](#v1TenantAdmin) ] |       
| auth_type | string | auth type : internal / external |      
| created_at | string | user number in tenant |      
| num_user | integer | user number in tenant |      
| remark | string | tenant remark |         
| roles | Array[ string ] | user roles in tenant |       
| tenant_id | string | tenant id |      
| title | string | tenant id |   

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



