---
title: '查询订阅列表'
description: "listSubscribe"
---
## 接口说明
调用该接口查询订阅列表。

## URI

```
post /subscribe/list
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |

### 请求Body
| 字段名 | 类型 | 描述 |
| ----------- | ------ | ------ |
| Body | Object([v1ListSubscribeRequest](#v1ListSubscribeRequest)) |  |

#### v1ListSubscribeRequest| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| is_descending | boolean | 倒序 | 
| key_words | string | 关键字 | 
| order_by | string | 排序 | 
| page_num | string | 页数 | 
| page_size | string | 每页数量 | 
| search_key | string | 关键字值 |






## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1ListSubscribeResponse](#v1ListSubscribeResponse)) |

#### v1ListSubscribeResponse

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |  
| data | Array[v1SubscribeObject] | 订阅 [ 具体参数可见下面 [v1SubscribeObject](#v1SubscribeObject) ] | 
| last_page | string | 上一页 | 
| page_num | string | 页数 | 
| page_size | string | 每页数量 | 
| total | string | 总数 |


### v1SubscribeObject
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| description | string | 订阅描述 | 
| endpoint | string | 订阅endpoint | 
| id | string | 订阅ID | 
| is_default | boolean | 是否为默认订阅 | 
| title | string | 订阅名称 |







