---
title: "AddPermissionInRole"
description: 'add permission for role'
---


调用该接口add permission for role。



## Request


```
post \v1\rbac\{tenant_id}\{role}\permissions
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| tenant_id | path | string | tenant`s ID |  
| role | path | string | role'ID |  





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
| 200 | OK | {   { }} |
 


