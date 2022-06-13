---
sidebar_position: 20
title: OPENAPI
---


## 介绍
OpenAPI 是一套用于 tKeel 平台中插件与平台进行交互的一套 HTTP 规范。通过定义*注册*、*租户变更*等动作和*状态检查*接口实现对 tKeel 平台插件的生命周期的管理。

通过在不同生命周期中平台与 OpenAPI 进行交互来管理插件的行为。

> API 定义查看：[OpenAPI 定义](#openapi-define)

### Identify 端点
[Identify](./plugin_openapi_desc.md#identify)  接口是插件在被安装进平台后，平台等待插件运行状态为 RUNNING 时访问的接口。

该接口主要是平台向插件获取一些必要的信息和插件调用平台部分功能所必须定义的权限、菜单、扩展点或者计量资源等。

通过该接口，平台将插件需要平台帮忙扩展的功能点在平台中定义和初始化，插件才能在平台中运行起来。

### Status 端点
[Status](./plugin_openapi_desc.md#status) 接口是插件的状态接口，通过访问该接口，平台可以获取到插件当前的运行状态，并根据运行状态通知网关决定是否需要服务降级等流量控制处理。

### Tenant-enable 端点
[Tenant-enable](./plugin_openapi_desc.md#tenant-enable) 接口是平台中的租户启用插件时，平台主动调用的一个接口，平台通过这个接口将租户的必要信息传递给插件，希望插件能够在自身内部完成对当前启用的租户进行初始化数据或者恢复数据等操作。

> 平台的租户管理是一套宽松的协定，插件需自身维护租户的数据，租户数据的隔离需要插件自身处理。平台仅在网关处对未启用租户的访问进行限制。

### Tenant-disable 端点
[Tenant-disable](./plugin_openapi_desc.md#tenant-disable) 接口是平台中租户停用插件时，平台主动调用的一个接口，平台通过这个接口将租户的必要信息传递给插件，希望插件能够在自身内部完成对当前停用的租户进行删除数据或者备份数据等操作。

### Addons-Identify 端点
[Addons-identify](./plugin_openapi_desc.md#addons-identify) 接口是用于扩展点的确认所使用的。用于通知插件扩展点已被实现，具体流程如下：

![addons_identify](/images/docs/addons_identify.png)


## OpenAPI{#openapi-define}

平台插件必须实现以下端点

以下端点调用时默认传入
`header=>Authorization:{"user_id":"admin"}`

端点响应通用部分：

response:
```json 
{
    "ret":0, // 返回码 0 --> ok -1 --> fail
    "msg":"ok" // 消息 成功默认ok 错误情况下携带错误信息
}
 ```


### /v1/identify (Required){#identify}

注册时调用此插件接口，用于验证插件的身份信息

```
Get /v1/identify
```

| HTTP CODE | 说明     |
| --------- | -------- |
| 200       | 成功     |
| 500       | 内部错误 |

response:
```json 
{
    "res": {
		"ret": 0,
		"msg":"ok",
	},
    "plugin_id": "yunify-xxx", // 插件名
    "version": "1.0", // 插件版本
	"tkeel_version": "v0.4.0", // 插件安装的 tkeel 平台版本。
    "addons_points": [ // 插件自身的扩展点及说明（可选）
        {
            "addons_point": "create_plugins",
            "desc": "注册插件成功后调用，返回值data内数据返回给调用方"
        },
        {
            "addons_point": "install_plugins",
            "desc": "安装插件成功后调用，返回值data内数据返回给调用方"
        },
        {
            "addons_point": "update_plugins",
            "desc": "安装插件成功后调用，返回值data内数据返回给调用方"
        },
        {
            "addons_point": "unstall_plugins",
            "desc": "卸载插件成功后调用，无返回值"
        }
    ],
    "implemented_plugin": [ // 实现的插件扩展点（可选）
        {
            "id": "xxxx", // 被扩展的插件的名字
            "version": "1.0", // 被扩展插件的版本
            "addons": [
                {
                    "addons_point": "xxxx", // 扩展点名称
                    "implemented_endpoint": "xxx" // 对应实现端点名称（回调路径） 此路径必须注册到平台才能被调用
                }
            ]
        }
    ],
    "entries": [ // 基座访问菜单（可选）
		{
			"id":"xx", // 入口 id
			"name":"xxx", // 入口 name 显示在菜单上的名字
			"icon":"xxx", // 具体的 icon
			"path":"xxx/xxx", // 路径
			"entry":"xxx/xxx/xxx",// 资源路径
			"children":[] // 子 entry
		},
	],
	"dependence":[ // 依赖的插件，安装时会检查是否安装，启用时将自动启用所有依赖的插件（可选）
		{
			"id":"xxx", // 插件ID
			"verison":"xxx", // 插件版本
		},
	],
	"permissions":[ // 插件声明的权限，可被添加进 tKeel 的权限控制中，一种抽象的资源（可选）
		{	
			"id":"XXX",// 权限ID，同级权限唯一	
			"name":"XDX",// 权限名称，显示用
			"dependences":[ // 依赖的权限，当权限被允许时，依赖的权限也被允许
				"path":"AA/BB/CC", // 依赖的权限路径，通过 插件ID</父级ID>/权限ID 的格式指定一个唯一的权限。
				"desc":" dafda", // 描述信息，为什么需要依赖之类的
			],
			"desc":"aaa", // 权限的描述信息
			"children":[], // 子权限信息
		},
	],
}
```

### /v1/status (Required){#status}

无参数请求，平台不定时的对插件进行状态监测，如插件返回异常或未响应，则拦截对于该插件的相关调用，直至恢复为止。
```
Get /v1/status
```

| HTTP CODE | 说明     |
| --------- | -------- |
| 200       | 成功     |
| 500       | 内部错误 |

response:
```json
{
    "ret": 0,
    "msg": "ok",
    "status": "ACTIVE"
}
```

:::note

status 状态有下列几种 
- ACTIVE   --> 正常运行
- STARTING --> 启动中 程序正在启动
- STOPPING --> 停止中 程序正在停止
- FAILED   --> 错误 程序自身错误

:::

### /v1/tenant/enable (Required){#tenant-enable}

租户启用时的主动调用，调用相关插件并认证。插件在收到此请求时，根据租户ID和额外数据进行对新租户数据的初始化等操作，返回正确。
```
Post /v1/tenant/enable
```

| HTTP CODE | 说明     |
| --------- | -------- |
| 200       | 成功     |
| 500       | 内部错误 |

request:
```json
{
	"tenant_id":"a",
    "extra":dafa
}
```
response:
```json
{
	"res": {
		"ret":0,
		"msg":"ok",
	}
}
```

### /v1/tenant/disable (Required){#tenant-disable}

租户停用时的主动调用，调用相关插件并认证。插件收到此请求时需要删除租户的数据之类的操作。返回正确。
```
Post /v1/tenant/disable
```

| HTTP CODE | 说明     |
| --------- | -------- |
| 200       | 成功     |
| 500       | 内部错误 |

request:
```json
{
	"tenant_id":"a",
	"extra":dafa
}
```
response:
```json
{
	"res":{
		"ret":0,
		"msg":"ok"
	}
}
```

### /v1/addons/identify (Optional){#addons-identify}

平台有新插件注册，且新插件实现了当前插件给出的扩展点时，调用当前插件此接口

用于通知当前插件有插件实现了对应扩展点，需自行验证相关接口是否可用，并返回平台验证结果。
```
Post /v1/addons/identify
```

| HTTP CODE | 说明     |
| --------- | -------- |
| 200       | 成功     |
| 500       | 内部错误 |

request:
```json
{
    "plugin": {
        "id": "axafd", // 请求插件id
        "version": "1.0" // 版本
    }, // 新增的插件的名称和版本
    "endpoint": [
        {
            "addons_point": "xxxx",
            "endpoint": "xxxx"
        }
    ] // 新增插件实现的端点和目标
}
```



response:
```json
{   
	"res":{
		"ret":0,
		"msg":"ok"
	}
}
```

