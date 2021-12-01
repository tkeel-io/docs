---
title: 🌐 Use tKeel Platform
sidebar_position: 3
slug: /use
---
# Use tKeel Platform
## Introduction
该篇文档通过不同角度快速带领您通过命令行终端使用 tKeel 平台。

## 快速演示设备接入
### Prerequisites

需要平台中安装如下三个插件模块 ：
1. iothub
2. device
3. core;

#### 第一步：在 tkeel 平台申请用户 token

获取用户 **access_token** 后，请求开放接口时将 **access_token** 添加在请求头，格式：

Authorization：Bearer **access_token**

##### 1. 在管理平台创建一个租户&租户管理员

[创建租户&租户管理员 API]
```
http://host:port/v1/tenants
```

 Params

| Name           | Type   | Required | Where | Description       |
| -------------- | ------ | -------- | ----- | ----------------- |
| title          | stirng | true     | body  | 租户 Title (租户名) |
| remark         | string | false    | body  | 租户备注信息      |
| admin.username | string | true     | body  | 租户管理员-用户名 |
| admin.password | string | true     | body  | 租户管理员-密码   |

**example**

```bash
curl -X POST 'http://192.168.123.12:30777/v1/tenants' \
 -H 'Content-Type: application/json' \
 -d '{
    "title":"TenantDemo",
    "remark":"this is demo tenant",
    "admin":{"username":"demoadmin","password":"123456"}
}'
 
```

expected result 

```
{
    "code": 0,
    "msg": "ok",
    "data": {
        "tenant_id": 6,
        "title": "TenantDemo",
        "remark": "this is demo tenant",
        "admin": {
            "tenant_id": 6,
            "username": "demoadmin",
            "password": "",
            "nick_name": "",
            "avatar": "",
            "email": ""
        }
    }
}
```

##### 2. 获取用户(管理员) Token

[获取用户 Token API]
```
http://host:port/apis/security/v1/oauth/token
```

params

| Name       | Type   | Required | Where | Description                                    |
| ---------- | ------ | -------- | ----- | ---------------------------------------------- |
| grant_type | string | true     | query | 授权类型（password）                             |
| username   | string | true     | query | 用户名字,注意这儿格式必需为 `tenantID-username`  |
| password   | string | true     | query | 用户密码                                       |

**Example**

```bash
curl -X GET 'http://192.168.123.11:30707/apis/security/v1/oauth/token?grant_type=password&username=6-demoadmin&password=123456'
```

expected result 

```
{
    "code": 0,
    "msg": "ok",
    "data": {
        "access_token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIwMDAwMDAiLCJleHAiOjE2NDE4NzY0MTksInN1YiI6InVzci02LWJmMTdkZTU4ZTgwNGYyODkxY2ZjZDFkMjM1M2RlYzgyIn0.B4WbYKr4kbAyEIKpXDPSYdicL-irl1bzJwWXPDltytrCuIGwlgWiByaglwWnJi7lwbYznhLku4yYQiwq4dHQRw",
        "expires_in": 3600000,
        "refresh_token": "NJK3NWQ1MJETMWQYYI01NZI2LTK0YZITNMM2MJLLZTGWZTM4",
        "token_type": "Bearer"
    }
}
```

#### 第二步： 在 tkeel 平台注册数字化设备
##### 1. 创建设备

[创建设备 API]
```
http://host:port/v1/devices
```

params

| Name | Type | Required | Where | Description |
| ---- | ---- | -------- | ----- | ----------- |
|      |      |          |       |             |
|      |      |          |       |             |
|      |      |          |       |             |

**Example**

```
```

expected result

```
```

##### 2. 创建设备组（可选）

[创建设备组 API]

```
http://host:port/v1/groups
```

Params

| Name | Type | Required | Where | Description |
| ---- | ---- | -------- | ----- | ----------- |
|      |      |          |       |             |
|      |      |          |       |             |
|      |      |          |       |             |

**Example**

```
```

Expected result

```
```



###### 3. 添加设备进设备组分类（可选）

[添加设备进设备组分类 API]
```
httpL//host:port/v1/{id}/items
```

Params

| Name | Type | Required | Where | Description |
| ---- | ---- | -------- | ----- | ----------- |
|      |      |          |       |             |
|      |      |          |       |             |
|      |      |          |       |             |

**Example**

```

```

Expected result

```

```



#### 第三步： 发送数据到 tkeel 平台
##### MQTT 协议：

Publish Topic

```

```

**Example**

```
```
##### HTTP 连接：

[请求 API]

```

```

**Example**

```
```



##### COAP 连接：

[请求 API]

```

```

**Example**

```

```



#### 第四步： 从 tkeel平台 获取设备数据
##### 查询：

[设备查询 API]

```

```

Params

```
```

**Example**

```
```

Expected result

```
```



##### 订阅：

```

```
