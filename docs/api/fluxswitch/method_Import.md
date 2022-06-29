---
title: '批量导入'
description: "Import"
---
## 接口说明
调用该接口批量导入。

## URI

```
post /import
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |

### 请求Body
| 字段名 | 类型 | 描述 |
| ----------- | ------ | ------ |
| Body | Object([v1ImportRequest](#v1ImportRequest)) |  |

#### v1ImportRequest
| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |






## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1ImportResponse](#v1ImportResponse)) |

#### v1ImportResponse


| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- |







