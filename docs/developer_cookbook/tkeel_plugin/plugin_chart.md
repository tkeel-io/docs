---
sidebar_position: 10
title: 插件 chart 包制作指南
---

# 插件安装包制作指南
本指南将指引插件开发者将以开发完成的插件打包成插件所需的 chart。

## 前提条件
1. 开发人员:
- [Helm 的基本使用能力](https://helm.sh/docs/)
- [Kubernetes 的基本概念](https://kubernetes.io/zh/docs/home/)

2. 插件：
- [实现 OPENAPI 的端点](./openapi.md)
- 必要的 Kubernetes 的 Workloads(Deployment,StatefulSets等可被注入的部署策略)

## Chart 规范
tKeel 的插件需要在 chart 的 `Chart.yaml` 中进行额外定义，只有这样才能在 tKeel 的插件源中读取出来并正确安装到整个平台中。

具体定义在 `Chart.yaml`中的 `annotations`进行如下定义：
```yaml
# Chart annotations.
annotations:
  # Valid values are "y","yes","true","on","1"
  # not case sensitive.
  tkeel.io/enable: "true"
  tkeel.io/deployment-name: "hello-tkeel"
  tkeel.io/plugin-port: "8080"
  # Valid values are "user","manager"
  # not case sensitive.
  tkeel.io/tag: User
  # plugin version.
  tkeel.io/version: v0.4.0
```
- `tkeel.io/enable` 字段是必须的，含有此字段的插件才会被平台认定为是插件的安装包。
当字段值为 `true` 或者其他有效值时，则需要声明 `tkeel.io/deployment-name` 和 `tkeel.io/plugin-port` 字段，此时则会自动将 **dapr** 相关配置注入到 `tkeel.io/deployment-name` 中指定的 `Deployment` 渲染后名称。

- `tkeel.io/deployment-name` 字段是可选的，声明需要注入的 `Deployment` 的名称。（此名称为 `Deployment` 中渲染后的 `name` 字段）
- `tkeel.io/plugin-port` 字段是可选的，声明已经实现了 `OPENAPI` 的 HTTP 服务的端口号。（与 **dapr** 边车进行交互的端口号）
- `tkeel.io/tag` 字段是可选的，插件类型，声明此安装包安装的插件是用户侧还是系统测，默认值为用户侧。
- `tkeel.io/version` 字段是可选的，插件版本号，定义后将覆盖 chart 中定义的版本号。

> tKeel 的插件安装包可以帮助开发人员完成对 **dapr** 的相关配置的自动注入，让插件开发者无需再去学习 **dapr** 的 **Kubernetes** 的部署配置等。自动注入功能只对拥有 `Deployment` 配置策略的安装包生效。此功能是可选的，我们欢迎也支持大家在 tKeel 的基础上对 **dapr** 进行定制化配置，此时则将自动注入关闭即可。

> tKeel 插件的 chart 中 `Chart.yaml` 的 [JSON SCHEMA](/schema/plugin_chart_schema.json)

## 流程

1. 创建 chart 模板
```bash
helm create xxx
```

2. 根据需求创建不同的部署策略并修改对应的 template 和 values

3. 根据需求添加 tKeel 注释到 `Chart.yaml` 中。

## 插件 chart 示例
[插件安装包示例文件](https://github.com/tkeel-io/quickstarts/tree/main/tkeel-manager/deploy/chart/hello-tkeel)