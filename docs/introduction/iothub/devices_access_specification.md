---
title: 设备接入规范
sidebar_position: 2
---


## 介绍
设备接入是 tkeel 物联网平台提供的基础能力，支持各种标准协议的接入，需要使用`设备token`和`设备ID`进行连接。IoT Hub 目前支持 MQTT、WebSocket、CoAP、MQTT-SN接入。 后续将逐渐支持 MQTTS、WebSocket Secure（WSS）、STOMP、LwM2M 等协议的接入


## MQTT 协议
连接地址： mqtt://192.168.123.9:31136
连接条件： 
- 设备token
- 设备ID

代码示例（python）
```python
# python 3
import random
import time

from paho.mqtt import client as mqtt_client

broker = '192.168.123.9'
port = 31136

# generate client ID with pub prefix randomly
client_id = f'python-mqtt-{random.randint(0, 1000)}'
# 设备ID
username = '1cb1750c-2b95-4f0b-9a38-43cfb6b13418'
# 设备token
password = "NDgzMDY5MGItNjMyMy0zN2ZlLWIwZmUtMjEzNzFmNWFkZjY0"


def connect_mqtt():
    def on_connect(client, userdata, flags, rc):
        if rc == 0:
            print("Connected to MQTT Broker!")
        else:
            print("Failed to connect, return code %d\n", rc)

    client = mqtt_client.Client(client_id)
    client.username_pw_set(username, password)
    client.on_connect = on_connect
    client.connect(broker, port)
    return client


def run():
    client = connect_mqtt()
    client.loop_start()
    time.sleep(5)


if __name__ == '__main__':
    run()

```

## CoAP 协议
连接地址： mqtt://192.168.123.9:30588
连接条件：
- 设备token
- 设备ID

### coap-client 示例（cmd）

#### 订阅消息
```bash
coap-client -m get -s 1000  "coap://192.168.123.9:30588/mqtt/1cb1750c-2b95-4f0b-9a38-43cfb6b13418/v1/devices/me/attributes?c=<设备ID>&p=<设备token>&u=<用户名>"
```
- 主题名称为：`1cb1750c-2b95-4f0b-9a38-43cfb6b13418/v1/devices/me/attributes`
> 注意这里是 `设备ID/v1/devices/me/attributes`
- Client ID ：`<设备ID>`, 字符串
- 用户名：`<用户名>`， 字符串即可
- 密码：`<设备token>`, 字符串
- Payload 为：`{'key': 'value'}`


#### 发布消息
```bash
coap-client -m put -t "application/json" -e "{'key': 'value'}"   "coap://192.168.123.9:30588/mqtt/1cb1750c-2b95-4f0b-9a38-43cfb6b13418/v1/devices/me/attributes?c=<设备ID>&p=<设备token>&u=<用户名>"
```
- 主题名称为：`1cb1750c-2b95-4f0b-9a38-43cfb6b13418/v1/devices/me/attributes`
> 注意这里是 `设备ID/v1/devices/me/attributes`
- Client ID ：`<设备ID>`, 字符串
- 用户名：`<用户名>`， 字符串即可
- 密码：`<设备token>`, 字符串
- Payload 为：`{'key': 'value'}`

查看订阅的消息收到了
```json
{"key": "value"}
```


## MQTT-SN 协议
mqtt-sn client <--> mqtt-sn gateway <--> mqtt broker
连接地址： mqtt-sn://192.168.123.9:31884
连接条件：
- 设备token
- 设备ID
开启 MQTT-SN 的时候需要指定 设备ID 和 设备token

### mqtt-sn-pub 示例（cmd）

#### 订阅属性消息
```bash
./mqtt-sn-sub  -h 192.168.123.9 -p 31884 -t "v1/devices/me/attributes"
```
- 主题名称为：`v1/devices/me/attributes`


#### 发布属性消息
```bash
./mqtt-sn-pub  -h 192.168.123.9 -p 31884 -t "v1/devices/me/attributes" -m "{‘key_test’: 'value'}"
```
- 主题名称为：`v1/devices/me/attributes`
- Payload 为：`{‘key_test’: 'value'}`

查看订阅的消息收到了
```json
{‘key_test’: 'value'}
```



## LwM2M 协议
LwM2M client <--> emqx_lwm2m <--> mqtt broker
连接地址： lwm2m://192.168.123.9:30685
连接条件：
- 设备token
- 设备ID
  LwM2M client 连接 emqx_lwm2m 的时候需要指定 endpoint name 为 “{设备ID}@{设备token}”


### lwm2mclient 示例（cmd）

#### lwm2mclient 连接平台 
```bash
./lwm2mclient -n a8e92c6d-0f73-4f7a-8b85-0f110155eed2@NWExMTg3NTUtZWVhNS0zYzNiLWEzNmEtODIzMDU2MWFkMWM1 -h 192.168.123.9 -p 30685 -4
```
- -n 表示 endpoint name 为 “{设备ID}@{设备token}”

lwm2mClient 连接平台成功之后平，可在平台原始数据收到消息
- 主题名称为: "lwm2m/a8e92c6d-0f73-4f7a-8b85-0f110155eed2@NWExMTg3NTUtZWVhNS0zYzNiLWEzNmEtODIzMDU2MWFkMWM1/up/resp"
- Payload 为：
```json
{
  "msgType":"register",
  "data":{
    "objectList":[
      "/1",
      "/1/0",
      "/2/0",
      "/3/0",
      "/4/0",
      "/5/0",
      "/6/0",
      "/7/0",
      "/31024",
      "/31024/10",
      "/31024/11",
      "/31024/12"
    ],
    "lwm2m":"1.1",
    "lt":300,
    "ep":"a8e92c6d-0f73-4f7a-8b85-0f110155eed2@NWExMTg3NTUtZWVhNS0zYzNiLWEzNmEtODIzMDU2MWFkMWM1",
    "b":"U",
    "alternatePath":"/"
  }
}
```


#### 通过 HTTP API 发布消息到 lwm2mClient
```bash
curl --location --request POST 'http://192.168.123.9:30855/api/v4/mqtt/publish' \
--header 'Authorization: Basic YWRtaW46cHVibGlj' \
--header 'Content-Type: application/json' \
--data-raw '{
    "topic":"lwm2m/a8e92c6d-0f73-4f7a-8b85-0f110155eed2@NWExMTg3NTUtZWVhNS0zYzNiLWEzNmEtODIzMDU2MWFkMWM1/dn",
    "payload":{
        "reqID":"2",
        "msgType":"discover",
        "data":{
            "path":"/3/0"
        }
    },
    "qos":1,
    "retain":false,
    "clientid":"@tkeel.iothub.internal.clientId"
}'
```
- 主题名称为：`lwm2m/a8e92c6d-0f73-4f7a-8b85-0f110155eed2@NWExMTg3NTUtZWVhNS0zYzNiLWEzNmEtODIzMDU2MWFkMWM1/dn`
- Payload 为：
```json
{
  "reqID": "2",
  "msgType": "discover",
  "data": {
    "path": "/3/0"
  }
}
```

lwm2mClient 收到消息之后回复的消息如下， 可在平台原始数据收到数据
- 主题名称为: "lwm2m/a8e92c6d-0f73-4f7a-8b85-0f110155eed2@NWExMTg3NTUtZWVhNS0zYzNiLWEzNmEtODIzMDU2MWFkMWM1/up/resp"
- Payload 为：
```json
{
  "reqID":"2",
  "msgType":"discover",
  "data":{
    "reqPath":"/3/0",
    "content":[
      "</3/0>",
      "</3/0/0>,</3/0/1>,</3/0/2>,</3/0/3>,</3/0/4>,</3/0/5>,</3/0/6>,</3/0/7>,</3/0/8>,</3/0/9>,</3/0/10>,</3/0/11>,</3/0/12>,</3/0/13>,</3/0/14>,</3/0/15>,</3/0/16>"
    ],
    "codeMsg":"content",
    "code":"2.05"
  }
}
```