---
title: IoT 场景下，通过模型创建设备
sidebar_position: 1
---





### 1. 创建模型实体

```bash
# 1. 创建模型实体
curl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/entities?id=template123" \
-H "Owner: admin" \
-H "Type: TEMPLATE" \
-H "Source: dm" \
-H "Content-Type: application/json" \
-d '{}'
```




### 2. 编辑模型实体配置

```bash
# 编辑模型
curl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/entities/template123/configs?type=TEMPLATE&owner=admin&source=dm" \
  -H "Content-Type: application/json" \
  -d '[
          {
            "id": "temp",
            "type": "int",
            "define": {
                "unit": "°",
                "max": 500,
                "min": 10
            },
            "enabled": true,
            "enabled_search": true
          }
    ]'
```


### 3. 通过模型创建设备


```bash
# 指定模型创建设备
curl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/entities?id=device12344&from=template123" \
-H "Owner: admin" \
-H "Type: DEVICE" \
-H "Source: dm" \
-H "Content-Type: application/json" \
-d '{
      "status": "start",
      "temp": 2344
    }'
```


### 4. 查询实体

```bash
curl -X GET "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123" \
  -H "Source: dm" \
  -H "Owner: admin"  \
  -H "Type: DEVICE"
```


### 5. 编辑实体

```bash
curl -X PUT "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123" \
  -H "Source: dm" \
  -H "Owner: admin" \
  -H "Type: DEVICE" \
  -H "Content-Type: application/json" \
  -d '{
       "status": "end",
       "temp":123
     }'
```

