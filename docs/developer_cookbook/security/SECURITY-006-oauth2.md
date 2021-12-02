---
sidebar_position: 5
title: 授权服务
---
我们提供了一些授权方式希望可以满足您的需求。
## 支持的授权类型 
现平台安全模块支持如下多种授权类型：

|  类型 | 模式 |
|------|-----|
| [Password](#password) | 密码模式 |
| [Authorization Code](#authorization-code) | 授权码模式 |
| [Implicit](#implicit) | 简化模式 |
| [Client Credentials](#client-credentials) | 客户端凭据模式 |

### Password 
资源请求方使用，如果充分信任接入应用, 用户就可以直接把用户名密码给接入应用，接入应用使用用户账号密码申请令牌.

**请求方式**
```
POST /oauth/token
```

**请求头 Authorization**
- basic auth
- Content-Type: `application/x-www-form-urlencoded`
- username: `client_id`
- password: `client_secret`

**Body 参数说明**  

|参数|类型|说明|
|-|-|-|
|grant_type|string|固定值 `password`|
|username|string|用户名|
|password|string|用户密码|
|scope|string|权限范围,`str1, str2, str3`, 如果没有特殊说明,填 `all` |

**Response 返回示例**  

```json
{
    "access_token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0ZXN0X2NsaWVudF8xIiwiZXhwIjoxNTkxNDMyNzA3LCJzdWIiOiJhZG1pbiJ9.ECfUkCMUZE8I6GH3XTDcJnQgDryiRyyBhEHBW-dCxzFWaR-mvU5dsx3XV2bx-LWZzPJTBAQ3rB5QOb4BHjnBXw",
    "expires_in": 7200,
    "refresh_token": "AH-B00RKXTME9WXDPSBSTG",
    "scope": "all",
    "token_type": "Bearer"
}
```

### Authorization Code
安全性高，使用率高，流程复杂。要求第三方应用必须有服务器。对安全性要求较高。
#### 获取授权 code

**请求方式**
```
GET /oauth/authorize
```
**参数说明**  

|参数|类型|说明|
|-|-|-|
|client_id|string|在oauth2 server 注册的client_id|
|response_type|string|固定值 `code`|
|scope|string|权限范围,`str1, str2, str3`, 如果没有特殊说明,填 `all` |
|state|string|验证请求的标志字段|
|redirect_uri|string|发放 `code` 用的回调 uri,回调时会在 uri 后面跟上`?code=**&state=###`|

**请求示例**

```http
http://localhost:8080/oauth/authorize?client_id=test_client_1&response_type=code&scope=all&state=xyz&redirect_uri=http://localhost:8080/oauth/on_code
```

**返回示例**
```http
302 http://localhost:8080/oauth/on_code?code=XUNKO4OPPROWAPFKEWNZWA&state=xyz
```

> ⚠️ **注意**
> 这里会返回请求时设置的 `state`, 请在进行下一步之前验证它, 防止请求被劫持或者篡改

#### 获取 token

**请求方式**
```http
POST /oauth/token
```

**请求头 Authorization**

- basic auth
- Content-Type: `application/x-www-form-urlencoded`
- username: `client_id`
- password: `client_secret`


**Body 参数说明**  

|参数|类型|说明|
|-|-|-|
|grant_type|string|固定值 `authorization_code`|
|code|string| 获取授权 code 响应中得到的 code|
|redirect_uri|string| 获取授权 code 请求中填写的 redirect_uri|

**Response 返回示例**  
```json
{
    "access_token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIyMjIyMjIiLCJleHAiOjE1ODU3MTU1NTksInN1YiI6InRlc3QifQ.ZMgIDQMW7FGxbF1V8zWOmEkmB7aLH1suGYjhDdrT7aCYMEudWUoiCkWHSvBmJahGm0RDXa3IyDoGFxeMfzlDNQ",
    "expires_in": 7200,
    "refresh_token": "JG7_WGLWXUOW2KV2VLJKSG",
    "scope": "all",
    "token_type": "Bearer"
}
```

### Implicit
资源请求方使用，多用于没有后端的应用，用户授权登录之后, 会直接向前端发送令牌(`access_token`) 

**请求方式**
```http
GET /oauth/authorize
```
**参数说明**  

|参数|类型|说明|
|-|-|-|
|client_id|string|在 oauth2 server 注册的client_id|
|response_type|string|固定值 `token`|
|scope|string|权限范围,`str1, str2, str3`, 如果没有特殊说明,填 `all` |
|state|string|验证请求的标志字段|
|redirect_uri|string|发放 `code` 用的回调 uri,回调时会在 uri 后面跟上 `?code=**&state=###`|

**请求示例**
```http
http://localhost:8080/oauth/authorize?client_id=test_client_1&response_type=token&scope=all&state=xyz&redirect_uri=http://localhost:8080/oauth/on_code
```

**返回示例**

```
http status code 302
http://localhost:8080/oauth/on_code#access_token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0ZXN0X2NsaWVudF8xIiwiZXhwIjoxNTkxNDI3OTMwLCJzdWIiOiJhZG1pbiJ9.RBYns9UnNYDHINSBzvHWHRzuKCpzKmsxUnKt30lntmGvXmVDoByZtlB0RHAVB59PHBlJNO_YUBZzC2odwCa8Tg
&expires_in=3600&scope=all&state=xyz&token_type=Bearer

```

> ⚠️ **注意**
> 1. 这里会返回请求时设置的`state`, 请在进行下一步之前验证它, 防止请求被劫持或者篡改
> 2. 这种方式把令牌直接传给前端，是很不安全的。因此，只能用于一些安全要求不高的场景，并且令牌的有效期必须非常短，通常就是会话期间（session）有效，浏览器关掉，令牌就失效了

### Client Credentials
资源请求方使用，使用在 OAuth2 服务器注册的 client_id 和 client_secret 获取 access_token，发出 API 请求时，它应将access_token作为 Bearer 令牌传递到 Authorization 请求头中。

**请求方式**

`POST` `/oauth/token`

**请求头 Authorization**

- basic auth
- Content-Type: `application/x-www-form-urlencoded`
- username: `client_id`
- password: `client_secret`

**Body 参数说明**  

|参数|类型|说明|
|-|-|-|
|grant_type|string|固定值 `client_credentials`|
|scope|string|权限范围,`str1, str2, str3`, 如果没有特殊说明,填 `all`, `scope` 需要提前在 OAuth2 服务注册 |

**返回示例**  

```json
{
    "access_token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJlbWJlZGVkLWg1LWFwaSIsImV4cCI6MTU4OTk3NzQyNn0.Pu93fy0-gyiFqExBkCFAKTVJ1on_RpOSexzkHqczA6n6kB2_mOHbTMOyGK_Di7bHxZ3JqpZeyDoKQBtUe_T7jw",
    "expires_in": 7200,
    "token_type": "Bearer"
}
```
## Token 的使用
当您获取到 token 之后，请在您的请求头按照如下要求携带该 token，您就能使用您在平台下的账号应有的权力。
**请求头**
- Bearer Token
- Token: `access_token`

我们还为 token 提供了两个通用型接口，可以用以验证和刷新：
### 验证 token

**接口说明**

这个接口是资源端使用的, 
用来验证 `access_token` `scope` 和 `domain` .

**请求方式**
```
GET  oauth/authenticate
```
**请求头 Authorization**

- Bearer Token
- Token: `access_token`

**返回示例**  

```json
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
失败：
```
Status Code: 400

Response Body
   invalid access token
```

> ⚠️ **注意** 
> 如果token正确, 接口还会一起返回权限范围`scope` client的注册domain, 这里推荐验证下, 请求方的身份和权限.

### 刷新 token

刷新 access_token, 使用 refresh_token 换取 access_token

**请求方式**
```
POST /token
```

**请求头 Authorization**

- basic auth
- Content-Type: `application/x-www-form-urlencoded`
- username: `client_id`
- password: `client_secret`


**Body 参数说明**

|参数|类型|说明|
|-|-|-|
|grant_type|string|固定值 `refresh_token`|
|refresh_token|string|之前获取的 refresh_token|

**返回示例**

```json
{
    "access_token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIyMjIyMjIiLCJleHAiOjE1ODU4MTc2MTMsInN1YiI6IjEifQ.yNpQIbklhtsSr5KEkJMAR4I30c85OEriYwAOpL_ukRBJ1qsSziT05HFN-kxVN1-qM18TzVEf8beCvugyhpgpsg",
    "expires_in": 7200,
    "refresh_token": "2AH_LQHPUYK8XML4LKMQKG",
    "scope": "all",
    "token_type": "Bearer"
}
```