---
sidebar_position: 2
title: Keel
slug: /internal_concepts/keel
---
# Keel
## 简介
Keel 是 tKeel 的一个拥有动态注册路由能力的统一网关，所有对平台的访问均通过 Keel 进行转发。

## 架构设计

 ![image keel arch](/images/docs/keel_arch.png)

Keel 由四个 Filter，一个 Operator和一个 Proxy 组件组成。

Filter 是对 HTTP 流量进行筛选的一个筛选器，用于控制请求的流向。

Oprator 是一种抽象形态，主要用于对某种或某类资源进行管理。

Proxy 是一个用于处理 HTTP 转发的组件。根据不同的 upstream server 选择不同的转发模式进行转发。

* **Plugin Filter**：通过对 HTTP 请求中 Header 的 x-plugin-jwt 头进行解析，获取对应请求来源的 plugin_id（如果是外部请求则为空）。
* **Path Filter**：通过对 HTTP 请求的 Path 进行处理，对 `/apis/security`、`/apis/rudder`和`/apis/core`为 root path 的请求直接进行转发，对 `/addons` 为 root path 的请求去缓存的路由表中寻找对应的插件扩展点找到对应的上游插件，进行转发，其他的则需要通过 **Auth Filter** 进行鉴权处理。
* **Auth Filter**：根据 plugin_id 是否为空判定是否为外部请求，对外部请求进行鉴权再过滤到缓存的路由表查找上游插件。
* **tKeel Version Filter**：判断上游插件和请求源插件的所依赖的 tKeel 的版本是否有效（请求源插件的依赖应大于或等于上有插件依赖版本）。
* **PluginRoute Operator**：路由表操作员，keel 中用来监听路由表是否发生变化，如已变化则更新缓存的路由表。
* **Proxy**：根据上游服务的不同，选择不同的访问模式进行访问（对于插件使用 dapr 的 invoke 模式访问，对于核心组件直接访问）。