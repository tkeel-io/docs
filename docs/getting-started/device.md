---
sidebar_position: 1
---

# 如何连接你的设备

## 前置条件

需安装如下四个plugin ：1、iothub  2、auth 3、device 4、core;



## 流程



### 第一步：在tkeel 平台申请用户token



#### 依赖插件：auth
#### 动作:
##### 1 、创建一个租户   

URL

```
http://host:port/apis/security/v1/tenants
```

 params

| Name | Type | Required | Where | Description |
| ---- | ---- | -------- | ----- | ----------- |
|      |      |          |       |             |
|      |      |          |       |             |
|      |      |          |       |             |

example

```
curl -X POST "192.168.123.12:30707/apis/security/v1/tenants \
 -H "Content-Type: application/json" \
 -d '{
 
    }'
 
```

expected result 

```
```



##### 2、创建一个用户   

URL

```
http://host:port/apis/security/v1/tenants/users
```

params

| Name | Type | Required | Where | Description |
| ---- | ---- | -------- | ----- | ----------- |
|      |      |          |       |             |
|      |      |          |       |             |
|      |      |          |       |             |

example

```
curl -X POST "192.168.123.12:30707/apis/security/v1/tenants/users \
 -H "Content-Type: application/json" \
 -d '{
 
    }'
```

expected result

```
```



### 第二步： 在tkeel 平台注册数字化设备



#### 依赖插件：device ，插件功能列表：
#### 动作：
##### 1 、创建设备

URL

```
http://host:port/v1/devices
```

params

| Name | Type | Required | Where | Description |
| ---- | ---- | -------- | ----- | ----------- |
|      |      |          |       |             |
|      |      |          |       |             |
|      |      |          |       |             |

example

```
```

expected result

```
```



##### 2 、创建设备组（可选）

URL

```
http://host:port/v1/groups
```

params

| Name | Type | Required | Where | Description |
| ---- | ---- | -------- | ----- | ----------- |
|      |      |          |       |             |
|      |      |          |       |             |
|      |      |          |       |             |

example

```
```

expected result

```
```



##### 3 、添加设备进设备组分类（可选）

URL

```
httpL//host:port/v1/{id}/items
```

params

| Name | Type | Required | Where | Description |
| ---- | ---- | -------- | ----- | ----------- |
|      |      |          |       |             |
|      |      |          |       |             |
|      |      |          |       |             |

example

```

```

expected result

```

```



### 第三步： 发送数据到tkeel 平台



#### 依赖插件：iothub、core
#### 动作：
##### MQTT 协议：

publish topic

```

```

example

```
```



##### HTTP 连接：

URL

```

```

example

```
```



##### COAP 连接：

URL

```

```

example

```

```



### 第四步： 从tkeel平台 获取设备数据



#### 依赖插件：device
#### 动作：
##### 查询：

URL

```

```

params

```
```

example

```
```

expected result

```
```



##### 订阅：

```

```


