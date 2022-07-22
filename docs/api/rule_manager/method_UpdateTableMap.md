---
title: '更新数据表映射'
description: "UpdateTableMap"
sidebar_position: 31
---
## 接口说明
调用该接口更新数据表映射。

## URI

```
put /sink/{id}/maps
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |
| id | path | string | 验证成功后返回的id |  Required | 

### 请求Body
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |  
| fields | Array[ruleMapField] | 映射表 [ 具体参数可见下面 [ruleMapField](#ruleMapField) ] | 
| table_name | string | 数据表名称 | 
| target_id | string | 路由目标id |





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








## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([ruleASUpdateTableMapResp](#ruleASUpdateTableMapResp)) |

#### ruleASUpdateTableMapResp

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |  
| fields | Array[ruleMapField] | 映射表 [ 具体参数可见下面 [ruleMapField](#ruleMapField) ] | 
| id | string | 验证成功后返回的id | 
| table_name | string | 数据表名称 | 
| target_id | string | 路由目标id |





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










