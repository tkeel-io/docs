---
title: "AddRoleToUser"
description: 'add roles for users'
---


调用该接口add roles for users。



## Request


```
post \v1\rbac\{tenant_id}\users\roles
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| tenant_id | path | string | tenants`ID |  





### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1.AddRoleInDomainIn](#v1.AddRoleInDomainIn) |

#### v1.AddRoleInDomainIn

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| role | string |  |   


  
     
 
 





## Response



### Response  200


| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 200 | OK | {   { }} |
 


