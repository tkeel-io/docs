---
title: "UpdateTenant"
description: 'tenant update'
---
调用该接口tenant update。

## Request


```
put /tenants/{tenant_id}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| tenant_id | path | string |  |  

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1UpdateTenantBody](#v1UpdateTenantBody) |

#### v1UpdateTenantBody

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| remark | string |  |      
| title | string |  |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1UpdateTenantResponse](#v1UpdateTenantResponse) |

#### v1UpdateTenantResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |  



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



