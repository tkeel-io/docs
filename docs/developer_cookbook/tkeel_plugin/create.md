---
sidebar_position: 10
title: 创建插件
---

# 创建插件
相信您应该已经看见了 tKeel 插件功能的强大，本页指南将指导您如何创建一款自己心仪的插件，

通过 tKeel CLI 完成在 tKeel 上安装和注册一个指定 helm 源的插件。有关更多信息，请参见 [在 tKeel 上安装插件] 和在 [tKeel 上注册插件]。
## 使用 Artisan 快速搭建
我们极力推荐您使用我们推出的开发者工具 [artisan](../tools/artisan.md)，因为我们将一些能自动化的开发流程都集成在了该工具中，它能帮助您简单便捷的开发出一款插件应用。
### 前提条件

- [tKeel 平台](/#install-and-initialize-your-tkeel)
- [tKeel CLI](/cli#install-cli) 工具
- 基础的 Go 编程能力

### 开发插件
#### 新建项目
使用 [artisan new](../tools/artisan.md#创建一个新项目) 创建一个新项目，并安装依赖。
```bash
$ artisan new github.com/tkeel-io/newPlugin
🚀 Creating service newPlugin, layout repo is https://github.com/tkeel-io/tkeel-template-go.git, please wait a moment.

hint: Pulling without specifying how to reconcile divergent branches is
hint: discouraged. You can squelch this message by running one of the following
hint: commands sometime before your next pull:
hint:
hint:   git config pull.rebase false  # merge (the default strategy)
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
hint:
hint: You can replace "git config" with "git config --global" to set a default
hint: preference for all repositories. You can also pass --rebase, --no-rebase,
hint: or --ff-only on the command line to override the configured default per
hint: invocation.
From https://github.com/tkeel-io/tkeel-template-go
   477e13a..1d3e547  main       -> origin/main
Updating 477e13a..1d3e547
Fast-forward
 Makefile                                           |  25 +-
 api/apidocs.swagger.json                           | 451 +++++++++++++++++++++
 api/helloworld/v1/error.pb.go                      | 156 +++++++
 api/helloworld/v1/error_errors.pb.go               |  44 ++
 api/helloworld/v1/greeter.proto                    |  22 +-
 api/helloworld/v1/greeter_http.pb.go               |  11 +-
 api/openapi/v1/server.pb.go                        |  32 +-
 api/openapi/v1/server.proto                        |   2 +-
 api/openapi/v1/server_grpc.pb.go                   |  24 +-
 api/openapi/v1/server_http.pb.go                   |  69 ++--
 go.mod                                             |   7 +-
 go.sum                                             |  19 +-
 third_party/markdown-templates/error.md            |  12 +
 third_party/markdown-templates/method.md           |  84 ++++
 third_party/markdown-templates/schema.md           |  23 ++
 .../markdown-templates/schema_description.md       |   1 +
 third_party/markdown-templates/tag.md              |  15 +
 third_party/openapi/v1/openapi.proto               |  42 +-
 18 files changed, 936 insertions(+), 103 deletions(-)
 create mode 100644 api/apidocs.swagger.json
 create mode 100644 api/helloworld/v1/error.pb.go
 create mode 100644 api/helloworld/v1/error_errors.pb.go
 create mode 100644 third_party/markdown-templates/error.md
 create mode 100644 third_party/markdown-templates/method.md
 create mode 100644 third_party/markdown-templates/schema.md
 create mode 100644 third_party/markdown-templates/schema_description.md
 create mode 100644 third_party/markdown-templates/tag.md

CREATED newPlugin/.gitignore (600 bytes)
CREATED newPlugin/Dockerfile (409 bytes)
CREATED newPlugin/LICENSE (1065 bytes)
CREATED newPlugin/Makefile (2009 bytes)
CREATED newPlugin/README.md (1621 bytes)
CREATED newPlugin/api/apidocs.swagger.json (11082 bytes)
CREATED newPlugin/api/helloworld/v1/error.pb.go (5728 bytes)
CREATED newPlugin/api/helloworld/v1/error.proto (617 bytes)
CREATED newPlugin/api/helloworld/v1/error_errors.pb.go (1499 bytes)
CREATED newPlugin/api/helloworld/v1/greeter.pb.go (10706 bytes)
CREATED newPlugin/api/helloworld/v1/greeter.proto (1556 bytes)
CREATED newPlugin/api/helloworld/v1/greeter_grpc.pb.go (3464 bytes)
CREATED newPlugin/api/helloworld/v1/greeter_http.pb.go (2352 bytes)
CREATED newPlugin/api/openapi/v1/server.pb.go (8011 bytes)
CREATED newPlugin/api/openapi/v1/server.proto (1289 bytes)
CREATED newPlugin/api/openapi/v1/server_grpc.pb.go (9512 bytes)
CREATED newPlugin/api/openapi/v1/server_http.pb.go (6050 bytes)
CREATED newPlugin/cmd/newPlugin/main.go (1619 bytes)
CREATED newPlugin/go.mod (755 bytes)
CREATED newPlugin/go.sum (19705 bytes)
CREATED newPlugin/pkg/server/grpc.go (192 bytes)
CREATED newPlugin/pkg/server/http.go (196 bytes)
CREATED newPlugin/pkg/service/README.md (10 bytes)
CREATED newPlugin/pkg/service/greeter.go (660 bytes)
CREATED newPlugin/pkg/service/openapi.go (1988 bytes)
CREATED newPlugin/pkg/util/util.go (416 bytes)
CREATED newPlugin/third_party/README.md (14 bytes)
CREATED newPlugin/third_party/google/api/annotations.proto (1051 bytes)
CREATED newPlugin/third_party/google/api/http.proto (15140 bytes)
CREATED newPlugin/third_party/google/api/httpbody.proto (2671 bytes)
CREATED newPlugin/third_party/google/protobuf/descriptor.proto (38027 bytes)
CREATED newPlugin/third_party/google/protobuf/empty.proto (2428 bytes)
CREATED newPlugin/third_party/markdown-templates/error.md (205 bytes)
CREATED newPlugin/third_party/markdown-templates/method.md (2488 bytes)
CREATED newPlugin/third_party/markdown-templates/schema.md (1125 bytes)
CREATED newPlugin/third_party/markdown-templates/schema_description.md (86 bytes)
CREATED newPlugin/third_party/markdown-templates/tag.md (327 bytes)
CREATED newPlugin/third_party/openapi/v1/openapi.proto (3433 bytes)
CREATED newPlugin/third_party/protoc-gen-openapiv2/options/annotations.proto (1760 bytes)
CREATED newPlugin/third_party/protoc-gen-openapiv2/options/openapiv2.proto (24777 bytes)
CREATED newPlugin/third_party/validate/README.md (81 bytes)
CREATED newPlugin/third_party/validate/validate.proto (31270 bytes)

🍺 Project creation succeeded newPlugin
💻 Use the following command to start the project 👇:

$ cd newPlugin
$ go generate ./...
$ go build -o ./bin/ ./...
$ ./bin/newPlugin

```

#### 编写业务逻辑
根据命令行提示指示，接下来我们需要进入到项目目录然后进行一些项目初始化操作。
```bash
$ cd newPlugin

# 进行一些代码初始
$ go generate ./...

# 构建可执行二进制文件
$ go build -o ./bin/ ./...

# 运行服务
$ ./bin/newPlugin
2021-12-01T20:41:56+08:00	debug	http/server.go:47	HTTP Server listen: :31234	{"app": "hello"}
2021-12-01T20:41:56+08:00	debug	grpc/server.go:43	GRPC Server listen: :31233	{"app": "hello"}
2021-12-01T20:41:56+08:00	info	app/app.go:33	app hello running	{"app": "hello"}
2021-12-01T20:41:59+08:00	error	http/server.go:50	error http serve: http: Server closed	{"app": "hello"}

```
您需要做的就是修改 `pkg/service/` 下对应服务的业务逻辑代码，我们以模板生成的 greeter 服务为例：
```bash
$ cat pkg/service/greeter.go

package service

import (
	"context"

	v1 "github.com/tkeel-io/newPlugin/api/helloworld/v1"
)

// GreeterService is a greeter service.
type GreeterService struct {
	v1.UnimplementedGreeterServer
}

// NewGreeterService new a greeter service.
func NewGreeterService() *GreeterService {
	return &GreeterService{
		UnimplementedGreeterServer: v1.UnimplementedGreeterServer{},
	}
}

// SayHello implements helloworld.GreeterServer.
func (s *GreeterService) SayHello(ctx context.Context, in *v1.HelloRequest) (*v1.HelloResponse, error) {
	return &v1.HelloResponse{Message: "Hello " + in.GetName() + " " + in.GetTest().GetAaa() + " " + in.GetTest().GetBbb()}, nil
}

```

artisan 帮助我们生成的项目结构大概是这样的：
```
├── Dockerfile
├── LICENSE
├── Makefile
├── README.md
├── api
│   ├── apidocs.swagger.json
│   ├── helloworld
│   └── openapi
├── bin
│   └── newPlugin
├── cmd
│   └── newPlugin
├── go.mod
├── go.sum
├── pkg
│   ├── server
│   ├── service
│   └── util
└── third_party
    ├── README.md
    ├── google
    ├── markdown-templates
    ├── openapi
    ├── protoc-gen-openapiv2
    └── validate
```
##### 模板使用实践
- 在 `api/xxx/yyy.proto` 中定义接口消息
- 在 `cmd/newPlugin/main.go` 中注册服务（server）
- 在 `pkg/service/xxx.go` 中对应编写业务逻辑

> 📢 您可以使用 [artisan](../tools/artisan.md#生成-protobuf) 生成更多您需要的 protobuf 文件，并编写自己想要的业务逻辑。

#### 构建插件镜像
通过命令构建 docker 镜像文件：
```bash
docker build -t helloworld:v1 . 
```
推送镜像到远程镜像仓库
```bash
docker push tkeelio/helloworld:v1
```
#### 将服务打包成 chart 并提交仓库
在您完成了服务镜像打包之后，请参考 [Helm Chart](https://helm.sh/zh/docs/topics/charts/) 为服务打包成一个 Chart 包，并将 Chart 上传至一个网络可达的仓库内即可。

#### 登录 tKeel 管理平台安装您的插件
在开始行动中，我们有一份叫做 [如何安装插件](../../getting_started/how-to-install-plugin.md) 的演示文档，简单介绍了如何快速将您的插件安装至 tKeel 平台中。