---
title: 消息规范
sidebar_position: 3
---

## 消息格式分类
- 支持三类上行数据（用户自定义数据， 属性， 遥测）
- 支持两类下行数据（属性（可写）， 命令）

### 用户自定义数据
#### 推送用户自定义数据到平台
- topic： 合法的非平台预定义的 topic 均作为原始数据topic, 用户可以自定义。
- payload： 上行原始数据可以是任意类型的数据， 比如 json, 二进制数据等用户自定义数据.


### 属性数据
属性API包括以下几种
- 设备推送属性数据到平台
- 设备订阅平台属性变化

#### 设备推送属性数据到平台

- topic: `v1/devices/me/attributes`
- payload:

```json
{
   "attribute1": "value1",
   "attribute2": "value2"
}
```

#### 订阅平台属性变化

设备订阅 topic: `v1/devices/me/attributes`

平台侧修改属性后设备侧会收到变更的属性 payload：
```json
{
   "attribute1": "value1",
   "attribute2": "value2"
}
```

### 遥测数据
- 设备推送遥测数据到平台
- topic: `v1/devices/me/telemetry`
- payload:
```json
{
   "telemetry1": "value1",
   "telemetry2": "value2"
}
```


### 命令数据

设备订阅topic: `v1/devices/me/commands`

平台发送命令后在设备侧会收到如下信息 payload:
```json
{
   "id": "ota",
   "paras": {
      "firmware_address": "http://xxx.yyy.com",
      "version": "latest",
      "secret": "****",
      "http_method": "GET"
   },
   "ts": 1646964832292
}
```
注：ts 为毫秒

设备收到命令消息之后可以将执行结果发送到

topic: `v1/devices/me/command/response`

payload:
```json
{
   "id": "ota",
   "ota": {
     "output": {
       "success": true,
       "ts": 12345
     }
   }
}
```

### 反控数据
设备订阅 v1/devices/me/raw

平台推送数据到设备的 topic(v1/devices/me/raw)

```
Tips:
命令跟反控的区别在于命令下发的是格式化的数据（json），而反控可以是任意的数据
```

### 注意

对于有子设备的设备比如采集网关，其上报的遥测、属性及其他类型的数据可使用 key 进行区分如：

```json
{
   "telemetry1_opcua": "value1",
   "telemetry2_modbus": "value2"
}
```

可以表示 telemetry1 来自 opcua, telemetry2 来自 modbus