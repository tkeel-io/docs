---
title: 🚀 如何连接您的设备
sidebar_position: 3
slug: /how-to-access-your-device
---
# 如何连接您的设备
该篇文档通过命令行终端的方式快速带领您将您的设备连接至 tKeel 平台。
## 前提条件

需要平台中安装如下三个插件模块 ：
1. iothub
2. device
3. core;

### 第一步：在 tkeel 平台申请用户 token

获取用户 **access_token** 后，请求开放接口时将 **access_token** 添加在请求头，格式：

Authorization：Bearer **access_token**

#### 1. 在管理平台创建一个租户&租户管理员

[创建租户&租户管理员 API]

**示例**

```bash
curl -X POST 'http://192.168.123.12:30777/v1/tenants' \
 -H 'Content-Type: application/json' \
 -d '{
    "title":"TenantDemo",
    "remark":"this is demo tenant",
    "admin":{"username":"demoadmin","password":"123456"}
}'
 
```

预期结果 

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

#### 2. 获取用户(管理员) Token

[获取用户 Token API]

**示例**

```bash
curl -X GET 'http://192.168.123.11:30707/apis/security/v1/oauth/token?grant_type=password&username=6-demoadmin&password=123456'
```

预期结果 

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

### 第二步： 在 tkeel 平台注册数字化设备
#### 1. 创建设备

[创建设备 API]

**示例**

```
```

预期结果

```
```

##### 2. 创建设备组（可选）

[创建设备组 API]

**示例**

```
```

预期结果

```
```



##### 3. 添加设备进设备组分类（可选）

[添加设备进设备组分类 API]

**示例**

```

```

预期结果

```

```


### 第三步： 发送数据到 tkeel 平台
#### MQTT 协议：

[Publish Topic]

```

```

**示例**

```
```
#### HTTP 连接：

[请求 API]

```

```

**示例**

```
```



##### COAP 连接：

[请求 API]

```

```

**示例**

```

```



### 第四步： 从 tkeel平台 获取设备数据
#### 查询：

[设备查询 API]

**示例**

```
```

预期结果

```
```



#### 订阅：

```

```
