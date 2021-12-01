---
sidebar_position: 2
title: OAuth2 Access
---
# OAuth Access
该文档将会为您展示 api 的访问控制的安全机制

## 怎样通过 api 访问平台
当外部以调用接口的方式访问平台时，需要通过平台的授权服务的成功认证才能访问到相应接口。授权服务支持标准的 oaut2 协议。

## 支持的 oauth2 

### 1 password √

资源请求方(client方)使用
如果充分信任接入应用(client), 用户就可以直接把用户名密码给接入应用.
接入应用使用用户账号密码申请令牌.

**请求方式**

`POST` `/oauth/token`

**请求头 Authorization**

- basic auth
- username: `client_id`
- password: `client_secret`

**Header**  
`Content-Type: application/x-www-form-urlencoded`

**Body参数说明**  

|参数|类型|说明|
|-|-|-|
|grant_type|string|固定值`password`|
|username|string|用户名|
|password|string|用户密码|
|scope|string|权限范围,`str1,str2,str3`, 如果没有特殊说明,填`all` |

**Response返回示例**  

```
{
    "access_token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0ZXN0X2NsaWVudF8xIiwiZXhwIjoxNTkxNDMyNzA3LCJzdWIiOiJhZG1pbiJ9.ECfUkCMUZE8I6GH3XTDcJnQgDryiRyyBhEHBW-dCxzFWaR-mvU5dsx3XV2bx-LWZzPJTBAQ3rB5QOb4BHjnBXw",
    "expires_in": 7200,
    "refresh_token": "AH-B00RKXTME9WXDPSBSTG",
    "scope": "all",
    "token_type": "Bearer"
}
```

### 2 authorization_code

#### 2-1 获取授权code

**请求方式**

`GET` `/oauth/authorize`

**参数说明**  

|参数|类型|说明|
|-|-|-|
|client_id|string|在oauth2 server 注册的client_id|
|response_type|string|固定值`code`|
|scope|string|权限范围,`str1,str2,str3`, 如果没有特殊说明,填`all` |
|state|string|验证请求的标志字段|
|redirect_uri|string|发放`code`用的回调uri,回调时会在uri后面跟上`?code=**&state=###`|

**请求示例**

```
http://localhost:8080/oauth/authorize?client_id=test_client_1&response_type=code&scope=all&state=xyz&redirect_uri=http://localhost:8080/oauth/on_code
```

**返回示例**

`302 http://localhost:8080/oauth/on_code?code=XUNKO4OPPROWAPFKEWNZWA&state=xyz`

**注意**

这里会返回请求时设置的`state`, 请在进行下一步之前验证它, 防止请求被劫持或者篡改

#### 2-2 使用`code`交换`token`

**请求方式**

`POST` `/oauth/token`

**请求头 Authorization**

- basic auth
- username: `client_id`
- password: `client_secret`

**Header**  
`Content-Type: application/x-www-form-urlencoded`

**Body参数说明**  

|参数|类型|说明|
|-|-|-|
|grant_type|string|固定值`authorization_code`|
|code|string| 1-1 发放的code|
|redirect_uri|string| 1-1 填写的redirect_uri|

**Response返回示例**  

```
{
    "access_token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIyMjIyMjIiLCJleHAiOjE1ODU3MTU1NTksInN1YiI6InRlc3QifQ.ZMgIDQMW7FGxbF1V8zWOmEkmB7aLH1suGYjhDdrT7aCYMEudWUoiCkWHSvBmJahGm0RDXa3IyDoGFxeMfzlDNQ",
    "expires_in": 7200,
    "refresh_token": "JG7_WGLWXUOW2KV2VLJKSG",
    "scope": "all",
    "token_type": "Bearer"
}
```

### 3 implicit

资源请求方(client方)使用, 
多用于没有后端的应用, 
用户授权登录之后, 会直接向前端发送令牌(`access_token`)

**请求方式**

`GET` `/oauth/authorize`

**参数说明**  

|参数|类型|说明|
|-|-|-|
|client_id|string|在 oauth2 server 注册的client_id|
|response_type|string|固定值`token`|
|scope|string|权限范围,`str1,str2,str3`, 如果没有特殊说明,填`all` |
|state|string|验证请求的标志字段|
|redirect_uri|string|发放`code`用的回调uri,回调时会在uri后面跟上`?code=**&state=###`|

**请求示例**

```
http://localhost:8080/oauth/authorize?client_id=test_client_1&response_type=token&scope=all&state=xyz&redirect_uri=http://localhost:8080/oauth/on_code
```

**返回示例**

```
http status code 302
http://localhost:8080/oauth/on_code#access_token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0ZXN0X2NsaWVudF8xIiwiZXhwIjoxNTkxNDI3OTMwLCJzdWIiOiJhZG1pbiJ9.RBYns9UnNYDHINSBzvHWHRzuKCpzKmsxUnKt30lntmGvXmVDoByZtlB0RHAVB59PHBlJNO_YUBZzC2odwCa8Tg
&expires_in=3600&scope=all&state=xyz&token_type=Bearer

```

**注意**

1. 这里会返回请求时设置的`state`, 请在进行下一步之前验证它, 防止请求被劫持或者篡改
2. 这种方式把令牌直接传给前端，是很不安全的。因此，只能用于一些安全要求不高的场景，并且令牌的有效期必须非常短，通常就是会话期间（session）有效，浏览器关掉，令牌就失效了




### 4 client_credentials

资源请求方(client方)使用
使用在oauth2服务器注册的client_id 和 client_secret 获取 access_token,
发出 API 请求时，它应将access_token作为 Bearer 令牌传递到 Authorization 请求头中。

**请求方式**

`POST` `/oauth/token`

**请求头 Authorization**

- basic auth
- username: `client_id`
- password: `client_secret`

**Header**  

`Content-Type: application/x-www-form-urlencoded`

**Body参数说明**  

|参数|类型|说明|
|-|-|-|
|grant_type|string|固定值`client_credentials`|
|scope|string|权限范围,`str1,str2,str3`, 如果没有特殊说明,填`all`, `scope` 需要提前在oauth2服务注册 |

**返回示例**  

```
{
    "access_token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJlbWJlZGVkLWg1LWFwaSIsImV4cCI6MTU4OTk3NzQyNn0.Pu93fy0-gyiFqExBkCFAKTVJ1on_RpOSexzkHqczA6n6kB2_mOHbTMOyGK_Di7bHxZ3JqpZeyDoKQBtUe_T7jw",
    "expires_in": 7200,
    "token_type": "Bearer"
}
```


### * 验证token

**接口说明**

这个接口是资源端使用的, 
用来验证 `access_token` `scope` 和 `domain` .

**请求方式**

`GET`  `oauth/authenticate`

**请求头 Authorization**

- Bearer Token
- Token: `access_token`

**返回示例**  

```
Status Code: 200
Response Body
{
    "client_id": "000000",
    "domain": "http://localhost",
    "expires_in": 2654,
    "scope": "",
    "user_id": "usr-2-362d85d770ec849ea8306df2f32e7074"
}
```

```
Status Code: 400
Response Body
   invalid access token
```

**注意** 

如果token正确, 接口还会一起返回权限范围`scope` client的注册domain, 这里推荐验证下, 请求方的身份和权限.

### * 刷新token

刷新access_token, 使用refresh_token换取access_token

**请求方式**

`POST` `/token`

**请求头 Authorization**

- basic auth
- username: `client_id`
- password: `client_secret`

**Header**

`Content-Type: application/x-www-form-urlencoded`

**Body参数说明**

|参数|类型|说明|
|-|-|-|
|grant_type|string|固定值`refresh_token`|
|refresh_token|string|之前获取的refresh_token|

**返回示例**

```
{
    "access_token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIyMjIyMjIiLCJleHAiOjE1ODU4MTc2MTMsInN1YiI6IjEifQ.yNpQIbklhtsSr5KEkJMAR4I30c85OEriYwAOpL_ukRBJ1qsSziT05HFN-kxVN1-qM18TzVEf8beCvugyhpgpsg",
    "expires_in": 7200,
    "refresh_token": "2AH_LQHPUYK8XML4LKMQKG",
    "scope": "all",
    "token_type": "Bearer"
}
```