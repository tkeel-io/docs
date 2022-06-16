---
title: "GetTemplateCommand"
description: 'get Template command'
---
调用该接口get Template command。

## Request


```
get /templates/{uid}/command/{id}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| uid | path | string | 模板ID |  
| id | path | string | 命令ID |  

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1GetTemplateCommandResponse](#v1GetTemplateCommandResponse) |

#### v1GetTemplateCommandResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |    
| templateCmdSingleObject | Object | 单个命令对象   |   



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



