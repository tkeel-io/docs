---
title: "GetRule"
description: 'Get Rule'
---调用该接口Get Rule。



## Request


```
get /rules/{id}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string |  |  

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [ruleRule](#ruleRule) |

#### ruleRule

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| created_at | string | 创建时间 |      
| desc | string |  |      
| devices_status | integer |  |      
| id | string |  |      
| model_id | string | 模板id |      
| model_name | string | 模板名称 |      
| name | string |  |      
| status | integer |  |      
| sub_id | integer |  |      
| targets_status | integer |  |      
| type | integer | Type 1 for Message Data, 2 for Timeseries Data |      
| updated_at | string | 更新时间 |   



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



