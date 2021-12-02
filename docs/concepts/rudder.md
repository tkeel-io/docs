---
sidebar_position: 3 title: Rudder slug: /internal_concepts/rudder
---

# Rudder

Rudder 是 tKeel 中的管理核心，为平台提供了插件安装、注册和管理功能，也是 tKeel 中 Security 服务的载体。

Rudder 如其名一般，管理着 tKeel 平台中插件的生命周期以及租户权限等信息，控制着平台的运转。

## 架构设计

![image rudder arch](/images/docs/rudder_arch.png)

Rudder 由三个 Operator 和一个 Security 组件组成。

> Oprator 是一种抽象形态，主要用于对某种或某类资源进行管理。

> Security 则是负责管理和维护整个 tKeel 平台的安全方面的重要组件。为平台的安全提供支持。

* **Repo Oprator**：对指定的 tKeel 插件源进行查询和获取插件的安装包，并能在 tKeel 运行环境中安装和卸载 tKeel 插件。
* **Plugin Oprator**：对已安装的 tKeel 插件，通过 [tKeel OpenAPI](./openapi.md)
  规范进行交互，实现对插件进行注册、注销、插件扩展实现通知、租户启用插件、租户停用插件等操作。
* **PluginRoute Oprator**：对已安装的 tKeel 插件及对应实现的扩展点维护一个动态的路由表，[Keel](./keel.md)
  通过监听此路由表的变化实现插件和插件扩展点的动态注册。该路由表仅 Rudder
  可写，当插件注册信息变动、插件状态变更或插件租户的启用信息变动等均对路由表进行对应的更新。
* **Security**：对 tKeel 平台的安全相关请求进行处理，负责租户、用户和角色的权限控制，负责维护、校验和颁发不同类型的
  token，是集权限控制和安全于一体的组件。
