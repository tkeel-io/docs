---
title: "Rules_RuleDebug"
description: ''
---调用该接口。



## Request


```
post /rules/{rule_id}/debug
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| rule_id | path | string |  |  

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [](#) |

#### 

| Name | Type | Description | 
| ---- | ---- | ----------- |  



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | A successful response. | Object | [ruleRuleDebugResp](#ruleRuleDebugResp) |

#### ruleRuleDebugResp

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| data | string |  |      
| rule_id | string |  |      
| topic | string | data: message. |   



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



