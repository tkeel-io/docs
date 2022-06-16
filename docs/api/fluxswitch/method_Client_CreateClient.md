---
title: "Client_CreateClient"
description: ''
---
调用该接口。

## Request

```
post /client
```

### Request Body

| Description | Type | Schema |
| ----------- | ------ | ------ |
|  | Object | [v1UpdateClient](#v1UpdateClient) |

#### v1UpdateClient

| Name | Type | Description |
| ---- | ---- | ----------- |
| device_name | string |  |
| name | string |  |
| status | string |  |

## Response

### Response  200

| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| 200 | A successful response. | Object | [v1CreateClientResponse](#v1CreateClientResponse) |

#### v1CreateClientResponse

| Name | Type | Description |
| ---- | ---- | ----------- |
| client |  |  |
| command | string |  |

### Response  default

| Code2 | Description | Type | Schema |
| ---- | ----------- | ------ | ------ |
| default | An unexpected error response. | Object | [rpcStatus](#rpcStatus) |

#### rpcStatus

| Name | Type | Description |
| ---- | ---- | ----------- |
| code | integer |  |
| details | Array[protobufAny] |  [ 具体参数可见下面 [protobufAny](#protobufAny) ] |
| message | string |  |

### protobufAny

| Name | Type | Description |
| ---- | ---- | ----------- |
| @type | string |  |
