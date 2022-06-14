---
sidebar_position: 40
title: 前端插件开发
---

本文为您介绍如何如何开发 tKeel 前端插件。

## 介绍

tKeel 的整个前端控制台分为 portal（也可以被称为基座、主应用）和 plugin（也可以被称为插件 、子应用、微应用），整个前端是一个基于 [qiankun（乾坤）](https://github.com/umijs/qiankun) 的微前端架构系统。

整个 tKeel 控制台分为「管理平台」和「租户/用户平台」 2 个平台，因此 portal 也有 2 个：admin ( `tkeel-console-portal-admin` ) 和 tenant ( `tkeel-console-portal-tenant` )。后面若没有说明是 admin 还是 tenant ，均默认为 tenant ，admin 同理。

## 适用场景

## 前提条件

- Node.js >= 16.0.0
- Yarn >= 3.0.0
- Google Chrome 浏览器 >= 96
- 阅读 [qiankun](https://github.com/umijs/qiankun) 文档

### 克隆 tKeel console 仓库到本地

- fork 我们的 [console 仓库](https://github.com/tkeel-io/console)
- 克隆到本地
- 进入本地仓库目录

我们的前端仓库中包含 portal 和官方 plugins

### 安装 console 仓库的依赖

```sh
yarn install
```

## 创建插件

plugin 可以使用任何前端技术栈开发，创建 plugin 前端项目只需按照 qiankun 的 [快速上手](https://qiankun.umijs.org/zh/guide/getting-started) 即可。

## 开发插件

### 将 plugin 模拟添加至 portal 的菜单中

在 console 仓库的 `packages/tkeel-console-portal-tenant/config/` 中，创建 `local-development.js` 文件，并在其中添加 plugin 的 mock 数据：

插件在一级菜单

```js
module.exports = {
  mock: {
    menus: [
      {
        id: 'id',
        name: 'name',
        icon: 'icon',
        path: '/path', // 对应插件中路由的 base，比如 react-router 中的 basename
        entry: 'entry', // 对用插件的访问地址，比如 http://127.0.0.1:3002/static/devices
      },
    ],
  },
};
```

插件在二级菜单

```js
module.exports = {
  mock: {
    menus: [
      {
        id: 'parentId',
        name: 'parentName',
        icon: 'parentIcon',
        children: [
          {
            id: 'id',
            name: 'name',
            path: '/path', // 对应插件中路由的 base，比如 react-router 中的 basename
            entry: 'entry', // 对用插件的访问地址，比如 http://127.0.0.1:3002/static/devices
          },
        ],
      },
    ],
  },
};
```

### 运行 portal

1. build 租户/用户平台的 portal

```sh
yarn build:development:portal-tenant
```

2. 运行租户/用户平台的 portal

```sh
yarn start:portal-tenant
```

3. 在 Google Chrome 浏览器中访问 <http://127.0.0.1:3001>

### 启动 plugin 前端

将 plugin 前端作为静态服务启动，由于 portal 的本地服务端口为 `3000` 和 `3001`，所以最好将 plugin 的端口设为其他值。

### portal 传递给 plugin 的 props

portal 会在注册 plugin（`registerMicroApps`）时，通过 `props` 传递给 plugin 一个 `portalProps` 属性，数据结构如下：

```ts
import { NavigateFunction } from 'react-router-dom';

interface PortalProps {
  portalName: 'admin' | 'tenant'; // 当前运行在什么 portal
  client: {
    themeName: string; // 主题名称
    theme: Record<string, any>; // 主题
    tenantInfo: TenantInfo; // 租户信息
    tokenInfo: TokenInfo; // token 信息
    toast: ToastFunction; // 显示 toast 提示函数，比如提示操作成功、失败等
    navigate: NavigateFunction; // portal 路由跳转函数，比如要跨插件跳转
    refetchMenus: () => void; // 刷新菜单函数
  };
  backend: {
    api: {
      origin?: string; // 后端 API 的 origin
      basePath: string; // 后端 API 的 basePath
    };
    websocket: {
      origin?: string; // 后端 WebSocket 的 origin
      basePath: string; // 后端 WebSocket 的 basePath
    };
  };
}
```

```ts
interface TenantInfo {
  tenant_id: string;
}
```

```ts
interface TokenInfo {
  access_token: string;
  expires_in: string;
  refresh_token: string;
  token_type: string;
}
```

```ts
import { ReactNode, ReactText } from 'react';
import {
  ToastContent as ToastifyToastContent,
  ToastOptions as ToastifyToastOptions,
  TypeOptions,
} from 'react-toastify';

type ToastContent = Exclude<ToastifyToastContent, Record<string, never>>;

interface ToastOptions extends Omit<ToastifyToastOptions, 'type'> {
  title: ReactNode;
  description?: ReactNode;
  status?: TypeOptions;
}

type ToastFunctionArg1 = ToastOptions | ToastContent;

type ToastFunctionArg2 = Omit<ToastOptions, 'title' | 'description'>;

interface ToastBaseFunction {
  (options: ToastOptions): ReactText;
  (content: ToastContent, options?: ToastFunctionArg2): ReactText;
}

interface ToastFunction extends ToastBaseFunction {
  info: ToastBaseFunction;
  success: ToastBaseFunction;
  warning: ToastBaseFunction;
  error: ToastBaseFunction;
}
```

## 示例

### React

[console 仓库](https://github.com/tkeel-io/console) 中 `packages` 目录下，以 `tkeel-console-plugin` 开头的目录，都是 tKeel 的官方插件。

### Vue.js

[console-plugin-vue-example](https://github.com/tkeel-io/console-plugin-vue-example)
