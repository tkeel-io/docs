---
title: API 介绍
sidebar_position: 10
---


TKeel 物联网平台向用户开放所有资源操作相关的 API ,得益于插件化的框架， 用户可以通过插件来实现额外的 API 扩展 TKeel 物联网平台， 而不局限于 TKeel 核心 API 提供的功能。

## API访问方式
平台提供的插件 API 一般格式为 `https://<Host>:<port>/apis/<pluginID>/<pluginHTTPEndpoint>`。
其中：
- `<Host>:<port>` 代表平台提供服务的地址，由安装部分的配置决定
- `<pluginID>` 代表插件名称，例如负责用户管理的 `rudder`、负责设备管理的 `device` 等。
- `<pluginHTTPEndpoint>` 代表插件提供的具体路径，可以通过[API 列表](./api_list.md)查看。


:::note

以上是 API 的描述，TKeel 已经提供了如下插件(如： rudder keel core device等)以及插件的 HTTP Endpoint [API 列表](./api_list.md)

:::

请求的整体流程如图所示：

![api_usage](../../static/images/plugins/api_usage.png)



## 访问控制

- 鉴于平台安全体系，会对 API 的请求做访问控制，即对用户的 API 请求进行鉴权，鉴权的方式是通过对 HTTP 请求中的 Header 的 Authorization 字段的值进行验证。验证不通过则为非法请求，返回 UnAuthorized 错误信息。
所以在调用 API 之前，先通过 [OAuth Token 接口](https://docs.tkeel.io/api/rudder/method_OauthToken) 获取 API 访问 Token<access_token>。
<access_token> 将作为 http header，包含在每一个请求中发送，请求头 key 为 Authorization，value 为 Bearer <access_token>。

HTTP Authorization 请求头格式（不包含尖括号）:
```
Authorization: Bearer <access_token>
```

## 如何请求 API

### 1. 获取 API 访问 Token


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

### 2. 调用 API

以调用插件 `<security>` 的一个`HTTPEndpoint </v1/oauth/authenticate>` 为例： 
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


## API 列表

完整的 API 内容请参阅 [API 列表](./api_list.md)。