---
sidebar_position: 2
title: 创建插件
---

# 创建插件
相信您应该已经看见了 tKeel 插件功能的强大，本页指南将指导您如何创建一款自己心仪的插件，

通过 tKeel CLI 完成在 tKeel 上安装和注册一个指定 helm 源的插件。有关更多信息，请参见 [在 tKeel 上安装插件] 和在 [tKeel 上注册插件]。
## 使用 Artisan 快速搭建
我们极力推荐您使用我们推出的开发者工具 [artisan](../artisan.md)，因为我们将一些能自动化的开发流程都集成在了该工具中，它能帮助您简单便捷的开发出一款插件应用。
### 前提条件

- [tKeel 平台](/#install-and-initialize-your-tkeel)
- [tKeel CLI](/cli#install-cli) 工具
- 基础的 Go 编程能力

#### 开始一个插件项目
#### 开发插件&安装部署->tKeel平台
1、	基于tKeet平台提供的项目框架工具Artisan快速生成自己的工程 https://tkeel-io.github.io/docs/developer_cookbook/artisan
2、	进入到项目目录
     ![image](https://user-images.githubusercontent.com/84012206/144231710-250d6203-61e7-4136-a779-1c56f001008d.png)

3、	通过docker build -t helloworld:v1 . 命令镜像文件
 
     ![image](https://user-images.githubusercontent.com/84012206/144231741-5c5710dc-9b72-451f-927b-a9814720480b.png)
     ![image](https://user-images.githubusercontent.com/84012206/144231768-77602a16-e7e7-487b-b9fe-ed21588d1ca3.png)


4、	推送到镜像仓库
     
     ![image](https://user-images.githubusercontent.com/84012206/144231788-ed86aad9-0432-4f58-9579-da20f25f4e6d.png)

5、	编写chart & 打包 chart
