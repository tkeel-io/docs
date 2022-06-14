---
title: token 验证
sidebar_position: 50
---

TKeel 提供 API 访问 Token<access_token> 的 [验证接口](https://docs.tkeel.io/api/rudder/method_OauthAuthenticate) ,通过该接口可以验证 access_token 的有效性，同时可以获取其有效信息。

### API 请求样例

- Request
```bash
curl --location --request GET 'http://<tkeel.io>:30707/apis/security/v1/oauth/authenticate' \
--header 'Authorization: Bearer <access_token>'
 
```
- Response
```json
{
    "code": "io.tkeel.SUCCESS",
    "msg": "",
    "data": {
        "@type": "type.googleapis.com/io.tkeel.security.api.oauth.v1.AuthenticateResponse",
        "expires_in": "7200",
        "user_id": "usr-af4135c0c6e1e43d2482c54cec92",
        "username": "admin",
        "external_id": "",
        "nick_name": "",
        "avatar": "",
        "tenant_id": "yLGoEQ0Y",
        "auth_type": "internal"
    }
}

```