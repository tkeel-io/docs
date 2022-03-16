---
title: "Identify"
description: 'openapi addons identify'
---调用该接口openapi addons identify。



## Request


```
post /addons/identify
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1AddonsIdentifyRequest](#v1AddonsIdentifyRequest) |

#### v1AddonsIdentifyRequest

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| implemented_addons | Array[v1ImplementedAddons] |  [ 具体参数可见下面 [v1ImplementedAddons](#v1ImplementedAddons) ] |       
| plugin |  |  |   

### v1ImplementedAddons
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| addons_point | string |  |      
| implemented_endpoint | string |  |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1AddonsIdentifyResponse](#v1AddonsIdentifyResponse) |

#### v1AddonsIdentifyResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| res |  |  |   



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



