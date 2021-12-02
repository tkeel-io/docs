---
title: "listEntity"
description: 'List entities'
---


调用该接口List entities。



## Request

```
post /plugins/{plugin}/entities/search
```

| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| plugin | path | string | plugin id |  

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
| 200 | OK | Object | [v1ListEntityResponse](#v1ListEntityResponse) |

#### v1ListEntityResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |         
| items | Array[v1EntityResponse] | entity list [ 具体参数可见下面 [v1EntityResponse](#v1EntityResponse) ] |       
| limit | string | limit |      
| offset | string | offset |      
| page | string | page |      
| total | string | total count of the entities |   

### v1EntityResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |    
| configs | Object | entity configs   |      
| id | string | entity id |          
| mappers | Array[v1MapperDesc] | entity mappers [ 具体参数可见下面 [v1MapperDesc](#v1MapperDesc) ] |       
| owner | string | owner id |      
| plugin | string | plugin id |     
| properties | Object | entity properties   |      
| source | string | source id |      
| type | string | entity type |   

### v1MapperDesc

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| name | string | mapper name |      
| tql | string | tql content |   

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


  
     
 
 


          
     
   
     
 
 


 


