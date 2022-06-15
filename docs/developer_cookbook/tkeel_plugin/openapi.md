---
sidebar_position: 2
title: OpenAPI
---

# OpenAPI
OpenAPI 是一套用于 tKeel 平台中插件与平台进行交互的一套 HTTP 规范。通过定义*注册*、*租户变更*等动作和*状态检查*接口实现对 tKeel 平台插件的生命周期的管理。

通过在不同生命周期中平台与 OpenAPI 进行交互来管理插件的行为。

> API 定义查看：[OpenAPI 定义](../../develop_guide/plugin_develop/plugin_openapi.md#openapi-define)

## Identify
Identify 接口是插件在被安装进平台后，平台等待插件运行状态为 RUNNING 时访问的接口。

该接口主要是平台向插件获取一些必要的信息和插件调用平台部分功能所必须定义的权限、菜单、扩展点或者计量资源等。

通过该接口，平台将插件需要平台帮忙扩展的功能点在平台中定义和初始化，插件才能在平台中运行起来。

## Status
Status 接口是插件的状态接口，通过访问该接口，平台可以获取到插件当前的运行状态，并根据运行状态通知网关决定是否需要服务降级等流量控制处理。

## Tenant-enable
Tenant-enable 接口是平台中的租户启用插件时，平台主动调用的一个接口，平台通过这个接口将租户的必要信息传递给插件，希望插件能够在自身内部完成对当前启用的租户进行初始化数据或者恢复数据等操作。

> 平台的租户管理是一套宽松的协定，插件需自身维护租户的数据，租户数据的隔离需要插件自身处理。平台仅在网关处对未启用租户的访问进行限制。

## Tenant-disable
Tenant-disable 接口是平台中租户停用插件时，平台主动调用的一个接口，平台通过这个接口将租户的必要信息传递给插件，希望插件能够在自身内部完成对当前停用的租户进行删除数据或者备份数据等操作。

## Addons-Identify
Addons-identify 接口是用于扩展点的确认所使用的。用于通知插件扩展点已被实现，具体流程如下：

![addons_identify](/images/docs/addons_identify.png)