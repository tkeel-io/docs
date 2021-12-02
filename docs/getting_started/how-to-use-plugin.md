---
title: 🚀 如何使用插件功能
sidebar_position: 40
---

# 如何使用插件功能
tKeel 开放平台有强大的拓展功能，支持安装任意您需要的插件。

本页指南将引导您通过 tKeel CLI 完成在 tKeel 上安装和注册一个指定 helm 源的插件。有关更多信息，请参见 [在 tKeel 上安装插件] 和在 [tKeel 上注册插件]。

## 前提条件

确保已经正确 [安装 tKeel 平台](/#install-and-initialize-your-tkeel) 和 [安装 tKeel CLI](/cli#install-cli)。

## 安装插件
我们在平台内对插件的声明周期有如下一个明确的定义：
```
      developer         +        paas manager         +     tantent manager
                        |                             |
   +------------+       |       +-----------+         |      +----------+
   |            |       |       |           |         |      |          |
   | developing |       |       | published |         |      | disabled |
   |            |       |       |           |         |      |          |
   +----+-------+       |       +---+-------+         |      +---+------+
        |               |   install |                 |          |
        |  ^            |           v   ^             |          | ^
        |  |            |               | uninstall   |          | |
        |  |            |       +-------+---+         |          | |
release |  |            |       |           |         |   enable | |
        |  | upgrade    |       | installed |         |          | | disable
        |  |            |       |           |         |          | |
        |  |            |       +---+-------+         |          | |
        |  |            |  register |                 |          | |
        v  |            |           v  ^              |          v |
           |            |              | remove       |            |
   +-------+----+       |       +------+----+         |      +-----+----+
   |            |       |       |           |         |      |          |
   |  release   |       |       |registered |         |      | enabled  |
   |            |       |       |           |         |      |          |
   +------------+       +       +-----------+         +      +----------+

```
下面的演示内容为安装一款已经开发完成被发布的（published）插件到 tKeel 平台的简单过程。

### 使用 CLI 安装插件
使用 _tkeel_ CLI 工具 **安装** 指定源的插件。
```bash
tkeel plugin install https://tkeel-io.github.io/helm-charts/keel-echo@v0.2.0 tkeel-echo
```
> 备注：
> 
> 示例中所安装的插件为 keel-echo 为平台官方提供的一个演示插件，源地址为 `https://tkeel-io.github.io/helm-charts/` 插件 chart 版本为 `v0.2.0`，如果不指定版本信息将会默认安装发行的最新版本。最后一个参数 「tkeel-echo」是为该插件创建的实体名称，最后对应为部署在 Kubernetes 中的部署实例。
> 
> 如果您有自己想要安装的插件，请将对应信息进行替换并执行命令。

执行后输出应该如下：
```bash
ℹ️  install tKeel plugin<keel-echo> done.
✅  Install "keel-echo" success! It's named "tkeel-echo" in k8s
```

在与 tKeel 平台部署相通的节点执行 _helm_ 命令可以看到已经成功安装了 「tkeel-echo」：
```bash
$ helm list
NAME            NAMESPACE       REVISION        UPDATED                                      STATUS          CHART           APP VERSION
dapr            tkeel-platform     1          2021-11-30 14:18:25.7012086 +0800 CST         deployed         dapr-1.5.0         1.5.0
tkeel-echo       tkeel-platform     1          2021-11-30 17:11:47.6146906 +0800 CST         deployed         keel-echo-0.2.0    0.2.0
tkeel-platform  tkeel-platform     1          2021-11-30 16:05:57.5570544 +0800 CST         deployed         keel-0.2.0         0.2.0
```

### 使用 CLI 注册插件
使用命令行工具 _tkeel_ 在平台上 **注册** 刚刚安装了的插件应用。

```bash
tkeel plugin register -k keel-echo
```

> 备注：
> 实例中 tKeel 运行环境为 Kubernetes，所以使用 `-k` 参数指定运行环境，如使用 host 模式运行，则无需此参数。
> 示例中所注册的插件 ID 为 'keel-echo'。
> 如需安装其他插件，请将对应插件 ID 进行替换并执行命令。

命令行输出应该如下：
```bash
✅  Success! Plugin<keel-echo> has been Registered to tKeel Platform . To verify, run `tkeel plugin list -k' in your terminal.
```

### 使用 CLI 查看平台中插件
使用 _tkeel_ CLI **查看** 平台中已经注册的插件：
```bash
tkeel plugin list -k
```
> 备注：
> 实例中 tKeel 运行环境为 Kubernetes，所以使用 `-k` 参数指定运行环境，如使用 host 模式运行，则无需此参数。


命令行输出应该如下：
```
  NAME       NAMESPACE    HEALTHY  STATUS   PLUGINSTATUS  REPLICAS  VERSION  AGE  CREATED
  keel-echo  keel-system  True     Running  RUNNING       1         0.2.0    1h   2021-11-30 17:11.48
```

### 使用 CLI 注销插件
使用 _tkeel_ CLI 将已经在平台上注册的插件 **注销**。
```bash
tkeel plugin unregister -k keel-echo
```
> 备注：
> 实例中 tKeel 运行环境为 Kubernetes，所以使用 `-k` 参数指定运行环境，如使用 host 模式运行，则无需此参数。
> 示例中所注册的插件 ID 为 keel-echo。
> 如需安装其他插件，请将对应插件 ID 进行替换并执行命令。

命令行输出应该如下：
```
ℹ️  Unregister plugin: {"id":"keel-echo","tkeel_version":"v0.2.0","secret":"changeme","register_timestamp":1638267026,"status":2}
✅  Success! Plugin<keel-echo> has been Registered to tKeel Platform . To verify, run `tkeel plugin list -k' in your terminal. 
```

通过 _tkeel plugin list_ 查看平台上的插件，通过 **PLUGINSTATUS** 字段可以确认 「keel-echo」 已经成功注销。
```bash
$ tkeel plugin list -k
NAME       NAMESPACE    HEALTHY  STATUS   PLUGINSTATUS  REPLICAS  VERSION  AGE  CREATED
keel-echo  keel-system  True     Running  NOT_REGISTER  1         0.2.0    1h   2021-11-30 17:11.48
```

### 使用 CLI 卸载插件
使用 _tkeel_ CLI 可以 **删除** 指定插件的实例。
```bash
tkeel plugin uninstall tkeel-echo
```
> 备注：
> 示例中所卸载的插件实例为上文 install 中命名的 「keel-echo」。
> 如需安装其他插件，请将对应插件实例名字进行替换并执行命令。
 
命令行输出应该如下：
```
✅  Remove "tkeel-echo" success!
```

再次使用与 tKeel 平台部署相通的节点执行 _helm_ 命令可以看到已经成功安装了 「tkeel-echo」：
```bash
$ helm list
NAME            NAMESPACE       REVISION        UPDATED                                 STATUS          CHART           APP VERSION
dapr            keel-system     1               2021-11-30 14:18:25.7012086 +0800 CST   deployed        dapr-1.5.0      1.5.0
tkeel-platform  keel-system     1               2021-11-30 16:05:57.5570544 +0800 CST   deployed        keel-0.2.0      0.2.0
```