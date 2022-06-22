---
title: '创建索引'
description: "IndexObject"
sidebar_position: 171
---
## 接口说明
调用该接口创建索引。

## URI

```
post /index
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |

### 请求Body 
| 描述 | 类型 |
| ----------- | ------ |
|  | Object(<业务对象>) |

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1IndexResponse](#v1IndexResponse)) |

#### v1IndexResponse

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| status | string |  |







