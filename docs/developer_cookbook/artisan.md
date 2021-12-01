---
title: Artisan
sidebar_position: 1
---

# Artisan
这是我们专门为开发者打造的一款用于生成项目架构和一些代码的 CLI 工具。

## Install
```bash
go install github.com/tkeel-io/tkeel-interface/tool/cmd/artisan
```
### Required
- [go](https://golang.org/dl/)
- [protoc](https://github.com/protocolbuffers/protobuf)
- [protoc-gen-go](https://github.com/protocolbuffers/protobuf-go)

## Usage
### Create project template
```bash
artisan new github.com/tkeel-io/helloworld

cd helloworld

# Download necessary plug-ins
make init
```
### Generate proto template
```bash
artisan proto add api/helloworld/v1/helloworld.proto

# Generate proto source code
make api

# Generate service template
artisan proto service api/helloworld/v1/helloworld.proto -t pkg/service

# Generate server template (this output needs to be manually added to cmd/helloworld/main.go)
artisan proto server api/helloworld/v1/helloworld.proto

# Run the program
go run cmd/helloworld/main.go
```

