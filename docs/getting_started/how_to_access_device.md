---
title: 🌐 如何使用tkeel平台连接你的设备
sidebar_position: 50
slug: /use
---

# 如何连接您的设备 


### 完成设备连接需要完成如下几个部分：
1. 在 tkeel 平台安装连接设备依赖插件：1、iothub, 2、device
2. 利用 device 插件在 tkeel 平台注册您的数字化设备
3. 利用 iothub 插件发送数据至tkeel平台

## 在tkeel平台安装插件



连接您的设备需要平台中安装如下2个插件模块：



### Step 1 : 安装用于连接设备的插件：iothub

```bash
tkeel plugin install https://tkeel-io.github.io/helm-charts/iothub@v0.2.0 iothub -n keel-system
```



###  Step 2 : 安装用于管理设备的插件: device

```bash
tkeel plugin install https://tkeel-io.github.io/helm-charts/tkeel-device@v0.2.0 tkeel-device -n keel-system
```



## 注册插件

### Step 1 :  在平台上 注册 刚刚安装了的插件应用 iothub
```bash
tkeel plugin register -k iothub
```

### Step 2 :  在平台上 注册 刚刚安装了的插件应用 tkeel-device
```bash
tkeel plugin register -k tkeel-device
```


## 在tkeel平台注册您的数字化设备



### Step 1： 在 tkeel 平台申请用户 token 

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
    "tenant_id": 1,
    "title": "TenantDemo",
    "remark": "this is demo tenant",
    "admin": {
      "tenant_id": 0,
      "username": "demoadmin",
      "password": "",
      "nick_name": "",
      "avatar": "",
      "email": ""
    }
  }
}
```

usr-1-66abedb1c7fd28569288076a84d46a0b

#### 2. 利用租户&租户管理员分配用户(管理员) Token

**example**

```bash
curl -X GET 'http://192.168.123.11:30707/apis/security/v1/oauth/token?grant_type=password&username=1-demoadmin&password=123456'
```

**expected result** 

```json
{"code":0,"msg":"ok","data":{"access_token":"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIwMDAwMDAiLCJleHAiOjE2NDIwMzI4NzgsInN1YiI6InVzci0xLTY2YWJlZGIxYzdmZDI4NTY5Mjg4MDc2YTg0ZDQ2YTBiIn0.vzE_wnEQTIl4lMG1H26-dt9m4vD-EP9NWBED5qKGVhJIDAAc2bYZO3W9IvdQ_EGn-AzjzhmnVr_f-spiqdIVVQ","expires_in":3600000,"refresh_token":"OGU0MWQWZTGTOTZJMC01YWQ1LTLHMDITZTI5OWMYMTA4MMVL","token_type":"Bearer"}}
```



### Step 2： 在 tkeel 平台注册数字化设备

step 1获取用户 **access_token** 后，请求开放接口时将 **access_token** 添加在请求头，格式：

Authorization：Bearer **access_token**

#### 1. 创建设备

**example**

```bash
curl --location --request POST 'http://192.168.123.11:30707/apis/tkeel-device/v1/devices' \
--header 'Authorization: Bearer <分配的用户result “access_token”字段>' \
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
{"dev":{"name":"dev_name","desc":"dev_desc","group":"default","ext":{"other":"other","version":"1.1"}},"sysField":{"_id":"cc283991-3c16-458e-ab8f-efc512a54492","_createdAt":1638433371495623700,"_updatedAt":1638433371495624000,"_enable":true,"_token":"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlfaWQiOiJjYzI4Mzk5MS0zYzE2LTQ1OGUtYWI4Zi1lZmM1MTJhNTQ0OTIiLCJlbnRpdHlfdHlwZSI6ImRldmljZSIsImV4cCI6MTY2OTk2OTM3MSwib3duZXIiOiJ1c3ItMS02NmFiZWRiMWM3ZmQyODU2OTI4ODA3NmE4NGQ0NmEwYiJ9.5Im0c2-30sFImxgPwnrJk6z0Aw7qT5XLgqsjmvHHuYLX5Cd00OkqTFOclD22UFZXMXTiMEr5KWjXVwfNvrsjlg"}}
```



#### 2. 创建设备组（可选）

**example**

```bash
curl --location --request POST 'http://192.168.123.11:30707/apis/tkeel-device/v1/groups' \
--header 'Authorization: Bearer <分配的用户result “access_token”字段>' \
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
{"result":"ok","entityInfo":{"group":{"name":"group_name","desc":"group desc","parent":"root","ext":{"classify":"abc","other":"ohter"}},"subIds":{},"sysField":{"_id":"8018eed7-66f4-4fd0-a766-d48ed1104479","_createdAt":1638433782969041700,"_updatedAt":1638433782969041700}}}
```



#### 3. 添加设备进设备组分类（可选）

**example**

```bash
curl --location --request POST 'http://192.168.123.11:30707/apis/tkeel-device/v1/groups/<创建设备组result “_id” 字段>/items' \
--header 'Authorization: Bearer <分配的用户result “access_token”字段> ' \
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
curl --location --request GET 'http://192.168.123.11:30707/apis/tkeel-device/v1/devices/<创建设备result “_id”字段>' \
--header 'Authorization: Bearer <分配的用户result “access_token”字段>'
```

**expected result**

```json
{"dev":{"name":"dev_name","desc":"dev_desc","group":"d8f17a05-9ec6-4a25-88d7-b06083a8862d","ext":{"other":"other","version":"1.1"}},"sysField":{"_id":"234199cf-823e-4f92-a23a-626b561300cb","_createdAt":1638446762313180400,"_updatedAt":1638446762313180700,"_enable":true,"_token":"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlfaWQiOiIyMzQxOTljZi04MjNlLTRmOTItYTIzYS02MjZiNTYxMzAwY2IiLCJlbnRpdHlfdHlwZSI6ImRldmljZSIsImV4cCI6MTY2OTk4Mjc2Miwib3duZXIiOiJ1c3ItMS02NmFiZWRiMWM3ZmQyODU2OTI4ODA3NmE4NGQ0NmEwYiJ9.5vm5-FHTL33nhxcc3rF0ThOvnK0bl6yT0-Zp4G9MkMOgjGRkl9uFXHy5p4D5cHDZKOwMtPta8K_FIkjcnxYKUw","_owner":"usr-1-66abedb1c7fd28569288076a84d46a0b","_source":"device"}}
```



## 发送数据到 tkeel 平台



### Step 1 ： 选择连接协议和方式发送数据

#### MQTT 连接：

**example**

```
mosquitto_pub -h 192.168.123.9 -t system/test/topic -m "{\"message\": \"hello, tkeel\",\"value\":0}" -p 30805 -u "<设备owner>" -P "<设备token>" -i "<设备ID>"
```


#### HTTP 连接：

**example**

```
todo
```



#### COAP 连接：

**example**

```
coap-client -m get -s 1000  "coap://192.168.123.9:30588/mqtt/topic1?c=<设备ID>&p=<设备token>&u=<设备owner>"
```



### Step 2 ： 从 tkeel平台 获取设备数据

#### 查询：

**example**

```
curl --location --request GET 'http://192.168.123.9:30707/apis/core/v1/plugins/device/entities/<设备ID>?owner=<设备owner>@source=device' \
--header 'Authorization: Bearer <用户token>'
```

**expected result**

```
{
    "id": "4e901bc2-927b-4d4f-8a0e-25fa32a66ada",
    "owner": "usr-4-9a4df9ce604e8044fff0d3615394745f",
    "configs": {},
    "properties": {
        "_data_": "MTIzNA==",
        "message": "hello, tkeel",
        "value": 0
    }
}
```



#### 订阅：

```
to do
```
