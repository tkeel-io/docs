---
title: '查询实体列表'
description: "ListEntity"
sidebar_position: 143
---
## 接口说明
调用该接口查询实体列表。

## URI

```
post /entities/search
```


### 请求Body
| 字段名 | 类型 | 描述 |
| ----------- | ------ | ------ |
| Body | Object([v1ListEntityRequest](#v1ListEntityRequest)) |  |

#### v1ListEntityRequest

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |  
| condition | Array[v1SearchCondition] | 搜索条件 [ 具体参数可见下面 [v1SearchCondition](#v1SearchCondition) ] | 
| is_descending | boolean | 是否逆序， false：不逆序，true:逆序 | 
| order_by | string | 排序字段 | 
| owner | string | 用户id | 
| page_num | integer | 记录开始位置 | 
| page_size | integer | 每页限制条数 | 
| query | string | 搜索关键词 | 
| source | string | 来源id |





### v1SearchCondition
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| field | string | 实体属性字段 | 
| operator | string | 操作符 $gt $gte $eq $lt $lte  | 
| value | object | 实体数值 |









## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1ListEntityResponse](#v1ListEntityResponse)) |

#### v1ListEntityResponse

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |  
| items | Array[v1EntityResponse] | 实体列表 [ 具体参数可见下面 [v1EntityResponse](#v1EntityResponse) ] | 
| page_num | integer | 记录开始位置 | 
| page_size | integer | 每页限制条数 | 
| total | integer | 实体总数 |





### v1EntityResponse
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










