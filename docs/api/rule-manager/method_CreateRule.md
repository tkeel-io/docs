---
title: "CreateRule"
description: 'Create Rule'
---调用该接口Create Rule。



## Request


```
post /rules
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [ruleRuleCreateReq](#ruleRuleCreateReq) |

#### ruleRuleCreateReq

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| desc | string |  |      
| model_id | string |  |      
| model_name | string |  |      
| name | string |  |      
| type | integer | Type 1 for Message Data, 2 for Timeseries Data |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [ruleRuleCreateResp](#ruleRuleCreateResp) |

#### ruleRuleCreateResp

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| created_at | string | 创建时间 |      
| desc | string |  |      
| id | string |  |      
| model_id | string | 模板id |      
| model_name | string | 模板名称 |      
| name | string |  |      
| status | integer | Status 1 for Running, 0 for Stopped |      
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



