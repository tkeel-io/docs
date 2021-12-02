---
title: "Openapi_TenantUnbind"
description: 'Post tenant bind.'
---


调用该接口Post tenant bind.。



## Request


```
post /tenant/unbind
```







### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1TenantUnbindRequst](#v1TenantUnbindRequst) |

#### v1TenantUnbindRequst

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| extra | string |  |      
| tenant_id | string |  |   


  
     
   
     
 
 





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | A successful response. | Object | [v1TenantUnbindResponse](#v1TenantUnbindResponse) |

#### v1TenantUnbindResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| res |  |  |   


  
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


