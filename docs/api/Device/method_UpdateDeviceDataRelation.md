---
title: "UpdateDeviceDataRelation"
description: 'update data relation'
---调用该接口update data relation。



## Request


```
put /devcies/{id}/relations
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | 实体Id |  

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| 关系信息 | Object | [v1Relation](#v1Relation) |

#### v1Relation

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| direction | string | 关系方向 from or to   目前只有 from |      
| relationType | string | 关系类型 目前只定 contain |      
| targetId | string | 源 或 目标  实体Id |   



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



