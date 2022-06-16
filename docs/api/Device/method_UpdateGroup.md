---
title: "UpdateGroup"
description: 'update entity group'
---
调用该接口update entity group。

## Request


```
put /groups/{id}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | 设备组ID |  

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| 更新设备组信息 | Object | [v1GroupEntity](#v1GroupEntity) |

#### v1GroupEntity

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| customId | string | 设备组自定义ID |      
| description | string | 设备组说明 |     
| ext | Object | 设备组扩展属性   |      
| name | string | 设备组名称 |      
| parentId | string | 父设备组ID |      
| parentName | string | 父设备组名称 |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1UpdateGroupResponse](#v1UpdateGroupResponse) |

#### v1UpdateGroupResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |    
| groupObject | Object | 设备组信息   |   



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



