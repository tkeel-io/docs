---
title: Core
sidebar_position: 4
---




![Architecture](/images/core/architecture-pitrix1207.png)


### Restful APIs

Core 采用 `RESTFUL` 规范实现 API，致力于提供正交的APIs，向外提供简洁，稳定的API。


### 实体
实体（[Entity](../developer_cookbook/core/specs/entity.md)） 是我们在物联网世界中对 Things 的一种抽象，是 Core 操作的基础对象。包括智能灯、空调、网关，房间，楼层，甚至是通过数据聚合生成的虚拟设备等等，我们将这些 `Things` 进行抽象，定义为实体。




#### 实体包含属性和属性配置信息：

*属性* 是对某种实体一部分信息的描述。一个实体包含两类属性：
1. **基础属性**: 每个实体都必备的属性，如 `id`，`type`等用于标识实体共有特征的属性。
2. **扩展属性**: 实体除基础属性外的属性，这种属性属于某一类或某一个实体的特征描述，比如一个 **温度计** 的温度。

*属性配置* 是对实体的属性的描述信息。


> 更多技术细节请阅读 [实体文档](../developer_cookbook/core/specs/entity.md)



### 实体管理

`实体管理` 对 Core 中的实体进行管理，并代理实体相关的 [APIs](../api/Core/tag) 操作，为实体和实体运行时（[Actor](../developer_cookbook/core/specs/actor)）向外暴露接口。

### Runtime

Runtime 为实体的运行时（Actor）提供环境支持，对 Actor 进行调度和管理。


![Actor](/images/core/architecture-actor1207.png)

### 关系

在物理世界中，实体与实体之间往往不是相互孤立的，它们之间往往存在各式各样的联系，如交换机，路由器，终端设备，服务器通过光纤连接，在网络拓扑图中这些设备实体有`连接关系`。这些关系将这些独立的设备实体链接在一起，组成复杂而精密的网络，向外提供稳定而高速的网络通信服务。关系的核心在于有效的组织独立的实体，使得他们能够组成一个功能齐全的集合，以集合为单位向外提供丰富多彩的功能。Core 中的关系（[Relationship](../developer_cookbook/core/specs/relationship.md)）就模拟物理世界中的关系，抽象出来，用以组织实体，构建庞大的应用场景。

### 模型

我们将实体属性的约束集合定义为模型。实体是属性数据的载体，但是如何解析和使用实体的属性数据，我们需要实体属性的描述信息，如类型，取值范围等，我们将这些描述信息称之为 `约束`。而模型就是一个包含`约束`集合的载体，模型也以实体的形式存在， [更多设计细节请阅读模型文档](../developer_cookbook/core/specs/model.md) 。


### 映射

[映射](../developer_cookbook/core/specs/mapper.md) 是实体间属性传播的抽象，实现实体与实体之间的数据交互。 



借用映射机制，我们可以很容易的实现 iot 场景下设备数据的向上传递以及控制命令的向下传递。

![img.png](/images/core/message_passing1207.png)


上图中红色线条代表数据的上行，如设备数据上报；黑色代表数据的下行，如指令数据的下行。

映射操作的执行包含两步:

1. 写复制: 实现实体属性变更时，将变更向下游实体传递。
2. 计算更新: 对上游实体产生的变更组合计算，然后将计算结果更新到当前实体。

![img.png](/images/core/mapping1207.png)



### 订阅

在开发上层应用时，我们的需求往往是聚焦一个或者一些实体，如 PUE 的计算。由此 Core 提供了简捷方便的订阅（Subscription） ，供开发者实时获取自己关心的数据。


### Inbox

Inbox 实现从数据源（MQ，数据库等）中消费消息，实现可靠的消息消费机制， 为 Runtime 中的 Actor 提供可靠消息保证。


### Channel Endpoint

高频，高吞吐量的消息流对传输效率的要求总是苛刻的， Core 采用高效 数据通道（[Channel](../developer_cookbook/core/specs/channel.md)）， 封装通道端点，为高频消息提供高速通道。


### Storege

[Storege](../developer_cookbook/core/specs/actor) 是 Core 持久化缓冲模块，用于封装  Core 用到的核心中间件资源，并使用缓冲区对时序数据的读写进行优化。

