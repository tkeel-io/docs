---
title: "GetTemplateAttribute"
description: 'get Template attribute'
---
调用该接口get Template attribute。

## Request


```
get /templates/{uid}/attribute/{id}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| uid | path | string | 模板ID |  
| id | path | string | 属性ID |  

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1GetTemplateAttributeResponse](#v1GetTemplateAttributeResponse) |

#### v1GetTemplateAttributeResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |    
| templateAttrSingleObject | Object | 单个属性对象   |   



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



