---
title: "Rules_RuleCreate"
description: ''
---调用该接口。



## Request


```
put /rules
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [ruleRuleCreateReq](#ruleRuleCreateReq) |

#### ruleRuleCreateReq

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| desc | string |  |      
| name | string |  |      
| type | integer |  |      
| user_id | string |  |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | A successful response. | Object | [ruleRuleCreateResp](#ruleRuleCreateResp) |

#### ruleRuleCreateResp

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| created_at | string | 创建时间 |      
| desc | string |  |      
| id | string |  |      
| name | string |  |      
| status | integer |  |      
| type | integer |  |      
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



