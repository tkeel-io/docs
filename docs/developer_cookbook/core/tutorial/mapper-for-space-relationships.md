---
title: 为空间关系变更创建映射
sidebar_position: 2
---


**有如下空间和设备**
```json
// space123
{
    "id": "space123",
    "source": "dm",
    "owner": "admin",
    "type": "SPACE",
    "configs": {},
    "properties": { 
        "temp": 20,
        "path": "space123"
    }
}


// space234
{
    "id": "space234",
    "source": "dm",
    "owner": "admin",
    "type": "SPACE",
    "configs": {},
    "properties": { 
        "temp": 20,
        "path": "space123/space234"
    }
}


// device123
{
    "id": "device123",
    "source": "dm",
    "owner": "admin",
    "type": "DEVICE",
    "configs": {},
    "properties": {
        "status": "running",
        "temp": 20,  
        "path": "space123/space234/device123"
    }
}
```







## 需求 

我们想要实现对设备进行移动后，设备的`long_space_id`自动变更。
移动实体的的 `path` 需要其上一级实体的 `path` 作为前缀拼接。

那么我们先删除与原来父级实体相关的映射，然后创建一个新的映射，新的映射会自动更新`path`字段。
 


### delete old-mapper
```bash
curl -XPOST "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123/mappers/mapper_space234" \
  -H "Source: dm"   \
  -H "Owner: admin" \
  -H "Type: DEVICE" \
  -H "Content-Type: application/json"
```




### create new-mapper
```bash
  curl -XPOST "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123/mappers" \
  -H "Source: dm" \
  -H "Owner: admin" \
  -H "Type: DEVICE" \
  -H "Content-Type: application/json" \
  -d '{
      "name": "mapper_space123",
      "tql": "insert into device123 select space123.path + "/" + device123.id as path"
    }'
```




