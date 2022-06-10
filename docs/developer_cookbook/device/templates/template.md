---
title: 定义设备模板
sidebar_position: 1
---

## 1、概念

设备模板：定义一类设备的特征和行为
包含如下方面：

* **属性** ：与一类设备本身相关联的静态/半静态信息。可表示基本的一些静态属性例如软件版本、硬件版本、序列号等； 也可以表示设备得持久状态，例如设备的开/关状态、温度设定，分为可读可写
* **遥测** ： 带有时间序列的数据测点值。例如电压、电流、功率、温度、湿度等，可用于存储、查询、可视化视图。
* **命令**：可调用的反控命令、决定设备的行为，例如重启设备、ota 升级



## 2、生成设备模板的方式

从使用方式来说有多种方式生成模板

* 页面操作点击全新定义生成

  操作指南

* 标准格式excel 文件导入批量生成（后续支持）

  操作指南

* 设备数据自学习保存生成

  操作指南

* 其他设备模板另存为生成

  操作指南



## 3、生成设备模板API

**无论是那一种生成设备模板的方式，不同的是生成设备模板入口和形式，但最终都会承载于如下基础动作相关API**



### 1、创建设备模板对象

 设备模板对象承载设备模板的三个定义维度（属性、遥测、命令），支持对象的增删改查。

#### API字段说明

|字段|Located in|类型|描述|
|---|---|----|----|
|name|body|string| 模板名称 |
|description|body|string| 模板说明 |

#### Example

##### request

```json
curl --location --request POST '127.0.0.1:31234/v1/templates' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY0NDMwNzczNywic3ViIjoidXNyLTMzNzM3OTQ1YzJiNzE4ZGI0YzMwOWQ2MzNkMmYifQ.agb2dvlXB5nr7uo8lTrI2I_CvwLs4yYP9ye4pQ4_pRww8H_Z0N6HCjIUamlq4TnraBtLnGrvAgHr1LJhFkpYjA' \
--header 'Content-Type: application/json' \
--data-raw '{
   "name":"三相UPS",
   "description":"低压配电"
       
}'
```

##### response

```json
{
    "code": 200,
    "msg": "ok",
    "data": {
        "@type": "type.googleapis.com/api.template.v1.CreateTemplateResponse",
        "templateObject": {
            "id": "4aa904c9-dfd8-454f-a721-2a8e82f7f43e",
            "plugin": "",
            "source": "device",
            "owner": "usr-33737945c2b718db4c309d633d2f",
            "type": "template",
            "mappers": [],
            "configs": {},
            "properties": {
                "basicInfo": {
                    "descriptionc": "低压配电",
                    "name": "三相UPS"
                },
                "sysField": {
                    "_createdAt": 1644302554298715000,
                    "_id": "4aa904c9-dfd8-454f-a721-2a8e82f7f43e",
                    "_owner": "usr-33737945c2b718db4c309d633d2f",
                    "_source": "device",
                    "_updatedAt": 1644302554298715000
                }
            }
        }
    }
}
```

#### 相关其他操作API

| API            | 描述                 |
| -------------- | -------------------- |
| UpdateTemplate | 更新模板对象基础信息 |
| GetTemplate    | 获取模板对象         |
| DeleteTemplate | 删除模板对象         |
| ListTemplate   | 模板对象列表         |
| CreateTemplate | 创建模板对象         |



### 2、创建设备模板属性

 设备模板属性承载设备本身相关联的静态/半静态信息的定义，支持设备模板对象中单个属性的增删改查。

#### API 字段说明

| 字段   | Located in | 类型   | 描述                                                         |
| ------ | ---------- | ------ | ------------------------------------------------------------ |
| uid    | path       | string | 模板对象id ，表示创建那一个设备模板对象的属性内容            |
| name   | body       | string | 属性名称                                                     |
| id     | body       | string | 属性ID, 表示属性的唯一标识，放在前面作为key ， 可批量添加多条               |
| description    | body       | string | 属性说明                                                     |
| type   | body       | string | 数据类型["int32","float","double","array","bool","enum","date","struct","string"] |
| define | body       | object | 模型的本质是对数据的约束和定义，前面的字段描述的是此数据的基本信息，那么define 对象是对此数据的详细定义和约束，定义和约束内容并不限制且可适应未来不同情况无限扩展。形式为KV。<br/>对于此处约定是定义和约束属性目前按照设计页面先简单约定如下：<br/> define{<br/>      “default_value”: xxx,     //xxx表示默认值<br/>      "rw" : r   // r 表示可读，w表示可写， rw 表示可读写<br/>}<br/><br/>**根据实际情况如以上define 定义不满足要求时或需要丰富时 ，以kv 的形式扩展define** |

#### Example

##### request

```json
curl --location --request POST '127.0.0.1:31234/v1/templates/iotd-17569b89-4593-4e8d-b091-192ca560ee2f/attribute' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY0Nzg0ODI2Miwic3ViIjoidXNyLWJlYzNmZWQ5YTI2NTBiYzAwNGJmMzQyODFiYjEifQ.lgoU9jQ2NY2ni2FARcyuR67jqiJpKJfx-uHfXdBLQZnvhqL1jGfBA66KhJjR28sP2g66QOtwBqfvfBFkUelA2w' \
--header 'Content-Type: application/json' \
--data-raw '{
    "serial-3":{
        "name":"序列号3",
        "description":"设备批次",
        "type":"string",
        "define":{        
            "default_value":"xxxxxxx3",
            "rw":"r"
        }
    },
     "serial-N":{
        "name":"序列号N",
        "description":"设备批次",
        "type":"string",
        "define":{        
            "default_value":"xxxxxxxn",
            "rw":"w"
        }
    }          
}'
```

##### response

```json
{
    "code": 200,
    "msg": "ok",
    "data": {
        "@type": "type.googleapis.com/google.protobuf.Empty",
        "value": {}
    }
}
```

#### 相关其他操作API

| API                     | 描述                     |
| ----------------------- | ------------------------ |
| UpdateTemplateAttribute | 更新模板对象属性基础信息 |
| GetTemplateAttribute    | 获取模板对象属性         |
| DeleteTemplateAttribute | 删除模板对象属性         |
| ListTemplateAttribute   | 模板对象属性列表         |
| AddTemplateAttribute    | 创建模板对象属性         |



### 3、创建设备模板遥测

设备模板遥测承载设备带有时间序列的数据测点值的定义，支持设备模板对象中单个遥测的增删改查，并支持遥测的扩展配置增删改查。

#### API 字段说明

| 字段   | Located in | 类型   | 描述                                                         |
| ------ | ---------- | ------ | ------------------------------------------------------------ |
| uid    | path       | string | 模板对象id ，表示创建那一个设备模板对象的遥测内容 |
| name   | body       | string | 遥测名称                                                     |
| id     | body       | string | 遥测ID, 表示遥测的唯一标识 ，放在前面作为key ， 可批量添加多条            |
| description    | body       | string | 遥测说明                                                     |
| type   | body       | string | 数据类型["int","float","double","array","bool","enum","date","struct","string"] |
| define | body       | object | 模型的本质是对数据的约束和定义，前面的字段描述的是此数据的基本信息，那么define 对象是对此数据的详细定义和约束，定义和约束内容并不限制且可适应未来不同情况无限扩展。形式为KV。<br/>遥测主要有类似电压、电流、功率、温度、湿度等带时间戳的时序值：<br/>定义和约束按照数据类型划分<br/>参考前面平台：<br/>数据类型 <br />int32,float,double的define约束:<br/>{<br/>    "max": "100",<br/>    "min": "1",<br/>    "step": "1",<br/>    "unit": "v",<br/>    "unitName": "伏"<br/>    "ext":{<br/>        "xxx":"xxx",<br/>        "yyy":"yyy"<br/>    }<br/>}<br/>string约束:<br/>{<br/>    "length": "100"<br/>     "ext":{<br/>  <br/>     }<br/>}<br/>enum约束:<br/><br/>{<br/>    "0": "开",<br/>    "1": "关"<br/>    "2": "无"<br/>}<br/>bool约束<br/><br/>{<br/>    "0": "开",<br/>    "1": "关"<br/>}<br/>array约束:<br/>{<br />"length":10,<br />"elem_type":{<br />"type":"int"}<br />}<br />{<br/>    "length: 10,<br/>    "elem_type": {<br/>        "param1": {<br/>            "name":"param1",<br/>            "identifier":"param1",<br/>            "type":"int32"<br/>            "define":{<br/>                "max": "100",<br/>                "min": "1",<br/>                "step": "1",<br/>                "unit": "s",<br/>                "unitName": "s"<br/>            },<br />           "param2":{<br/>            "name":"param1",<br/>            "identifier":"param2",<br/>            "type":"string"<br/>            "define":{<br/>                "length": "100"<br/>            }<br/>}<br/><br /><br />struct约束:<br/><br/>{<br/>    "fields": {<br/>       "param1": {<br/>            "name":"param1",<br/>            "identifier":"param1",<br/>            "type":"int32"<br/>            "define":{<br/>                "max": "100",<br/>                "min": "1",<br/>                "step": "1",<br/>                "unit": "s",<br/>                "unitName": "s"<br/>            }<br/>        },<br/>        "param2":{<br/>            "name":"param1",<br/>            "identifier":"param2",<br/>            "type":"string"<br/>            "define":{<br/>                "length": "100"<br/>            }<br/>        }<br/>    }<br/>     <br/>}<br/><br/><br/>**根据实际情况如以上define 定义不满足要求时或需要丰富时 ，以kv 的形式扩展define** |



**关于扩展配置ext ，数据的约束和定义是随着业务的不同而不同或者有更丰富的需求。故增加此字段满足数据约束和定义的扩展**。

#### Example

##### request

```json
curl --location --request POST '127.0.0.1:31234/v1/templates/iotd-17569b89-4593-4e8d-b091-192ca560ee2f/telemetry' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY0Nzg0ODI2Miwic3ViIjoidXNyLWJlYzNmZWQ5YTI2NTBiYzAwNGJmMzQyODFiYjEifQ.lgoU9jQ2NY2ni2FARcyuR67jqiJpKJfx-uHfXdBLQZnvhqL1jGfBA66KhJjR28sP2g66QOtwBqfvfBFkUelA2w' \
--header 'Content-Type: application/json' \
--data-raw '{
    "electricity": {
        "name": "电流",
        "description": "A相电流",
        "type": "int",
        "define": {
            "min": "0",
            "max": "1000",
            "unit": "A",
            "unitName": "安",
            "step": "0.1",
            "ext": {
                "alias": "EM_BI",
                "ratio_of_transformation": "0.001"
            }
        }
    },
    "voltage": {
        "name": "电压",
        "description": "A相电压",
        "type": "int",
        "define": {
            "min": "0",
            "max": "1000",
            "unit": "v",
            "unitName": "伏",
            "step": "0.1",
            "ext": {
                "alias": "EM_BI",
                "ratio_of_transformation": "0.001"
            }
        }
    }
}'
```

##### response

```json
{
    "code": 200,
    "msg": "ok",
    "data": {
        "@type": "type.googleapis.com/google.protobuf.Empty",
        "value": {}
    }
}
```

#### 相关其他操作API

| API                        | 描述                     |
| -------------------------- | ------------------------ |
| UpdateTemplateTelemetry    | 更新模板对象遥测基础信息 |
| GetTemplateTelemetry       | 获取模板对象遥测         |
| DeleteTemplateTelemetry    | 删除模板对象遥测         |
| ListTemplateTelemetry      | 模板对象遥测列表         |
| AddTemplateTelemetry       | 创建模板对象遥测         |
| AddTemplateTelemetryExt    | 添加遥测扩展配置         |
| UpdateTemplateTelemetryExt | 更新遥测扩展配置         |
| DeleteTemplateTelemetryExt | 删除遥测扩展配置         |



### 4、创建设备模板命令

设备模板命令承载可调用的反控命令、决定设备的行为，支持设备模板对象中单个命令的增删改查。

#### API 字段说明

| 字段   | Located in | 类型   | 描述                                                         |
| ------ | ---------- | ------ | ------------------------------------------------------------ |
| uid    | path       | string | 模板对象id ，表示创建那一个设备模板对象的命令内容            |
| name   | body       | string | 命令名称                                                     |
| id     | body       | string | 命令ID, 表示属性的唯一标识 ，放在前面作为key， 可批量添加           |
| description    | body       | string | 命令说明                                                     |
| type   | body       | string | ["struct"]   //默认填写  struct  内的子字段用fields 标识  ,input \output 默认也为struct |
| define | body       | object | 模型的本质是对数据的约束和定义，前面的字段描述的是此数据的基本信息，那么define 对象是对此数据的详细定义和约束，定义和约束内容并不限制且可适应未来不同情况无限扩展。形式为KV。<br/>对于命令的define 来说 只有存在两个部分，发送的内容input  和  返回的内容output   <br/>命令相对于平台来说 本质是提供一个下发数据到设备的通道，对于input 的内容 可简单暂时约定为自由定义的 json对象，相当于自己定义下发的协议(IDC项目中ota 升级也是采用的此方式)  <br/> <br /> <br />"define": {<br/>            "fields": {<br/>                "input": {<br/>                    "name": "输入",<br/>                    "type": "struct",<br/>                    "define": {<br/>                        "fields": {<br/>                            "gwId": {<br/>                                "name": "网关id",<br/>                                "type": "string",<br/>                                "define": {}<br/>                            },<br/>                            "devName": {<br/>                                "name": "设备名",<br/>                                "type": "string",<br/>                                "define": {}<br/>                            },<br/>                            "pointName": {<br/>                                "name": "测点名",<br/>                                "type": "string",<br/>                                "define": {}<br/>                            },<br/>                            "op": {<br/>                                "name": "操作",<br/>                                "type": "string",<br/>                                "define": {}<br/>                            },<br/>                            "value": {<br/>                                "name": "int值",<br/>                                "type": "int",<br/>                                "define": {}<br/>                            },<br/>                            "restart":{<br/>                                "name":"重启指令json",<br/>                                "type":"struct",<br/>                                "define":{}<br/>                            },<br/>                            "downCmd":{<br/>                                "name":"下载指令json",<br/>                                "type":"struct",<br/>                                "define":{}<br/>                            }<br/>                        }<br/>                    }<br/>                },<br/>                "output": {<br/>                    "name": "输出",<br/>                    "type": "struct",<br/>                    "define": {<br/>                    }<br/>                }<br/>            }<br/>        }<br />**根据实际情况如以上define 定义不满足要求时或需要丰富时 ，以kv 的形式扩展define** |

#### Example

##### 创建一个输入命令request

```json
curl --location --request POST '127.0.0.1:31234/v1/templates/iotd-29c1fca9-79eb-437b-ba9d-0dc225eb4ce0/command' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY0OTMyNDc4OCwic3ViIjoidXNyLTY5MTE0YjMxNGFhZGJkMTgwMjFkMzY5NmJjNjQifQ.YjaEcF5w1rKW-ecgTzbIy7z8-xSMALH2zL6X6wJaFTIzx_r3LEgAf3BIk-WUJZb_WVlit61q_yuXh06LPifOmA' \
--header 'Content-Type: application/json' \
--data-raw '{
    "ota_complex": {
        "name": "在线升级",
        "description": "在线升级",
        "type": "struct",
        "define": {
            "fields": {
                "input": {
                    "name": "输入",
                    "type": "struct",
                    "define": {
                        "fields": {
                            "gwId": {
                                "name": "网关id",
                                "type": "string",
                                "define": {}
                            },
                            "devName": {
                                "name": "设备名",
                                "type": "string",
                                "define": {}
                            },
                            "pointName": {
                                "name": "测点名",
                                "type": "string",
                                "define": {}
                            },
                            "op": {
                                "name": "操作",
                                "type": "string",
                                "define": {}
                            },
                            "value": {
                                "name": "int值",
                                "type": "int",
                                "define": {}
                            },
                            "restart":{
                                "name":"重启指令json",
                                "type":"struct",
                                "define":{}
                            },
                            "downCmd":{
                                "name":"下载指令json",
                                "type":"struct",
                                "define":{}
                            }
                        }
                    }
                },
                "output": {
                    "name": "输出",
                    "type": "struct",
                    "define": {
                    }
                }
            }
        }
    }
}'
```

##### response

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



#### 相关其他操作API

| API                   | 描述                     |
| --------------------- | ------------------------ |
| UpdateTemplateCommand | 更新模板对象命令基础信息 |
| GetTemplateCommand    | 获取模板对象命令         |
| DeleteTemplateCommand | 删除模板对象命令         |
| ListTemplateCommand   | 模板对象命令列表         |
| AddTemplateCommand    | 创建模板对象命令         |



### 5、设备新增模板内容同步到引用模板

当设备通过自学习、或者手动添加相关属性、遥测、命令后，需要同步到引用的模板时调用此接口

#### API 字段说明

| 字段 | Located in | 类型   | 描述                                  |
| ---- | ---------- | ------ | ------------------------------------- |
| uid  | path       | string | 设备对象id ，表示那一个设备对象的操作 |

#### Example

##### request

```json
curl --location --request POST '127.0.0.1:31234/v1/devices/iotd-52269038-c0e6-471d-b926-5a3abcaa1b21/configs/saveAsSelfTemplate' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY0Nzg2MTkyOSwic3ViIjoidXNyLWJlYzNmZWQ5YTI2NTBiYzAwNGJmMzQyODFiYjEifQ.Ltf4rzTlalN11R_hlicKCYnufgs9ZBhMiE5EV9Im5fpJ-gAyzBalSUsHMitZqKIDMyObLWlsEOsnDXShZAUF3A' \
--data-raw ''
```

##### response

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

### 6、设备新增模板内容另存为模板

当设备通过自学习、或者手动添加相关属性、遥测、命令后，需要另存为其他模板时调用此接口

#### API 字段说明

| 字段        | Located in | 类型   | 描述                                  |
| ----------- | ---------- | ------ | ------------------------------------- |
| uid         | path       | string | 设备对象id ，表示那一个设备对象的操作 |
| name        | body       | string | 新模板的名称                          |
| description | body       | string | 新模板的说明                          |

#### Example

##### request

```json
curl --location --request POST '127.0.0.1:31234/v1/devices/iotd-52269038-c0e6-471d-b926-5a3abcaa1b21/configs/saveAsOtherTemplate' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY0Nzg2MTkyOSwic3ViIjoidXNyLWJlYzNmZWQ5YTI2NTBiYzAwNGJmMzQyODFiYjEifQ.Ltf4rzTlalN11R_hlicKCYnufgs9ZBhMiE5EV9Im5fpJ-gAyzBalSUsHMitZqKIDMyObLWlsEOsnDXShZAUF3A' \
--data-raw '{
    "name":"tempale_saveASother",
    "description":"xxxxx"
}'
```

##### response

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

