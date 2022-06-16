---
title: "ListExpression"
description: 'list expression'
---
调用该接口list expression。

## Request


```
get /entities/{entity_id}/expressions
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| entity_id | path | string | entity id |  

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| source | query | string | source id |  false |
| owner | query | string | owner id |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1ListExpressionResp](#v1ListExpressionResp) |

#### v1ListExpressionResp

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| entity_id | string | entity id |          
| expressions | Array[v1Expression] | expression informations [ 具体参数可见下面 [v1Expression](#v1Expression) ] |       
| owner | string | owner id |   

### v1Expression
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| description | string | expression description |      
| expression | string | expression text |      
| name | string | expression name |      
| path | string | target property path |   



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



