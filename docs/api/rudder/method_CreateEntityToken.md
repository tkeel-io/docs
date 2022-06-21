---
title: "CreateEntityToken"
description: '创建实体Token'
---
调用该接口创建实体Token。

## Request

```
post \entity\token
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| create entity token  body params | Object | [v1TokenRequestBody](#v1TokenRequestBody) |

#### v1TokenRequestBody

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| entity_id | string | entity id  body params |      
| entity_type | string | entity type  body params |      
| expires_in | string | entity token expires in  body params |      
| owner | string | entity owner  body params |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1CreateEntityTokenResponse](#v1CreateEntityTokenResponse) |

#### v1CreateEntityTokenResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| token | string |  |   



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



