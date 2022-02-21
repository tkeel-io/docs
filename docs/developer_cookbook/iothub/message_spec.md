---
title: 消息规范
sidebar_position: 3
---

## 消息格式分类
- 支持三类上行数据（用户自定义数据， 属性， 遥测）
- 支持两类下行数据（属性（可写）， 命令）

### 用户自定义数据 API
#### 推送用户自定义数据到平台
- topic： 合法的非平台预定义的 topic 均作为原始数据topic, 用户可以自定义。
- payload： 上行原始数据可以是任意类型的数据， 比如 json, 二进制数据等用户自定义数据.


### 属性数据 API
属性API包括以下几种
- 设备推送属性数据到平台
- 设备获取平台属性
- 设备订阅平台属性变化

#### 设备推送属性数据到平台
1. 一般的设备
- topic: `v1/devices/me/attributes`
- payload:
```json
{
   "attribute1": "value1",
   "attribute2": "value2"
}
```
 or（后续扩展支持）
```json
{
   "ts": 1641349927430079500,
   "values": {
      "attribute1": "value1",
      "attribute2": "value2"
   }
}
```
2. 有下游设备的网关设备
- topic: `v1/gateway/attributes`
- payload:

```json
{
    "deviceA": { //子设备名
        "attribute1": "value1",
        "attribute2": "value2"
    },
    "deviceB": { // 子设备名
        "attribute1": "value1",
        "attribute2": "value2"
    }
}
```

#### 设备获取平台属性
1. 一般的设备

**steps:**

a. 设备订阅 topic: ` v1/devices/me/attributes/response/+`

b. 设备发布 topic: `v1/devices/me/attributes/request/$request_id`, 其中$request_id为请求ID。payload:
```json
{
    "keys": "attribute1,attribute2"
}
```
c. 平台发布 topic: "v1/devices/me/attributes/response/$request_id", payload:
```json
{
   "attribute1": "value1",
   "attribute2": "value2"
}
```
d. 设备收到平台发送的C的数据

2. 有下游设备的网关设备

**steps:**

a. 设备订阅 topic: `v1/gateway/attributes/response`

b. 设备发布 topic: `v1/gateway/attributes/request`,payload:
```json
{
    "id": "$request_id",
    "device": "device A",
    "key": "attribute1"
}
```
c. 平台发布 topic: "v1/gateway/attributes/response"。 payload:
```json
{
    "id": "$request_id",
    "device": "device A",
    "value": "value1"
}
```
d. 设备收到平台发送的C的数据

#### 订阅平台属性变化
1. 一般的设备
设备订阅 topic： `v1/devices/me/attributes`
平台推送的 payload：
```json
{
   "attribute1": "value1",
   "attribute2": "value2"
}
```

2. 有下游设备的网关设备
1. 一般的设备
设备订阅 topic： `v1/gateway/attributes`
平台推送的 payload：
```json
{
   "device": "device A",
   "data": {
       "attribute1": "value1",
       "attribute2": "value2"
   }
}
```

### 遥测数据 API
- 设备推送遥测数据到平台
1. 一般的设备
- topic: `v1/devices/me/telemetry`
- payload:
```json
{
   "telemetry1": "value1"
   "telemetry2": "value2"
}
```

 or（后续扩展支持）
```json
{
   "ts": 1641349927430079500,
   "values": {
        "telemetry1": "value1"
        "telemetry2": "value2"
   }
}
```

2. 有下游设备的网关设备
- topic: `v1/gateway/telemetry`
- payload:
```json
{
  "Device A": [
    {
      "ts": 1483228800000,
      "values": {
        "temperature": 42,
        "humidity": 80
      }
    },
    {
      "ts": 1483228801000,
      "values": {
        "temperature": 43,
        "humidity": 82
      }
    }
  ],
  "Device B": [
    {
      "ts": 1483228800000,
      "values": {
        "temperature": 42,
        "humidity": 80
      }
    }
  ]
}
```

### 命令数据 API

**steps:**

a. 设备订阅topic: `1/devices/me/command/request/+`

b. 平台发布topic: `v1/devices/me/command/request/$request_id`, payload:
```json
{
   "id": "ota",
   "paras": {
      "firmware_address": "http://xxx.yyy.com",
      "version": "latest",
      "secret": "****",
      "http_method": "GET"
   },
   "time": 1641349927430079500
}
```
c. 设备收到命令消息之后回复 topic: `v1/devices/me/command/response/$request_id`, payload:
```json
{
   "id": "ota",
   "data": {
       "success": true
   }
}
```
