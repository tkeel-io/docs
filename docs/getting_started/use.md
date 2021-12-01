---
title: 🌐 Use tKeel Platform
sidebar_position: 3
slug: /use
---
# Use tKeel Platform
## Introduction
该篇文档告诉您如何使用tkeel平台连接您的设备及安装所需插件



## 如何在tkeel平台安装插件



连接您的设备需要平台中安装如下2个插件模块：

### Step 1 : 安装用于连接设备的插件：iothub

```bash
tkeel plugin install https://tkeel-io.github.io/helm-charts/tkeel-iothub@v0.2.0 tkeel-iothub
```

###  Step 2:  安装用于管理设备的插件: device

```bash
tkeel plugin install https://tkeel-io.github.io/helm-charts/tkeel-device@v0.2.0 tkeel-device
```



## 如何在tkeel平台连接您的设备



### Step 1：在 tkeel 平台申请用户 token 



#### 1. 在管理平台创建一个租户&租户管理员

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

**expected result ** 

```json
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



#### 2. 利用租户&租户管理员分配用户(管理员) Token

**example**

```bash
curl -X GET 'http://192.168.123.11:30707/apis/security/v1/oauth/token?grant_type=password&username=6-demoadmin&password=123456'
```

**expected result** 

```json
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



### Step 2： 在 tkeel 平台注册数字化设备

step 1获取用户 **access_token** 后，请求开放接口时将 **access_token** 添加在请求头，格式：

Authorization：Bearer **access_token**

#### 1. 创建设备

**example**

```bash
curl --location --request POST '127.0.0.1:31234/v1/devices' \
--header 'Authorization: Bearer <分配的用户result “access_token”字段> '\
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"dev_name",
    "desc":"dev_desc",
    "group":"default",
    "ext":{
        "version":"1.1",
        "other":"other"
    }
}'
```

**expected result**

```json
{"dev":{"name":"dev_name","desc":"dev_desc","group":"default","ext":{"other":"other","version":"1.1"}},"sysField":{"_id":"f2dbf4a9-bc0b-4dc4-9a3c-aac568e81cd3","_createdAt":1638347417928116200,"_updatedAt":1638347417928116200,"_enable":true,"_token":"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlfaWQiOiJmMmRiZjRhOS1iYzBiLTRkYzQtOWEzYy1hYWM1NjhlODFjZDMiLCJlbnRpdHlfdHlwZSI6ImRldmljZSIsImV4cCI6MTY2OTg4MzQxNywib3duZXIiOiJ1c3ItNC05YTRkZjljZTYwNGU4MDQ0ZmZmMGQzNjE1Mzk0NzQ1ZiJ9.L9o4ixGnqQqFAuEkqkjfxmAUUovammgQm8iKPVQhjBavpv9SF3xuWohvNNij5TFXeO_ejHOGm8vfLebKgcyX3g"}}
```



#### 2. 创建设备组（可选）

**example**

```bash
curl --location --request POST '127.0.0.1:31234/v1/groups' \
--header 'Authorization: Bearer <分配的用户result “access_token”字段>\
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"group_name",
    "desc":"group desc",
    "parent":"root",
    "ext":{
        "classify":"abc",
        "other":"ohter"
    }
}'
```

**expected result**

```json
{"result":"ok","entityInfo":{"group":{"name":"group_name","desc":"group desc","parent":"root","ext":{"classify":"abc","other":"ohter"}},"subIds":{},"sysField":{"_id":"c175a35e-4171-4bf0-b53b-8d05caf2e394","_createdAt":1638348873147219200,"_updatedAt":1638348873147219500}}}
```



#### 3. 添加设备进设备组分类（可选）

**example**

```bash
curl --location --request POST '127.0.0.1:31234/v1/groups/<创建设备组result “_id” 字段>/items' \
--header 'Authorization: Bearer <分配的用户result “access_token”字段> '\
--header 'Content-Type: application/json' \
--data-raw '{
    "ids":["<创建设备result “_id”字段 >"]
}'
```

**expected result**

```json
{"result":"Ok"}
```



#### 4. 查看设备定义详情

**example**

```bash
curl --location --request GET '127.0.0.1:31234/v1/devices/<创建设备result “_id”字段>' \
--header 'Authorization: Bearer <分配的用户result “access_token”字段>'\
```

**expected result**

```json
{"dev":{"name":"dev_name","desc":"dev_desc","group":"c175a35e-4171-4bf0-b53b-8d05caf2e394","ext":{"other":"other","version":"1.1"}},"sysField":{"_id":"f2dbf4a9-bc0b-4dc4-9a3c-aac568e81cd3","_createdAt":1638347417928116200,"_updatedAt":1638347417928116200,"_enable":true,"_token":"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlfaWQiOiJmMmRiZjRhOS1iYzBiLTRkYzQtOWEzYy1hYWM1NjhlODFjZDMiLCJlbnRpdHlfdHlwZSI6ImRldmljZSIsImV4cCI6MTY2OTg4MzQxNywib3duZXIiOiJ1c3ItNC05YTRkZjljZTYwNGU4MDQ0ZmZmMGQzNjE1Mzk0NzQ1ZiJ9.L9o4ixGnqQqFAuEkqkjfxmAUUovammgQm8iKPVQhjBavpv9SF3xuWohvNNij5TFXeO_ejHOGm8vfLebKgcyX3g"}}
```



### Step 3： 发送数据到 tkeel 平台



#### MQTT 协议：

**example**

```
```


#### HTTP 连接：

**example**

```
```



#### COAP 连接：

**example**

```

```



### Step 4 ： 从 tkeel平台 获取设备数据
#### 查询：

**example**

```
```

**expected result**

```
```



#### 订阅：

```
to do
```