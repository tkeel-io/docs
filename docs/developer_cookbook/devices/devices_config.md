---
sidebar_position: 3
title: " Getting Started"
id: connect-device
---

# Getting Started
跟着本文档的流程，您将体验设备连接以及获取相应数据的整体表现。
## Prerequisites

确保平台中安装如下四个插件 ：
1. iothub
2. auth
3. device
4. core;


### 第一步：在 tkeel 平台申请用户 token

**依赖插件：auth**
#### 操作:
##### 1. 创建一个租户   
[创建租户 API]
```
http://host:port/apis/security/v1/tenants
```

 Params

| Name | Type | Required | Where | Description |
| ---- | ---- | -------- | ----- | ----------- |
|      |      |          |       |             |
|      |      |          |       |             |
|      |      |          |       |             |

**example**
```bash
curl -X POST "192.168.123.12:30707/apis/security/v1/tenants \
 -H "Content-Type: application/json" \
 -d '{
 
    }'
 
```

expected result 

```
```



##### 2. 创建一个用户

[创建用户 API]
```
http://host:port/apis/security/v1/tenants/users
```

params

| Name | Type | Required | Where | Description |
| ---- | ---- | -------- | ----- | ----------- |
|      |      |          |       |             |
|      |      |          |       |             |
|      |      |          |       |             |

**example**

```bash
curl -X POST "192.168.123.12:30707/apis/security/v1/tenants/users \
 -H "Content-Type: application/json" \
 -d '{
 
    }'
```

expected result

```
```



### 第二步： 在 tkeel 平台注册数字化设备
#### 依赖插件：device ，插件功能列表：
#### 操作：
##### 1. 创建设备

[创建设备 API]
```
http://host:port/v1/devices
```

params

| Name | Type | Required | Where | Description |
| ---- | ---- | -------- | ----- | ----------- |
|      |      |          |       |             |
|      |      |          |       |             |
|      |      |          |       |             |

**example**

```
```

expected result

```
```



##### 2. 创建设备组（可选）

[创建设备组 API]

```
http://host:port/v1/groups
```

Params

| Name | Type | Required | Where | Description |
| ---- | ---- | -------- | ----- | ----------- |
|      |      |          |       |             |
|      |      |          |       |             |
|      |      |          |       |             |

**Example**

```
```

Expected result

```
```



##### 3. 添加设备进设备组分类（可选）

[添加设备进设备组分类 API]
```
httpL//host:port/v1/{id}/items
```

Params

| Name | Type | Required | Where | Description |
| ---- | ---- | -------- | ----- | ----------- |
|      |      |          |       |             |
|      |      |          |       |             |
|      |      |          |       |             |

**Example**

```

```

Expected result

```

```



### 第三步： 发送数据到tkeel 平台
#### 依赖插件：iothub， [core](../../core/getting_started.md)
#### 操作：
##### MQTT 协议：

Publish Topic

```

```

**Example**

```
```
##### HTTP 连接：

[请求 API]

```

```

**Example**

```
```



##### COAP 连接：

[请求 API]

```

```

**Example**

```

```



### 第四步： 从 tkeel平台 获取设备数据

#### 依赖插件：device
#### 操作：
##### 查询：

[设备查询 API]

```

```

Params

```
```

**Example**

```
```

Expected result

```
```



##### 订阅：

```

```


