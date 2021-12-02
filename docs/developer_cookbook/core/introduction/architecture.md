---
title: 架构
sidebar_position: 1
---


## 架构

![Architecture](/images/core/architecture.png)


### Restful APIs

core 采用 `RESTFUL` 规范实现 API，致力于提供正交的APIs，向外提供简洁，稳定的API。


### 实体管理

core 将物理世界中的 "对象" 加以抽象，封装成数字世界中的 `实体`， 实体是对物理“对象” 的数字镜像，实体管理 对core中的实体进项管理，并代理实体相关的 API 操作，为实体和实体运行时（Actor）向外暴露接口。

### Runtime

Runtime 为实体的运行时（Actor）提供环境支持，对实体进行调度和管理。


![core-actor](/images/core/architecture-actor.png)


### Inbox

Inbox 实现从数据源（MQ，数据库等）中消费消息，实现 checkpoint 机制， 为 Runtime 中的 Actor 提供可靠消息保证。


### Channel Endpoint

高频，高吞吐量的消息流对 传输 的要求总是苛刻的， core 采用高效数据通道， 封装通道端点，为高频消息提供高速通道。

### 关系

物理世界中的对象通常不是孤立的，core 通过 关系（Relationship） 模拟物理世界中的对象之间的关系，为实体提供多样的组织形式。

### 订阅


### Storege

Storege 是 core 持久化缓冲模块。

