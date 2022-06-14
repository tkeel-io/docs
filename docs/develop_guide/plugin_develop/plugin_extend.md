---
sidebar_position: 50
title: 插件扩展开发
---

本文通过实现一个计算器插件来快速演示 **tKeel** 平台插件的扩展功能。

# 设计目标

我们将开发三个插件:
1. tkeel-cal: 计算插件，插件提供 cal 接口，并声明 calc-int-x-y 扩展点，通过不同插件来实现本扩展点，当前接口的返回值也随之改变。
2. tkeel-cal-add: 加法插件，插件提供 add 接口来实现 tkeel-cal 插件的 calc-int-x-y 扩展点，通过将 x 和 y 相加再返回具体的结果给 tkeel-cal 插件。
3. tkeel-cal-mul: 乘法插件，插件提供 mul 接口来实现 tkeel-cal 插件的 calc-int-x-y 扩展点，通过将 x 和 y相乘在返回具体的结果给 tkeel-cal 插件。

插件的扩展功能依赖于OpenAPI的扩展机制，详细定义请参阅 Addons-Identify(./plugin_openapi_desc.md#addons-identify)。

## 架构设计

![image plugin addons](/images/plugins/plugin-addon.png)


### 扩展点配置

1. tkeel-cal 声明`calc-int-x-y`扩展点
   
在 tkeel-cal 的 [OpenAPI](./plugin_openapi.md#openapi-define) 中声明一个扩展点 `calc-int-x-y`

```jsx title="https://github.com/tkeel-io/quickstarts/blob/main/tkeel-addons/tkeel-calc/tkeel-calc.py#L24-L29"
"addons_points": [
    {
        "addons_point": "calc-int-x-y",
        "desc": "计算传入的 x 和 y 值,x 和 y 必须是 int。"
    }
]
```

2. tkeel-cal-add 声明实现 `calc-int-x-y` 扩展点

在 tkeel-cal-add 的 [OpenAPI](./plugin_openapi.md#openapi-define) 中声明实现 `add` 端点使用 `calc-int-x-y` 扩展点

```jsx title="https://github.com/tkeel-io/quickstarts/blob/main/tkeel-addons/tkeel-calc-add/tkeel-calc-add.py#L23-L28"
"addons": [
    {
        "addons_point": "calc-int-x-y",
        "implemented_endpoint": "add"
    }
]
```


3. tkeel-cal-mul 声明实现 `calc-int-x-y` 扩展点

在 tkeel-cal-mul 的 [OpenAPI](./plugin_openapi.md#openapi-define) 中声明实现 `mul` 端点使用 `calc-int-x-y` 扩展点

```jsx title="https://github.com/tkeel-io/quickstarts/blob/main/tkeel-addons/tkeel-calc-mul/tkeel-calc-mul.py#L23-L28"
"addons": [
    {
        "addons_point": "calc-int-x-y",
        "implemented_endpoint": "mul"
    }
]
```

## 流程演示

### 前期准备
🔧 在进行教程之前请先确保你做足了准备。
* 成功安装 tKeel 平台。

### Step 1. 安装 tkeel-cal 插件
通过管理平台安装 tkeel-cal 插件，安装完成后即可通过 管理平台的 token 访问对应的 cal 接口：
```bash
curl --location --request GET 'http://{{tkeel}}/apis/tkeel-calc/calc?x=1&y=2' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0S2VlbCIsImV4cCI6IjIwMjItMDQtMTFUMDg6NTA6MTIuOTIzNTk1NjY3WiIsImlhdCI6IjIwMjItMDQtMTFUMDc6NTA6MTIuOTIzNTk1NjY3WiIsImlzcyI6InJ1ZGRlciIsImp0aSI6IjZlM2NkYmMzLTNkZjItNDkwMS04NzIzLTdiMTg3ZWNiMWY4NyIsIm5iZiI6IjIwMjItMDQtMTFUMDc6NTA6MTIuOTIzNTk1NjY3WiIsInN1YiI6ImFkbWluIn0.kjqjq_zB8iEm3pZGb7f31PiPVK2xrvkQ2XypadYYQnQ'
```

response:
```json
{
    "code": "io.tkeel.INTERNAL_ERROR",
    "data": {},
    "msg": "invaild addons calc-int-x-y"
}
```

### Step 2. 安装 tkeel-cal-add 插件
通过管理平台安装 tkeel-cal-add 插件，安装完成后再次通过管理平台的 token 访问对应的 cal 接口：
```bash
curl --location --request GET 'http://{{tkeel}}/apis/tkeel-calc/calc?x=1&y=2' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0S2VlbCIsImV4cCI6IjIwMjItMDQtMTFUMDg6NTA6MTIuOTIzNTk1NjY3WiIsImlhdCI6IjIwMjItMDQtMTFUMDc6NTA6MTIuOTIzNTk1NjY3WiIsImlzcyI6InJ1ZGRlciIsImp0aSI6IjZlM2NkYmMzLTNkZjItNDkwMS04NzIzLTdiMTg3ZWNiMWY4NyIsIm5iZiI6IjIwMjItMDQtMTFUMDc6NTA6MTIuOTIzNTk1NjY3WiIsInN1YiI6ImFkbWluIn0.kjqjq_zB8iEm3pZGb7f31PiPVK2xrvkQ2XypadYYQnQ'
```

response:
```json
{
    "code": "io.tkeel.SUCCESS",
    "data": {
        "res": "3"
    },
    "msg": ""
}
```

### Step 3. 卸载 tkeel-cal-add 插件，并安装 tkeel-cal-mul 插件
通过管理平台卸载 tkeel-cal-add 插件，卸载完成后再安装 tkeel-cal-mul 插件，安装完成后再次通过管理平台的 token 访问对应的 cal 接口：
```bash
curl --location --request GET 'http://{{tkeel}}/apis/tkeel-calc/calc?x=1&y=2' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0S2VlbCIsImV4cCI6IjIwMjItMDQtMTFUMDg6NTA6MTIuOTIzNTk1NjY3WiIsImlhdCI6IjIwMjItMDQtMTFUMDc6NTA6MTIuOTIzNTk1NjY3WiIsImlzcyI6InJ1ZGRlciIsImp0aSI6IjZlM2NkYmMzLTNkZjItNDkwMS04NzIzLTdiMTg3ZWNiMWY4NyIsIm5iZiI6IjIwMjItMDQtMTFUMDc6NTA6MTIuOTIzNTk1NjY3WiIsInN1YiI6ImFkbWluIn0.kjqjq_zB8iEm3pZGb7f31PiPVK2xrvkQ2XypadYYQnQ'
```

response:
```json
{
    "code": "io.tkeel.SUCCESS",
    "data": {
        "res": "2"
    },
    "msg": ""
}
```
