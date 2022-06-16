---
title: API列表
sidebar_position: 30
---

平台 API 分为管理平台以及用户平台。

## 管理平台

管理平台包括以下API：

- 平台基础API: 包含[平台配置接口](./rudder/tag.md#config)、[前端菜单接口](./rudder/tag.md#entry)
  - 平台配置接口支持了[平台样式服务](./appendix/console.md#system-theme)以及[基础信息](./appendix/console.md#system-config)
- 系统管理：包含[平台管理员 Token 颁发](./rudder/tag.md#Oauth2)、[Plugin 白名单](./rudder/tag.md#Oauth2)、[Token 验证接口](./rudder/tag.md#Oauth2)、[Admin重设密码接口](./rudder/tag.md#Oauth2)
- 插件管理：包含[插件列表](./rudder/tag.md#Plugin)、[插件启用、停用、注册、更新](./rudder/tag.md#Plugin)、[插件仓库管理](./rudder/tag.md#Repo)
- 租户管理：包含[租户空间管理](./rudder/tag.md#Tenant)、[单点登录配置](./rudder/tag.md#RBAC)
- 计量服务：包含[用量数据接口](./rudder/tag.md#profile)
- 登录认证：包含[登录认证](./rudder/tag.md#authentication)

## 租户平台

租户平台包括以下API：

- 租户API：包含[用户管理](./rudder/tag.md#Tenant)、[权限管理](./rudder/tag.md#RBAC)
- 设备API：包含[设备服务及映射服务](#device)、[设备组服务](#group)、[设备模板服务](#template)
- 数据服务API：包含[数据查询](./core_broker/tag.md#subscribe)、[订阅管理](./core_broker/tag.md#subscribe)、[数据路由](./rule_manager/tag.md#Rule)、[前端Websocket订阅](./appendix/websocket.md#sequence)
- 网络服务API: [网关管理](./fluxswitch/tag.md#Clien)、[服务管理](./fluxswitch/tag.md#Proxy)、[批量导入](./fluxswitch/tag.md#Tools)
