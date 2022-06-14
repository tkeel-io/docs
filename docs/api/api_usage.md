---
title: API 调用方式
sidebar_position: 30
---

TKeel 物联网平台向用户开放所有资源操作相关的 API 。 
- 通过 [APi 列表](.) 查找需要调用的 API , 按照文档说明直接调用。
- 若调用的 API 需要鉴权，请在调用 API 之前，先通过 [OAuth Token 接口](https://docs.tkeel.io/api/rudder/method_OauthToken) 获取 API 访问 Token<access_token>。
<access_token> 将作为 http header，包含在每一个请求中发送，请求头 key 为 Authorization，value 为 Bearer <access_token>。

HTTP Authorization 请求头格式（不包含尖括号）:
```
Authorization: Bearer <access_token>
```

### API 请求样例

#### 获取 api 访问 Token
- Request
```bash
curl --location --request GET 'http://<tkeel.io>:30707/apis/security/v1/oauth/<tenant_id>/token?grant_type=password&username=<username>&password=<password>'
```
- Response
```json
{
  "code": "io.tkeel.SUCCESS",
  "msg": "",
  "data": {
    "@type": "type.googleapis.com/io.tkeel.security.api.oauth.v1.TokenResponse",
    "access_token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY1NTIwMTkzNCwic3ViIjoidXNyLWFmNDEzNWMwYzZlMWU0M2QyNDgyYzU0Y2VjOTIifQ.9Mc_AgVXpk_CW5MZuMSV2ux4D6qxlH4vU3DE6JhsCn22WTakvhLvqQqLa1HTaZXE5S-SBviPhWFSFk2gmyqDvw",
    "refresh_token": "NDY2ZMZMNMMTNJI2MI01YWVKLTK3NMYTZGM0YWZMOWNMMZQ1",
    "expires_in": "7200",
    "token_type": "Bearer",
    "redirect_url": ""
  }
}

```


