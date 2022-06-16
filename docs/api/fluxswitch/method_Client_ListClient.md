---
title: "Client_ListClient"
description: ''
---
调用该接口。

## Request

```
get /client
```

###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| query | query | string | query items order by world |  false |
| order_by | query | string | query items order by field |  false |
| page_num | query | integer | query page number |  false |
| page_size | query | integer | query page size |  false |
| online | query | string | query items by online status |  false |
| status | query | string | query items by enabled status |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | A successful response. | Object | [v1ListClientResponse](#v1ListClientResponse) |

#### v1ListClientResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| client_list | Array[v1QueryClient] |  [ 具体参数可见下面 [v1QueryClient](#v1QueryClient) ] |       
| page_num | integer | query page number |      
| page_size | integer | query page size |      
| total | integer | total items |   

### v1QueryClient
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| client_address | string |  |      
| create_at | string |  |      
| export_flow | string |  |      
| id | string |  |      
| inlet_flow | string |  |      
| name | string |  |      
| online | string |  |      
| status | string |  |      
| token | string |  |   



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



