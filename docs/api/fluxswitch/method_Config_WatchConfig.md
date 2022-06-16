---
title: "Config_WatchConfig"
description: '监听配置改变，实时更新
TKEEL_COMMENT
{"request":{"raw_data":true}}'
---
调用该接口监听配置改变，实时更新
TKEEL_COMMENT
{"request":{"raw_data":true}}。

## Request

```
get /watch/{token}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| token | path | string |  |  

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | A successful response. | Object | [v1WatchConfigResponse](#v1WatchConfigResponse) |

#### v1WatchConfigResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |  



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



