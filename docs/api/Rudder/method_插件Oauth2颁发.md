---
title: "插件Oauth2颁发"
description: '插件Oauth2颁发接口'
---


调用该接口插件Oauth2颁发接口。



## Request


```
post \oauth2
```







### Request Body


 
| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1IssueOauth2TokenRequest](#v1IssueOauth2TokenRequest) |

#### v1IssueOauth2TokenRequest

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| client_id | string | oauth2 client id |      
| client_secret | string | plugin secret |   


  
     
   
     
 
 





## Response



### Response  200

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | OK | Object | [v1IssueOauth2TokenResponse](#v1IssueOauth2TokenResponse) |

#### v1IssueOauth2TokenResponse

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| access_token | string | oauth2 access token |      
| expires_in | integer | oauth2 token expires |      
| refresh_token | string | oauth2 refresh token |      
| token_type | string | oauth2 token type |   


  
     
   
     
   
     
   
     
 
 


 


### Response  400


| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 400 | INVAILD_PLUGIN_ID | {   { }} |
 


### Response  500


| Code3 | Description | Type | 
| ---- | ----------- | ------ | 
| 500 | INTERNAL_STORE | {   { }} |
 


### Response  default

 
| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| default | An unexpected error response. | Object | [rpcStatus](#rpcStatus) |

#### rpcStatus

| Name | Type | Description | 
| ---- | ---- | ----------- |     
| code | integer |  |          
| details | Array[protobufAny] |  [ 具体参数可见下面 [protobufAny](#protobufAny) ] |       
| message | string |  |   


  
     
   
       
         
### protobufAny
| Name | Type | Description | 
| ---- | ---- | ----------- |     
| @type | string |  |   


  
     
 
 


          
     
   
     
 
 


 


