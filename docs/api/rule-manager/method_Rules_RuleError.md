---
title: "Rules_RuleError"
description: ''
---调用该接口。



## Request


```
get /rules/{rule_id}/errors
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| rule_id | path | string |  |  

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| user_id | query | string |  |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | A successful response. | Object | [ruleRuleErrorResp](#ruleRuleErrorResp) |

#### ruleRuleErrorResp

| Name | Type | Description | 
| ---- | ---- | ----------- |    
| error | Object |    |      
| rule_id | string |  |   



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



