---

title: 设备生命周期及组织
sidebar_position: 1
---

## 1. 概念

**设备**：指代物理世界的物的数字化表达载体
            目前包含如下维度信息

* **基本信息**    ：展示及编辑设备名、ID、token 、设备组等基本信息
                         扩展信息：对设备的外在定义 例如：厂商、所属部门、位置、批次，价格、购买价格等外在描述

   * **连接信息**    :  展示ip、协议等连接维度的信息、及编辑配置一些连接协议
   * **原始数据**    ：展示及操作原始数据流
   * **属性数据** ：展示及编辑按照模板约束的属性等信息
   * **遥测数据** ：展示及编辑按照模板约束的测点详细信息
   * **命令**：  展示及编辑反控命令 
   * **关系** ：展示及编辑数据映射关系



## 2. 控制台操作指南

### 2.1 设备

​         操作指南

### 2.2 设备组

​          操作指南







## 3.  设备及设备组API 

**不同的是生成设备及设备组的入口和形式，但最终都会承载于如下基础动作相关API**

### 3.1 设备

#### 创建设备

​     定义一个数字化设备，包括设备的基础信息、扩展信息、连接方式、模板id、设备组等信息

```
post 127.0.0.1:31234/v1/devices
```



#### 字段说明

|字段|Located in|类型|描述|
|---|---|----|----|
|name|body|string|设备名称|
|description|body|string|设备说明|
|groupId|body|string|设备组ID，按照目前的设计是对于没有制定设备组的默认放在default 设备组里面。default 在后端看来也是一个设备组。这里涉及到一个操作就是，前端需要提前创建好默认设备组，此处填默认设备组的ID。无设备组填写""|
|directConnection|body|bool|是否直连，直连的意思是直接对接iothub 接受数据（例如平台网关设备），非直连表示数据来源于其他设备数据映射（比如网关下子设备）。非直连设备目前必须要存在模板（配置设备数据映射关系后，模板映射的依据）。|
|templateId|body|string|设备模板ID，指定设备模板后，设备数据按照模板约束。无设备模板 填写""|
|selfLearn|body|bool|模板自学习开关，是一种动作行为，表示未指定模板或者模板涵盖不全的情况下。自动生成相关的属性、遥测。|
|ext|body|object|是一个kv 的map  ，可自由定义和扩展，承载设备的一些外围信息。|

#### example

##### request

````json
curl --location --request POST '127.0.0.1:31234/v1/devices' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY0NDQwMDAzMiwic3ViIjoidXNyLTMzNzM3OTQ1YzJiNzE4ZGI0YzMwOWQ2MzNkMmYifQ.OmXezdXwECgzEMVaHEkgvLtKgQOONjZkeC5djJ-00-8ntfJi2fJl2Kqo0MoCSLW0xKlEpecZ1d3RloSxJNZo9g' \
--data-raw '
{
        "name":"sensor1",
        "description":"test",
        "group":"",
        "directConnection":true,
        "templateId":"",
        "selfLearn":false,
        "ext":{
            "location":"wuhan",
            "commany":"qingcloud"
        }
}
'
````

##### response

```json
{
    "code": 200,
    "msg": "ok",
    "data": {
        "@type": "type.googleapis.com/api.device.v1.CreateDeviceResponse",
        "deviceObject": {
            "id": "a1bc532b-6893-4d56-8e51-62a5b40297d7",
            "plugin": "",
            "source": "device",
            "owner": "usr-33737945c2b718db4c309d633d2f",
            "type": "device",
            "mappers": [],
            "configs": {},
            "properties": {
                "basicInfo": {
                    "description": "test",
                    "directConnection": true,
                    "ext": {
                        "commany": "qingcloud",
                        "location": "wuhan"
                    },
                    "group": "",
                    "name": "sensor1",
                    "selfLearn": false,
                    "templateId": ""
                },
                "sysField": {
                    "_createdAt": 1644397058647921200,
                    "_enable": true,
                    "_id": "a1bc532b-6893-4d56-8e51-62a5b40297d7",
                    "_owner": "usr-33737945c2b718db4c309d633d2f",
                    "_source": "device",
                    "_spacePath": "a1bc532b-6893-4d56-8e51-62a5b40297d7",
                    "_status": false,
                    "_token": "OTY0ZTkxM2UtYjA3OC0zNzM0LWJlYTAtODdiZDY4YzRjMGM4",
                    "_updatedAt": 1644397058647921200
                }
            }
        }
    }
}
```

相关其他API

| API             | 描述 |
| --------------- | ---- |
| UpdateDevice    |      |
| GetDevice       |      |
| DeleteDevice    |      |
| AddDeviceExt    |      |
| UpdateDeviceExt |      |
| DelDeviceExt    |      |



### 3.2 设备组

#### 创建设备组

  设备组相当与一个空间，目的是为设备进行归类

```
post 127.0.0.1:31234/v1/groups
```

#### 字段说明

| 字段        | Located in | 类型   | 描述                                |
| ----------- | ---------- | ------ | ----------------------------------- |
| name        | body       | string | 设备组名称                          |
| description | body       | string | 设备组说明                          |
| parentId    | body       | string | 父设备组ID,无父设备组填写""         |
| ext         | body       | object | 可扩展的kv map,承载设备组的外围信息 |

#### Example 

##### request

```json
curl --location --request POST '127.0.0.1:31234/v1/groups' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY0NDQwNDAzMSwic3ViIjoidXNyLTMzNzM3OTQ1YzJiNzE4ZGI0YzMwOWQ2MzNkMmYifQ.d41OCqzFryXHAw45nPeOxD0wznzMw_VP2eWUudOShTO5p7apJazzmKPHdAg8xdqhhR6ElScKy2y7tbaSCrNLbw' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"group_name",
    "description":"group desc",
    "parentId":"",
    "ext":{
        "classify":"abc",
        "other":"ohter"
    }

}'
```

##### response

```json
{
    "code": 200,
    "msg": "ok",
    "data": {
        "@type": "type.googleapis.com/api.group.v1.CreateGroupResponse",
        "groupObject": {
            "id": "ed476ffd-d7d4-4f5b-adb7-b8790fe91e5b",
            "plugin": "",
            "source": "device",
            "owner": "usr-33737945c2b718db4c309d633d2f",
            "type": "group",
            "mappers": [],
            "configs": {},
            "properties": {
                "group": {
                    "description": "group desc",
                    "ext": {
                        "classify": "abc",
                        "other": "ohter"
                    },
                    "name": "group_name",
                    "parentId": ""
                },
                "sysField": {
                    "_createdAt": 1644398723793111600,
                    "_id": "ed476ffd-d7d4-4f5b-adb7-b8790fe91e5b",
                    "_owner": "usr-33737945c2b718db4c309d633d2f",
                    "_source": "device",
                    "_spacePath": "ed476ffd-d7d4-4f5b-adb7-b8790fe91e5b",
                    "_updatedAt": 1644398723793111600
                }
            }
        }
    }
}
```

####  指定父设备组

##### request  

```
```

##### response

```
```



### 3.3 设备/设备组层级关系及搜索

无乱是创建设备 ，还是创建设备组，后台都默认创建一个字段sysField._spacePath，此字段承载实体路径信息，由上层所有层级parentId拼接而成。用于搜索和构建设备组层级关系。

#### 3.3.1 获取设备组层级关系(空间树)

```
get  127.0.0.1:31234/v1/groups/tree
```

#### example

##### request

```
```

##### response

```
```

#### 3.3.2 改变设备/设备组层级关系

 无论是移动设备或者设备组，只需调用更新接口，更新设备或设备组的parentId,如果其有下层，则会自动扩散更改sysField._spacePath.

#### 3.3.3 搜索设备/设备组

