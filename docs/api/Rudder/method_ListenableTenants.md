---
title: "ListenableTenants"
description: '获取插件绑定租户接口'
---调用该接口获取插件绑定租户接口。



## Request


```
get \plugins\{id}\tenants
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | plugin id |  

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| page_num | query | integer | query page number |  false |
| page_size | query | integer | query page size |  false |
| order_by | query | string | query items order by field |  false |
| is_descending | query | boolean | query items inverted sort |  false |
| key_words | query | string | query items key |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1ListEnabledTenantsResponse](#v1ListEnabledTenantsResponse) |

#### v1ListEnabledTenantsResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| page_num | integer | query page number |      
| page_size | integer | query page size |          
| tenants | Array[v1EnabledTenant] | plugin enable tenants list [ 具体参数可见下面 [v1EnabledTenant](#v1EnabledTenant) ] |       
| total | integer | total items |   

### v1EnabledTenant
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| enable_timestamp | string | enable timestamp |      
| operator_id | string | operator user id |      
| remark | string | enable tenant remark |      
| tenant_id | string | enable tenant id |      
| title | string | enable tenant title |      
| user_num | integer | enable tenant user number |   



### Response  400
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 400 | INVALID_ARGUMENT | {   { }} |

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



