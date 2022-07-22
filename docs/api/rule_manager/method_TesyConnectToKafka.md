---
title: '测试kafka配置'
description: "TesyConnectToKafka"
sidebar_position: 32
---
## 接口说明
调用该接口测试kafka配置。

## URI

```
get /testing/kafka
```

## 请求参数

| 名称 | 参数位置 | 类型 | 描述 |  是否必须 |
| ---- | ---------- | ----------- | ----------- | ----------- |
| host | query | string | kafka地址, ','分割 |  true |
| topic | query | string | topic |  true |

## 响应


### 响应<200>
| Code | 描述 | 类型 |
| ---- | ----------- | ------ | 
| 200 | OK | - |




