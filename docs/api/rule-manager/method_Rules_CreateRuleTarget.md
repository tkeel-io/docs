---
title: "Rules_CreateRuleTarget"
description: ''
---调用该接口。



## Request


```
post /rules/{id}/target
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string |  |  

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
| 200 | A successful response. | Object | [ruleCreateRuleTargetResp](#ruleCreateRuleTargetResp) |

#### ruleCreateRuleTargetResp

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



