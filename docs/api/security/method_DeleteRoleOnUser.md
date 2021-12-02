---
title: "DeleteRoleOnUser"
description: 'delete a role for user'
---


调用该接口delete a role for user。



## Request


```
delete \v1\rbac\{tenant_id}\users\{user_id}\roles\{role}
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| tenant_id | path | string | tenants`ID |  
| user_id | path | string | users`ID |  
| role | path | string | role |  





## Response



### Response  200


| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 200 | OK | {   { }} |
 


