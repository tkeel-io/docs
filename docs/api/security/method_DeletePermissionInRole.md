---
title: "DeletePermissionInRole"
description: 'delete a permission for role '
---


调用该接口delete a permission for role 。



## Request


```
delete \v1\rbac\{tenant_id}\{role}\permissions
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| tenant_id | path | string | tenant`s ID |  
| role | path | string | role'ID |  



###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| permission_object | query | string | permission object |  false |
| permission_action | query | string | permission action |  false |



## Response



### Response  200


| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 200 | OK | {   { }} |
 


