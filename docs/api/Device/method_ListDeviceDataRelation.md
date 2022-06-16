---
title: "ListDeviceDataRelation"
description: 'list data relation'
---
调用该接口list data relation。

## Request


```
get /devices/{id}/relation
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | 实体Id |  

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1ListDeviceDataRelationResponse](#v1ListDeviceDataRelationResponse) |

#### v1ListDeviceDataRelationResponse

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



