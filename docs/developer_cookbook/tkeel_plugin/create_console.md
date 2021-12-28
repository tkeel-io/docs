---
sidebar_position: 11
title: 创建插件前端界面
---

# 创建插件前端界面

tKeel 的整个前端控制台分为核心基座（core）和插件（plugin），整个前端是一个基于 [qiankun（乾坤）](https://github.com/umijs/qiankun) 的微前端架构系统。

## 前提条件​

- Node.js >= 16.0.0
- Yarn >= 3.0.0
- Google Chrome 浏览器 >= 96
- 阅读 [qiankun](https://github.com/umijs/qiankun) 文档

## 创建项目

插件可以使用任何前端技术栈开发，创建插件前端项目只需按照 qiankun 的 [快速上手](https://qiankun.umijs.org/zh/guide/getting-started) 即可。

## 开发插件

### 启动插件前端服务

将插件前端作为服务启动，由于 core 的本地服务端口为 `3000`，所有最好将插件的端口设为 `3000` 以外的值。

### 克隆前端主仓库到本地

fork 我们的 [前端仓库](https://github.com/tkeel-io/console)，并克隆到本地，并进入该目录

### 安装依赖

```sh
yarn install
```

### 运行核心基座

```sh
yarn dev
```

出现选择界面，按空格键键选择 `tkeel-console-core`，并回车。

在 Google Chrome 浏览器中访问 <http://127.0.0.1:3000>

### 添加菜单

<!-- TODO: 需要补全 -->

在前端主仓库的 `./packages/tkeel-console-core/src/mock/index.ts` 中，添加改插件的 mock 数据：

```ts
const menus = [
  {
    id: '', // 插件模拟 id
    name: '', // 插件名称
    path: '', // 插件在 console 中的相对路径
    entry: '', // 插件访问地址
  },
];
```

#### core 传递给插件的 props

core 会在注册插件（`registerMicroApps`）时，通过 props 传递给插件如下数据：

<!-- TODO: 需要补全 -->

```json
{
  "tokenData": {},
  "themeName": "",
  "theme": {}
}
```
