---
title: 设备基础数据
sidebar_position: 2
---
## 概念 
设备是一个实体，承载这各个维度的信息，以下几个维度的信息可直接通过查询设备实体直接获取，相当于设备实体的静态信息。

* 设备基本信息及扩展信息
* 设备模板信息
* 设备关系信息

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
                    "_status": false,
                    "_token": "OGIxMTdlMTYtZWE5Yy0zNDE4LWE3YTktYjhiM2U3Yzk3YzE1",
                    "_updatedAt": 1644461780472115700
                }
            }
        }
    }
}
```

## 设备基本信息

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
    "_status": false,   //状态 (在线、离线、模拟在线、禁用)
    "_token": "OGIxMTdlMTYtZWE5Yy0zNDE4LWE3YTktYjhiM2U3Yzk3YzE1",  //连接的token  ，如果是直连设备需返回给用户。
    "_updatedAt": 1644461780472115700  //更新时间
}
```



## 设备模板信息

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

## 设备关系信息

设备实体详情里分类字段：mappers

详情：

### 定义关系

```
```

### 获取关系

```
```
