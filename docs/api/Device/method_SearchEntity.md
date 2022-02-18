---
title: "SearchEntity"
description: 'search entity'
---调用该接口search entity。



## Request


```
post /search
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| 设备列表请求信息 | Object | [apidevicev1ListEntityQuery](#apidevicev1ListEntityQuery) |

#### apidevicev1ListEntityQuery

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| condition | Array[apidevicev1Condition] | 组合条件 [ 具体参数可见下面 [apidevicev1Condition](#apidevicev1Condition) ] |       
| is_descending | boolean | 是否逆序， false：不逆序，true:逆序 |      
| order_by | string | 排序字段 |      
| page_num | integer | 记录开始位置 |      
| page_size | integer | 每页限制条数 |      
| query | string | es查询条件 |   

### apidevicev1Condition
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| field | string | 查询输出字段 |      
| operator | string | 操作符, $eq为相等，$neq为不等，$lt为小于，$gt为大于，$lne为小于等于， $gne为大于等于 |      
| value | string | 值 |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1ListDeviceResponse](#v1ListDeviceResponse) |

#### v1ListDeviceResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| listDeviceObject |  | 设备列表对象 |   



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



