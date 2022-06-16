---
title: "CreateDeviceDataRelationAuto"
description: 'Create data relation auto'
---
调用该接口Create data relation auto。

## Request


```
post /devices/{id}/relation/auto
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
| curName | string | 当前设备名称 |      
| direction | string | 关系方向 from or to   目前只填： from |      
| relationType | string | 关系类型 目前只填： contain |      
| targetId | string | 来源设备Id |      
| targetName | string |  来源设备名称 |      
| targetType | string | 来源设备类型 目前只填:device |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1CreateDeviceDataRelationAutoResponse](#v1CreateDeviceDataRelationAutoResponse) |

#### v1CreateDeviceDataRelationAutoResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |    
| expressionObject | Object | 关系表达式列表对象   |   



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



