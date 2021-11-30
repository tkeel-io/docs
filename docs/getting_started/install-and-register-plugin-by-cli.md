---
sidebar_position: 1
---

# 通过 tKeel CLI 安装、注册、注销和卸载插件

-----

本快速入门指南将引导您通过 tKeel CLI 完成在 tKeel 上安装和注册一个指定 helm 源的插件的一般性步骤。有关更多信息，请参见 [在 tKeel 上安装插件](../installation/install-plugin-in-tkeel.md) 和在 tKeel 上 [注册插件](../register-plugin.md)。

## Prerequisites

* 正确安装 tKeel 平台和安装 tKeel CLI。

> 注意：Linux 用户请注意，如果你的 docker 需要使用 sudo 权限才能使用，那么请你使用 `sudo tkeel init`。

## 操作1：使用 CLI 安装插件

使用命令行安装指定源的插件。

```bash
$ tkeel plugin install https://tkeel-io.github.io/helm-charts/keel-echo@v0.2.0 keel-echo
```

> 备注：
> 示例中所安装的插件为 keel-echo，源地址为 https://tkeel-io.github.io/helm-charts/，chart 版本为 v0.2.0。
> 如需安装其他插件，请将对应信息进行替换并执行命令。

输出应该如下：
```
ℹ️  install tKeel plugin<keel-echo> done.

✅  Install "keel-echo" success! It's named "keel-echo" in k8s
```

可以在 Kubernetes 中查看到已安装的 chart。

也可以运行以下命令查看已安装的插件：
```bash
$ helm list
```

输出应该如下：
```
NAME            NAMESPACE       REVISION        UPDATED                                      STATUS          CHART           APP VERSION
dapr            tkeel-platform     1          2021-11-30 14:18:25.7012086 +0800 CST         deployed         dapr-1.5.0         1.5.0
keel-echo       tkeel-platform     1          2021-11-30 17:11:47.6146906 +0800 CST         deployed         keel-echo-0.2.0    0.2.0
tkeel-platform  tkeel-platform     1          2021-11-30 16:05:57.5570544 +0800 CST         deployed         keel-0.2.0         0.2.0
```

## 操作2：使用 CLI 注册插件

使用命令行注册已经安装了的插件。

```bash
$ tkeel plugin register -k keel-echo
```

> 备注：
> 实例中 tKeel 运行环境为 Kubernetes，所以使用 `-k` 参数指定运行环境，如使用 host 模式运行，则无需此参数。
> 示例中所注册的插件 ID 为 keel-echo。
> 如需安装其他插件，请将对应插件 ID 进行替换并执行命令。

输出应该如下：
```
✅  Success! Plugin<keel-echo> has been Registered to tKeel Platform . To verify, run `tkeel plugin list -k' in your terminal.
```

现在就可以使用以下命令查看已注册的插件：
```bash
$ tkeel plugin list -k
```
> 备注：
> 实例中 tKeel 运行环境为 Kubernetes，所以使用 `-k` 参数指定运行环境，如使用 host 模式运行，则无需此参数。

输出应该如下：
```
  NAME       NAMESPACE    HEALTHY  STATUS   PLUGINSTATUS  REPLICAS  VERSION  AGE  CREATED
  keel-echo  keel-system  True     Running  RUNNING       1         0.2.0    1h   2021-11-30 17:11.48
```

## 操作3：使用 CLI 注销插件

使用命令行将已注册的插件注销。

```bash
$ tkeel plugin unregister -k keel-echo
```

> 备注：
> 实例中 tKeel 运行环境为 Kubernetes，所以使用 `-k` 参数指定运行环境，如使用 host 模式运行，则无需此参数。
> 示例中所注册的插件 ID 为 keel-echo。
> 如需安装其他插件，请将对应插件 ID 进行替换并执行命令。

输出应该如下：
```
ℹ️  Unregister plugin: {"id":"keel-echo","tkeel_version":"v0.2.0","secret":"changeme","register_timestamp":1638267026,"status":2}
✅  Success! Plugin<keel-echo> has been Registered to tKeel Platform . To verify, run `tkeel plugin list -k' in your terminal. 
```

现在就可以使用以下命令查看已注销的插件：
```bash
$ tkeel plugin list -k
```
> 备注：
> 示例中 tKeel 运行环境为 Kubernetes，所以使用 `-k` 参数指定运行环境，如使用 host 模式运行，则无需此参数。

输出应该如下：
```
  NAME       NAMESPACE    HEALTHY  STATUS   PLUGINSTATUS  REPLICAS  VERSION  AGE  CREATED
  keel-echo  keel-system  True     Running  NOT_REGISTER  1         0.2.0    1h   2021-11-30 17:11.48
```

## 操作4：使用 CLI 删除插件

使用命令行将未注册的插件删除。

```bash
$ tkeel plugin uninstall keel-echo
```

> 备注：
> 示例中所注册的插件 ID 为 keel-echo。
> 如需安装其他插件，请将对应插件 ID 进行替换并执行命令。

输出应该如下：
```
✅  Remove "keel-echo" success!
```

现在就可以使用以下命令查看已注销的插件：
```bash
$ helm list
```
> 备注：
> 示例中 tKeel 运行环境为 Kubernetes，所以使用 `-k` 参数指定运行环境，如使用 host 模式运行，则无需此参数。

输出应该如下：
```
NAME            NAMESPACE       REVISION        UPDATED                                 STATUS          CHART           APP VERSION
dapr            keel-system     1               2021-11-30 14:18:25.7012086 +0800 CST   deployed        dapr-1.5.0      1.5.0
tkeel-platform  keel-system     1               2021-11-30 16:05:57.5570544 +0800 CST   deployed        keel-0.2.0      0.2.0
```

已删除的插件 chart 将会被移除。