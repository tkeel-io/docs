---
title: "GetTenantProfile"
description: 'get tenant profile'
---
调用该接口get tenant profile。

## Request


```
get /profile
```

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| tenant_id | query | string |  |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1GetTenantProfileResponse](#v1GetTenantProfileResponse) |

#### v1GetTenantProfileResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| tenant_profiles | Array[v1TenantProfiles] |  [ 具体参数可见下面 [v1TenantProfiles](#v1TenantProfiles) ] |    

### v1TenantProfiles
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| plugin_id | string |  |      
| profiles | string |  |   



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



