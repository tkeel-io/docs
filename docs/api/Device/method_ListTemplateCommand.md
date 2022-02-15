---
title: "ListTemplateCommand"
description: 'list template command'
---调用该接口list template command。



## Request


```
get /templates/{uid}/command
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| uid | path | string | 模板ID |  

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1ListTemplateCommandResponse](#v1ListTemplateCommandResponse) |

#### v1ListTemplateCommandResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |    
| templateCmdObject | Object | 命令列表对象   |   



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



