---
title: '下载模板'
description: "Template"
---
## 接口说明
调用该接口下载模板。

## URI

```
get /template
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1TemplateResponse](#v1TemplateResponse)) |

#### v1TemplateResponse


| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| content | string | 模板内容 |







