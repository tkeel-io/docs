---
sidebar_position: 1
title: tKeel 插件
---

# 概览
插件在 tKeel 中是极为重要的。

tKeel 官方提供了物联网的通用功能的插件，但是对于实际场景中，某些特殊需求往往无法通过通用功能得到最优的解决，这时 tKeel 的用户则可以快速的开发一个插件定制化的去解决自己所遇到的问题。

对于某些上层用户而言，可以通过分享自己制作的插件去帮助其他社区中使用 tKeel 的用户去玩转物联网，去做很多更酷的事。

所以我们总结了下在开发 tKeel 插件时，开发者经常会问自己的几个问题：

* 我如何创建一个插件？
* 我如何在开发的插件中调用平台的功能？
* 我如何利用平台的扩展功能为开发的插件预留扩展点？
* 我如何实现其他插件的扩展？
* 我如何使开发的插件接入到 tKeel 的租户权限控制中？

## 创建插件
tKeel 的插件开发十分简单，tKeel 仅要求插件遵守 [**OpenAPI**](./openapi.md) 规范即可，同时我们借助了 dapr 的能力，让开发者无需担忧 runtime 的问题，可以让开发者使用自己最熟悉和最习惯的编程语言进行开发，这可以有效地降低将已有系统或应用改造为 tKeel 插件的难度。

我们也提供了一个极佳的脚手架工具 -- [**Artisan**](../tools/artisan.md)，通过工具我们可以从零开始快速的构造一个 tKeel 插件的 go 项目模板（详情点击[参考](./create.md)）。

## 插件交互
tKeel 插件是平级关系，已经安装并注册的插件就是为平台提供了一个新的功能，即扩展了平台的功能。插件与插件间的调用其实就是插件调用平台的某个功能。对于在 Core 中流转的数据则通过 Core 与插件间建立的 channel 直接交互。

![image plugin invoke](/images/docs/plugin_invoke.png)

在 tKeel 中，核心组件均拥有自己的 dapr 边车，并通过边车的服务调用构建块提供服务，最后统一由 keel 网关进行代理。对于 tKeel 插件而言，通过 CLI 安装的插件将会被隐式地启动一个对应的 dapr 边车，同时通过服务调用构建块访问插件所提供的服务，且通过对应的配置以 mTLS 限制仅 keel 和 rudder 的边车能够访问安装的插件的边车。
> tKeel 中所有功能均通过 Keel 进行代理，插件访问 tKeel 即使用 dapr 的服务调用构建块访问 app id 为 Keel 的 dapr 服务。
> 
> * curl：`http://${DAPR_HTTP_ADDR}/v1.0/invoke/keel/method/${METHOD}`
>
> Keel 的基于 method 中路径进行路由，分为两个 root path。
>
> ![image keel apis](/images/docs/keel_apis.png)
>
> ![image keel addons](/images/docs/keel_addons.png)

![image plugin mTLS](/images/docs/plugin_mTLS.png)

## 插件扩展点
tKeel 插件为插件开发者提供了插件的扩展点功能，能够使插件利用 tKeel 的插件机制动态的扩展所需的功能点。

![image plugin addons](/images/docs/plugin_addons.png)

如图上所示：

短信插件提供了短信发送前的检查扩展点，那么其他插件可以注册该扩展点提供校验功能，负责检查短信发送前的文本检查。
> 当短信插件调用 tKeel 平台的 `/addons/beforSendCallback` 并发送相关内容，tKeel 将会检索当前的动态路由表中短信插件的 `beforSendCallback` 扩展点是否被其他插件实现，如未实现 返回 HTTP 状态码 404，如已实现，则转发到对应插件的对应端点，并返回调用结果。

如需实现短信插件的扩展点，在插件注册时，以 *OpenAPI* 规范响应 `/v1/identify` 端点，并根据被扩展插件扩展点检查去正确实现扩展点端点即可。

![image plugin addons implement](/images/docs/plugin_addons_implement.png)

## 插件租户权限