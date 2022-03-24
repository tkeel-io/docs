---
title: 🔧 如何开发一个插件
sidebar_position: 6
---

# 如何开发一个插件
tKeel 平台中除了核心组件外其他功能均有插件提供，均可以自定义更换或者扩展。

本页指南将引导您通过 tKeel 仓库中的 tkeel-template-go 从0开始开发一个 say hello 的插件并加入到自己的仓库中。后续安装流程请参考 [🚀 如何安装插件](./how-to-install-plugin.md)。

## 前提条件
- 已正确安装 [git](https://git-scm.com/)
- 已正确安装 [go](https://go.dev/) 并拥有一定的开发能力。
- 已正确安装 [helm](https://helm.sh/)
- 已正确安装 [docker](https://www.docker.com/)

## Step 1. Use template
在最开始，我们需要打开 [tkeel-template-go](https://github.com/tkeel-io/tkeel-template-go) 仓库并点击 **Use this template** 按钮，选择后续对应的 **Owner** 并创建属于新插件的仓库。

## Step 2. Git clone *.git
将新建的仓库使用下列命令将新插件的仓库 `clone` 下来。

> 请将 `OWNER` 和 `REPO` 替换成为新插件的正确所有者和仓库名。

```bash
git clone git@github.com:${OWNER}/${REPO}.git
```

## Step 3. Edit code.
1. 通过编辑器打开 `clone` 的仓库，并将 `apis/*/*.proto`、 `cmd/main.go`、`pkg/service/*.go` 和 `go.mod` 中的 `tkeel-template-go` 并替换成新插件的名称，如 `tkeel-hello`。
2. 修改 `pkg/service/openapi.go` 中 `Identify` 函数，将返回值
```go
&openapi_v1.IdentifyResponse{
	Res:          util.GetV1ResultOK(),
	PluginId:     "tkeel-hello",
	Version:      "v0.3.0",
	TkeelVersion: "v0.3.0",
}
```
修改为对应的值，具体参考 [OPENAPI](../appendix/openapi.md) 规范。

3. 替换完成后运行

```bash
go mod tidy
```

## Step 4. Build images and push
在仓库根目录下依次运行以下命令。

> 请将 `DOCKER_REPO`，`DOCKER_IMAGE` 和 `TAG` 变量替换成对应的数据。

```bash
make all

docker build ./ -t ${DOCKER_REPO}/${DOCKER_IMAGE}:${TAG}

docker push ${DOCKER_REPO}/${DOCKER_IMAGE}:${TAG}
```

## Step 5. Edit chart and Helm package
1. 修改新插件仓库下的 `charts/tkeel-hello/values.yaml` 中的 `image` 变量的值，把构建出的 **Docker Image** 替换原有内。
2. 重命名文件夹 `charts/tkeel-hello` 为 
```bash
charts/${PLUGIN_NAME}`
```
3. 将修改后的文件夹下所有文件中的 `tkeel-hello` 字段修改为 `${PLUGIN_NAME}`。

通过 `fork` [Helm-chart](https://github.com/tkeel-io/helm-charts) 仓库并修改对应 URL 和设置 **GitHub page** 可以创建一个属于自己的并托管于 **GitHub** 上的 **Helm Repo**。

通过 `helm link` 和 `helm package` 命令将修改后的插件