---
title: "ListRuleTarget"
description: 'List Rule Target'
---调用该接口List Rule Target。



## Request


```
get /rules/{id}/target
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string |  |  

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| page_num | query | integer | Page number |  true |
| page_size | query | integer | Page size |  true |
| order_by | query | string | Order by |  false |
| is_descending | query | boolean | Is descending |  false |
| key_words | query | string | Key words |  false |
| search_key | query | string | Search Key |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [ruleListRuleTargetResp](#ruleListRuleTargetResp) |

#### ruleListRuleTargetResp

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| data | Array[ruleCreateRuleTargetResp] |  [ 具体参数可见下面 [ruleCreateRuleTargetResp](#ruleCreateRuleTargetResp) ] |       
| last_page | integer | Last page |      
| page_num | integer | Page number |      
| page_size | integer | Page size |      
| total | integer | Total |   

### ruleCreateRuleTargetResp
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| database | string |  |          
| fields | Array[ruleMapField] |  [ 具体参数可见下面 [ruleMapField](#ruleMapField) ] |       
| host | string |  |      
| id | string |  |      
| password | string |  |      
| sink_id | string |  |      
| sink_type | string |  |      
| table_name | string |  |      
| type | integer | type 1 for Kafka, 2 for Object-Storage |      
| user | string |  |      
| value | string |  |   

### ruleMapField
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| m_field |  |  |      
| t_field |  |  |   



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



