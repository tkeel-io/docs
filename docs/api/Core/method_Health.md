---
title: "Health"
description: 'health for probe'
---


调用该接口health for probe。



## Request


```
get /health
```







## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1HealthResponse](#v1HealthResponse) |

#### v1HealthResponse

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


  
     
 
 


          
     
   
     
 
 


 


