---
title: "Search_Index"
description: ''
---


调用该接口。



## Request


```
post /index
```







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
| 200 | A successful response. | Object | [v1IndexResponse](#v1IndexResponse) |

#### v1IndexResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| status | string |  |   


  
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


