---
title: '下载时序数据'
description: "DownloadTSData"
sidebar_position: 83
---
## 接口说明
调用该接口下载时序数据。

## URI

```
get /ts/{id}
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |    
| id | path | string | 实体id |  Required |  
| start_time | query | string | 起始时间 |  false |
| end_time | query | string | 终止时间 |  false |
| identifiers | query | string | 标识符 |  false |

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | Object([v1DownloadTSDataResponse](#v1DownloadTSDataResponse)) |

#### v1DownloadTSDataResponse

| 字段名 | 类型 | 描述 |
| ---- | ---- | ----------- | 
| data | string | 数据内容 | 
| filename | string | 文件名 | 
| length | string | 数据长度 |







