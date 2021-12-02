---
title: "Create"
description: ' Create a tenant'
---


调用该接口 Create a tenant。



## Request


```
post \v1\tenants
```







### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1.TenantCreteIn](#v1.TenantCreteIn) |

#### v1.TenantCreteIn

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| admin |  |  |      
| remark | string |  |      
| title | string |  |   


  
     
   
     
   
     
 
 





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | ok | Object | [v1.TenantCreateOut](#v1.TenantCreateOut) |

#### v1.TenantCreateOut

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| admin |  |  |      
| remark | string |  |      
| tenant_id | integer |  |      
| title | string |  |   


  
     
   
     
   
     
   
     
 
 


 


