---
title: "ListTemplateTelemetry"
description: 'list Template telemetry'
---


调用该接口list Template telemetry。



## Request


```
get /templates/{uid}/telemetry
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| uid | path | string | 属性ID |  





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1ListTemplateTelemetryResponse](#v1ListTemplateTelemetryResponse) |

#### v1ListTemplateTelemetryResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| templateTeleObject |  | 遥测列表对象 |   


  
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


