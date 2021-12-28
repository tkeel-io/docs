---
title: Artisan
sidebar_position: 20
---

# Artisan
这是我们专门为开发者打造的一款用于生成项目架构和一些代码的 CLI 工具。

## 安装
```bash
go install github.com/tkeel-io/tkeel-interface/tool/cmd/artisan@latest
```
### 前提条件
- [go](https://golang.org/dl/)
- [protoc](https://github.com/protocolbuffers/protobuf)
- [protoc-gen-go](https://github.com/protocolbuffers/protobuf-go)

## 使用方法

### 创建一个新项目
```bash
artisan new github.com/tkeel-io/helloworld

cd helloworld

```
通过以上命令会从 [tkeel-io/tkeel-template-go](https://github.com/tkeel-io/tkeel-template-go)上复制模板，并且将包替换为 helloworld

此时已经可以直接运行并访问 helloworld 服务
```
$ cd helloworld
$ go generate ./...
$ go build -o ./bin/ ./...
$ ./bin/helloworld
```


### 初始化，下载工具

如果需要自定义，那么必须先初始化并下载工具。

```bash
# Download necessary plug-ins
make init
```

通过以上脚本，可以下载 protoc 工具全家桶，以及 protoc 插件和依赖

```
go get -d -u  github.com/tkeel-io/tkeel-interface/openapi
go get -d -u  github.com/tkeel-io/kit
go get -d -u  github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@v2.7.0
go install  github.com/tkeel-io/tkeel-interface/tool/cmd/artisan@latest
go install  google.golang.org/protobuf/cmd/protoc-gen-go@v1.27.1
go install  google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.1.0
go install  github.com/tkeel-io/tkeel-interface/protoc-gen-go-http@latest
go install  github.com/tkeel-io/tkeel-interface/protoc-gen-go-errors@latest
go install  github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@v2.7.0
```

### 重新生成 API 以及文档

如果修改了 Proto 定义，那么必须重新生成对应文件。

```bash
# Generate proto source code
make api
```

通过以上脚本，可以运行 protoc 工具来生成对应的结构体以及文档
```
protoc --proto_path=. \
       --proto_path=./third_party \
       --go_out=paths=source_relative:. \
       --go-http_out=paths=source_relative:. \
       --go-grpc_out=paths=source_relative:. \
       --go-errors_out=paths=source_relative:. \
       --openapiv2_out=./api/ \
       --openapiv2_opt=allow_merge=true \
       --openapiv2_opt=logtostderr=true \
       --openapiv2_opt=json_names_for_fields=false \
       $(API_PROTO_FILES)
```

- `-go_out=paths=source_relative:.` 生成 go 的结构体
- `--go-http_out=paths=source_relative:.` 生成对应的 http 服务代码
- `--go-grpc_out=paths=source_relative:.` 生成对应的 grpc 服务代码
- `--go-errors_out=paths=source_relative:.` 生成 errors 的结构体
- `-go_out=paths=source_relative:.` 生成 go 的结构体
- `--openapiv2_out=./api/` 生成对应的 swagger 文档


### 重新生成服务代码

如果修改了 Proto 服务定义，那么必须通过以下脚本重新生成服务代码。

```bash
# Generate service template
artisan proto service api/helloworld/v1/helloworld.proto -t pkg/service
```


:::note

为了避免修改您的业务代码，该命令不会覆盖您的文件。

:::


### 增加或删除服务启动代码

```bash
# Generate server template (this output needs to be manually added to cmd/helloworld/main.go)
artisan proto server api/helloworld/v1/helloworld.proto
```


通过以上脚本，可以输出启动代码，您可以加入任何地方来完成服务的启动。

```
💻 Add the following code to cmd/<project>.go  👇:

import(
    Greeter_v1 "github.com/tkeel-io/tkeeldemo/api/helloworld/v1"
)

GreeterSrv := service.NewGreeterService()
Greeter_v1.RegisterGreeterHTTPServer(httpSrv.Container, GreeterSrv)
Greeter_v1.RegisterGreeterServer(grpcSrv.GetServe(), GreeterSrv)
```


### 生成 API 的对应 Markdown

```bash
# Generate API's makedown
artisan markdown -f api/apidocs.swagger.json  -t third_party/markdown-templates/ -o ./docs/API/Greeter -m all
```

### 添加新的 protobuf 服务

1. 创建新的 proto

```bash
# Generate proto template
artisan proto add api/helloworld/v1/helloworld.proto
```

2. 生成对应文件（结构体、文档）
```bash
# Generate proto source code
make api
```


3. 生成对应服务
```bash
# Generate service template
artisan proto service api/helloworld/v1/helloworld.proto -t pkg/service
```

4. 生成对应启动代码
```bash
# Generate server template (this output needs to be manually added to cmd/helloworld/main.go)
artisan proto server api/helloworld/v1/helloworld.proto
```

:::note

启动代码需要加入您的启动函数中。

:::

5. 启动代码
```bash
# Run the program
go run cmd/helloworld/main.go
```
