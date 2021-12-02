---
title: "getMessage（服务重命名）"
description: 'Get a message.（服务描述）'
---


调用该接口Get a message.（服务描述）。



## Request

```
post /helloworld/{name}
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| name | path | string | Description sample of helloworld's name |  

### Request Body

| Description | Type | Schema |
| ----------- | ------ | ------ |
| Description sample of helloworld | Object | [v1Test](#v1Test) |

#### v1Test

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| aaa | string |  |      
| bbb | string |  |   

## Response

### Response  200

| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1HelloResponse](#v1HelloResponse) |

#### v1HelloResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| message | string | Hello Response |   

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


  
     
 
 


          
     
   
     
 
 


 


