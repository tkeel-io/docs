---
sidebar_position: 1
---

# 通过 tKeel CLI 在 Kubernetes 上安装 tKeel 平台

-----

本快速入门指南将引导您通过 tKeel CLI 完成在 Kubernetes 上安装 tKeel 的一般性步骤。有关更多信息，请参见[在 Kubernetes 上安装 tKeel](../installation/install-tkeel-in-k8s.md)。

## tKeel CLI 介绍

🕹️ tKeel CLI 是您用于各种 tKeel 相关任务操作的简易使用工具。

您可以使用它来 **安装 tKeel 平台**、**管理插件** 以及 **用户模块**。

tKeel CLI 可以帮助您安装 tKeel 平台并且帮助您管理平台。

## Prerequisites

* 如需在 Kubernetes 上安装 tKeel，您的 Kubernetes 中必须[安装 dapr](https://docs.dapr.io/operations/hosting/kubernetes/kubernetes-deploy) 且 dapr 版本必须大于 1.4。
* 安装 dapr 必须开启 mTLS。
* 安装 helm。

> 备注：
> * dapr 在 Kubernetes 上安装时，默认开启了 mTLS。

## 步骤1：安装 tKeel CLI

🔧 我们提供了多种安装方式，您根据您的偏好选择您觉得最合适的安装方式进行安装。

### 使用脚本安装最新版本

通过我们编写好的脚本自动为您安装 `tKeel CLI`。

### Linux

通过 Bash 脚本将最新版 tKeel CLI 安装至 Linux 系统的 `/usr/local/bin`

```bash
$ wget -q https://raw.githubusercontent.com/tkeel-io/cli/master/install/install.sh -O - | /bin/bash
```

### MacOS

通过 Bash 脚本将最新版 tKeel CLI 安装至 MacOS(darwin) 系统的 `/usr/local/bin`

```bash
$ curl -fsSL https://raw.githubusercontent.com/tkeel-io/cli/master/install/install.sh | /bin/bash
```

### 通过发行的二进制程序

每个发行版本的 tKeel CLI 包括各种操作系统和架构。这些二进制版本可以手动下载和安装。

1. 下载 [tKeel CLI](https://github.com/tkeel-io/cli/releases)
2. 将下载的文件解压 (e.g. tkeel_linux_amd64.tar.gz, tkeel_windows_amd64.zip)
3. 把它移到你想要的位置
    * 如果你是 Linux/MacOS 用户 - `/usr/local/bin`
    * 如果你是 Windows 用户 - 创建一个目录并将其添加到你的 `系统 PATH `中。例如，通过编辑系统环境变量，创建一个名为`c:\tkeel`的目录，并将这个目录添加到你的 `系统 PATH` 中。

## 步骤2：安装 tKeel 平台

使用命令行初始 `tKeel`。

```bash
$ tkeel init --debug --wait --timeout 600
```

> 注意：Linux 用户请注意，如果你的 docker 需要使用 sudo 权限才能使用，那么请你使用 `sudo tkeel init`。

输出应该如下：
```
⌛  Making the jump to hyperspace...
ℹ️  Checking the Dapr runtime status...
↑  Deploying the tKeel Platform to your cluster... 
ℹ️  install plugins...                                                        
ℹ️  install plugins done.                                                                                 
✅  Deploying the tKeel Platform to your cluster...
                                               
✅  Success! tKeel Platform has been installed to namespace keel-system. To verify, run `tkeel plugin list -k' in your terminal. To get started, go here: https://tkeel.io/keel-getting-started
```

```
⌛  Making the jump to hyperspace...

ℹ️  Checking the Dapr runtime status...

✅  Deploying the tKeel Platform to your cluster...

ℹ️  install component<keel, rudder, core> done.

✅  Success! tKeel Platform has been installed to namespace keel-system. To verify, run `tkeel plugin list -k' in your terminal. To get started, go here: https://tkeel.io/keel-getting-started
```

安装完成。