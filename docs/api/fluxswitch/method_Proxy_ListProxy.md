---
title: "Proxy_ListProxy"
description: ''
---
调用该接口。

## Request

```
get /proxy
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
| client_id | query | string | query items by specified client id |  false |

## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | A successful response. | Object | [v1ListProxyResponse](#v1ListProxyResponse) |

#### v1ListProxyResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| page_num | integer | query page number |      
| page_size | integer | query page size |          
| proxy_list | Array[v1QueryProxy] | proxy list [ 具体参数可见下面 [v1QueryProxy](#v1QueryProxy) ] |       
| total | integer | total items |   

### v1QueryProxy
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| client_id | string |  |      
| create_at | string |  |      
| device_id | string |  |      
| device_name | string |  |      
| export_flow | string |  |      
| host | string |  |      
| id | string |  |      
| inlet_flow | string |  |      
| name | string |  |      
| online | string |  |      
| port | string |  |      
| protocol | string |  |      
| remark | string |  |      
| status | string |  |      
| token | string |  |      
| url | string |  |   



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



