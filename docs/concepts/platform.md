---
sidebar_position: 1
title: Platform
slug: /internal_concepts/platform
---

# 平台介绍

![tkeel-layer](/images/docs/tkeel-layer.jpg)


- ### **Resource**
数据存储支持，可以是任意您使用的数据库。

- ### **Core**
是整个平台的数据核心，提供了一些 **数据组织** 形式以及 **处理方式**。
  - 提供了 *时序数据*、_属性数据_、*关系* 等不同形式组织的数据，来构建便于开发和理解的对象。
  - 通过 **快照** 和 **订阅**（Event数据）的方式解决数据交互的问题。

- ### **Service**
tKeel 用一套完善的[*插件机制*](./plugin.md)，通过动态网关 [*Keel*](./keel.md) 和管理组件 [*Rudder*](./rudder.md) 结合 **Interface** 层中的 *OpenAPI* 为平台提供了 *可拔插能力*。通过集成 [*Security*] 为平台提供了*消息路由、租户管理、权限控制*等功能。

- ### **Interface**
tKeel 以 *OpenAPI* 规范将平台的插件进行接入。通过封装，向 **Application** 提供简易的 *工具* 以及友好的 *接口*。

- ### **Application**
各种不同量级的应用，可以是您现有平台的一切服务。
  - 现有平台仅需通过调用 **Interface** 提供的 API 即可使用拿到需要的数据。
