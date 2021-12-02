---
title: "AddRoleInDomain"
description: ' Add a role in tenant '
---


调用该接口 Add a role in tenant 。



## Request


```
post \v1\rbac\{tenant_id}\roles
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| tenant_id | path | string | tenant's ID |  





### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1.AddPermissionIn](#v1.AddPermissionIn) |

#### v1.AddPermissionIn

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| permission_action | string |  |      
| permission_object | string |  |   


  
     
   
     
 
 





## Response



### Response  200


| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 200 | ok | {   { }} |
 


