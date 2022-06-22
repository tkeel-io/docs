---
title: '关键词搜索'
description: "SearchObjects"
sidebar_position: 232
---
## 接口说明
调用该接口关键词搜索。

## URI

```
post /search
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |

### 请求Body
| 字段名 | 类型 | 描述 |
| ----------- | ------ | ------ |
| Body | Object([v1SearchRequest](#v1SearchRequest)) |  |

#### v1SearchRequest

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |  
| condition | Array[v1SearchCondition] | 条件列表 [ 具体参数可见下面 [v1SearchCondition](#v1SearchCondition) ] | 
| is_descending | boolean | 是否逆序， false：不逆序，true:逆序 | 
| order_by | string | 排序字段 | 
| owner | string | 用户id | 
| page_num | integer | 记录开始位置 | 
| page_size | integer | 每页限制条数 | 
| query | string | 查询关键词 | 
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
| 200 | OK | Object([v1SearchResponse](#v1SearchResponse)) |

#### v1SearchResponse

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| items | Array[ object ] | 查询结果列表 | 
| page_num | integer | 记录开始位置 | 
| page_size | integer | 每页限制条数 | 
| total | string | 结果总数 |







