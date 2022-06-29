---
title: "UpdateUserRoleBinding"
description: '全量更新用户角色'
---
调用该接口全量更新用户角色。

## Request

```
put \rbac\users\{user_id}\roles
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| user_id | path | string | binding user id |  

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| binding role id list | Object | [UpdateUserRoleBindingRequestRoleIDList](#UpdateUserRoleBindingRequestRoleIDList) |

#### UpdateUserRoleBindingRequestRoleIDList

| Name | Type | Description | 
| ---- | ---- | ----------- |        
| roles | Array[ string ] | binding roles |    



## Response

### Response  200
| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 200 | OK | {   { }} |

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



