---
title: "DeleteGroup"
description: 'delete entity group'
---
调用该接口delete entity group。

## Request


```
post /groups/delete
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| 设备组ID 数组 | Object | [apigroupv1Ids](#apigroupv1Ids) |

#### apigroupv1Ids

| Name | Type | Description | 
| ---- | ---- | ----------- |        
| ids | Array[ string ] | id 数组 |    



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1DeleteGroupResponse](#v1DeleteGroupResponse) |

#### v1DeleteGroupResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| faildDelGroup | Array[v1FaildDelGroup] | 设备组删除失败 数组 [ 具体参数可见下面 [v1FaildDelGroup](#v1FaildDelGroup) ] |    

### v1FaildDelGroup
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| id | string | 设备组ID |      
| reason | string | 原因 |   



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



