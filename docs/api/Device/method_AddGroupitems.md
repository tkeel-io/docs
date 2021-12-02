---
title: "AddGroupitems"
description: 'add group items'
---


调用该接口add group items。



## Request


```
post /groups/{id}/items
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| id | path | string | 设备组ID |  





### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
| 子设备ID 数组 | Object | [apigroupv1Ids](#apigroupv1Ids) |

#### apigroupv1Ids

| Name | Type | Description | 
| ---- | ---- | ----------- |        
| ids | Array[ string ] | id 数组 |    


  
       
          
     
 
 





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [apigroupv1CommonResponse](#apigroupv1CommonResponse) |

#### apigroupv1CommonResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| result | string | ok  or failed |   


  
     
 
 


 


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


  
     
 
 


          
     
   
     
 
 


 


