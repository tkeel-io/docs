---
title: "CreateDevice"
description: 'create device entity'
---调用该接口create device entity。



## Request


```
post /devices
```

### Request Body 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| 设备信息 | Object | [v1DeviceEntityBasicInfo](#v1DeviceEntityBasicInfo) |

#### v1DeviceEntityBasicInfo

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| description | string | 设备描述 |      
| directConnection | boolean | 设备是否直连 |     
| ext | Object | 设备扩展配置   |      
| name | string | 设备名称 |      
| parentId | string | 设备组ID |      
| parentName | string | 设备组名称 |      
| selfLearn | boolean | 设备模板自学习 |      
| templateId | string | 设备模板ID |      
| templateName | string | 设备模板名称 |   



## Response

### Response  200 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1CreateDeviceResponse](#v1CreateDeviceResponse) |

#### v1CreateDeviceResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |    
| deviceObject | Object | 设备对象   |   



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



