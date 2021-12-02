---
title: "UserCreate"
description: 'create a user'
---


调用该接口create a user。



## Request


```
post \v1\tenants\users
```







### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1.UserCreateIn](#v1.UserCreateIn) |

#### v1.UserCreateIn

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| avatar | string |  |      
| email | string |  |      
| nick_name | string |  |      
| password | string |  |      
| tenant_id | integer |  |      
| username | string |  |   


  
     
   
     
   
     
   
     
   
     
   
     
 
 





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | ok | Object | [v1.User](#v1.User) |

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


  
     
   
     
   
     
   
     
   
     
   
     
   
     
 
 


 


