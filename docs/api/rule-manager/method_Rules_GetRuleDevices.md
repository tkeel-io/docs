---
title: "Rules_GetRuleDevices"
description: ''
---调用该接口。



## Request


```
get /rules/{id}/devices
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
| 200 | A successful response. | Object | [ruleRuleDevicesResp](#ruleRuleDevicesResp) |

#### ruleRuleDevicesResp

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| data | Array[ruleDevice] |  [ 具体参数可见下面 [ruleDevice](#ruleDevice) ] |       
| last_page | string | Last page |      
| page_num | string | Page number |      
| page_size | string | Page size |      
| total | string | Total |   

### ruleDevice
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| group_name | string |  |      
| id | string |  |      
| name | string |  |      
| status | string |  |      
| template | string |  |   



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



