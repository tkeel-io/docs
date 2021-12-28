---
sidebar_position: 11
title: 创建插件前端界面
---

# 创建插件前端界面

tKeel 的整个前端控制台分为 core（也可以被称为基座、主应用）和 plugin（也可以被称为插件 、子应用、微应用），整个前端是一个基于 [qiankun（乾坤）](https://github.com/umijs/qiankun) 的微前端架构系统。

## 前提条件​

- Node.js >= 16.0.0
- Yarn >= 3.0.0
- Google Chrome 浏览器 >= 96
- 阅读 [qiankun](https://github.com/umijs/qiankun) 文档

## 创建项目

plugin 可以使用任何前端技术栈开发，创建 plugin 前端项目只需按照 qiankun 的 [快速上手](https://qiankun.umijs.org/zh/guide/getting-started) 即可。

## 开发插件

### 克隆 tKeel console 仓库到本地

- fork 我们的 [console 仓库](https://github.com/tkeel-io/console)
- 克隆到本地
- 进入本地仓库目录

我们的前端仓库中包含 core 和官方 plugins

### 安装 console 仓库的依赖

```sh
yarn install
```

### 运行 core

```sh
yarn dev
```

出现选择界面，按空格键键选择 `tkeel-console-core`，并回车。

在 Google Chrome 浏览器中访问 <http://127.0.0.1:3000>

### 启动 plugin 前端

将 plugin 前端作为静态服务启动，由于 core 的本地服务端口为 `3000`，所以最好将 plugin 的端口设为 `3000` 以外的值。

### 将 plugin 模拟添加至 core 的菜单中

<!-- TODO: 需要补全 -->

在 console 仓库的 `./packages/tkeel-console-core/src/mock/index.ts` 中，添加 plugin 的 mock 数据：

```ts
const menus = [
  {
    id: '', // plugin 模拟 id
    name: '', // plugin 模拟名称
    path: '', // plugin 在 console 中的相对路径
    entry: '', // plugin 模拟访问地址
  },
];
```

### core 传递给 plugin 的 props

core 会在注册 plugin（`registerMicroApps`）时，通过 props 传递给 plugin 如下数据：

<!-- TODO: 需要补全 -->

```json
{
  "tokenData": {},
  "themeName": "",
  "theme": {}
}
```

## 与后端集成

<!-- TODO: 需要补全 -->

## 示例

### React

[console 仓库](https://github.com/tkeel-io/console) 中 `packages` 目录下，以 `tkeel-console-plugin` 开头的目录，都是 tKeel 的官方插件。

### Vue.js

[console-plugin-vue-example](https://github.com/tkeel-io/console-plugin-vue-example)
