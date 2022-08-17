---
sidebar_position: 6
title: IoTHub
slug: /internal_concepts/iothub
---

# IoTHub
IoTHub 作为 tKeel 平台设备接入的入口，支持海量设备的快速接入， 支持 MQTT（S）, CoAP, LwM2M, STOMP, MQTT-SN等通用物联网协议，集成 `emqx` 使用户能够快速玩转数据上云。

提供安全可靠的设备接入功能， 适应用户的使用习惯， 后续持续支持对接主流的第三方边缘管理系统， 例如 `thingsboard-gateway` 等， 提供灵活多变的接入方式， 为数据上云保驾护航。

同时， IoTHub 作为云边协同的核心连接组件， 支持云边互相调用（上行和下行）， 满足用户常见的应用场景。

支持的上行数据主要包括： 原始数据， 属性数据， 遥测数据。
支持的下行数据主要包括： 属性数据， 遥测数据， 命令。

<div align="center">

![Architecture](/images/iothub/iothub-architecture.png)
</div>


## 原始数据
主动推送到平台的任意类型的数据。

## 属性数据
与一类设备相关联的静态键值对。例如版本、所属部门、厂商等， （kv）

## 遥测数据
带有时间序列的数据测点。例如电压、电流、功率、温度、湿度等，可用于存储、查询、可视化视图。(数据类型， 单位， 最大值，最小值)

## 命令
可调用的反控命令、决定设备的行为


## 会话实体
会话实体作为 `tKeel` 平台的一类实体（详见 `core` 实体的概念），是 `tKeel` 系统内部的一个概念，一般的用户可以不用关心这个概念，这个概念主要是针对开发人员。 

简单来说， 会话实体是客户端与 `tKeel` 平台建立连接之后后端创建的一个实体，其主要作用是动态维护 客户端 和 tKeel 平台的连接信息,以及一些需要持久化的有状态信息（例如MQTT被订阅的topic）等信息， 避免信息的丢失。

目前连接信息保存在状态存储里面。

## 订阅实体
订阅实体同会话实体一样， 也是 `tKeel` 平台的一类实体， 也是针对开发人员的一个概念。`iothub` 创建的订阅实体主要是`mode`为`onChange`的实体， 

其主要是通过 `core` 订阅 `iothub` 需要关心的一些变化事件（比如 `tKeel-device` 的属性值、遥测值发生变化了），当这些关心的事件发生了， `core` 会告知`iothub`，`iothub`就可以针对这些事件做相应的一类逻辑处理，

比如将事件告知客户端等。主要用于下行数据。


## 为什么选择集成 emqx ？
`emqx` 是一个物联网行业比较流行的开源项目，`tKeel`也作为一个开源项目， 为了简化一些复杂度， 遵循开源的思想, 作为集大成者，也为了尊重用户的一些使用习惯和概念。我们决定持续集成和适配

物联网行业比较成熟，知名度比较高， 技术先进的一些第三方系统。充分发挥开源的价值， 争取为用户解决集成比较繁琐的工作， 简化用户使用。


## 如何连接 IoTHub ?

在平台创建设备之后得到的一个 `token` 和一个 `设备ID`， 可以使用 `token` 作为`password`， `设备ID` 作为 `usnername` 通过不同的协议连接`iothub`。


## 上行，如何推送数据到平台 ？ 

当通过 MQTT, CoAP 协议 连接到平台之后， 可以通过向平台推送以下几种数据：
1. 原始数据，topic 为："v1/devices/me/raw"。
2. 属性数据，topic 为："v1/devices/me/attributes"。
3. 遥测数据，topic 为："v1/devices/me/telemetry"。

## 下行，如何订阅平台的数据 ？
当通过 MQTT, CoAP 协议 连接到平台之后，客户端主动订阅关心对应的 topic, 当平台的对应数据发生改变了， 平台会主动推送对应的数据到客户端。
1. 订阅属性数据，topic 为："v1/devices/me/attributes"。
2. 订阅遥测数据，topic 为："v1/devices/me/telemetry"。
3. 订阅命令数据，topic 为："v1/devices/me/commands"。(todo)



> 点击 [这里](../../introduction/iothub/getting_started.md) 了解 如何快速使用 IoTHub。