---
title: IoTHub 快速入门
sidebar_position: 1
---
[TOC]

> 此文档仅供用户快速上手，认识 IoTHub。

## 介绍
`IoTHub` 是`tkeel` 平台的一个插件，其主要功能是支持设备接入，数据快速上云；支持上行数据（原始数据， 属性， 遥测）和下行数据（属性， 遥测， 命令）
目前支持 MQTT, CoAP 协议。
让我们使用 MQTT 快速接入 `IoTHub`， 并实现数据上云。


## 基础概念
### 原始数据
主动推送到平台的任意类型的数据。

### 属性数据
与一类设备相关联的静态键值对。例如版本、所属部门、厂商等，（kv）

### 遥测数据
带有时间序列的数据测点。例如电压、电流、功率、温度、湿度等，可用于存储、查询、可视化视图。(数据类型， 单位， 最大值，最小值)

### 命令
可调用的反控命令、决定设备的行为


## 前置条件

> ⚠️  安装 tKeel 平台， 安装 tkeel-device 和 iothub 两个插件并注册， 详见 [管理侧-快速入门](https://github.com/OdysseusC/quickstarts/blob/feat/hello-tkeel/tkeel-manager/README_zh.md) 。
> 
>    创建对应的租户和用户， 启用插件， 详见 [用户侧-快速入门](https://github.com/OdysseusC/quickstarts/blob/feat/hello-tkeel/tkeel-user/README_zh.md)


## Steps:

**上行：**
1. 创建设备, 获取 _设备 token_，_设备 ID_。
2. 使用 MQTT 协议连接 IoTHub,  _1_ 获取到的 设备 token 作为 password, 设备 ID 作为 username.
3. 向 tkeel 平台推送 原始数据，属性数据, 遥测数据
4. 平台查看推送的数据
topic 定义：
1. 原始数据，topic 为：`v1/devices/me/raw`
2. 属性数据，topic 为：`v1/devices/me/attributes`
3. 遥测数据，topic 为：`v1/devices/me/telemetry`

**下行：**
1. 创建设备, 获取 _设备 token_，_设备 ID_。
2. 使用 MQTT 协议连接 IoTHub,  1 获取到的 设备token 作为 password, 设备 ID 作为 username.
3. 订阅平台的 **_属性_**， _**遥测**_ 命令。
4. 设备管理发起修改属性， 遥测， 命令的请求， 设备端查看订阅之后收到的下行消息。
topic 定义：
1. 订阅属性数据，topic 为：`v1/devices/me/attributes`
2. 订阅遥测数据，topic 为：`v1/devices/me/telemetry`
3. 订阅命令数据，topic 为：`v1/devices/me/commands` (TODO)



### 第 1 步： 创建设备(这里模拟设备管理的 2个步骤)

1. 向 security 创建 设备 token
```bash
curl --location --request POST 'http://192.168.123.9:30707/apis/security/v1/entity/token' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIwMDAwMDAiLCJleHAiOjE2NDEzNjU5MzQsInN1YiI6InVzci0yLWFhMDAzYTYxNGVkYzQ4Yzc3MDExN2M3NDUyMjBhMmUxIn0.oA5bjSdth7aTuER9MgA0zUWLSYY_2hJx5jIRedCGe4DPC6ZTSCggRpofxN3McJNFfXAJivpob34HNyp7DCdZPQ' \
--header 'Content-Type: application/json' \
--data-raw '{
    "entity_id":"device_123",
    "entity_type":"device",
    "owner":"admin"
}'
```
response:
```json
{
    "code": 200,
    "msg": "ok",
    "data": {
        "token": "MWU0NTMXYZUTY2MZZI0ZNDG4LTK3MMITNTU2MTA5MJU3MZVK"
    }
}
```
2. 通过 API 创建一个设备：
```bash 
curl --location --request POST '192.168.123.12:30707/apis/core/v1/entities?id=device_123' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIwMDAwMDAiLCJleHAiOjE2NDEzNjU5MzQsInN1YiI6InVzci0yLWFhMDAzYTYxNGVkYzQ4Yzc3MDExN2M3NDUyMjBhMmUxIn0.oA5bjSdth7aTuER9MgA0zUWLSYY_2hJx5jIRedCGe4DPC6ZTSCggRpofxN3McJNFfXAJivpob34HNyp7DCdZPQ' \
--header 'Type: DEVICE' \
--header 'Source: tkeel-device' \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "device_123",
  "desc": "description info",
  "group": "default",
  "token": "MWU0NTMXYZUTY2MZZI0ZNDG4LTK3MMITNTU2MTA5MJU3MZVK",
  "ext": {
      "address": "http://xxx.yyy.com",
      "alias": "dev"
  }
}'
```
response:
```json
{
    "id": "device_123",
    "source": "tkeel-device",
    "type": "DEVICE",
    "configs": {},
    "properties": {
        "desc": "description info",
        "ext": {
            "address": "http://xxx.yyy.com",
            "alias": "dev"
        },
        "group": "default",
        "name": "device_123",
        "token": "MWU0NTMXYZUTY2MZZI0ZNDG4LTK3MMITNTU2MTA5MJU3MZVK",
    }
}
```

记录并保存 _**设备 ID**_ `device_123` 和 **_设备 token_** 
```
MWU0NTMXYZUTY2MZZI0ZNDG4LTK3MMITNTU2MTA5MJU3MZVK
```

### 第 2 步： 向平台推送原始数据、 属性数据和遥测数据；类似， 只需要改变 topic 即可
1. 使用 MQTT 协议推送数据到对应的设备. 这里使用 mosquitto_pub 模拟。

```bash
mosquitto_pub -h 192.168.123.9 -d -t v1/devices/me/raw  -m "{\"message\": \"hello, tkeel\",\"value\":0}" -p 30563 -u "device_123" -P "MWU0NTMXYZUTY2MZZI0ZNDG4LTK3MMITNTU2MTA5MJU3MZVK" -i "client_id"
```
2. 使用 CoAP 协议推送数据到对应的设备， 这里使用 coap-client 模拟。
   订阅消息
```bash
coap-client -m get -s 1000  "coap://192.168.123.9:30588/mqtt/device_123/v1/devices/me/raw?c=demo_sub&p=MWU0NTMXYZUTY2MZZI0ZNDG4LTK3MMITNTU2MTA5MJU3MZVK&u=device_123"
```
- 主题名称为：`device_123/v1/devices/me/raw`
> 注意这里是 `设备ID/v1/devices/me/raw`
- Client ID ：`<客户端ID>`, 字符串即可
- 用户名：`<设备ID>`， 字符串
- 密码：`<设备token>`, 字符串
- 订阅的持续时间：1000 秒

发布消息
```bash
coap-client -m put -e 1234   "coap://192.168.123.9:30588/mqtt/device_123/v1/devices/me/raw?c=demo_pub&p=MWU0NTMXYZUTY2MZZI0ZNDG4LTK3MMITNTU2MTA5MJU3MZVK&u=device_123"
```
- 主题名称为：`device_123/v1/devices/me/raw`
> 注意这里是 `设备ID/v1/devices/me/raw`
- Client ID ：`<客户端ID>`, 字符串即可
- 用户名：`<设备ID>`， 字符串
- 密码：`<设备token>`, 字符串
- Payload 为：`1234`

查看订阅的消息收到了
```
1234
```



### 第 3 步： 查询设备原始数据，即前面推送的数据

查看我们创建的实体，核对前面操作的变化：

```bash
curl --location --request GET '192.168.123.12:30707/apis/core/v1/entities/device_123' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIwMDAwMDAiLCJleHAiOjE2NDEzNjU5MzQsInN1YiI6InVzci0yLWFhMDAzYTYxNGVkYzQ4Yzc3MDExN2M3NDUyMjBhMmUxIn0.oA5bjSdth7aTuER9MgA0zUWLSYY_2hJx5jIRedCGe4DPC6ZTSCggRpofxN3McJNFfXAJivpob34HNyp7DCdZPQ' \
--header 'Type: DEVICE' \
--header 'Source: tkeel-device' \
--header 'Owner: admin'
```

response:
```json
{
    "id": "device_123",
    "source": "tkeel-device",
    "type": "DEVICE",
    "configs": {},
    "properties": {
        "connectinfo": {
            "_clientid": "",
            "_online": false,
            "_owner": "",
            "_peerhost": "",
            "_protocol": "",
            "_socketport": "",
            "_username": ""
        },
        "desc": "description info",
        "ext": {
            "address": "http://xxx.yyy.com",
            "alias": "dev"
        },
        "group": "default",
        "name": "device_123",
        "rawData": {
            "data": {
                "message": "hello, tkeel",
                "value": 0
            },
            "timestamp": 1641349927430079500,
            "topic": "device_123/v1/devices/me/raw"
        }
    }
}
```
- connectinfo 表示连接信息
- rawData 表示原始数据
- attributes 表示属性数据
- telemetry 表示遥测数据
- commands 表示命令数据

### 第 4 步： 客户端订阅属性数据（遥测数据，命令数据同理）
这里使用 mosquitto_sub 模拟
```bash
mosquitto_sub -h 192.168.123.9 -d -t v1/devices/me/attributes  -p 30563 -u "device_123" -P "MWU0NTMXYZUTY2MZZI0ZNDG4LTK3MMITNTU2MTA5MJU3MZVK" -i "client_sub"
```

### 第 5 步： 推送 属性数据（遥测数据，命令数据同理）

```bash
mosquitto_pub -h 192.168.123.9 -d -t v1/devices/me/attributes  -m "{\"attribute1\": \"length\",\"attribute2\":40}" -p 30563 -u "device_123" -P "MWU0NTMXYZUTY2MZZI0ZNDG4LTK3MMITNTU2MTA5MJU3MZVK" -i "client_id"
```

查看 订阅的 属性数据
```json
{"attribute1": "length","attribute2":40}
```
![Architecture](/images/iothub/attributes_sub.png)


### 第 6 步： 查看推送 属性数据（遥测数据，命令数据同理）
```bash
curl --location --request GET '192.168.123.12:30707/apis/core/v1/entities/device_123' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIwMDAwMDAiLCJleHAiOjE2NDEzNjU5MzQsInN1YiI6InVzci0yLWFhMDAzYTYxNGVkYzQ4Yzc3MDExN2M3NDUyMjBhMmUxIn0.oA5bjSdth7aTuER9MgA0zUWLSYY_2hJx5jIRedCGe4DPC6ZTSCggRpofxN3McJNFfXAJivpob34HNyp7DCdZPQ' \
--header 'Type: DEVICE' \
--header 'Source: tkeel-device' \
--header 'Owner: admin'
```
response:
```json
{
    "id": "device_123",
    "source": "tkeel-device",
    "type": "DEVICE",
    "configs": {},
    "properties": {
        "attributes": {
            "data": {
                "attribute1": "length",
                "attribute2": 40
            },
            "timestamp": 1641352125602253300,
            "topic": "device_123/v1/devices/me/attributes"
        },
        "connectinfo": {
            "_clientid": "",
            "_online": false,
            "_owner": "",
            "_peerhost": "",
            "_protocol": "",
            "_socketport": "",
            "_username": ""
        },
        "desc": "description info",
        "ext": {
            "address": "http://xxx.yyy.com",
            "alias": "dev"
        },
        "group": "default",
        "name": "device_123",
        "rawData": {
            "data": 1234,
            "timestamp": 1641351393170103600,
            "topic": "device_123/v1/devices/me/raw"
        }
    }
}
```
可以看到 properties 下面多了一个属性 attributes。
