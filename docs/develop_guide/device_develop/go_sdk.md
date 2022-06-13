---
sidebar_position: 20
title: GO 语言 SDK 开发
---

本文为您介绍如何使用 GO 语言开发设备 [SDK](https://github.com/tkeel-io/device-sdk-go)

## 适用场景

- 单个设备的接入
- 带有子设备的设备（如数采网关）的接入

## 前提条件

### Go 环境

[golang](https://go.dev/dl/) version: 1.16+


## 导入示例代码

```go
"github.com/tkeel-io/device-sdk-go/client"
```

## 建立连接

```go
// 创建默认的 client
_brokerAddr := "tcp://139.198.112.150:1883"
cli := client.NewClient(_brokerAddr, _username, _pwd)()
// 连接到 IoT Hub
cli.Connect()

// 订阅原始信息
cli.SubscribeRaw(context.TODO(), rawTopicHandler)

// 推送遥测数据
v := `{"temperature": 26.0}`
cli.PublishTelemetry(ctx, v)

// 关闭 client
cli.Close()
```

```go
// 创建支持 ssl 的client
_brokerAddr := "ssl://139.198.112.150:1883"
cli := client.NewClient(_brokerAddr, _username, _pwd)(client.WithUseSSL(true))
```

## 如何使用SDK上报数据

```go
_brokerAddr := "tcp://139.198.112.150:1883"
cli := client.NewClient(_brokerAddr, _username, _pwd)()
// 推送遥测数据
v := `{"temperature": 26.0}`
cli.PublishTelemetry(ctx, v)
```

## 如何反控设备  

平台发送给设备的数据分为三种类型：

- 原始数据
- 属性数据
- 命令

设备如果需要接收来自平台的命令或者属性的变化需要订阅对应的 topic

### 原始数据

#### 订阅原始数据 topic
```go
// 创建默认的 client
_brokerAddr := "tcp://139.198.112.150:1883"
cli := client.NewClient(_brokerAddr, _username, _pwd)()
// 连接到 IoT Hub
cli.Connect()
// 订阅平台下发的命令
_ = cli.SubscribeRaw(context.TODO(), rawTopicHandler)
```

#### 原始数据处理
```go
// 收到原始数据后对应的处理函数
func rawTopicHandler(cli paho.Client, message paho.Message) {
    fmt.Printf("rawTopic=%s\n", string(message.Payload()))
}
```

#### Payload 样例
```json
{"value":"12"}
```
value 为固定的格式 12 为平台下发的原始数据


### 属性数据

#### 订阅属性数据 topic
```go
// 创建默认的 client
_brokerAddr := "tcp://139.198.112.150:1883"
cli := client.NewClient(_brokerAddr, _username, _pwd)()
// 连接到 IoT Hub
cli.Connect()
// 订阅属性，平台会将变更的属性（值的变化）推送到相应的 topic
_ = cli.SubscribeAttribute(context.TODO(), attributesTopicHandler)
```
#### 属性数据处理
```go
// 收到属性数据后对应的处理函数
func attributesTopicHandler(cli paho.Client, message paho.Message) {
    fmt.Printf("attributes=%s\n", string(message.Payload()))
}
```

#### Payload 样例
```json
{"humidity":"12"}
```
上述样例数据代表该设备的 humidity 发生更改且更改后的值为12

### 命令

#### 订阅命令 topic
```go
// 创建默认的 client
_brokerAddr := "tcp://139.198.112.150:1883"
cli := client.NewClient(_brokerAddr, _username, _pwd)()
// 连接到 IoT Hub
cli.Connect()
// 订阅平台下发的命令
_ = cli.SubscribeCommand(context.TODO(), commandsTopicHandler)
```

#### 命令处理
```go
// 收到命令后对应的处理函数
func commandsTopicHandler(cli paho.Client, message paho.Message) {
    // 在这里处理与设备的交互
    fmt.Printf("commands=%s\n", string(message.Payload()))
}
```
#### Payload 样例
```json
{
    "hello":{
        "input":{
            "temp":12.3
        }
    }
}
```
hello 代表命令名称 input 代表输入参数 temp 代表了输入参数的 key

## 如何通过API查询修改设备
