---
title: "SetTenantProfile"
description: '设置平台租户配置'
---调用该接口设置平台租户配置。



## Request


```
post \profile
```

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| tenant_id | query | string |  |  false |

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1TenantProfiles](#v1TenantProfiles) |

#### v1TenantProfiles

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| plugin_id | string |  |      
| profiles | string |  |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1SetTenantPluginProfileResponse](#v1SetTenantPluginProfileResponse) |

#### v1SetTenantPluginProfileResponse

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



