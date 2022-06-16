---
title: "listSubscribeEntities"
description: 'get subscribe entities list'
---
调用该接口get subscribe entities list。

## Request


```
post /subscribe/{id}/entities/list
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | 订阅ID |  

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
| 200 | OK | Object | [v1ListSubscribeEntitiesResponse](#v1ListSubscribeEntitiesResponse) |

#### v1ListSubscribeEntitiesResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| data | Array[v1Entity] | 订阅实体 [ 具体参数可见下面 [v1Entity](#v1Entity) ] |       
| last_page | string | Last page |      
| page_num | string | Page number |      
| page_size | string | Page size |      
| total | string | Total |   

### v1Entity
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| ID | string | entity id |      
| group | string | group |      
| name | string | name |      
| status | string | status |      
| template | string | template |      
| updated_at | string | update time |   



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



