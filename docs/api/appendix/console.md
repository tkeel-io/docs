---
title: "前端接口用例"
description: 'Device subscription(WebSocket)'
---

# 前端接口用例


## 平台样式{#system-theme}

**tKeel** 前端基于微前端库 [qiankun（乾坤）](https://github.com/umijs/qiankun) 进行开发。整个前端分为 `portal`（也可以被称为基座、主应用） 和 `plugin`（也可以被称为插件 、子应用、微应用） 两部分。`portal` 提供整个平台的基础能力，`plugin` 则负责具体的业务功能。

`portal` 会在注册 `plugin` （`qiankun` 的 `registerMicroApps`）时，通过 `props` 将一起基础能力（信息）传递给 `plugin` ；`plugin` 可以在 `qiankun` 的生命周期中获取到 `props`，一般是在 `mount` 函数中获取。

以 `React` 18 为例：

```javascript
import { createRoot, Root } from 'react-dom/client';

import App from './App';

export function mount(props) {
  const { container, portalProps } = props;
  const rootContainer = container
    ? container.querySelector('#root')
    : document.querySelector('#root');

  root = createRoot(rootContainer);
  root.render(<App />);

  // portalProps 即为 portal 传递给 plugin 的 基础能力（信息），theme 为当前的主题样式信息
  console.log(portalProps.theme);
}
```

`portal` 的 UI 以 [Chakra UI](https://github.com/chakra-ui/chakra-ui) 作为基础，因此 `theme` 的类型继承自 `Chakra UI` 的 `Theme` 。

上面 `portalProps.theme` 的类型 `Theme` ：

```typescript
import { ColorHues, Theme as BaseTheme } from '@chakra-ui/react';

interface Theme extends BaseTheme {
  colors: {
    primary: string; // 当前主题的主题色
    // 当前主题的主色调色板
    brand: {
      50: string;
      200: string;
      500: string;
      700: string;
    };
    grayAlternatives: ColorHues; // 另一种灰色调色板
  };
}
```

## 平台服务信息{#system-config}


`GET /apis/rudder/v1/config/deployment`

```typescript
interface Response {
  code: string; // io.tkeel.SUCCESS 为成功
  data: {
    admin_host: string; // 管理平台域名
    docs_addr: string; // 文档地址
    port: string; // 平台端口
    tenant_host: string; // 租户平台域名
  };
  msg: string; // 错误信息
}
```
