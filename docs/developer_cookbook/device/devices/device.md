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
|parentId|body|string|设备组ID，按照目前的设计是对于没有制定设备组的默认放在default 设备组里面。default 在后端看来也是一个设备组。这里涉及到一个操作就是，前端需要提前创建好默认设备组，此处填默认设备组的ID。无设备组填写""|
|parentName|body|string|设备组名称|
|directConnection|body|bool|是否直连，直连的意思是直接对接iothub 接受数据（例如平台网关设备），非直连表示数据来源于其他设备数据映射（比如网关下子设备）。非直连设备目前必须要存在模板（配置设备数据映射关系后，模板映射的依据）。|
|templateId|body|string|设备模板ID，指定设备模板后，设备数据按照模板约束。无设备模板 填写""|
|templateName|body|string|设备模板名称|
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
        "parentId":"",
    	"parnetName":"",
        "directConnection":true,
        "templateId":"",
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
                    "parentId": "",
                    "parentName":"",
                    "name": "sensor1",
                    "selfLearn": false,
                    "templateId": "",
                    "templateName":""
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
| parentName  | body       | string | 父设备组名称                        |
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
	"parentName":"",
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
                    "parentId": "",
                    "parentName":""
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







### 3.3 设备/设备组层级

无乱是创建设备 ，还是创建设备组，后台都默认创建一个字段sysField._spacePath，此字段承载实体路径信息，由上层所有层级parentId拼接而成。用于搜索和构建设备组层级关系。

#### 3.3.1 获取设备组层级关系(空间树)

后端的做法是先全量查出所有的设备组（假如设备组过多 ，core没法全量返回的可能问题后续再讨论），通过解析  sysField._spacePath 字段内容 ，组成树状结构的map  

```json
post  127.0.0.1:31234/v1/groups/tree
```

#### example

##### request

```json
curl --location --request POST '127.0.0.1:31234/v1/groups/tree' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY0NDgyMzA2Miwic3ViIjoidXNyLTMzNzM3OTQ1YzJiNzE4ZGI0YzMwOWQ2MzNkMmYifQ.dwZtc-TdXN_Ja3V3ckkYkcXxYO-XTjNduFjChfVoSSg_rAmuiWJ8_6kxFPd44odp7H6GyJRzEsznjsd4L3dUBg' \
--header 'Content-Type: application/json' \
--data-raw '{
    "page_num":1,
    "page_size":1000,
    "order_by":"name",
    "is_descending":false ,
    "query":"",
    "condition":[{
        "field":"type",
        "operator":"$eq",
        "value":"group"
    }]
}'
```

说明： limit 足够大才能全量查处所有的设备组，才能构成完整的空间树

**之所以加body 字段，目的是 还可以对树进行筛选，不排除未来有这种需求**



##### response

```json
{
    "code": 200,
    "msg": "ok",
    "data": {
        "@type": "type.googleapis.com/api.group.v1.GetGroupTreeResponse",
        "GroupTree": {
            "09c9325d-2a7f-462b-a5cc-48749fc01ef8": {},
            "17dc1226-cec3-4930-9152-09022591b9b2": {},
            "23d694d2-299a-456b-bfbb-815ec48f6fc8": {},
            "2d8c69cc-851a-4980-acda-da295d2142f4": {},
            "3fdcd1b6-b637-4ab6-95cc-eb5d8942a909": {
                "6f2cf9c9-613f-4851-b11a-c2b6c2db4775": {}
            },
            "43ce9690-7c5d-4e62-be07-fb16a13f67d0": {
                "b170b00c-1ac8-47a1-b7cc-9f39b4bb1afc": {},
                "d22e5bf4-ab4c-4d99-be9a-3ddda3fcb7bb": {
                    "95d05510-fdef-4020-83a5-800a2c2504d6": {}
                }
            },
            "491b74da-0dcc-4fd1-90c8-a25867483abc": {
                "2307e08d-fdcd-4d5e-93bf-5dc066a6e85d": {},
                "33a88347-cbde-47c4-b72f-49fcbad87912": {},
                "3d004033-9336-452d-86e4-3cfd12fbc5f0": {},
                "3fec51b0-75a5-42ce-8558-b5d4bfc0f630": {},
                "594961b3-3aeb-4f7c-bb4d-a9f196cc9e64": {},
                "6ce4280c-3e00-44c0-a544-8845de77eb28": {
                    "1909d775-55da-4cb3-b263-0da05f782eaa": {},
                    "27f98c0c-b56c-40b8-9699-f53fbf549a47": {
                        "0b11d71d-ff71-4c3f-8880-2e93347113cf": {},
                        "4908a39a-20f3-4c9b-9bd5-916ab6111b5b": {}
                    },
                    "8e584f2d-5bf4-4f1d-b960-fbd5b68a296d": {},
                    "a5be91c7-3374-4f42-8848-8a48dd901a75": {},
                    "b1953add-0472-4575-a2f6-2d1d2609cba8": {}
                },
                "97ccb933-d1c4-4c6e-81bd-8d42e7349bc7": {},
                "9bfcdedb-49d2-4d3e-aab9-1ab1e1c4a2b5": {},
                "b5af8e68-f158-46ea-b372-76fb6c7b50cd": {},
                "b8926352-2749-4404-be72-0d4ac59d25b5": {},
                "c4dcc03f-ebb0-4b2e-8966-03347eecec58": {},
                "c89194f3-43ca-4ea8-85b5-bbaf6f6ad02f": {},
                "cb97c5f1-6d92-4230-8e4c-cfcb2c349450": {},
                "dd575fd4-1d83-437c-9a08-78b821d0a01e": {},
                "e076f7a9-3364-4c96-9a52-a02e7637ca77": {},
                "f6a98ac4-81e3-42a6-b0cf-8b364c845c33": {
                    "58e10080-16a9-46b4-802f-e76e6a68eb71": {},
                    "59326ecd-6707-40ef-93d1-e4aba011bce7": {}
                },
                "fbbd725f-f55e-4674-ab46-d9f9a39a6dbf": {}
            },
            "7fe54a44-bef0-409e-a0f0-cd9a52fc87df": {},
            "8f0e210f-efef-4619-b716-d11294d8ce7b": {},
            "9fd06244-9267-4513-8ac9-08b748a944f9": {},
            "a0bb3b39-acac-450f-8200-4a5ff937d571": {},
            "b05f3496-8be4-424c-aa96-274e094aba92": {},
            "c2c8de1d-96cd-4abc-a7fb-ce0bb02fa099": {},
            "d3efc77c-470c-4f8f-9f65-94ac0864c783": {},
            "d9709d0c-04f3-4b14-b246-ddc6de1c59b5": {},
            "faee3c07-41d7-470d-87ab-1d1450a5ad31": {}
        }
    }
}
```

说明：按设备组id  构建出的 空间树

如果带上每个id 的详细内容  如下  ： nodeInfo 表示自己节点的所有信息，  subNode 表示下层的信息

```json
{
    "code": "io.tkeel.SUCCESS",
    "msg": "",
    "data": {
        "@type": "type.googleapis.com/api.group.v1.GetGroupTreeResponse",
        "GroupTree": {
            "0629d508-2b35-42b0-ab65-a04bd190c49d": {
                "nodeInfo": {
                    "id": "0629d508-2b35-42b0-ab65-a04bd190c49d",
                    "owner": "usr-33737945c2b718db4c309d633d2f",
                    "properties": {
                        "group": {
                            "description": "",
                            "ext": {},
                            "name": "测试设备组_001",
                            "parentId": "",
							"parentName":""
                        },
                        "sysField": {
                            "_createdAt": 1644896556921636000,
                            "_id": "0629d508-2b35-42b0-ab65-a04bd190c49d",
                            "_owner": "usr-33737945c2b718db4c309d633d2f",
                            "_source": "device",
                            "_spacePath": "0629d508-2b35-42b0-ab65-a04bd190c49d",
                            "_updatedAt": 1644896556921636000
                        }
                    },
                    "source": "device",
                    "type": "group"
                },
                "subNode": {}
            },
            "07bbe91a-0494-45ab-8e52-60c20261386f": {
                "nodeInfo": {
                    "id": "07bbe91a-0494-45ab-8e52-60c20261386f",
                    "owner": "usr-33737945c2b718db4c309d633d2f",
                    "properties": {
                        "group": {
                            "description": "",
                            "ext": {
                                "厂商": "厂商_A",
                                "版本": "1.0.0"
                            },
                            "name": "测试设备组_001",
                            "parentId": ""
                        },
                        "sysField": {
                            "_createdAt": 1644895063663798000,
                            "_id": "07bbe91a-0494-45ab-8e52-60c20261386f",
                            "_owner": "usr-33737945c2b718db4c309d633d2f",
                            "_source": "device",
                            "_spacePath": "07bbe91a-0494-45ab-8e52-60c20261386f",
                            "_updatedAt": 1644895063663798300
                        }
                    },
                    "source": "device",
                    "type": "group"
                },
                "subNode": {}
            },
            "0dfb11d5-8962-4607-aa80-b6f5c4007dc8": {
                "nodeInfo": {
                    "id": "0dfb11d5-8962-4607-aa80-b6f5c4007dc8",
                    "owner": "usr-33737945c2b718db4c309d633d2f",
                    "properties": {
                        "group": {
                            "description": "",
                            "ext": {
                                "厂商": "qingcloud2",
                                "版本": "1.0.1"
                            },
                            "name": "DeviceGroup_2",
                            "parentId": ""
                        },
                        "sysField": {
                            "_createdAt": 1644828922752394500,
                            "_id": "0dfb11d5-8962-4607-aa80-b6f5c4007dc8",
                            "_owner": "usr-33737945c2b718db4c309d633d2f",
                            "_source": "device",
                            "_spacePath": "0dfb11d5-8962-4607-aa80-b6f5c4007dc8",
                            "_updatedAt": 1644828922752394500
                        }
                    },
                    "source": "device",
                    "type": "group"
                },
                "subNode": {}
            },
            "491b74da-0dcc-4fd1-90c8-a25867483abc": {
                "nodeInfo": {},
                "subNode": {
                    "6ce4280c-3e00-44c0-a544-8845de77eb28": {
                        "nodeInfo": {},
                        "subNode": {
                            "1909d775-55da-4cb3-b263-0da05f782eaa": {
                                "nodeInfo": {
                                    "id": "1909d775-55da-4cb3-b263-0da05f782eaa",
                                    "owner": "usr-33737945c2b718db4c309d633d2f",
                                    "properties": {
                                        "group": {
                                            "description": "",
                                            "ext": {
                                                "test": "test"
                                            },
                                            "name": "group3",
                                            "parentId": "6ce4280c-3e00-44c0-a544-8845de77eb28"
                                        },
                                        "sysField": {
                                            "_createdAt": 1644810122059558700,
                                            "_id": "1909d775-55da-4cb3-b263-0da05f782eaa",
                                            "_owner": "usr-33737945c2b718db4c309d633d2f",
                                            "_source": "device",
                                            "_spacePath": "491b74da-0dcc-4fd1-90c8-a25867483abc/6ce4280c-3e00-44c0-a544-8845de77eb28/1909d775-55da-4cb3-b263-0da05f782eaa",
                                            "_updatedAt": 1644810122059558700
                                        }
                                    },
                                    "source": "device",
                                    "type": "group"
                                },
                                "subNode": {}
                            },
                            "8e584f2d-5bf4-4f1d-b960-fbd5b68a296d": {
                                "nodeInfo": {
                                    "id": "8e584f2d-5bf4-4f1d-b960-fbd5b68a296d",
                                    "owner": "usr-33737945c2b718db4c309d633d2f",
                                    "properties": {
                                        "group": {
                                            "description": "",
                                            "ext": {
                                                "test": "test"
                                            },
                                            "name": "group3",
                                            "parentId": "6ce4280c-3e00-44c0-a544-8845de77eb28"
                                        },
                                        "sysField": {
                                            "_createdAt": 1644810111997655000,
                                            "_id": "8e584f2d-5bf4-4f1d-b960-fbd5b68a296d",
                                            "_owner": "usr-33737945c2b718db4c309d633d2f",
                                            "_source": "device",
                                            "_spacePath": "491b74da-0dcc-4fd1-90c8-a25867483abc/6ce4280c-3e00-44c0-a544-8845de77eb28/8e584f2d-5bf4-4f1d-b960-fbd5b68a296d",
                                            "_updatedAt": 1644810111997655300
                                        }
                                    },
                                    "source": "device",
                                    "type": "group"
                                },
                                "subNode": {}
                            },
                            "a5be91c7-3374-4f42-8848-8a48dd901a75": {
                                "nodeInfo": {
                                    "id": "a5be91c7-3374-4f42-8848-8a48dd901a75",
                                    "owner": "usr-33737945c2b718db4c309d633d2f",
                                    "properties": {
                                        "group": {
                                            "description": "",
                                            "ext": {
                                                "test": "test"
                                            },
                                            "name": "group3",
                                            "parentId": "6ce4280c-3e00-44c0-a544-8845de77eb28"
                                        },
                                        "sysField": {
                                            "_createdAt": 1644808684413428200,
                                            "_id": "a5be91c7-3374-4f42-8848-8a48dd901a75",
                                            "_owner": "usr-33737945c2b718db4c309d633d2f",
                                            "_source": "device",
                                            "_spacePath": "491b74da-0dcc-4fd1-90c8-a25867483abc/6ce4280c-3e00-44c0-a544-8845de77eb28/a5be91c7-3374-4f42-8848-8a48dd901a75",
                                            "_updatedAt": 1644808684413428500
                                        }
                                    },
                                    "source": "device",
                                    "type": "group"
                                },
                                "subNode": {}
                            },
                            "b1953add-0472-4575-a2f6-2d1d2609cba8": {
                                "nodeInfo": {
                                    "id": "b1953add-0472-4575-a2f6-2d1d2609cba8",
                                    "owner": "usr-33737945c2b718db4c309d633d2f",
                                    "properties": {
                                        "group": {
                                            "description": "",
                                            "ext": {
                                                "test": "test"
                                            },
                                            "name": "group3",
                                            "parentId": "6ce4280c-3e00-44c0-a544-8845de77eb28"
                                        },
                                        "sysField": {
                                            "_createdAt": 1644810119130464500,
                                            "_id": "b1953add-0472-4575-a2f6-2d1d2609cba8",
                                            "_owner": "usr-33737945c2b718db4c309d633d2f",
                                            "_source": "device",
                                            "_spacePath": "491b74da-0dcc-4fd1-90c8-a25867483abc/6ce4280c-3e00-44c0-a544-8845de77eb28/b1953add-0472-4575-a2f6-2d1d2609cba8",
                                            "_updatedAt": 1644810119130464800
                                        }
                                    },
                                    "source": "device",
                                    "type": "group"
                                },
                                "subNode": {}
                            }
                        }
                    }
                }
            },
            "a31a508c-3838-451c-be3c-4a20d3f2cd64": {
                "nodeInfo": {
                    "id": "a31a508c-3838-451c-be3c-4a20d3f2cd64",
                    "owner": "usr-33737945c2b718db4c309d633d2f",
                    "properties": {
                        "group": {
                            "description": "",
                            "ext": {
                                "厂商": "qingcloud2",
                                "版本": "1.0.1"
                            },
                            "name": "DeviceGroup_2",
                            "parentId": ""
                        },
                        "sysField": {
                            "_createdAt": 1644897321224237800,
                            "_id": "a31a508c-3838-451c-be3c-4a20d3f2cd64",
                            "_owner": "usr-33737945c2b718db4c309d633d2f",
                            "_source": "device",
                            "_spacePath": "a31a508c-3838-451c-be3c-4a20d3f2cd64",
                            "_updatedAt": 1644897321224237800
                        }
                    },
                    "source": "device",
                    "type": "group"
                },
                "subNode": {}
            },
            "c0ff98fb-1135-43d5-be54-1046a488501c": {
                "nodeInfo": {
                    "id": "c0ff98fb-1135-43d5-be54-1046a488501c",
                    "owner": "usr-33737945c2b718db4c309d633d2f",
                    "properties": {
                        "group": {
                            "description": "",
                            "ext": {
                                "厂商": "厂商_A",
                                "版本": "1.0.1"
                            },
                            "name": "测试设备组_001",
                            "parentId": ""
                        },
                        "sysField": {
                            "_createdAt": 1644896051026015700,
                            "_id": "c0ff98fb-1135-43d5-be54-1046a488501c",
                            "_owner": "usr-33737945c2b718db4c309d633d2f",
                            "_source": "device",
                            "_spacePath": "c0ff98fb-1135-43d5-be54-1046a488501c",
                            "_updatedAt": 1644896051026016000
                        }
                    },
                    "source": "device",
                    "type": "group"
                },
                "subNode": {}
            },
            "d3967629-2906-4629-ba08-35bd229b8b39": {
                "nodeInfo": {
                    "id": "d3967629-2906-4629-ba08-35bd229b8b39",
                    "owner": "usr-33737945c2b718db4c309d633d2f",
                    "properties": {
                        "group": {
                            "description": "",
                            "ext": {
                                "厂商": "qingcloud2",
                                "版本": "1.0.1"
                            },
                            "name": "DeviceGroup_2",
                            "parentId": ""
                        },
                        "sysField": {
                            "_createdAt": 1644897081691624700,
                            "_id": "d3967629-2906-4629-ba08-35bd229b8b39",
                            "_owner": "usr-33737945c2b718db4c309d633d2f",
                            "_source": "device",
                            "_spacePath": "d3967629-2906-4629-ba08-35bd229b8b39",
                            "_updatedAt": 1644897081691624700
                        }
                    },
                    "source": "device",
                    "type": "group"
                },
                "subNode": {}
            }
        }
    }
}
```





#### 3.3.2 改变设备/设备组层级关系

 无论是移动设备或者设备组，只需调用更新接口，更新设备或设备组的parentId,如果其有下层，则会自动扩散更改sysField._spacePath.



###  3.4 搜索设备/设备组/设备模板

任何关于实体（设备、设备组、设备模板）搜索的入口都为

```
post v1/search
```

搜索内容和规则由body 确定，body 由如下部分构成

| 字段          | tpye     | 类型   | 说明                                                         |
| ------------- | -------- | ------ | ------------------------------------------------------------ |
| page_num      | require  | uint32 | 记录开始页，从1开始                                          |
| page_size     | require  | uint32 | 每页限制条数,        ps: 如果填0 ，则只返回数量统计，而不返回实际的列表。 |
| order_by      | optional | string | 排序字段                                                     |
| is_descending | optional | bool   | 是否逆序， false：不逆序，true:逆序                          |
| query         | optional | string | es 模糊查询                                                  |
| condition     | optional | object | 组合条件                                                     |

condtion 说明   **组合condtion  可以实现很多类型的search， 多个 condtion 之间是 并且关系**

| 字段     | Located in | 类型   | 说明                                                         |
| -------- | ---------- | ------ | ------------------------------------------------------------ |
| field    | body       | string | 查询操作字段                                                 |
| operator | body       | string | $lt：小于  $lte：小于等于 $gt：大于 $gte：大于等于 $eq：等于 $neq：不等于 $prefix：前缀匹配 $wildcard：模糊匹配 |
| value    | body       | 不限   | 值                                                           |





#### 3.4.1 获取设备列表

body 内容说明

```json
curl --location --request POST '127.0.0.1:31234/v1/search' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY0NDgyMzA2Miwic3ViIjoidXNyLTMzNzM3OTQ1YzJiNzE4ZGI0YzMwOWQ2MzNkMmYifQ.dwZtc-TdXN_Ja3V3ckkYkcXxYO-XTjNduFjChfVoSSg_rAmuiWJ8_6kxFPd44odp7H6GyJRzEsznjsd4L3dUBg' \
--header 'Content-Type: application/json' \
--data-raw '{
    "page_num":1,
    "page_size":1000,
    "order_by":"name",
    "is_descending":false ,
    "query":"",
    "condition":[{
        "field":"type",
        "operator":"$eq",
        "value":"device"
    }]
}'
```

condition 说明

```json
"condition":[{
        "field":"type",   //字段为type
        "operator":"$eq", // $lt：小于  $lte：小于等于 $gt：大于 $gte：大于等于 $eq：等于 $neq：不等于 $prefix：前缀匹配 $wildcard：模糊匹配
        "value":"device"  //类型为device
    }]
```

#### 3.4.2 获取设备组列表（平铺结构）

body 内容说明

```json
curl --location --request POST '127.0.0.1:31234/v1/search' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY0NDgyMzA2Miwic3ViIjoidXNyLTMzNzM3OTQ1YzJiNzE4ZGI0YzMwOWQ2MzNkMmYifQ.dwZtc-TdXN_Ja3V3ckkYkcXxYO-XTjNduFjChfVoSSg_rAmuiWJ8_6kxFPd44odp7H6GyJRzEsznjsd4L3dUBg' \
--header 'Content-Type: application/json' \
--data-raw '{
 	"page_num":1,
    "page_size":1000,
    "order_by":"name",
    "is_descending":false ,
    "query":"",
    "condition":[{
        "field":"type",
        "operator":"$eq",
        "value":"group"
    }]
}'
```

condition 说明

```json
"condition":[{
        "field":"type",   //字段为type
        "operator":"$eq", // $lt：小于  $lte：小于等于 $gt：大于 $gte：大于等于 $eq：等于 $neq：不等于 $prefix：前缀匹配 $wildcard：模糊匹配
        "value":"group"  //类型为group
    }]
```

#### 3.4.3 获取设备模板列表

body 内容说明

```json
curl --location --request POST '127.0.0.1:31234/v1/search' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY0NDgyMzA2Miwic3ViIjoidXNyLTMzNzM3OTQ1YzJiNzE4ZGI0YzMwOWQ2MzNkMmYifQ.dwZtc-TdXN_Ja3V3ckkYkcXxYO-XTjNduFjChfVoSSg_rAmuiWJ8_6kxFPd44odp7H6GyJRzEsznjsd4L3dUBg' \
--header 'Content-Type: application/json' \
--data-raw '{
 	"page_num":1,
    "page_size":1000,
    "order_by":"name",
    "is_descending":false ,
    "query":"",
    "condition":[{
        "field":"type",
        "operator":"$eq",
        "value":"template"
    }]
}'
```

condition 说明

```json
"condition":[{
        "field":"type",   //字段为type
        "operator":"$eq", // $lt：小于  $lte：小于等于 $gt：大于 $gte：大于等于 $eq：等于 $neq：不等于 $prefix：前缀匹配 $wildcard：模糊匹配
        "value":"template"  //类型为group
    }]
```



#### 3.4.4 根据设备组ID 获取设备组下所有设备列表

body 内容说明

```json
curl --location --request POST '127.0.0.1:31234/v1/search' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY0NDgyMzA2Miwic3ViIjoidXNyLTMzNzM3OTQ1YzJiNzE4ZGI0YzMwOWQ2MzNkMmYifQ.dwZtc-TdXN_Ja3V3ckkYkcXxYO-XTjNduFjChfVoSSg_rAmuiWJ8_6kxFPd44odp7H6GyJRzEsznjsd4L3dUBg' \
--header 'Content-Type: application/json' \
--data-raw '{
 	"page_num":1,
    "page_size":1000,
    "order_by":"name",
    "is_descending":false ,
    "query":"",
    "condition":[
     {
            "field":"sysField._spacePath",
            "operator":"$wildcard",
            "value":"6ce4280c-3e00-44c0-a544-8845de77eb28"
     },
     {
            "field":"type",
            "operator":"$eq",
            "value":"device"
     }
       
    ]
}'
```

condition 说明

```json
"condition":[
        {
            "field":"sysField._spacePath",  //通过路径选定value指定设备组ID下层所有实体（设备、设备组）
            "operator":"$wildcard",         //模糊匹配
            "value":"6ce4280c-3e00-44c0-a544-8845de77eb28" //当全设备组id
        },
        {
            "field":"type",                //通过类型选定（设备）
            "operator":"$eq",              //相等
            "value":"device"               //设备类型
        }
       
    ]
```



#### 3.4.5 根据设备模板ID 获取引用模板的所有设备列表

body 内容说明

```json
curl --location --request POST '127.0.0.1:31234/v1/search' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY0NDgyMzA2Miwic3ViIjoidXNyLTMzNzM3OTQ1YzJiNzE4ZGI0YzMwOWQ2MzNkMmYifQ.dwZtc-TdXN_Ja3V3ckkYkcXxYO-XTjNduFjChfVoSSg_rAmuiWJ8_6kxFPd44odp7H6GyJRzEsznjsd4L3dUBg' \
--header 'Content-Type: application/json' \
--data-raw '{
 	"page_num":1,
    "page_size":1000,
    "order_by":"name",
    "is_descending":false ,
    "query":"",
    "condition":[ 
        {
            "field":"basicInfo.templateId",
            "operator":"$eq",
            "value":"4a8eac20-699c-4f83-a2b4-da5233304509"
        }
       
    ]
}'
```

condition 说明

```json
"condition":[
            "field":"basicInfo.templateId",                   //指定实体模板id字段
            "operator":"$eq",                                 //相等
            "value":"4a8eac20-699c-4f83-a2b4-da5233304509"    //模板id
        }
       
    ]
```



#### 3.4.5 根据设备状态获取不同状态下的所有设备列表

body 内容说明

```json
curl --location --request POST '127.0.0.1:31234/v1/search' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY0NDgyMzA2Miwic3ViIjoidXNyLTMzNzM3OTQ1YzJiNzE4ZGI0YzMwOWQ2MzNkMmYifQ.dwZtc-TdXN_Ja3V3ckkYkcXxYO-XTjNduFjChfVoSSg_rAmuiWJ8_6kxFPd44odp7H6GyJRzEsznjsd4L3dUBg' \
--header 'Content-Type: application/json' \
--data-raw '{
 	"page_num":1,
    "page_size":1000,
    "order_by":"name",
    "is_descending":false ,
    "query":"",
    "condition":[
      
        {
            "field":"sysField._status",
            "operator":"$eq",
            "value":"offline"
        }
       
    ]
}'
```

condition 说明

```json
 "condition":[
      
        {
            "field":"sysField._status", //指定 实体表示状态的字段
            "operator":"$eq",           //相等
            "value":"offline"           //状态值： 1 online  2 offline 3、disable 4、simulatedOnline
        }
       
    ]
```



#### 3.4.6 其他根据条件搜索实体 条件 填写规则

body 内容说明

```
```



#### 





