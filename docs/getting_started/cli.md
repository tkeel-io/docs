---
title: 🕹️ CLI
sidebar_position: 2
slug: /cli
---
# CLI
## Introduction
tKeel CLI 是您用于各种 tKeel 相关任务操作的简易使用工具。

您可以使用它来 **安装 tKeel 平台**、**管理插件** 以及 **用户模块**。

tKeel CLI 可以帮助您安装 tKeel 平台并且帮助您管理平台。

## Install CLI
我们为各大平台都提供了相应可执行程序。还为不同平台对应编写了快速安装脚本，以确保简单、便捷。
### Linux
通过 Bash 脚本将最新版 tKeel CLI 安装至 Linux 系统的 `/usr/local/bin`
```bash
wget -q https://raw.githubusercontent.com/tkeel-io/cli/master/install/install.sh -O - | /bin/bash
```

### MacOS
通过 Bash 脚本将最新版 tKeel CLI 安装至 MacOS(darwin) 系统的 `/usr/local/bin`

```bash
curl -fsSL https://raw.githubusercontent.com/tkeel-io/cli/master/install/install.sh | /bin/bash
```

### Release binary
每个发行版本的 tKeel CLI 包括各种操作系统和架构。这些二进制版本可以手动下载和安装。

1. 下载 [tKeel CLI](https://github.com/tkeel-io/cli/releases)
2. 将下载的文件解压 (e.g. tkeel_linux_amd64.tar.gz, tkeel_windows_amd64.zip)
3. 把它移到你想要的位置
    * 如果你是 Linux/MacOS 用户 - `/usr/local/bin`
    * 如果你是 Windows 用户 - 创建一个目录并将其添加到你的 `系统 PATH `中。例如，通过编辑系统环境变量，创建一个名为 `c:\tkeel` 的目录，并将这个目录添加到你的 `系统 PATH` 中。
