---
title: "UserQuery"
description: 'get users'
---


调用该接口get users。



## Request


```
get \v1\tenants\users
```





###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| tenant_id | query | string | tenant`s ID |  true |
| user_id | query | string | user`s ID |  false |
| search_key | query | string | search by condition |  false |
| key_words | query | string | condition`s value |  false |



## Response



### Response  200

   
| Code1 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | ok | Array | [v1.User](#v1.User) |

#### v1.User

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| avatar | string |  |      
| email | string |  |      
| external_id | string |  |      
| nick_name | string |  |      
| tenant_id | integer |  |      
| user_id | string |  |      
| username | string |  |   


  
     
   
     
   
     
   
     
   
     
   
     
   
     
 
 


 


