---
sidebar_position: 50
title: 插件打包制作指南
---

# 插件安装包制作指南
本指南将指引插件开发者将以开发完成的插件打包成插件所需的 chart。

## 前提条件

1. 开发人员:
- [Docker 的基本使用能力](https://helm.sh/docs/)
- [Helm 的基本使用能力](https://helm.sh/docs/)
- [Kubernetes 的基本概念](https://kubernetes.io/zh/docs/home/)

2. 插件功能：
- [实现 OPENAPI 的端点](plugin_openapi.md)
- 必要的 Kubernetes 的 Workloads(Deployment,StatefulSets等可被注入的部署策略)

3. 环境

- 准备linux开发环境（建议Ubuntu18.04+）
- 已正确安装 git
- 已正确安装 make
- 已正确安装 go 1.16+
- 已正确安装 protoc
- 已正确安装 helm3
- 已正确安装 docker
- 已正确安装 tkeel 最新版
- 可用的私有docker仓库或者docker hub账号（需本地登录docker hub）


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
- `tkeel.io/tag` 字段是可选的，插件类型，声明此安装包安装的插件是租户平台还是管理平台，默认值为租户平台。
  - `manager`:管理平台
  - `user`:租户平台
- `tkeel.io/version` 字段是可选的，插件版本号，定义后将覆盖 chart 中定义的版本号。

插件类型（）


> tKeel 的插件安装包可以帮助开发人员完成对 **dapr** 的相关配置的自动注入，让插件开发者无需再去学习 **dapr** 的 **Kubernetes** 的部署配置等。自动注入功能只对拥有 `Deployment` 配置策略的安装包生效。此功能是可选的，我们欢迎也支持大家在 tKeel 的基础上对 **dapr** 进行定制化配置，此时则将自动注入关闭即可。

> tKeel 插件的 chart 中 `Chart.yaml` 的 [JSON SCHEMA](/schema/plugin_chart_schema.json)

## 具体流程

插件打包分为以下几个步骤：
- 编译为二进制文件，打包为 Docker，并上传至仓库
- 编写插件 Helm Chart，并上传至仓库

上述步骤完成后插件处于发布状态，可以被平台安装。



### 编译并打包为 Docker

下面以 tkeel-device 演示编译并打包为 Docker 的过程

#### 1.1. 克隆代码到本地
```   
git clone https://github.com/tkeel-io/tkeel-device.git
```

进入代码目录
```
cd tkeel-device
```

更新 go 依赖库
```
go mod tidy
```

初始化编译环境（初始化需要，后续此步骤可忽略）
```
make init
```

生成swagger api（如果没有改动api目录下的proto，此步骤可忽略）
```
make api
```


#### 2. 编译程序并构建docker镜像
```
docker build -t demo/tkeel-device:0.4.4 .
```

Dockerfile 
```
############################################################ 
# Dockerfile to build golang Installed Containers 

# Based on alpine

############################################################

FROM golang:1.18.0 AS builder

COPY . /src
WORKDIR /src

RUN GOPROXY=https://goproxy.cn make build

FROM alpine:3.13

RUN mkdir /keel
COPY --from=builder /src/dist/linux_amd64/release/tkeel-device /keel


WORKDIR /keel
CMD ["/keel/tkeel-device"]
```




#### 3. 上传docker镜像到 docker hub仓库 {#docker-upload}
```
docker push demo/tkeel-device:0.4.4
```

:::note

此处需要已登录 docker，否则会导致登录失败。

:::

### 编写并上传 Helm Chart

tKeel 的插件打包格式遵循 Helm Chart 规范，您只需要按照需求加入 tKeel 注释到 `Chart.yaml` 中即可配置好 tKeel 插件的 Helm Chart。

平台在安装时会根据部署策略的不同记录一些中间件的资源信息，
插件可以在 templates 中基于 value.yaml 来实现配置文件解决外部中间件的配置。

下面将以 device 的 Helm Chart 为例讲解 Helm Chart。

device 的 Helm Chart 位于 chart 目录下，内容如下：
```
tkeel-device
    ├── Chart.yaml
    ├── templates
    │    ├── deployment.yaml
    │    ├── _helpers.tpl
    │    ├── hpa.yaml
    │    ├── ingress.yaml
    │    ├── NOTES.txt
    │    ├── serviceaccount.yaml
    │    └── service.yaml
    └── values.yaml
```


#### 1. 修改镜像

修改`chart/tkeel-device/values.yaml` 中的 `image.repository` 为 `demo/tkeel-device`。
`demo/tkeel-device` 是镜像地址，来源于[上传docker镜像到 docker hub仓库](#docker-upload)步骤提供的镜像 `Tag` 的值 `demo/tkeel-device:0.4.4`。


```jsx title="chart/tkeel-device/values.yaml"
image:
  repository: tkeelio/tkeel-device
  pullPolicy: Always
```


:::note

`chart/tkeel-device/values.yaml` 中的 `repository` 只需要一个正确的 docker 镜像地址即可，你可以使用第三方镜像仓库或 docker hub。
如果希望从第三方镜像仓库服务获取镜像（非 Docker Hub），则需要在镜像仓库名称前加上第三方镜像仓库服务的 DNS 名称。

:::

#### 2. 修改版本

修改镜像版本，将`chart/tkeel-device/Chart.yaml` 中的 `appVersion` 修改为 `0.4.4`。

```jsx title="chart/tkeel-device/Chart.yaml"
apiVersion: v2
name: tkeel-device
description: "提供设备接入管理服务"
type: application
# Helm Chart 版本.
version: 0.4.4
# Docker 镜像版本.
appVersion: 0.4.4
# Chart annotations.
annotations:
  # 是否为 tKeel 插件.
  tkeel.io/enable: "true"
  # 插件类型（manager:管理平台, user:租户平台）
  tkeel.io/tag: User
  # 依赖的 tKeel 平台版本
  tkeel.io/version: v0.4.0
```

:::note

镜像tag是以`Chart.yaml`中的`appVersion`字段的值作为版本。
`0.4.4` 是镜像版本，来源于[上传docker镜像到 docker hub仓库](#docker-upload)步骤提供的镜像 `Tag` 的值 `demo/tkeel-device:0.4.4`。

:::


修改 Helm Chart 版本，将`chart/tkeel-device/Chart.yaml` 中的 `version` 修改为 `0.4.4`。
此处 `0.4.4` 会作为插件版本显示在管理列表。


#### 3. 检查并打包

检查helm chart格式
```
helm lint chart/tkeel-device
```

打包 helm chart 应用
```
helm package chart/tkeel-device
```

此时应该会生成一个打包文件 `tkeel-device-0.4.4.tgz`

#### 4. 发布至 helm 仓库

克隆 helm charts 仓库
```
git clone https://github.com/<your-repo>/helm-charts.git
```

进入 helm-charts 目录
```cd helm-charts
```

将刚刚打包的镜像拷贝到helm-charts目录
```
cp ../tkeel-device/tkeel-device-0.4.4.tgz ./
```

重建helm仓库索引
```
helm repo index . --url=https://demo.github.io/helm-charts
```

