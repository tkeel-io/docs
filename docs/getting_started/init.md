---
id: init
sidebar_position: 20
title: 初始 tKeel 平台
slug: /init
---

# 初始 tKeel Platform

> 我们希望我们提供的安装方式能符合我们平台气质——简单、便捷。

在您的环境运行 tKeel 平台有多种选择，您可以选择任意一个让您感到舒适的方式安装。


## 通过 tKeel CLI 安装平台
使用 _tKeel_ CLI 是我们最推荐的方式，因为它将使您的安装简单到只需一条命令。不过请先正确 [安装 tKeel CLI](cli#install-cli)

但是使用 tKeel CLI 之前请先确保在您的环境中满足如下要求：
#### 前提条件
- ✅ 如果您需要在 Kubernetes 中安装 tKeel ，确保您的环境中已 [安装 dapr](https://docs.dapr.io/operations/hosting/kubernetes/kubernetes-deploy) 且 dapr 版本必须 `>= 1.4`。
- ✅ 环境中已安装 dapr，且开启 mTLS

> 备注：
> * dapr 在 Kubernetes 上安装时，默认开启了 mTLS。


#### 使用 CLI 初始化平台
使用上面安装的命令行工具初始 tKeel 平台。
```bash
tkeel init --debug --wait --timeout 600
```

> 注意：Linux 用户请注意，如果您的 docker 需要使用 sudo 权限才能使用，那么请您使用:
>  ```bash 
> sudo tkeel init
> ```

命令行会输出如下内容：
```bash
⌛  Making the jump to hyperspace...
ℹ️  Checking the Dapr runtime status...
ℹ️  Deploying the tKeel Platform to your cluster... 
ℹ️  install plugins...                                                        
ℹ️  install plugins done.                                                                                 
✅  Deploying the tKeel Platform to your cluster...                          
✅  Success! tKeel Platform has been installed to namespace keel-system. To verify, run `tkeel plugin list -k' in your terminal. To get started, go here: https://tkeel.io/keel-getting-started
```

恭喜您，安装完成了，敬请享用。
