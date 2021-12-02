---
title: "DeleteRoleInDomain"
description: 'delete a role in tenant'
---


调用该接口delete a role in tenant。



## Request


```
delete \v1\rbac\{tenant_id}\roles\{role}
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| tenant_id | path | string | tenant`s ID |  
| role | path | string | role'ID |  





## Response



### Response  200


| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 200 | OK | {   { }} |
 


