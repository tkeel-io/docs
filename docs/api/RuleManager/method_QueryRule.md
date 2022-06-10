---
title: "QueryRule"
description: 'Query Rules'
---调用该接口Query Rules。



## Request


```
get /rules
```

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| page_num | query | integer | Page number |  true |
| page_size | query | integer | Page size |  true |
| order_by | query | string | Order by |  false |
| is_descending | query | boolean | Is descending |  false |
| key_words | query | string | Key words |  false |
| search_key | query | string | Search Key |  false |
| id.value | query | string |  |  false |
| ids | query | array |  |  false |
| name.value | query | string |  |  false |
| type | query | integer | Type 1 for Message Data, 2 for Timeseries Data |  false |
| status.value | query | integer |  |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [ruleRuleQueryResp](#ruleRuleQueryResp) |

#### ruleRuleQueryResp

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| data | Array[ruleRule] |  [ 具体参数可见下面 [ruleRule](#ruleRule) ] |       
| last_page | integer | Last page |      
| page_num | integer | Page number |      
| page_size | integer | Page size |      
| total | integer | Total |   

### ruleRule
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



