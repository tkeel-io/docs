---
title: "GetRawdata"
description: 'Get entity rawdata'
---
调用该接口Get entity rawdata。

## Request


```
post /rawdata/{entity_id}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| entity_id | path | string | 实体 id |  

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
| 200 | OK | Object | [v1GetRawdataResponse](#v1GetRawdataResponse) |

#### v1GetRawdataResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| items | Array[v1RawdataResponse] | data list [ 具体参数可见下面 [v1RawdataResponse](#v1RawdataResponse) ] |       
| page_num | integer | 记录开始位置 |      
| page_size | integer | 每页限制条数 |      
| total | integer | total count of the entities |   

### v1RawdataResponse
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| entity_id | string |  |      
| id | string |  |      
| path | string |  |      
| timestamp | string |  |      
| values | string |  |   



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



