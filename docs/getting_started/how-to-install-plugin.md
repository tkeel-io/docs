---
title: 🚀 如何安装插件
sidebar_position: 40
---

# 如何使用插件功能
tKeel 开放平台有强大的拓展功能，支持安装任意您需要的插件。

本页指南将引导您通过 tKeel CLI 完成在 tKeel 上安装和注册一个指定 helm 源的插件。有关更多信息，请参见 [在 tKeel 上安装插件] 和在 [tKeel 上注册插件]。

## 前提条件

确保已经正确 [安装 tKeel 平台](/#install-and-initialize-your-tkeel)。

## 安装插件
我们在平台内对插件的声明周期有如下一个明确的定义：
```
      developer         +        paas manager         +     tantent manager
                        |                             |
   +------------+       |       +-----------+         |      +----------+
   |            |       |       |           |         |      |          |
   | developing |       |       | published |         |      | disabled |
   |            |       |       |           |         |      |          |
   +----+-------+       |       +---+-------+         |      +---+------+
        |               |   install |                 |          |
        |  ^            |           v   ^             |          | ^
        |  |            |               | uninstall   |          | |
        |  |            |       +-------+---+         |          | |
release |  |            |       |           |         |   enable | |
        |  | upgrade    |       | installed |         |          | | disable
        |  |            |       |           |         |          | |
        |  |            |       +---+-------+         |          | |
        |  |            |  register |                 |          | |
        v  |            |           v  ^              |          v |
           |            |              | unregister   |            |
   +-------+----+       |       +------+----+         |      +-----+----+
   |            |       |       |           |         |      |          |
   |  release   |       |       |registered |         |      | enabled  |
   |            |       |       |           |         |      |          |
   +------------+       +       +-----------+         +      +----------+

```
下面的演示内容为安装一款已经开发完成被发布的（published）插件到 tKeel 平台的简单过程。

### tKeel 平台安装插件
1. 登录 tKeel 平台管理侧
将 `KEEL_SERVICE`、`KEEL_PORT` 和 `ADMIN_PASSWORD` 以安装后的平台进行替换。
```bash
curl -XGET "http://${KEEL_SERVICE}:${KEEL_PORT}/apis/rudder/v1/oauth2/admin?password=${ADMIN_PASSWORD}"
```
执行后返回值应该如下：
```json
{
    "code": 200,
    "msg": "ok",
    "data": {
        "@type": "type.googleapis.com/api.oauth2.v1.IssueTokenResponse",
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0S2VlbCIsImV4cCI6IjIwMjEtMTItMjhUMDg6MTg6MDAuNDAxMTY3ODMxWiIsImlhdCI6IjIwMjEtMTItMjhUMDc6MTg6MDAuNDAxMTY3ODMxWiIsImlzcyI6InJ1ZGRlciIsImp0aSI6Ijc2Mjk0YzBlLTc2MjEtNDcwYy04M2I5LWM1M2YxOWE4NWQ4OCIsIm5iZiI6IjIwMjEtMTItMjhUMDc6MTg6MDAuNDAxMTY3ODMxWiIsInN1YiI6ImFkbWluIn0.AbJtk8dZxpj1jsxuCNbrLV1j6uPy-NHO7S6fkOQusQc",
        "token_type": "Bearer",
        "expires_in": 3600
    }
}
```

> 备注：
> 下文中所有管理平台的 token 均以返回值中 access_token 替换。
> ```bash
> ADMIN_TOKEN='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0S2VlbCIsImV4cCI6IjIwMjEtMTItMjhUMDg6MTg6MDAuNDAxMTY3ODMxWiIsImlhdCI6IjIwMjEtMTItMjhUMDc6MTg6MDAuNDAxMTY3ODMxWiIsImlzcyI6InJ1ZGRlciIsImp0aSI6Ijc2Mjk0YzBlLTc2MjEtNDcwYy04M2I5LWM1M2YxOWE4NWQ4OCIsIm5iZiI6IjIwMjEtMTItMjhUMDc6MTg6MDAuNDAxMTY3ODMxWiIsInN1YiI6ImFkbWluIn0.AbJtk8dZxpj1jsxuCNbrLV1j6uPy-NHO7S6fkOQusQc'
> ```

2. 添加插件仓库
将 `REPO_URL` 赋值为您的仓库地址，`REPO_NAME` 赋值为您的仓库名字（为您的仓库取个名字）。

```bash
curl -XPOST "http://${KEEL_SERVICE}:${KEEL_PORT}/apis/rudder/v1/repos/${REPO_NAME}" \
     -H "Authorization:${ADMIN_TOKEN}" \
     -H 'Content-Type: application/json' \
     -d "/"${REPO_URL}/""
```
> 备注：
> 
> 示例中变量默认值为：
>  `REPO_URL=https://tkeel-io.github.io/helm-charts`
>  `REPO_NAME=tkeel-default`
> 此处提供的仓库地址为 tKeel 官方提供的插件仓库地址。
> 如果您有自己想要添加的插件仓库，请将对应信息进行替换并执行命令。

执行后返回值应该如下：
```json
{
    "code": 200,
    "msg": "ok",
    "data": {
        "@type": "type.googleapis.com/google.protobuf.Empty",
        "value": {}
    }
}
```

3. 获取仓库指定的安装包
获取指定仓库中的指定安装包和版本。

将 `INSTALLER_NAME` 赋值为您将安装的安装包名字（chart 名），将 `INSTALLER_VERSION` 赋值为您将安装的安装包版本（chart 版本）。

```bash
curl -XGET "http://${KEEL_SERVICE}:${KEEL_PORT}/apis/rudder/v1/repos/${REPO_NAME}/installers/${INSTALLER_NAME}/${INSTALLER_VERSION}" \
     -H "Authorization:${ADMIN_TOKEN}" \
     -H 'Content-Type: application/json'
```

> 备注：
> 
> 示例中变量默认值为：
>  `INSTALLER_NAME=hello-tkeel`
>  `INSTALLER_VERSION=0.3.0`
> 此处提供的安装包名称为 tKeel 官方提供的演示插件。
> 如果您有自己想要安装的插件，请将对应信息进行替换并执行命令。

执行后返回值应该如下：
```json
{
    "code": 200,
    "msg": "ok",
    "data": {
        "@type": "type.googleapis.com/api.repo.v1.GetRepoInstallerResponse",
        "installer": {
            "name": "hello-tkeel",
            "version": "0.3.0",
            "repo": "tkeel-default",
            "configuration": "cmVwbGljYUNvdW50OiAxDQpwbHVnaW5TZWNyZXQ6IGNoYW5nZW1lDQpwbHVnaW5Qb3J0OiA4MDgwDQoNCmRhcHJDb25maWc6IGhlbGxvLXRrZWVsDQoNCmltYWdlUHVsbFNlY3JldHM6ICIiDQoNCmltYWdlOg0KICByZXBvc2l0b3J5OiB0a2VlbGlvL2hlbGxvLXRrZWVsDQogIHRhZzogMC4zLjANCiAgcHVsbFBvbGljeTogQWx3YXlzDQo="
        }
    }
}
```
其中 **configuration** 中包含的是 *charts* 中 `Values.yaml` 文件 **base64** 后的字符串。

4. 安装插件
安装指定的安装包并指定安装后的插件 ID。

将 `PLUGIN_ID` 赋值为您安装后的插件ID。


```bash
curl -XPOST "http://${KEEL_SERVICE}:${KEEL_PORT}/apis/rudder/v1/plugins/${PLUGIN_ID}" \
     -H 'Content-Type: application/json' \
     -H "Authorization:${ADMIN_TOKEN}" \
     -d '{"name":"hello-tkeel","version":"0.3.0","repo":"tkeel-default","configuration":"cmVwbGljYUNvdW50OiAxDQpwbHVnaW5TZWNyZXQ6IGNoYW5nZW1lDQpwbHVnaW5Qb3J0OiA4MDgwDQoNCmRhcHJDb25maWc6IGhlbGxvLXRrZWVsDQoNCmltYWdlUHVsbFNlY3JldHM6ICIiDQoNCmltYWdlOg0KICByZXBvc2l0b3J5OiB0a2VlbGlvL2hlbGxvLXRrZWVsDQogIHRhZzogMC4zLjANCiAgcHVsbFBvbGljeTogQWx3YXlzDQo=","type":1}'
```

> 备注：
>
> 示例中展示了一个完整的安装请求，其中各个参数的信息请参考[API 文档](../api/Rudder/method_InstallPlugin.md)
>
> 示例中变量默认值为：
>  `PLUGIN_ID=hello-tkeel`
> 此处提供的安装包为 tKeel 官方提供的演示插件。
> 如果您有自己想要安装的插件，请将对应信息进行替换并执行命令。

执行后返回值应该如下：
```json
{
    "code": 200,
    "msg": "ok",
    "data": {
        "@type": "type.googleapis.com/api.plugin.v1.InstallPluginResponse",
        "plugin": {
            "id": "hello-tkeel",
            "status": "UNREGISTER",
            "brief_installer_info": {
                "name": "hello-tkeel",
                "version": "0.3.0",
                "repo": "tkeel-default"
            }
        }
    }
}
```

在与 tKeel 平台部署相通的节点执行 _helm_ 命令可以看到已经成功安装了 「hello-tkeel」：
```bash
$ helm list
NAME            NAMESPACE       REVISION        UPDATED                                 STATUS          CHART                   APP VERSION
core-broker     keel-system     1               2021-12-30 06:23:53.731235571 +0000 UTC deployed        core-broker-0.3.0       0.3.0
dapr            keel-system     1               2021-12-30 12:16:24.710324 +0800 CST    deployed        dapr-1.5.1              1.5.1
iothub          keel-system     1               2022-01-05 09:03:09.38254949 +0000 UTC  deployed        iothub-0.3.0            1.16.0
tkeel-device    keel-system     1               2021-12-30 09:29:56.242803919 +0000 UTC deployed        tkeel-device-0.2.0      1.16.0
tkeel-platform  keel-system     1               2021-12-30 13:48:43.766725 +0800 CST    deployed        keel-0.3.0              0.3.0
hello-tkeel     keel-system     1               2021-12-30 15:41:43.463725 +0800 CST    deployed        hello-tkeel-0.3.0       0.3.0
```

5. 注册插件

> * **必须** 经平台安装的插件才能被注册进来。
> * **必须** 经平台注册后的插件才能被用户启用。

```bash
curl -XPOST "http://${KEEL_SERVICE}:${KEEL_PORT}/apis/rudder/v1/plugins/${PLUGIN_ID}/register" \
     -H 'Content-Type: application/json' \
     -H "Authorization:${ADMIN_TOKEN}" \
     -d '"changeme"'
```

执行后返回值应该如下：
```json
{
    "code": 200,
    "msg": "ok",
    "data": {
        "@type": "type.googleapis.com/google.protobuf.Empty",
        "value": {}
    }
}
```