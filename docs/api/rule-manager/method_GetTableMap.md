---
title: "GetTableMap"
description: 'Get Table Map'
---调用该接口Get Table Map。



## Request


```
get /sink/{id}/maps
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string |  |  

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| table_name | query | string |  |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [ruleASGetTableMapResp](#ruleASGetTableMapResp) |

#### ruleASGetTableMapResp

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| id | string |  |          
| map_fields | Array[ruleMapField] |  [ 具体参数可见下面 [ruleMapField](#ruleMapField) ] |           
| table_fields | Array[ruleField] |  [ 具体参数可见下面 [ruleField](#ruleField) ] |       
| table_name | string |  |   

### ruleMapField
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| m_field |  |  |      
| t_field |  |  |   

### ruleField
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| isPK | boolean |  |      
| name | string |  |      
| type | string |  |   



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



