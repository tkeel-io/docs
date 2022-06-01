---
title: "Rules_UpdateTableMap"
description: ''
---调用该接口。



## Request


```
put /sink/{id}/maps
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
| 200 | A successful response. | Object | [ruleASUpdateTableMapResp](#ruleASUpdateTableMapResp) |

#### ruleASUpdateTableMapResp

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| fields | Array[ruleMapField] |  [ 具体参数可见下面 [ruleMapField](#ruleMapField) ] |       
| id | string |  |      
| table_name | string |  |      
| target_id | string |  |   

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



