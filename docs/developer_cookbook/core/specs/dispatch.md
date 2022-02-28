---
title: Dispatch
sidebar_position: 18
---


`Dispatch` 模块用于将 Core Cluster 和 Core节点之间的消息的分发。

![core_cluster_message_dispatching](/images/core/core_cluster_message_dispatching.png)


Dispatch 模块位于外部应用和 Core 内部节点之间。

### Dispatch Upstream

Dispatch 模块的输入是两种类型的 Queue， `Queue` 是对消息队列的抽象，前者为与外部应用交互的 Queue，另一种用于转发 Core 集群内节点转发的消息。两种类型的 Queue 都可以存在一个或多个。



> Queue中的消息满足以实体为主体有序，即：
以 kafka 为例， topic 中的同一实体消息需要分布在同一 partition， 以保证 dispatch 操作后同一实体消息的有序性。



### Dispatch Downstream

Dispatch 将上游 Queue 中的消息以 `分发算法` 分发到 众多的下游 Queue 中，为 Core 提供消息输入。




### Reliability

可靠性主要体现在消息的丢失， Dispatch 和 Core 与 Queue 之间的消息可靠性主要使用 Queue 具体中间件的 `Ack` 机制来保证。 而 Core 节点 Republish 出来的消息发送到其他 Core 节点的消息的可靠性使用 重入Queue 来保障。



### TTL

Core Cluster 中的消息可能在 Core 节点之间相互转发，那么我们可以对消息进行 TTL 设置，来保证消息不会循化传播，避免引起洪泛效应。



### Queue 调度



#### Queue 扩展

对于 Dispatch 模块上游的 Queue 我们可以动态增减，来接入或删除外部 Application。对于 Dispatch 模块和 Core 之间的 Queue 我们在部署之前，会根据具体场景预估 Core 集群的大小，从而固定 Queue 的数量，Queue 的数量应该是更多于 Core 节点的数量的。



### 性能优化

性能优化主要在两个方面：对 Queue 本身的优化 和 消息传递流程优化。

#### Queue 优化

对于 Dispatch 与 Core 之间的 Queue 我们可以抽象具体的中间机制来实现优化，如使用轻量级的 `kafka.topic.partition` 抽象成 Queue 来实现优化。

#### 消息传递流程优化

对于 Core 节点输出 转发 到其他 Core 节点的消息我们可以直接转发到目标 Core 节点消费的 Queue 上，而避免在此 dispatch 操作产生的消耗。


### Dispatch 独立部署

Dispatch 模块可以作为 Core 服务的一个模块构建，也可以将 Dispatch 模块独立构建，独立部署。


### Dispatch 横向扩展

由于前面对 Dispatch 模块上游 Queue 中的消息限制，所以我么可以对 Dispatch 模块进行横向扩展。





## Reference

- [Pub-Sub vs. Message Queues](https://www.baeldung.com/pub-sub-vs-message-queues)