---
sidebar_position: 1
title:  tKeel
---

# tKeel

## Introduction
正如您的猜想一样， tKeel 是我们对整个平台的称呼，因为功能强大、逻辑复杂，我们对不同功能模块做出了一些命名。

下面罗列的是我们平台中一些重要模块，您可以通过阅读我们对应的文档获取相关模块的详细资料:

- [Keel](/internal_concepts/keel.md)
    网关模块 

- [Rudder](/internal_concepts/rudder.md)
    插件模块
   
- [Core](../core/getting_started.md)
    数据层抽象模块

## Architecture

 ![image demo](/images/docs/system.png)

* **可扩展**：采用云原生方法构建，基于微服务架构提高灵活性和可维护性，利用云平台设施实现弹性伸缩、动态调度、优化资源利用率，具有比传统系统更高的灵活性，同时能够促进开发、加快速度和提高性能。
* **健壮高效**：通过 [数据层](core/getting_started.md) 定义了数据实体。 对真实世界的物体（things）进行了模拟、抽象， 您可以定义关系映射，使得数据在实体之间高速流动。
* **开发简单**：基于 Dapr 构建，解决了分布式系统中的数据流向与抽象问题，屏蔽了底层的复杂性，向外提供了更简单，面向开发者更友好的抽象 ，帮助用户快速构建物联网解决方案。
