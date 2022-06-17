---
title: "订阅 Device 变更（ws）"
description: 'Device subscription(WebSocket)'
---

调用该接口通过 websocket 接收 device 变更。


## 时序图 {#sequence}

```plantuml
participant "web console" as console
participant "core-broker"  as ck
participant core    as core
alt 建立WS连接
console -> ck : 请求 `/v1/ws`
ck --> console : 建立连接
else 发送订阅信息
console -> ck : 发送 `v1SubscriptionObject` \n ID 需要设置为需要订阅的`设备`ID
ck -> core : 订阅 `设备` 变更
else 循环发送 `设备` 变更
core --> ck : 发送 `设备` 变更
ck --> console : 发送 `设备` 变更
end
```


## Request

```
websocket /v1/ws
```

### Request Body
| Description         | Type   | Schema                                     |
| ------------------- | ------ | ------------------------------------------ |
| subscription object | Object | [v1SubscriptionObject](#v1WebsocketObject) |

#### v1WebsocketObject

| Name | Type   | Description |
| ---- | ------ | ----------- |
| id   | string | device id   |


## Response

### Response  200
| Code2 | Description | Type   | Schema        |
| ----- | ----------- | ------ | ------------- |
| 200   | OK          | Object | [设备实体](#) |


