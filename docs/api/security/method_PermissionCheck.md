---
title: "PermissionCheck"
description: 'delete a role in tenant'
---


调用该接口delete a role in tenant。



## Request


```
post \v1\rbac\permission\check
```







### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1.PermissionCheck](#v1.PermissionCheck) |

#### v1.PermissionCheck

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| permission_action | string |  |      
| permission_object | string |  |      
| user_id | string |  |   


  
     
   
     
   
     
 
 





## Response



### Response  200


| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 200 | OK | {   { }} |
 


