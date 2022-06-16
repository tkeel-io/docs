---
title: "CreateTenant"
description: 'create a tenant'
---
调用该接口create a tenant。

## Request


```
post /tenants
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| create tenant body params | Object | [v1TenantCreateBody](#v1TenantCreateBody) |

#### v1TenantCreateBody

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| admin |  | set tenant admin |      
| auth_type | string | set tenant auth type: internal | external |      
| id_provider_type | string | external auth type : OIDC | LDAP | SMAL |      
| remark | string | tenant remark |      
| tenant_id | string | tenant id |      
| title | string | tenant title |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1CreateTenantResponse](#v1CreateTenantResponse) |

#### v1CreateTenantResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| admin_username | string | created tenant admin username |      
| reset_key | string |  tenant admin password reset key |      
| tenant_id | string | created tenant id |      
| tenant_title | string | created tenant title |   



### Response  400
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 400 | INVALID_ARGUMENT | {   { }} |

### Response  409
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 409 | ALREADY_EXISTS | {   { }} |

### Response  500
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 500 | UNEXPECT_INTERNAL | {   { }} |

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



