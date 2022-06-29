---
title: '查询数据表结构映射'
description: "GetTableMap"
---
## 接口说明
调用该接口查询数据表结构映射。

## URI

```
get /sink/{id}/maps
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |    
| id | path | string | 验证成功后返回的id |  Required |  
| table_name | query | string | 数据表名称 |  false |

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([ruleASGetTableMapResp](#ruleASGetTableMapResp)) |

#### ruleASGetTableMapResp

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| id | string | 验证成功后返回的id |  
| map_fields | Array[ruleMapField] | 映射表 [ 具体参数可见下面 [ruleMapField](#ruleMapField) ] |  
| table_fields | Array[ruleField] | 数据库表字段 [ 具体参数可见下面 [ruleField](#ruleField) ] | 
| table_name | string | 数据表名称 |


### ruleMapField
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |
| m_field | Object | 表字段 [ 具体参数可见下面 [ruleField](#ruleField) ]  |
| t_field | Object | 模板字段 [ 具体参数可见下面 [ruleField](#ruleField) ]  |


### ruleField
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| isPK | boolean | 是否为主键 | 
| name | string | 字段名称 | 
| type | string | 字段类型 |


### ruleField
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| isPK | boolean | 是否为主键 | 
| name | string | 字段名称 | 
| type | string | 字段类型 |


### ruleField
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| isPK | boolean | 是否为主键 | 
| name | string | 字段名称 | 
| type | string | 字段类型 |







