---
title: "UpdateDeviceDataRelation"
description: 'update data relation'
---
调用该接口update data relation。

## Request


```
put /devices/{id}/relation
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | 实体Id |  

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| 关系信息 | Object | [v1listEntityExpression](#v1listEntityExpression) |

#### v1listEntityExpression

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| expressions | Array[v1Expression] |  [ 具体参数可见下面 [v1Expression](#v1Expression) ] |    

### v1Expression
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| description | string | 可用于承载id 与名称的映射 便于展示 |      
| expression | string | 数据来源设备的路径：设备id + 属性or遥测id |      
| name | string |  |      
| path | string | 当前设备属性 or 遥测id 路径 |   



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



