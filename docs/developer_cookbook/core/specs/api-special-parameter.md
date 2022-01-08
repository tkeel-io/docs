---
title: API Special Parameters
sidebar_position: 16
---


## 1. CreateEntity

实体创建API

### Input

|名称|必要|类型|描述|
|---|---|----|----|
|id|true|string| 创建实体的id |
|type|true|string| 为实体指定`type` |
|owner|true|string| 创建 API 指定`owner` |
|source|true|string| 创建 API 指定`source` |
|properties|true|object| 创建实体，指定实体的属性。属性满足`Key-Value`规范。 |





### Output

```go
# core 的 API 返回结构
type Base struct {
	ID       string 
	Type     string 
	Owner    string 
	Source   string 
	Version  int64 
	LastTime int64 
	Mappers  []MapperDesc 
	KValues  map[string]constraint.Node 
	Configs  map[string]constraint.Config 
}

# Config 是 API 的交互结构
type Config struct {
	ID                string 
	Type              string 
	Weight            int 
	Enabled           bool 
	EnabledSearch     bool 
	EnabledTimeSeries bool 
	Description       string 
	Define            map[string]interface{} 
	LastTime          int64 
}
```



### Example

创建实体，`payload` 指定为`k-v`结构。

**Request：**

```bash
curl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/entities?id=device123" \
-H "Owner: admin" \
-H "Type: DEVICE" \
-H "Source: dm" \
-H "Content-Type: application/json" \
-d '{
      "status": "start",
      "temp": 2344,
      "object": {
          "field1": "value1",
          "field2": 123,
          "field3": {
              "ffff": "vvv"
          },
          "field4": [
              {
                  "age":21,
                  "name": "tom"
              },
              {
                  "age":22,
                  "name": "tomas"
              }
           ]
       }
    }'
```

**Response：**

```bash
{
    "id": "device123",
    "source": "dm",
    "owner": "admin",
    "type": "DEVICE",
    "configs": {},
    "properties": {
        "object": {
            "field1": "value1",
            "field2": 123,
            "field3": {
                "ffff": "vvv"
            },
            "field4": [
                {
                    "age": 21,
                    "name": "tom"
                },
                {
                    "age": 22,
                    "name": "tomas"
                }
            ]
        },
        "status": "start",
        "temp": 2344
    }
}
```




## 2. UpdateEntity

实体属性更新API

### Input

|名称|必要|类型|描述|
|---|---|----|----|
|id|true|string| 创建实体的id |
|type|true|string| 为实体指定`type` |
|owner|true|string| 创建 API 指定`owner` |
|source|true|string| 创建 API 指定`source` |
|properties|true|object| 创建实体，指定实体的属性。属性满足`Key-Value`规范。 |





### Output

```go
# core 的 API 返回结构
type Base struct {
	ID       string 
	Type     string 
	Owner    string 
	Source   string 
	Version  int64 
	LastTime int64 
	Mappers  []MapperDesc 
	KValues  map[string]constraint.Node 
	Configs  map[string]constraint.Config 
}

# Config 是 API 的交互结构
type Config struct {
	ID                string 
	Type              string 
	Weight            int 
	Enabled           bool 
	EnabledSearch     bool 
	EnabledTimeSeries bool 
	Description       string 
	Define            map[string]interface{} 
	LastTime          int64 
}
```



### Example

创建实体，`payload` 指定为`k-v`结构。

**Request：**

```bash
curl -X PUT "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123" \
-H "Owner: admin" \
-H "Type: DEVICE" \
-H "Source: dm" \
-H "Content-Type: application/json" \
-d '{
      "status": "end",
      "temp": 123
    }'
```

**Response：**

```bash
{
    "id": "device123",
    "source": "dm",
    "owner": "admin",
    "type": "DEVICE",
    "configs": {
        "temp2": {
            "define": {
                "max": 500,
                "min": 10,
                "unit": "°"
            },
            "description": "",
            "enabled": true,
            "enabled_search": false,
            "enabled_time_series": false,
            "id": "temp2",
            "last_time": 0,
            "type": "int",
            "weight": 0
        }
    },
    "properties": {
        "object": {
            "field1": "value1",
            "field2": 123,
            "field3": {
                "ffff": "vvv"
            },
            "field4": [
                {
                    "age": 21,
                    "name": "tom"
                },
                {
                    "age": 22,
                    "name": "tomas"
                }
            ]
        },
        "status": "start",
        "temp": 2344
    }
}
```



## 3. PatchEntity


实体属性更新API

### Input

|名称|必要|类型|描述|
|---|---|----|----|
|id|true|string| 创建实体的id |
|type|true|string| 为实体指定`type` |
|owner|true|string| 创建 API 指定`owner` |
|source|true|string| 创建 API 指定`source` |
|properties|true|array| 使用 `patch` 操作更新实体属性。 |


### Output

```go
# core 的 API 返回结构
type Base struct {
	ID       string 
	Type     string 
	Owner    string 
	Source   string 
	Version  int64 
	LastTime int64 
	Mappers  []MapperDesc 
	KValues  map[string]constraint.Node 
	Configs  map[string]constraint.Config 
}

# Config 是 API 的交互结构
type Config struct {
	ID                string 
	Type              string 
	Weight            int 
	Enabled           bool 
	EnabledSearch     bool 
	EnabledTimeSeries bool 
	Description       string 
	Define            map[string]interface{} 
	LastTime          int64 
}
```



### Example

创建实体，`payload` 指定为`k-v`结构。

**Request：**

```bash
curl -X PATCH "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123" \
  -H "Source: dm" \
  -H "Owner: admin" \
  -H "Type: DEVICE" \
  -H "Content-Type: application/json" \
  -d '[
        {
        "path": "temp",
        "operator": "replace",
        "value": 20
        }
    ]'
```

**Response：**

```bash
{
    "id": "device123",
    "source": "dm",
    "owner": "admin",
    "type": "DEVICE",
    "configs": {
        "temp2": {
            "define": {
                "max": 500,
                "min": 10,
                "unit": "°"
            },
            "description": "",
            "enabled": true,
            "enabled_search": false,
            "enabled_time_series": false,
            "id": "temp2",
            "last_time": 0,
            "type": "int",
            "weight": 0
        }
    },
    "properties": {
        "object": {
            "field1": "value1",
            "field2": 123,
            "field3": {
                "ffff": "vvv"
            },
            "field4": [
                {
                    "age": 21,
                    "name": "tom"
                },
                {
                    "age": 22,
                    "name": "tomas"
                }
            ]
        },
        "status": "end",
        "temp": 20
    }
}
```


## 4. SetConfigs


实体属性更新API

### Input

|名称|必要|类型|描述|
|---|---|----|----|
|id|true|string| 创建实体的id |
|type|true|string| 为实体指定`type` |
|owner|true|string| 创建 API 指定`owner` |
|source|true|string| 创建 API 指定`source` |
|configs|true|object| 实体属性配置信息。 |


### Output

```go
# core 的 API 返回结构
type Base struct {
	ID       string 
	Type     string 
	Owner    string 
	Source   string 
	Version  int64 
	LastTime int64 
	Mappers  []MapperDesc 
	KValues  map[string]constraint.Node 
	Configs  map[string]constraint.Config 
}

# Config 是 API 的交互结构
type Config struct {
	ID                string 
	Type              string 
	Weight            int 
	Enabled           bool 
	EnabledSearch     bool 
	EnabledTimeSeries bool 
	Description       string 
	Define            map[string]interface{} 
	LastTime          int64 
}
```



### Example

创建实体，`payload` 指定为`k-v`结构。

**Request：**

```bash
curl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123/configs?type=BASIC&owner=admin&source=dm" \
  -H "Content-Type: application/json" \
  -d '[
          {
            "id": "metrics",
            "type": "struct",
            "define": {
                "fields": {
                    "temp":   {
                        "define": {
                            "max": 500,
                            "min": 10,
                            "unit": "°"
                        },
                        "description": "",
                        "enabled": true,
                        "enabled_search": false,
                        "enabled_time_series": false,
                        "id": "temp",
                        "last_time": 0,
                        "type": "int",
                        "weight": 0
                    }
                }
            },
            "enabled": true,
            "enabled_search": true
          }
    ]'



 

```





**Response：**

```bash
{
    "id": "device123",
    "source": "dm",
    "owner": "admin",
    "type": "DEVICE",
    "configs": {
        "temp": {
            "define": {
                "max": 500,
                "min": 10,
                "unit": "°"
            },
            "description": "",
            "enabled": true,
            "enabled_search": false,
            "enabled_time_series": false,
            "id": "temp",
            "last_time": 0,
            "type": "int",
            "weight": 0
        }
    },
    "properties": {
        "object": {
            "field1": "value1",
            "field2": 123,
            "field3": {
                "ffff": "vvv"
            },
            "field4": [
                {
                    "age": 21,
                    "name": "tom"
                },
                {
                    "age": 22,
                    "name": "tomas"
                }
            ]
        },
        "status": "end",
        "temp": 20
    }
}
```



## PatchConfigs



### Example

创建实体，`payload` 指定为`k-v`结构。

**Request：**

```bash
# append cpu_used
curl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123/configs/patch?type=BASIC&owner=admin&source=dm" \
  -H "Content-Type: application/json" \
  -d '[{
              "path": "cpu_used",
              "operator": "replace",
              "value": {
                    "id": "cpu_used",
                    "type": "float",
                    "define": {
                        "max": 1,
                        "min": 0
                    },
                    "enabled": true,
                    "enabled_search": true
                }
    }]'

# remove cpu_used
curl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123/configs/patch?type=BASIC&owner=admin&source=dm" \
  -H "Content-Type: application/json" \
  -d '[{
              "path": "cpu_used",
              "operator": "remove"
    }]'

# append metrics.mem_used
curl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123/configs/patch?type=BASIC&owner=admin&source=dm" \
  -H "Content-Type: application/json" \
  -d '[
          {
              "path": "metrics.mem_used",
              "operator": "add",
              "value": {
                    "id": "mem_used",
                    "type": "float",
                    "define": {
                        "max": 1,
                        "min": 0
                    },
                    "enabled": true,
                    "enabled_search": true
            }
    }]'


# copy metrics.mem_used
curl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123/configs/patch?type=BASIC&owner=admin&source=dm" \
  -H "Content-Type: application/json" \
  -d '[{
              "path": "metrics.mem_used",
              "operator": "copy"
    }]'

# remove metrics.cpu_used
curl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123/configs/patch?type=BASIC&owner=admin&source=dm" \
  -H "Content-Type: application/json" \
  -d '[{
              "path": "metrics.cpu_used",
              "operator": "remove"
    }]'

# make path if not exists.
curl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123/configs/patch?type=BASIC&owner=admin&source=dm" \
  -H "Content-Type: application/json" \
  -d '[
          {
              "path": "metrics.pathnotfound.ttt",
              "operator": "add",
              "value": {
                    "id": "ttt",
                    "type": "float",
                    "define": {
                        "max": 1,
                        "min": 0
                    },
                    "enabled": true,
                    "enabled_search": true
            }
    }]'

# add config.
curl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123/configs/patch?type=BASIC&owner=admin&source=dm" \
  -H "Content-Type: application/json" \
  -d '[
          {
              "path": "root2.pathnotfound",
              "operator": "add",
              "value": {
                    "id": "ttt",
                    "type": "float",
                    "define": {
                        "max": 1,
                        "min": 0
                    },
                    "enabled": true,
                    "enabled_search": true
            }
    }]'


# remove 
curl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123/configs/patch?type=BASIC&owner=admin&source=dm" \
  -H "Content-Type: application/json" \
  -d '[{
              "path": "root2.pathnotfound.ttt",
              "operator": "remove"
    }]'

```

**Response：**

```bash
{
    "id": "device123",
    "source": "dm",
    "owner": "admin",
    "type": "DEVICE",
    "configs": {
        "metrics": {
            "define": {
                "fields": {
                    "mem_used": {
                        "define": {
                            "max": 1,
                            "min": 0
                        },
                        "description": "",
                        "enabled": true,
                        "enabled_search": false,
                        "enabled_time_series": false,
                        "id": "mem_used",
                        "last_time": 0,
                        "type": "float",
                        "weight": 0
                    },
                    "temp": {
                        "define": {
                            "max": 500,
                            "min": 10,
                            "unit": "°"
                        },
                        "description": "",
                        "enabled": true,
                        "enabled_search": false,
                        "enabled_time_series": false,
                        "id": "temp",
                        "last_time": 0,
                        "type": "int",
                        "weight": 0
                    }
                }
            },
            "description": "",
            "enabled": true,
            "enabled_search": false,
            "enabled_time_series": false,
            "id": "metrics",
            "last_time": 0,
            "type": "struct",
            "weight": 0
        },
        "metrics.mem_used": {
            "define": {
                "max": 1,
                "min": 0
            },
            "description": "",
            "enabled": true,
            "enabled_search": false,
            "enabled_time_series": false,
            "id": "mem_used",
            "last_time": 0,
            "type": "float",
            "weight": 0
        }
    },
    "properties": {
        "object": {
            "field1": "value1",
            "field2": 123,
            "field3": {
                "ffff": "vvv"
            },
            "field4": [
                {
                    "age": 21,
                    "name": "tom"
                },
                {
                    "age": 22,
                    "name": "tomas"
                }
            ]
        },
        "status": "end",
        "temp": 22
    }
}
```



## 5. AppendConfigs


实体属性更新API

### Input

|名称|必要|类型|描述|
|---|---|----|----|
|id|true|string| 创建实体的id |
|type|true|string| 为实体指定`type` |
|owner|true|string| 创建 API 指定`owner` |
|source|true|string| 创建 API 指定`source` |
|configs|true|object| 实体属性配置信息。 |


### Output

```go
# core 的 API 返回结构
type Base struct {
	ID       string 
	Type     string 
	Owner    string 
	Source   string 
	Version  int64 
	LastTime int64 
	Mappers  []MapperDesc 
	KValues  map[string]constraint.Node 
	Configs  map[string]constraint.Config 
}

# Config 是 API 的交互结构
type Config struct {
	ID                string 
	Type              string 
	Weight            int 
	Enabled           bool 
	EnabledSearch     bool 
	EnabledTimeSeries bool 
	Description       string 
	Define            map[string]interface{} 
	LastTime          int64 
}
```



### Example

创建实体，`payload` 指定为`k-v`结构。

**Request：**

```bash
curl -X PUT "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123/configs?type=BASIC&owner=admin&source=dm" \
  -H "Content-Type: application/json" \
  -d '[
          {
            "id": "temp3",
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

**Response：**

```bash
{
    "id": "device123",
    "source": "dm",
    "owner": "admin",
    "type": "DEVICE",
    "configs": {
        "temp": {
            "define": {
                "max": 500,
                "min": 10,
                "unit": "°"
            },
            "description": "",
            "enabled": true,
            "enabled_search": false,
            "enabled_time_series": false,
            "id": "temp",
            "last_time": 0,
            "type": "int",
            "weight": 0
        },
        "temp3": {
            "define": {
                "max": 500,
                "min": 10,
                "unit": "°"
            },
            "description": "",
            "enabled": true,
            "enabled_search": false,
            "enabled_time_series": false,
            "id": "temp3",
            "last_time": 0,
            "type": "int",
            "weight": 0
        }
    },
    "properties": {
        "object": {
            "field1": "value1",
            "field2": 123,
            "field3": {
                "ffff": "vvv"
            },
            "field4": [
                {
                    "age": 21,
                    "name": "tom"
                },
                {
                    "age": 22,
                    "name": "tomas"
                }
            ]
        },
        "status": "end",
        "temp": 20
    }
}
```



## 6. RemoveConfigs

实体属性更新API

### Input

|名称|必要|类型|描述|
|---|---|----|----|
|id|true|string| 创建实体的id |
|type|true|string| 为实体指定`type` |
|owner|true|string| 创建 API 指定`owner` |
|source|true|string| 创建 API 指定`source` |
|property_ids|true|string| 指定需要删除的实体属性id，property_ids=temp,temp2,temp3 |


### Output

```go
# core 的 API 返回结构
type Base struct {
	ID       string 
	Type     string 
	Owner    string 
	Source   string 
	Version  int64 
	LastTime int64 
	Mappers  []MapperDesc 
	KValues  map[string]constraint.Node 
	Configs  map[string]constraint.Config 
}

# Config 是 API 的交互结构
type Config struct {
	ID                string 
	Type              string 
	Weight            int 
	Enabled           bool 
	EnabledSearch     bool 
	EnabledTimeSeries bool 
	Description       string 
	Define            map[string]interface{} 
	LastTime          int64 
}
```



### Example

创建实体，`payload` 指定为`k-v`结构。

**Request：**

```bash
curl -X DELETE "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123/configs?type=BASIC&owner=admin&source=dm&property_ids=temp3"  -H "Content-Type: application/json" 
```

**Response：**

```bash
{
    "id": "device123",
    "source": "dm",
    "owner": "admin",
    "type": "DEVICE",
    "configs": {
        "temp": {
            "define": {
                "max": 500,
                "min": 10,
                "unit": "°"
            },
            "description": "",
            "enabled": true,
            "enabled_search": false,
            "enabled_time_series": false,
            "id": "temp",
            "last_time": 0,
            "type": "int",
            "weight": 0
        }
    },
    "properties": {
        "object": {
            "field1": "value1",
            "field2": 123,
            "field3": {
                "ffff": "vvv"
            },
            "field4": [
                {
                    "age": 21,
                    "name": "tom"
                },
                {
                    "age": 22,
                    "name": "tomas"
                }
            ]
        },
        "status": "end",
        "temp": 20
    }
}
```



## 7. QueryConfigs

实体属性更新API

### Input

|名称|必要|类型|描述|
|---|---|----|----|
|id|true|string| 创建实体的id |
|type|true|string| 为实体指定`type` |
|owner|true|string| 创建 API 指定`owner` |
|source|true|string| 创建 API 指定`source` |
|property_ids|true|string| 指定需要删除的实体属性id，支持嵌套，property_ids=temp,temp2,temp3, metrics.temp|


### Output

```go
# core 的 API 返回结构
type Base struct {
	ID       string 
	Type     string 
	Owner    string 
	Source   string 
	Version  int64 
	LastTime int64 
	Mappers  []MapperDesc 
	KValues  map[string]constraint.Node 
	Configs  map[string]constraint.Config 
}

# Config 是 API 的交互结构
type Config struct {
	ID                string 
	Type              string 
	Weight            int 
	Enabled           bool 
	EnabledSearch     bool 
	EnabledTimeSeries bool 
	Description       string 
	Define            map[string]interface{} 
	LastTime          int64 
}
```



### Example

创建实体，`payload` 指定为`k-v`结构。

**Request：**

```bash
curl -X GET "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123/configs?type=BASIC&owner=admin&source=dm&property_ids=temp"  -H "Content-Type: application/json" 
```

**Response：**

```bash
{
    "id": "device123",
    "source": "dm",
    "owner": "admin",
    "type": "DEVICE",
    "configs": {
        "temp": {
            "define": {
                "max": 500,
                "min": 10,
                "unit": "°"
            },
            "description": "",
            "enabled": true,
            "enabled_search": false,
            "enabled_time_series": false,
            "id": "temp",
            "last_time": 0,
            "type": "int",
            "weight": 0
        }
    },
    "properties": {}
}
```




