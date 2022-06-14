---
title: "TS_GetTSData"
description: ''
---调用该接口。



## Request


```
post /ts/{id}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | 实体 id |  

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
| 200 | A successful response. | Object | [v1GetTSDataResponse](#v1GetTSDataResponse) |

#### v1GetTSDataResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| items | Array[v1TSResponse] | data list [ 具体参数可见下面 [v1TSResponse](#v1TSResponse) ] |       
| page_num | integer | 记录开始位置 |      
| page_size | integer | 每页限制条数 |      
| total | integer | total count of the entities |   

### v1TSResponse
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| time | string |  |     
| value | Object |    |   



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



