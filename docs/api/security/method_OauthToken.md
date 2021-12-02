---
title: "OauthToken"
description: 'oauth token'
---


调用该接口oauth token。



## Request


```
get \v1\oauth\token
```





###  Request Parameters

| Name | Located in | Type | Description |  Required |
| ---- | ---------- | ----------- | ----------- |  ---- |
| grant_type | query | string | GrantType:(password/authorization_code) |  true |
| username | query | string | user name while GrantType is password,style must be 'tenantID-username' |  false |
| password | query | string | password |  false |



## Response



### Response  200


| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 200 | OK | {   { }} |
 


