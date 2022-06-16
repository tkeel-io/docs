---
title: "DeleteTemplate"
description: 'delete Template'
---
调用该接口delete Template。

## Request


```
post /templates/delete
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| 模板ID 数组 | Object | [apitemplatev1Ids](#apitemplatev1Ids) |

#### apitemplatev1Ids

| Name | Type | Description | 
| ---- | ---- | ----------- |        
| ids | Array[ string ] | ID 数组 |    



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1DeleteTemplateResponse](#v1DeleteTemplateResponse) |

#### v1DeleteTemplateResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| faildDelTemplate | Array[v1FaildDelTemplate] | 模板删除失败 数组 [ 具体参数可见下面 [v1FaildDelTemplate](#v1FaildDelTemplate) ] |    

### v1FaildDelTemplate
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| id | string | 模板ID |      
| reason | string | 原因 |   



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



