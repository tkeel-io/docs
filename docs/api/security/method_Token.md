---
title: "Token"
description: 'get a entity token'
---


调用该接口get a entity token。



## Request


```
get \v1\entity\{entity_type}\{entity_id}\token
```



| Name | Located in | Type | Description | 
| ---- | ---------- | ----------- | ----------- | 
| entity_type | path | string | EntityType |  
| entity_id | path | string | Entity's ID |  



###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| owner | query | string | user`s ID |  true |
| expires_in | query | string | invalid period( seconds );default 365 days |  false |



## Response



### Response  200


| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 200 | OK | {   { }} |
 


