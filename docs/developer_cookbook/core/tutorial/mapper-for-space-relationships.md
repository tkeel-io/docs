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
        "long_space_id": "space123"
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
        "parent_id": "space123",
        "long_space_id": "space123/space234"
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
        "parent_id":"space234",
        "long_space_id": "space123/space234/device123"
    }
}
```







## 需求 

我们想要实现对设备进行移动后，设备的`long_space_id`自动变更。

在设备和空间组成的树中，移动树中的节点，其实也就是意味着更新节点的`parent_id`， 所以我们可以根据对`parent_id`的监听来更新`long_space_id`字段。




```sql
insert into device123 select long_space(device123.parent_id) + device123.id as long_space_id;
```



### 为设备创建映射



```bash
curl -XPOST "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123/mappers" \
-H "Source: dm" \
-H "Owner: admin" \
-H "Type: DEVICE" \
-H "Content-Type: application/json" \
-d '{
    "name": "mapper-update-long-space",
    "tql": "insert into device123 select long_space(device123.parent_id) + device123.id as long_space_id"
}'
```
