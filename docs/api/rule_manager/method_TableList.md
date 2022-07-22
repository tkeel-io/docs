---
title: '查询数据表列表'
description: "TableList"
sidebar_position: 33
---
## 接口说明
调用该接口查询数据表列表。

## URI

```
get /sink/{id}/tables
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |
| id | path | string | 验证成功后返回的id |  Required | 

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([ruleASTableListResp](#ruleASTableListResp)) |

#### ruleASTableListResp

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |  
| tables | Array[ruleTable] | 数据表列表 [ 具体参数可见下面 [ruleTable](#ruleTable) ] |





### ruleTable
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| Name | string | 表名 |  
| fields | Array[ruleField] | 表字段 [ 具体参数可见下面 [ruleField](#ruleField) ] |





### ruleField
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| isPK | boolean | 是否为主键 | 
| name | string | 字段名称 | 
| type | string | 字段类型 |










