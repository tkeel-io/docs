---
title: 设备基础数据
sidebar_position: 2
---
## 概念 
设备是一个实体，承载这各个维度的信息，以下几个维度的信息可直接通过查询设备实体直接获取，相当于设备实体的静态信息或者由应用发起的信息。

* 设备基本信息及扩展信息
* 设备模板信息
* 设备关系信息
* 设备命令调用

如下为一个指定了设备模板的设备实体的获取详细信息

```json
{
    "code": 200,
    "msg": "ok",
    "data": {
        "@type": "type.googleapis.com/api.device.v1.CreateDeviceResponse",
        "deviceObject": {
            "id": "bba16255-bf35-468a-b000-25181bfcdb02",
            "plugin": "",
            "source": "device",
            "owner": "usr-33737945c2b718db4c309d633d2f",
            "type": "device",
            "mappers": [],
            "configs": {
                "attributes": {
                    "define": {
                        "fields": {
                            "serial-2": {
                                "define": {
                                    "default_value": "xxxxxxxx",
                                    "rw": "r"
                                },
                                "description": "设备批次",
                                "enabled": false,
                                "enabled_search": false,
                                "enabled_time_series": false,
                                "id": "serial-2",
                                "last_time": 1644460865172,
                                "type": "string",
                                "name":"序列号"
                                "weight": 0
                            }
                        }
                    },
                    "description": "",
                    "enabled": true,
                    "enabled_search": true,
                    "enabled_time_series": true,
                    "id": "attributes",
                    "last_time": 1644460865172,
                    "type": "struct",
                    "weight": 0
                },
                "telemetry": {
                    "define": {
                        "fields": {
                            "voltage": {
                                "define": {
                                    "ext": {
                                        "alias": "EM_BI",
                                        "ratio_of_transformation": "0.001"
                                    },
                                    "max": "1000",
                                    "min": "0",
                                    "step": "0.1",
                                    "unit": "v",
                                    "unitName": "伏"
                                },
                                "description": "A相电压",
                                "enabled": false,
                                "enabled_search": false,
                                "enabled_time_series": false,
                                "id": "voltage",
                                "last_time": 1644460950290,
                                "type": "int",
                                "name":"电压",
                                "weight": 0
                            }
                        }
                    },
                    "description": "",
                    "enabled": true,
                    "enabled_search": true,
                    "enabled_time_series": true,
                    "id": "telemetry",
                    "last_time": 1644460950290,
                    "type": "struct",
                    "weight": 0
                }
            },
            "properties": {
                "basicInfo": {
                    "description": "test",
                    "directConnection": false,
                    "ext": {
                        "commany": "qingcloud",
                        "location": "wuhan"
                    },
                    "name": "sensor1",
                    "parentId": "",
                    "selfLearn": false,
                    "templateId": "935b39e4-11fc-43d7-9c08-0eab66f94cc5"
                },
                "sysField": {
                    "_createdAt": 1644461780472115700,
                    "_enable": true,
                    "_id": "bba16255-bf35-468a-b000-25181bfcdb02",
                    "_owner": "usr-33737945c2b718db4c309d633d2f",
                    "_source": "device",
                    "_spacePath": "bba16255-bf35-468a-b000-25181bfcdb02",
                    "_status": 1,
                    "_token": "OGIxMTdlMTYtZWE5Yy0zNDE4LWE3YTktYjhiM2U3Yzk3YzE1",
                    "_updatedAt": 1644461780472115700
                }
            }
        }
    }
}
```

## 1、设备基本信息

设备基本 信息包含创建定义的信息 和 系统生成的信息

propertie 里分类字段：basicInfo  AND  sysField

详情：

```json
"basicInfo": {  //创建定义的设备基本信息
    "description": "test",       //设备说明
    "directConnection": true,    // 是否直连
    "ext": {                     //扩展信息  
        "commany": "qingcloud",  
        "location": "wuhan" 
    },
    "name": "sensor1",   //设备名称
    "parentId": "",      //设备组ID
    "selfLearn": false,  //自学习开关
    "templateId": "935b39e4-11fc-43d7-9c08-0eab66f94cc5" //设备模板Id
},
"sysField": {  //系统生产的信息
    "_createdAt": 1644461780472115700,   //创建时间
    "_enable": true,                     //禁用or 启用  （暂未使用）
    "_id": "bba16255-bf35-468a-b000-25181bfcdb02", //设备实体ID
    "_owner": "usr-33737945c2b718db4c309d633d2f", //所有者
    "_source": "device",                          //来源插件
    "_spacePath": "bba16255-bf35-468a-b000-25181bfcdb02", //空间路径，内容由所有上层父ID（设备组）拼接而成，（此处没有设备组故是自己的id）。
    "_status": "offline",   //状态 (在线online、离线offline、模拟在线SimulatedOline 、禁用disable）
    "_subscribeAddr":"mqp://127.0.0.1:5672/abc",//订阅地址   如果为空"" 表示没有订阅 
    "_token": "OGIxMTdlMTYtZWE5Yy0zNDE4LWE3YTktYjhiM2U3Yzk3YzE1",  //连接的token  ，如果是直连设备需返回给用户。
    "_updatedAt": 1644461780472115700  //更新时间
}
```



## 2、设备模板信息

设备实体详情里分类字段：configs

详情：

设备指定模板创建后，core 的操作是  将模板实体的config 部分拷贝至设备实体的config 部分，此部分约束设备的数据，是模板约束定义，不是模板数据

有个前置概念：

 设备实体与 设备模板实体的    区别就是  设备实体有数据 而模板实体没有数据 
 本质其实是一样的

**故关于单独添加一个属性、遥测、命令给设备实体，相当于模板里的添加属性、遥测、命令的API 的ID 填写为设备实体ID即可。 也就是操作设备模板实体对象的API(属性、遥测、命令)，同样适用于操作设备实体对象 **

```json
"configs": {
    "attributes": {    //属性
        "define": {
            "fields": {  //属性列表字段
                "serial-2": {   
                    "define": {
                        "default_value": "xxxxxxxx",
                        "rw": "r"
                    },
                    "description": "设备批次",
                    "enabled": false,
                    "enabled_search": false,
                    "enabled_time_series": false,
                    "id": "serial-2",
                    "last_time": 1644460865172,
                    "type": "string",
                    "name": "序列号"
                                "weight": 0
                }
            }
        },
        "description": "",
        "enabled": true,
        "enabled_search": true,
        "enabled_time_series": true,
        "id": "attributes",
        "last_time": 1644460865172,
        "type": "struct",
        "weight": 0
    },
    "telemetry": {   //遥测
        "define": {
            "fields": {   //要测列表字段
                "voltage": {
                    "define": {
                        "ext": {
                            "alias": "EM_BI",
                            "ratio_of_transformation": "0.001"
                        },
                        "max": "1000",
                        "min": "0",
                        "step": "0.1",
                        "unit": "v",
                        "unitName": "伏"
                    },
                    "description": "A相电压",
                    "enabled": false,
                    "enabled_search": false,
                    "enabled_time_series": false,
                    "id": "voltage",
                    "last_time": 1644460950290,
                    "type": "int",
                    "name": "电压",
                    "weight": 0
                }
            }
        },
        "description": "",
        "enabled": true,
        "enabled_search": true,
        "enabled_time_series": true,
        "id": "telemetry",
        "last_time": 1644460950290,
        "type": "struct",
        "weight": 0
    }
},
```



## 3、设备属性值修改

request

```json
curl --location --request POST '127.0.0.1:31234/v1/devices/iotd-2f130021-f24b-4856-80fd-d940ef1da89b/attribute/set' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY0OTM4ODU4MSwic3ViIjoidXNyLTY5MTE0YjMxNGFhZGJkMTgwMjFkMzY5NmJjNjQifQ._tHo3cMLBCNdLhLOA9IItzhXW-PHs24e2Nmr9MXpuiHiFQr2cl_ySX9O6aPnY6Tm7azuBipmib4tQ8BxKWV-Tw' \
--data-raw '{
    "id":"serial",
    "value": "22xx33"
}'
```

resopnse

```json
{
    "code": "io.tkeel.SUCCESS",
    "msg": "",
    "data": {
        "@type": "type.googleapis.com/google.protobuf.Empty",
        "value": {}
    }
}
```



## 4、设备命令调用

request

```json
curl --location --request GET '127.0.0.1:31234/v1/devices/iotd-2f130021-f24b-4856-80fd-d940ef1da89b/command/set' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY0OTM4ODU4MSwic3ViIjoidXNyLTY5MTE0YjMxNGFhZGJkMTgwMjFkMzY5NmJjNjQifQ._tHo3cMLBCNdLhLOA9IItzhXW-PHs24e2Nmr9MXpuiHiFQr2cl_ySX9O6aPnY6Tm7azuBipmib4tQ8BxKWV-Tw' \
--data-raw '{
    "id":"ota_complex",
    "value":{
        "input":{
            "downCmd":{
                "ip":"1.1.1.1",
                "port":3200,
                "url":"xxx.xxx.xxx",
                "verb":"get"
            }
        }
    }
}'
```

response

```
{
    "code": "io.tkeel.SUCCESS",
    "msg": "",
    "data": {
        "@type": "type.googleapis.com/google.protobuf.Empty",
        "value": {}
    }
}
```

设备实体内容 properties 中的commands 部分

```json
{
    "code": "io.tkeel.SUCCESS",
    "msg": "",
    "data": {
        "@type": "type.googleapis.com/api.device.v1.GetDeviceResponse",
        "deviceObject": {
            "@type": "type.googleapis.com/api.core.v1.EntityResponse",
            "configs": {
                "commands": {
                    "define": {
                        "fields": {
                            "ota_complex": {
                                "define": {
                                    "fields": {
                                        "input": {
                                            "define": {
                                                "fields": {
                                                    "devName": {
                                                        "define": {},
                                                        "description": "",
                                                        "enabled": false,
                                                        "enabled_search": false,
                                                        "enabled_time_series": false,
                                                        "id": "",
                                                        "last_time": 1649381403413,
                                                        "name": "设备名",
                                                        "type": "string",
                                                        "weight": 0
                                                    },
                                                    "downCmd": {
                                                        "define": {
                                                            "fields": {}
                                                        },
                                                        "description": "",
                                                        "enabled": false,
                                                        "enabled_search": false,
                                                        "enabled_time_series": false,
                                                        "id": "",
                                                        "last_time": 1649381403413,
                                                        "name": "下载指令json",
                                                        "type": "struct",
                                                        "weight": 0
                                                    },
                                                    "gwId": {
                                                        "define": {},
                                                        "description": "",
                                                        "enabled": false,
                                                        "enabled_search": false,
                                                        "enabled_time_series": false,
                                                        "id": "",
                                                        "last_time": 1649381403413,
                                                        "name": "网关id",
                                                        "type": "string",
                                                        "weight": 0
                                                    },
                                                    "op": {
                                                        "define": {},
                                                        "description": "",
                                                        "enabled": false,
                                                        "enabled_search": false,
                                                        "enabled_time_series": false,
                                                        "id": "",
                                                        "last_time": 1649381403413,
                                                        "name": "操作",
                                                        "type": "string",
                                                        "weight": 0
                                                    },
                                                    "pointName": {
                                                        "define": {},
                                                        "description": "",
                                                        "enabled": false,
                                                        "enabled_search": false,
                                                        "enabled_time_series": false,
                                                        "id": "",
                                                        "last_time": 1649381403413,
                                                        "name": "测点名",
                                                        "type": "string",
                                                        "weight": 0
                                                    },
                                                    "restart": {
                                                        "define": {
                                                            "fields": {}
                                                        },
                                                        "description": "",
                                                        "enabled": false,
                                                        "enabled_search": false,
                                                        "enabled_time_series": false,
                                                        "id": "",
                                                        "last_time": 1649381403413,
                                                        "name": "重启指令json",
                                                        "type": "struct",
                                                        "weight": 0
                                                    },
                                                    "value": {
                                                        "define": {},
                                                        "description": "",
                                                        "enabled": false,
                                                        "enabled_search": false,
                                                        "enabled_time_series": false,
                                                        "id": "",
                                                        "last_time": 1649381403413,
                                                        "name": "int值",
                                                        "type": "int",
                                                        "weight": 0
                                                    }
                                                }
                                            },
                                            "description": "",
                                            "enabled": false,
                                            "enabled_search": false,
                                            "enabled_time_series": false,
                                            "id": "",
                                            "last_time": 1649381403413,
                                            "name": "输入",
                                            "type": "struct",
                                            "weight": 0
                                        },
                                        "output": {
                                            "define": {
                                                "fields": {}
                                            },
                                            "description": "",
                                            "enabled": false,
                                            "enabled_search": false,
                                            "enabled_time_series": false,
                                            "id": "",
                                            "last_time": 1649381403413,
                                            "name": "输出",
                                            "type": "struct",
                                            "weight": 0
                                        }
                                    }
                                },
                                "description": "在线升级",
                                "enabled": false,
                                "enabled_search": false,
                                "enabled_time_series": false,
                                "id": "",
                                "last_time": 1649381403413,
                                "name": "在线升级",
                                "type": "struct",
                                "weight": 0
                            }
                        }
                    },
                    "description": "",
                    "enabled": true,
                    "enabled_search": true,
                    "enabled_time_series": true,
                    "id": "commands",
                    "last_time": 1649321287046,
                    "name": "commands",
                    "type": "struct",
                    "weight": 0
                }
            },
            "description": "",
            "id": "iotd-2f130021-f24b-4856-80fd-d940ef1da89b",
            "last_time": "1649382412371",
            "mappers": [
                {
                    "description": "",
                    "id": "mapper_space_path",
                    "name": "mapper_space_path",
                    "tql": "insert into iotd-2f130021-f24b-4856-80fd-d940ef1da89b select iotd-usr-69114b314aadbd18021d3696bc64-defaultGroup.properties.sysField._spacePath + '/iotd-2f130021-f24b-4856-80fd-d940ef1da89b'  as properties.sysField._spacePath"
                }
            ],
            "owner": "usr-69114b314aadbd18021d3696bc64",
            "properties": {
                "basicInfo": {
                    "description": "test",
                    "directConnection": true,
                    "ext": {
                        "commany": "qingcloud",
                        "location": "wuhan"
                    },
                    "name": "sensor202",
                    "parentId": "iotd-usr-69114b314aadbd18021d3696bc64-defaultGroup",
                    "parentName": "默认分组",
                    "selfLearn": false,
                    "templateId": "iotd-29c1fca9-79eb-437b-ba9d-0dc225eb4ce0",
                    "templateName": ""
                },
                "commands": {
                    "ota_complex": {
                        "input": {
                            "downCmd": {
                                "ip": "1.1.1.1",
                                "port": 3200,
                                "url": "xxx.xxx.xxx",
                                "verb": "get"
                            }
                        }
                    }
                },
                "connectInfo": {
                    "_clientId": "",
                    "_online": false,
                    "_peerHost": "",
                    "_protocol": "",
                    "_sockPort": "",
                    "_userName": ""
                },
                "sysField": {
                    "_createdAt": 1649381802106,
                    "_enable": true,
                    "_id": "iotd-2f130021-f24b-4856-80fd-d940ef1da89b",
                    "_owner": "usr-69114b314aadbd18021d3696bc64",
                    "_source": "device",
                    "_spacePath": "iotd-2f130021-f24b-4856-80fd-d940ef1da89b",
                    "_status": "offline",
                    "_subscribeAddr": "",
                    "_token": "ZDIyODFiNDQtY2Q4ZS0zOGZiLWIxZTgtMGFjM2EzOTQ5Njdi",
                    "_updatedAt": 1649381802106
                }
            },
            "source": "device",
            "template_id": "iotd-29c1fca9-79eb-437b-ba9d-0dc225eb4ce0",
            "type": "device",
            "version": "4"
        }
    }
}
```





## 5、设备关系信息

设备实体详情里分类字段：ralations

目地：建立设备与设备之间的 数据映射关系

### 5.1  手动构建数据关系

字段说明

| 字段名      | Located in | 类型  | 描述                  |
| ----------- | ---------- | ----- | --------------------- |
| expressions | body       | array | 数据关系的结构体 数组 |

单条数据关系结构体

| 字段名      | located in | 类型   | 描述                                                         |
| ----------- | ---------- | ------ | ------------------------------------------------------------ |
| path        | body       | string | 设备属性or遥测 在设备数结构中id的路径  以.衔接 例如 attributes.aaa  telemerty.bbb |
| expression  | body       | string | 关系表达式（可以扩展的很复杂）： 目前只是最简单的 =等于 ，目标设备的数据id路径 例如：iotd-xxx.attributes.aaa  iotd-yyy.telemerty.bbb |
| description | body       | string | 可以用来承载 id 与名字的对应，  可用于解析展示 ， 例如 "aaa="电压"，bbb="电流" ，iotd-xxx="设备1" " |
| name        | body       | string | 关系的名称  可为空                                           |

假如现在有2个设备  :

  设备1： 设备名：sensor600  设备id ：iotd-c0fb0b6c-d8d3-492c-b52a-7ca7adc11244     

​                 设备模板里存在 ：

​                         1、遥测名：电压，  遥测id:  voltage 

​                         2、遥测名：电流， 遥测 id：electricity

​                         3、属性名：序列号   属性id: serial-2

  设备2： 设备名 ：gw600     设备id ：iotd-51c0c135-a223-4cd1-aaa4-889959cc49aa      引用了模板

​                      设备模板里存在 ：

​                         1、遥测名：电压，  遥测id:  voltage 

​                         2、遥测名：电流， 遥测 id：electricity

​                         3、属性名：序列号   属性id: serial-2 

目地： 设备1 的电流、电压  序列号等数据   通过“选择”设备2  数据映射过来

#### 5.1.1 创建数据关系

request

```json
curl --location --request POST '127.0.0.1:31234/v1/devices/iotd-c0fb0b6c-d8d3-492c-b52a-7ca7adc11244/relation' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY1MDUxMjM1Nywic3ViIjoidXNyLTY5MTE0YjMxNGFhZGJkMTgwMjFkMzY5NmJjNjQifQ.IGawL3e5rS7lID-WExXMKJgueJtmHGQMJe7md04P2_snDzGxjI8eFntQ7AhcZqNKLEtQJuftX0mTSiNtL9C_Gw' \
--header 'Content-Type: application/json' \
--data-raw '{
    "expressions": [
        {
            "path": "telemetry.electricity",
            "expression": "iotd-51c0c135-a223-4cd1-aaa4-889959cc49aa.telemetry.electricity",
            "description": "electricity=电流, iotd-51c0c135-a223-4cd1-aaa4-889959cc49aa=gw600",
            "name": ""
        },
        {
            "path": "telemetry.voltage",
            "expression": "iotd-51c0c135-a223-4cd1-aaa4-889959cc49aa.telemetry.voltage",
            "description": "electricity=电压, iotd-51c0c135-a223-4cd1-aaa4-889959cc49aa=gw600",
            "name": ""
        },
        {
            "path": "attributes.serial-2",
            "expression": "iotd-51c0c135-a223-4cd1-aaa4-889959cc49aa.attributes.serial-2",
            "description": "serial-2=序列号, iotd-51c0c135-a223-4cd1-aaa4-889959cc49aa=gw600",
            "name": ""
        }
    ]
}'
```

response

```json
{
    "code": "io.tkeel.SUCCESS",
    "msg": "",
    "data": {
        "@type": "type.googleapis.com/google.protobuf.Empty",
        "value": {}
    }
}
```



#### 5.1.2 更新单条数据关系

request 

```json
curl --location --request PUT '127.0.0.1:31234/v1/devices/iotd-c0fb0b6c-d8d3-492c-b52a-7ca7adc11244/relation' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY1MDUxMjM1Nywic3ViIjoidXNyLTY5MTE0YjMxNGFhZGJkMTgwMjFkMzY5NmJjNjQifQ.IGawL3e5rS7lID-WExXMKJgueJtmHGQMJe7md04P2_snDzGxjI8eFntQ7AhcZqNKLEtQJuftX0mTSiNtL9C_Gw' \
--header 'Content-Type: application/json' \
--data-raw '{
    "expressions": [
        {
            "path": "telemetry.electricity",
            "expression": "iotd-51c0c135-a223-4cd1-aaa4-889959cc49aa.telemetry.electricity",
            "description": "electricity=电流_update, iotd-51c0c135-a223-4cd1-aaa4-889959cc49aa=gw600",
            "name": ""
        },
        {
            "path": "telemetry.voltage",
            "expression": "iotd-51c0c135-a223-4cd1-aaa4-889959cc49aa.telemetry.voltage",
            "description": "electricity=电压_update, iotd-51c0c135-a223-4cd1-aaa4-889959cc49aa=gw600",
            "name": ""
        },
        {
            "path": "attributes.serial-2",
            "expression": "iotd-51c0c135-a223-4cd1-aaa4-889959cc49aa.attributes.serial-2",
            "description": "serial-2=序列号_update, iotd-51c0c135-a223-4cd1-aaa4-889959cc49aa=gw600",
            "name": ""
        }
    ]
}'
```

response

```json
{
    "code": "io.tkeel.SUCCESS",
    "msg": "",
    "data": {
        "@type": "type.googleapis.com/google.protobuf.Empty",
        "value": {}
    }
}
```



#### 5.1.3 删除数据关系

request

```json
curl --location --request POST '127.0.0.1:31234/v1/devices/iotd-c0fb0b6c-d8d3-492c-b52a-7ca7adc11244/relation/delete' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY1MDUxMjM1Nywic3ViIjoidXNyLTY5MTE0YjMxNGFhZGJkMTgwMjFkMzY5NmJjNjQifQ.IGawL3e5rS7lID-WExXMKJgueJtmHGQMJe7md04P2_snDzGxjI8eFntQ7AhcZqNKLEtQJuftX0mTSiNtL9C_Gw' \
--header 'Content-Type: application/json' \
--data-raw '{
    "paths":["voltage"]
}'
```

response

```json
{
    "code": "io.tkeel.SUCCESS",
    "msg": "",
    "data": {
        "@type": "type.googleapis.com/google.protobuf.Empty",
        "value": {}
    }
}
```



#### 5.1.4 获取数据关系

request

```json
curl --location --request GET '127.0.0.1:31234/v1/devices/iotd-c0fb0b6c-d8d3-492c-b52a-7ca7adc11244/relation/attributes.serial-2' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY1MDUyNjMzMywic3ViIjoidXNyLTY5MTE0YjMxNGFhZGJkMTgwMjFkMzY5NmJjNjQifQ.3m5dhauUQL-VVXycCBC8OH-KhuWixprMNVIp_z45kUp4gauEeEFhKXcyK44_ObbgOV93CgYrr42AG4P4jnas_g' \
--header 'Content-Type: application/json' \
--data-raw '{

}'
```

response

```json
{
    "code": "io.tkeel.SUCCESS",
    "msg": "",
    "data": {
        "@type": "type.googleapis.com/api.device.v1.GetDeviceDataRelationResponse",
        "expressions": {
            "@type": "type.googleapis.com/api.core.v1.GetExpressionResp",
            "entity_id": "iotd-c0fb0b6c-d8d3-492c-b52a-7ca7adc11244",
            "expression": {
                "description": "serial-2=序列号_update, iotd-51c0c135-a223-4cd1-aaa4-889959cc49aa=gw600",
                "expression": "iotd-51c0c135-a223-4cd1-aaa4-889959cc49aa.properties.attributes.serial-2",
                "name": "",
                "path": "attributes.serial-2"
            },
            "owner": "usr-69114b314aadbd18021d3696bc64"
        }
    }
}
```



#### 5.1.5 获取数据关系列表

request

```json
curl --location --request GET '127.0.0.1:31234/v1/devices/iotd-c0fb0b6c-d8d3-492c-b52a-7ca7adc11244/relation' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY1MDUyNjMzMywic3ViIjoidXNyLTY5MTE0YjMxNGFhZGJkMTgwMjFkMzY5NmJjNjQifQ.3m5dhauUQL-VVXycCBC8OH-KhuWixprMNVIp_z45kUp4gauEeEFhKXcyK44_ObbgOV93CgYrr42AG4P4jnas_g' \
--data-raw ''
```

response

```json
{
    "code": "io.tkeel.SUCCESS",
    "msg": "",
    "data": {
        "@type": "type.googleapis.com/api.device.v1.ListDeviceDataRelationResponse",
        "expressionObject": {
            "@type": "type.googleapis.com/api.core.v1.ListExpressionResp",
            "entity_id": "iotd-c0fb0b6c-d8d3-492c-b52a-7ca7adc11244",
            "expressions": [
                {
                    "description": "serial-2=序列号_update, iotd-51c0c135-a223-4cd1-aaa4-889959cc49aa=gw600",
                    "expression": "iotd-51c0c135-a223-4cd1-aaa4-889959cc49aa.properties.attributes.serial-2",
                    "name": "",
                    "path": "attributes.serial-2"
                },
                {
                    "description": "electricity=电流_update, iotd-51c0c135-a223-4cd1-aaa4-889959cc49aa=gw600",
                    "expression": "iotd-51c0c135-a223-4cd1-aaa4-889959cc49aa.properties.telemetry.electricity",
                    "name": "",
                    "path": "telemetry.electricity"
                },
                {
                    "description": "electricity=电压_update, iotd-51c0c135-a223-4cd1-aaa4-889959cc49aa=gw600",
                    "expression": "iotd-51c0c135-a223-4cd1-aaa4-889959cc49aa.properties.telemetry.voltage",
                    "name": "",
                    "path": "telemetry.voltage"
                }
             
            ],
            "owner": "usr-69114b314aadbd18021d3696bc64"
        }
    }
}
```



### 5.2 根据模板自动生成关系

自动构建数据映射关系：



| 字段名       | located in | 类型   | 描述                           |
| ------------ | ---------- | ------ | ------------------------------ |
| curName      | body       | string | 当前设备名                     |
| direction    | body       | string | 关系方向：目前只填：from       |
| relationType | body       | string | 关系类型：目前只填：contain    |
| targetName   | body       | string | 来源设备名称                   |
| targetId     | body       | string | 来源设备id                     |
| targetTyep   | body       | string | 来源设备类型：目前只填：device |

后台逻辑说明：

1、获取设备1的字段

​        1.1  根据设备1模板configs 内容获取  

2、获取设备2 的 数据字段

​        1.1  根据设备2模板configs 内容获取

​        1.2   根据设备2数据 properties 内容获取

​        1.3  不管设备2 是否存在字段，关系先构建，如果有数据来就会对应上（先这么做）。

​                   实际现实情况会面临如下情况（针对遥测）：

​                    1、如果设备2是网关设备   
​                            1、遥测数据可能会非常多， 所以网关的模板（自学习或手动构建）不是必须的

​                            2、网关的采集遥测数据 字段  与 实际 平台使用是不同的规范或者厂家 或者标准 ，所以设备1中的字段对应设备2数据字段需要映射

​                            3、格式可能是消息规范的平铺格式  ，也可能是消息规范的带子设备名的格式，所以设备1数据映射需要找到具体设备2数据内容的子设备及其数据字段

​                            

​                         解决如上问题 ： 在模板的遥测的扩展配置可配置如下key

​                                                     1、 alias : 面对情况2

​                                                            例如： 

​                                                                         情况：	设备1 模板有一个遥测叫：1001   是按照互联网基础设设施监控标准规范建立的

​                                                                         				设备2网关的采集的此数据有一个有自己逻辑的厂商采集命名为：AL_EL

​                                                                          解决：  在设备1模板1001遥测的扩展配置里配置：mapper_alias="AL_EL" （key 输入框输入maaper_alias, 值输入框输入AL_EL）,自动映射时候会自动转换，映射设备2 的AL_EL 字段



​                                                      2、 profix  :面对情况 3

​                                                                 例如： 

​                                                                                情况： 设备1模板有一个遥测叫： va
​                                                                                             设备2网关 的遥测上报的带子设备名的消息格式： 

​                                                                                               "dev1":{

​                                                                                                       va:1,

​                                                                                                        v1:2,

​                                                                                                         vc:3 

​                                                                                              }

​                                                                                  解决：   在设备1模板1001遥测的扩展配置里配置：mappr_prefix="dev1"（key输入框输入mapper_prefix,值输入框输入dev1） ,自动映射时候会加上此前缀找到dev1 下面的va 字段

​                                                   

​                                                      3、 2  和  3 的情况 可以组合存在

   

request

```json
curl --location --request POST '127.0.0.1:31234/v1/devices/iotd-78ec2d93-46b9-4f55-84e4-34c0c1bd2aa7/relation/auto' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY1MDUzNzA0MCwic3ViIjoidXNyLTY5MTE0YjMxNGFhZGJkMTgwMjFkMzY5NmJjNjQifQ.XoLVO6vnPsPzAwQQl0Fvr9HdsNzTfZXtS5pOU8nSB37-n2CthuuExLXmweqdHqKrBGTjMZDaYW1EEuSgCsKzuA' \
--header 'Content-Type: application/json' \
--data-raw '{
    "curName":"sensor600",
    "direction":"from",
    "relationType":"contain",
    "targetName":"gw600",
    "targetId":"iotd-51c0c135-a223-4cd1-aaa4-889959cc49aa",
    "targetType":"device"
}'
```



resoponse

```json
{
    "code": "io.tkeel.SUCCESS",
    "msg": "",
    "data": {
        "@type": "type.googleapis.com/api.device.v1.CreateDeviceDataRelationAutoResponse",
        "expressionObject": {
            "@type": "type.googleapis.com/api.core.v1.ListExpressionResp",
            "entity_id": "iotd-78ec2d93-46b9-4f55-84e4-34c0c1bd2aa7",
            "expressions": [
                {
                    "description": "iotd-78ec2d93-46b9-4f55-84e4-34c0c1bd2aa7=sensor600,electricity=电流,iotd-51c0c135-a223-4cd1-aaa4-889959cc49aa=gw600",
                    "expression": "iotd-51c0c135-a223-4cd1-aaa4-889959cc49aa.properties.telemetry.electricity",
                    "name": "electricity",
                    "path": "telemetry.electricity"
                },
                {
                    "description": "iotd-78ec2d93-46b9-4f55-84e4-34c0c1bd2aa7=sensor600,voltage=电压,iotd-51c0c135-a223-4cd1-aaa4-889959cc49aa=gw600",
                    "expression": "iotd-51c0c135-a223-4cd1-aaa4-889959cc49aa.properties.telemetry.voltage",
                    "name": "voltage",
                    "path": "telemetry.voltage"
                }
            ],
            "owner": "usr-69114b314aadbd18021d3696bc64"
        }
    }
}
```

