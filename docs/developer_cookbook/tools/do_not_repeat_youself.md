---
title: Don't repeat yourself
sidebar_position: 10
---


长久以来我们 Team 希望达到的目标是：「如何用更先进更高效的方式来构建我们的服务及其生态？」

对于 tKeel，对于我们想要做的事情的范畴上来看，如果找不到一个更行之有效的开发方式，我们会开发得很累，且开发进度会比较缓慢。

打造一套供开发者使用的 API，不仅仅是 API 及其背后的服务那么简单。API 要有文档，要有 SDK，要有 API interface 的定义，以及支撑这个 interface 的服务。

这里面会有很多重复的劳动：API doc 和 API interface，以及 SDK 都在不断地重复类似的内容和代码。 当我们对 API 的定义进行改变的时候，往往牵一发而动全身，数个地方都需要修改，而这些都是非常机械的行为。所以，我们要寻找能够「降维打击」的方式。


就拿 tKeel 来说，通过 [Artisan](./artisan.md) 系统，就整合了 API 和 API 的文档，使其可以一次定义，两处生效，节省大家的时间。我们试图把问题定义成这样：

1. 定义一门「语言」，来描述我们的 API
1. 撰写不同方向上的 Parser（Code generator），将其转换成特定场景的代码
1. 将 Parser 构建在 build pipeline 中，可以一次 build，生成各种结果
1. 生成的结果要能很方便地扩展，以及和系统里的其他部分整合

我们选择的描述语言是 [Protocol Buffers](https://developers.google.com/protocol-buffers)，
基于 `Protocol Buffers` 我们可以生成多种服务脚手架，同时通过扩展实现文档以及注释的同步。

比如，我们定义如下的 `Protocol Buffers`：

```
// The greeting service definition.
service Greeter {
  // Say Hello to tKeel
  rpc SayHello(HelloRequest) returns (HelloResponse) {
    option (google.api.http) = {
      post : "/helloworld/{name}"
      body : "message"
    };
  }
}

// The request message containing the user's name.
message HelloRequest {
  string name = 1 [(grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = {description: "Description of helloworld's name"}];
  Test message = 2 [(grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = {description: "Description of helloworld's message"}];
}

// The response message containing the greetings
message HelloResponse {
  string message = 1 [(grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = {description: "Hello Response"}];
}
```

通过这种定义，结合 Artisan 工具，我们可以生成：

- 基于参数定义的各种语言的结构体
    - [x] GO
    - [x] Javascript
    - [ ] Java
    - [ ] Python
- 基于服务定义的 gRPC/HTTP 服务
    - [x] GO
    - [ ] Java
    - [ ] Python
- 基于定义的接口说明
    - [x] Swagger
    - [x] Markdown
    - [ ] SDK


以上生成的代码符合前文中所述的「生成的结果要能很方便地扩展，以及和系统里的其他部分整合」这个限定条件。
在这个例子里，程序员只需要进一步在 `demo/pkg/service/greeter.go` 里撰写逻辑就可以了。

目前这套流程还在实验当中，我们的服务、文档都是按照生成的代码来构建的。
虽然还有很多问题，但这套系统最大的好处是，在开发过程中，我们可以随意调整 API 的结构而不必每次调整都苦逼修改很多地方的代码。这在我们对很多 API 的行为还没有一个良好定义的时候，是个莫大的福音。而之后，当我们要大规模增加新的 API 时，我们将能够很快地支持。

这目前是我们对「如何用更先进更高效的方式来构建服务及其生态？」的一个答案。它还不完美，但立等可用。

先写这么多吧，希望能引发你的思考和问题。


## References
- https://cloud.google.com/apis/design
- https://cloud.google.com/endpoints/docs/grpc/transcoding
- https://github.com/googleapis/googleapis
- https://go-kratos.dev/docs/guide/api-protobuf/
- https://developers.google.com/protocol-buffers/docs/style
- https://developers.google.com/protocol-buffers/docs/proto3
- https://colobu.com/2017/03/16/Protobuf3-language-guide/