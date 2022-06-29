---
title: '批量更新实体属性'
description: "PatchEntityProps"
sidebar_position: 96
---
## 接口说明
调用该接口批量更新实体属性。

## URI

```
patch /entities/{id}
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- | 

| id | path | string | 实体id |  Required | 

| source | query | string | 来源id |  false |
| owner | query | string | 用户id |  false |
| type | query | string | 实体类型 |  false |


### 请求Body 
| 描述 | 类型 |
| ----------- | ------ |
| 实体属性 | Object(<业务对象>) |

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1EntityResponse](#v1EntityResponse)) |

#### v1EntityResponse

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| configs | object | 实体配置 | 
| description | string | 实体描述 | 
| id | string | 实体id | 
| last_time | string | 上次修改时间 |  
| mappers | Array[v1Mapper] | 实体映射 [ 具体参数可见下面 [v1Mapper](#v1Mapper) ] | 
| owner | string | 用户id | 
| properties | object | 实体属性 | 
| source | string | 来源id | 
| template_id | string | 实体模版 | 
| type | string | 实体类型 | 
| version | string | 实体版本 |





### v1Mapper
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| description | string | 映射描述 | 
| id | string | 映射id | 
| name | string | 映射名称 | 
| tql | string | 映射tql语句 |










