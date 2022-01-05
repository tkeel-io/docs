---
title: 模型
sidebar_position: 3
---



## Model


> model 作为实体存在， model 是对 Entity 的约束定义，模型和实体之间可以存在继承关系从而建立约束力。

## Roadmap

1. 模型实体
2. 模型是实体属性约束的定义。
3. 模型和实体之间定义`继承`关系实现约束力。
4. 模型支持本地化，实体的约束条件可以在模型的基础上特化。
5. 实体可以不继承任何模型。




## 模型是特定类型的实体

模型是具有特定类型的实体，和`设备`，`空间`，`订阅`一样都是实体。

![model-is-entity](/images/core/model-is-entity.png)



## 模型和实体之间的关系

模型和实体之间可以存在`继承` `关系`，通过`继承`来完成模型对实体的约束。

![entity-extends-model](/images/core/entity-extends-model.png)


## 模型允许多继承

同一个实体的约束条件可能是来自多个模型，我们对这些模型约束进行合并，合并的结果作为实体的约束条件。

![entity-multiple-extends-models](/images/core/entity-multiple-extends-models.png)


## 模型约束允许本地化

为了满足实体特定的约束，我们允许实体在继承模型的基础上定义本地化约束。

![entity-extends-model-add-local-constraints](/images/core/entity-extends-model-add-local-constraints.png)


`本地化约束`其实和模型的继承关系是统一的，`本地化约束`就像是实体本地的一个模型，只能被当前实体继承。



## 模型实现

模型是实体，模型也具有属性，是k-v的，模型的属性用于描述继承该模型的属性的约束条件。


```go
type Config struct {
	ID                string                 `json:"id" mapstructure:"id"`
	Type              string                 `json:"type" mapstructure:"type"`
	Weight            int                    `json:"weight" mapstructure:"weight"`
	Enabled           bool                   `json:"enabled" mapstructure:"enabled"`
	EnabledSearch     bool                   `json:"enabled_search" mapstructure:"enabled_search"`
	EnabledTimeSeries bool                   `json:"enabled_time_series" mapstructure:"enabled_time_series"`
	Description       string                 `json:"description" mapstructure:"description"`
	Define            map[string]interface{} `json:"define" mapstructure:"define"`
	LastTime          int64                  `json:"last_time" mapstructure:"last_time"`
}

// ID: 属性 ID 或者嵌套属性的 ID。
// Type: 属性的类型，如 int, float32, string 等。
// Weight: 属性配置的权重。
// Enabled: 决定属性是否启用，默认true。
// EnabledSearch: 配置属性是否持久化到搜索引擎。
// EnabledTimeSeries: 配置属性是否持久化到时序数据库。
// Description: 关于属性的描述信息。
// Define: 关于不同类型的属性配置信息。
// LastTime: 属性配置的最后更新时间。
```

### Define 内置字段

|名称|适用类型|必须|描述|
|---|-------|---|----|
|max|`number`|false|属性的最大值。|
|min|`number`|false|属性的最小值。|
|length|string, array|false|属性的size。|



## Example

通过模型创建实体，[详情请查看](../tutorial/iot-create-entity-from-model.md)


**具有模型约束的设备实体示例：**
```bash
# device entity
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
        "status": "end",
        "temp": 20
    }
}
```



