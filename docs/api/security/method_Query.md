---
title: "Query"
description: 'get tenants'
---


调用该接口get tenants。



## Request


```
get \v1\tenants
```





###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| tenant_id | query | string |  |  false |
| title | query | string |  |  false |



## Response



### Response  200

   
| Code1 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | ok | Array | [v1.Tenant](#v1.Tenant) |

#### v1.Tenant

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| id | integer |  |      
| remark | string |  |      
| title | string |  |   


  
     
   
     
   
     
 
 


 


