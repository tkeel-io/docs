---
title: "ListRole"
description: '角色列表'
---
调用该接口角色列表。

## Request

```
get \rbac\roles
```

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| page_num | query | integer | query page number |  false |
| page_size | query | integer | query page size |  false |
| order_by | query | string | query items order by field |  false |
| is_descending | query | boolean | query items inverted sort |  false |
| key_words | query | string | query items key |  false |
| tenant_id | query | string | tenant id, default is current tenant |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1ListRolesResponse](#v1ListRolesResponse) |

#### v1ListRolesResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| page_num | integer | query page number |      
| page_size | integer | query page size |          
| roles | Array[v1Role] | roles [ 具体参数可见下面 [v1Role](#v1Role) ] |       
| tenant_id | string | tenant id, default is current tenant |      
| total | integer | query item total |   

### v1Role
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| bind_num | integer | role bind user number |      
| desc | string | role desc |      
| id | string | tenant role id |      
| name | string | tenant role name |          
| permission_list | Array[apirbacv1Permission] | permission path list [ 具体参数可见下面 [apirbacv1Permission](#apirbacv1Permission) ] |       
| uneditable | boolean | role uneditable |      
| upsert_timestamp | string | role upsert timestamp |   

### apirbacv1Permission
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| path | string | permission path |      
| permission |  | permission |   



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



