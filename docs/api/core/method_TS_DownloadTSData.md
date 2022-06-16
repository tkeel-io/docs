---
title: "TS_DownloadTSData"
description: ''
---
调用该接口。

## Request


```
get /ts/{id}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | 实体 id |  

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| start_time | query | string | 起始时间 |  false |
| end_time | query | string | 终止时间 |  false |
| identifiers | query | string | 标识符 |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | A successful response. | Object | [v1DownloadTSDataResponse](#v1DownloadTSDataResponse) |

#### v1DownloadTSDataResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| data | string | content |      
| filename | string | filename |      
| length | string | content length in string |   



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



