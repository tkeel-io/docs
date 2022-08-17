---
title: 映射
sidebar_position: 2
---

> 映射是指实体与实体之间属性实现计算、重组、赋值的规则。




## 映射

我们通过配置 Entity1 和 Entity2 之间的映射，实现：
- Entity2.property1 = Entity1.property1
- Entity2.property3 = Entity1.property3 + Entity1.property4


![property-mapping](/images/core/property-mapping.png)



从实体的维度看来，实现映射，也就意味着我们通过映射规则实现了实体之间的通信。

![property-mapping-outline](/images/core/mapping-outline.png)

我们通过对此过程的分析，可将这一过程分为三个阶段：
1. 传递：实现实体之间数据的传递（写复制）。
2. 计算：根据映射规则计算得到输出。
3. 更新：使用计算得到的输出结果更新目标实体。



#### 映射规则

我们提供了两类映射规则实现： Expression，TQL。

## Expression

表达式，使用简单的语法来对实体属性的赋值方式进行设置：

```bash
device123.temp = device234.temp
```
如存在实体 device123 和 device234， 我们为 device123 配置表达式：`device123.temp = device234.temp`。次表达式实现使用 device234.temp 属性更新 device123.temp 属性。

使用 core 接口创建此 Expression：

```bash
curl --location --request POST 'http://192.168.123.9:32758/v1/entities/device123/expressions?type=DEVICE&owner=admin&source=dm' \
--header 'Content-Type: application/json' \
--data-raw '{
    "expressions": [
        {
            "name": "setTemp",
            "path": "temp",
            "expression": "device234.temp",
            "description": "使用设备实体 device234 的 temp 属性更新设备实体 device123 的 temp 属性。"
        }
    ]
}'
```

> *notes: 更多 APIs 详细信息请查看 [APIs docs](https://docs.tkeel.io/api/Core/tag)。*

### 表达式资源定义

```go
type Expression struct {
	// expression identifier.
	ID string
	// target path.
	Path string
	// expression name.
	Name string
	// expression type, enum{ sub | eval}.
	Type string
	// expression owner.
	Owner string
	// entity id.
	EntityID string
	// expression text.
	Expression string
	// expression description.
	Description string
}
```

表达式作为一种元数据资源被 core::node 同步并解析处理。


### 表达式解析

表达式中指定了该表达式计算输入需要的实体ID和实体属性。通过对表达式的解析我们可以得到这些信息，解析结果输出如下：

![expression-parse-delivery](/images/core/expression-parse-delivery.png)


```go
type ExpressionInfo struct {
	// embeded Expression.
	dao.Expression
    // expression 所属 entity 是否属于当前 runtime.
	isHere        bool
	version       int
    // subscribe endpoint
	subEndpoints  []SubEndpoint
    // eval endpoint.
	evalEndpoints []EvalEndpoint
}

type SubEndpoint struct {
	path         string
	target       string
	runtimeID   string
	expressionID string
}

type EvalEndpoint struct {
	path        string
	target      string
	expresionID string
}
```

我们解析 Expression 得到多个 ExpressionInfo，然后将 ExpressionInfo 加载到对应的 Runtime 中：

```js
/*
    前提：
        1. 存在 设备 device234，device345 和 device123
        2. 存在两个 runtime
            1. device123 和 device234 运行在 runtime1 上
            2. device345 运行在 runtime2 上

*/
// expression demo.
{
    id: "admin.device123.temp",
    name: "sum device temp",
    path: "temp",
    type: "eval",
    owner: "admin",
    entity_id: "device123",
    expression: "device234.temp + device345.temp",
    description: "求和 device234 和 device345 的 temp 属性",
}

// call func parseExpression(expr dao.Expression, version int) (map[string]*ExpressionInfo, error) .

// => result:

{
    "runtime1": {
        // embed Expression
        isHere: true,
        version: 1,
        subEndpoints: [
            {
                path: "device234.properties.temp",
                target: "device123",
                runtimeID: "runtime1",
                expressionID: "admin.device123.temp"
            }
        ],
        evalEndpoints: [
            {
                path: "device234.properties.temp",
                target: "device123",
                expressionID: "admin.device123.temp"
            },{
                path: "device345.properties.temp",
                target: "device123",
                expressionID: "admin.device123.temp"
            }
        ]
    },
    "runtime2": {
        // embed Expression
        isHere: false,
        version: 1,
        subEndpoints: [
            {
                path: "device345.properties.temp",
                target: "device123",
                runtimeID: "runtime2",
                expressionID: "admin.device123.temp"
            }
        ],
        evalEndpoints: []
    }
}
```


### Expression 在 Runtime 挂载


在 Runtime 模块中我们构建 `subTree` 和 `evalTree` 来匹配实体属性更新 path 和映射监听 path，以此完成映射的 `传递` 和 `计算` 两个阶段。


![expression-parse-and-mount](/images/core/expression-parse-and-mount.png)


ExpressionInfo 中的 subEndpoints 中的端点挂载到 subTree 中，用于在实体状态更新后，配更新实体属性的订阅者，如果存在，则根据 SubEndpoint 将变更属性发送给订阅者；evalEndpoints 中的端点挂载到 Runtime 中的 evalTree，用于订阅者收到订阅消息之后，匹配计算表达式，通过计算表达式计算结果。


### Path 匹配原则

当实体的属性变更之后，我们需要知道其订阅者是谁，就需要通过变更属性的path（`eg: device234.properties.temp`）。

匹配原则：
- 匹配变更path的所有前缀path。
- 匹配所有以变更path为前缀的 path。
- 支持模糊匹配。



![mapper-trie-tree-match](/images/core/mapper-trie-tree-match.png)



#### 匹配变更path的所有前缀path

在 JSON 中，内层字段值发生变更，包含此变更字段的对象也就发生了变更：

```json
{
    "a": {
        "b": {
            "d": 20
        },
        "c": 800
    }
}

// 当 a.b.d 发生变化，那么a, a.b 都包含了变更。
```

所以当 path: `device234.properties.temp` 发生变更，下列 path 的订阅者都能收到变更：

1. device234.*
2. device234.properties
3. device234.properties.temp


#### 匹配所有以变更path为前缀的 path

JSON 中外层的字段发生变更，我们判定为其变更字段包含的内层字段同样发生变更：

```json
{
    "a": {
        "b": {
            "d": 20
        },
        "c": 800
    }
}

// 当 a.b 发生变化，那么判定为 a.b.d 也发生了变更。
```


#### 支持模糊匹配

- Separator： `.`
- WildcardOne:  `+`,
- WildcardSome: `*`,





## TQL

TQL 不是一套独立的规则描述，TQL 是一个或多个 Expression 的复合体，且其与 Expression 的使用场景有所区别。

```sql
# demo TQL Text.
insert into device123
select
device234.temp as temp,
device234.status as status;
```

一条 TQL 语句可以转换成多条 Expression，由此我么可以通过 TQL 创建批量创建 Expression。

```js
// TQL => Expressions:
{
    id: "admin.device123.temp",
    name: "sync device temp",
    path: "temp",
    type: "eval",
    owner: "admin",
    entity_id: "device123",
    expression: "device234.temp",
}
{
    id: "admin.device123.status",
    name: "sync device status",
    path: "status",
    type: "eval",
    owner: "admin",
    entity_id: "device123",
    expression: "device234.status",
}
```

当然我们更多使用 TQL 用于实体数据的订阅，而非映射，映射可以直接使用 Expression 得到更好的表达。

```sql
insert into sub123 select device123.*, device234.properties.temp, device345.*;
```


## Runtime 之间的数据订阅

实体存在于 Runtime 内部，实体之间的通信可以基于Runtime之间的通信来完成，且更加高效。

![mapper-tentacles](/images/core/mapper-tentacles.png)


















