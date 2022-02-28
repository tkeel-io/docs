---
title: Event
sidebar_position: 30
---


Core 使用开源消息规范 `CloudEvents`，用于 Core 消息的输入和输出。

> docs: https://github.com/cloudevents/spec


在 Event 中实体属性数据被平铺，部分属性字段 Core 保留，详情见：[实体属性保留字段](./entity.md#实体保留字段)。



我们在 Event 的 Header 中定义了部分字段用于描述事件或实体：

|名称|描述|
|---|----|
|extenid|实体的ID|
|extentype|实体的类型|
|extowner|实体的所有者|
|extsource|实体的Source字段|
|extmsgid|消息的ID|
|extsender|消息的发送者|
|extreceiver|消息的接受者|






## Examples

> sdk docs: https://github.com/cloudevents/sdk-go


### Exaple for dapr-pubsub.

**Publish Event:**

```go
import (
	"context"
	"log"
	"testing"

	cloudevents "github.com/cloudevents/sdk-go"
	daprSDK "github.com/dapr/go-sdk/client"
)


func main() {
    // create dapr client.
	daprClient, err := daprSDK.NewClient()
	if nil != err {
		log.Fatal(err)
	}
	// create an event.
	ev := cloudevents.NewEvent()

	ev.SetID("uuid-123")
	ev.SetType("publish")
	ev.SetSource("device-manager")
	ev.SetDataContentType(cloudevents.ApplicationJSON)
	ev.SetData(map[string]interface{}{
		"id":     "device123",
		"type":   "DEVICE",
		"owner":  "admin",
		"source": "device-manager",
		"temp":   20,
	})

	// check event.
	if nil != ev.Validate() {
		log.Fatal(err)
	}

	// set some information for component.
	metadata := make(map[string]string)

	daprClient.PublishEvent(
		context.Background(),
		"pubsubName", "topicName", ev,
		daprSDK.PublishEventWithMetadata(metadata),
		daprSDK.PublishEventWithContentType(cloudevents.ApplicationJSON))
}
```



**Receive Event:**

dapr 的 pubsub 基本遵循 CloudEvents 规范，通过 http 端点可以得到一个 Event.


定义用于解析 http 请求 body 中 Event 的结构体：
```go
type TopicEventRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Meta       *Metadata      `protobuf:"bytes,1,opt,name=meta,proto3" json:"meta,omitempty"`
	Data       *_struct.Value `protobuf:"bytes,6,opt,name=data,proto3" json:"data,omitempty"`
	DataBase64 string         `protobuf:"bytes,7,opt,name=data_base64,json=dataBase64,proto3" json:"data_base64,omitempty"`
	RawData    []byte         `protobuf:"bytes,8,opt,name=raw_data,json=rawData,proto3" json:"raw_data,omitempty"`
}

type Metadata struct {
	Id              string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Specversion     string `protobuf:"bytes,2,opt,name=specversion,proto3" json:"specversion,omitempty"`
	Type            string `protobuf:"bytes,3,opt,name=type,proto3" json:"type,omitempty"`
	Source          string `protobuf:"bytes,4,opt,name=source,proto3" json:"source,omitempty"`
	Datacontenttype string `protobuf:"bytes,5,opt,name=datacontenttype,proto3" json:"datacontenttype,omitempty"`
	Subject         string `protobuf:"bytes,9,opt,name=subject,proto3" json:"subject,omitempty"`
	Topic           string `protobuf:"bytes,10,opt,name=topic,proto3" json:"topic,omitempty"`
	Pubsubname      string `protobuf:"bytes,11,opt,name=pubsubname,proto3" json:"pubsubname,omitempty"`
}
```


解析 Event：

```go
func (h *TopicHTTPHandler) TopicEventHandler(req *go_restful.Request, resp *go_restful.Response) {
	in := TopicEventRequest{} 
	defer req.Request.Body.Close()
	bytes,err:= ioutil.ReadAll(req.Request.Body)
	if nil != err {
		tErr := errors.FromError(err)
		httpCode := errors.GRPCToHTTPStatusCode(tErr.GRPCStatus().Code())
		resp.WriteErrorString(httpCode, tErr.Message)
		return
	}


	res := gjson.GetBytes(bytes, "data")
	in.RawData = []byte(res.String())

	res =  gjson.GetBytes(bytes, "data_base64")
	if res.Type != gjson.Null {
		// decode base64.
		base64.StdEncoding.Decode(in.RawData, []byte(res.String()))
	}

	meta := Metadata{}
	if err = json.Unmarshal(bytes, &meta); nil != err {
		tErr := errors.FromError(err)
		httpCode := errors.GRPCToHTTPStatusCode(tErr.GRPCStatus().Code())
		resp.WriteErrorString(httpCode, tErr.Message)
		return
	}
```



从 `TopicEventRequest` 中解析我们的 CloudEvent：

```go
func HandleEvent(ctx context.Context, req *pb.TopicEventRequest) (out *pb.TopicEventResponse, err error) {
	// parse CloudEvent from pb.TopicEventRequest.
	log.Debug("received TopicEvent", zfield.ID(req.Meta.Id), zfield.Spec(req.Meta.Specversion), zfield.Type(req.Meta.Type), zfield.Source(req.Meta.Source),
		zfield.Topic(req.Meta.Topic), zfield.Pubsub(req.Meta.Pubsubname), zap.String("subject", req.Meta.Subject), zap.String("contenttype", req.Meta.Datacontenttype))

	ev := cloudevents.NewEvent()
	err = ev.UnmarshalJSON(req.RawData)
	if nil != err {
		log.Warn("data must be CloudEvents spec", zap.String("id", req.Meta.Id), zap.Any("event", req))
		return &pb.TopicEventResponse{Status: SubscriptionResponseStatusDrop}, nil
	}

	// dispatch message.
	groupName := consumerGroup(req.Meta.Pubsubname, req.Meta.Topic)

	lock.RLock()
	for _, consumer := range consumers[groupName] {
		consumer.handler(ctx, ev)
		log.Debug("handle event", zfield.ReqID(req.Meta.Id), zap.Any("meta", req.Meta))
	}
	lock.RUnlock()

	return &pb.TopicEventResponse{Status: SubscriptionResponseStatusSuccess}, nil
}
```



## 优化


先阶段 dapr/go-sdk@1.3 暂时不支持对 Event 的 Attributes。所以我们需要嵌套两层 Event，不过 dapr 的 EventCloud 的支持还在持续更新过，后期我们跟进。










