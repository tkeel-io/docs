---
title: 批量工具1
sidebar_position: 1
---



## 1. 什么是批量工具
​		对于开发者或者项目实施来说，根据excel 参数格式编辑excel表，通过导入EXCEL文件的方式快速在平台批量定义设备模板、数字化设备、设备数据关系。

##  2. 批量工具解决的问题
​     1、降低平台使用门槛；

​     2、极大的提高效率

## 3. 那些可以批量
​     1、设备模板

​     2、设备

​     3、空间树（设备组）

​     3、设备数据关系映射

## 4. 操作入口

### 4.1 前端（to do ）

### 4.2 命令行工具

#### 4.2.1 命令行工具视图

```
tanli@ubuntu:~/Desktop/workspace/project/tkeel-batch-tool$ ./tkeelBatchTool -h
A longer description that spans multiple lines and likely contains
examples and usage of using your application. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.

Usage:
  tkeelBatchTool [command]

Available Commands:
  dev         Creat device from excel
  help        Help about any command
  mapper      Creat mapper from excel
  spaceTree   Creat spaceTree from excel
  template    Creat template from excel

Flags:
  -c, --conf string   The iot api config
  -f, --file string   The data excel
  -h, --help          help for tkeelBatchTool
  -o, --op string     add or del

Use "tkeelBatchTool [command] --help" for more information about a command.

```



#### 4.2.2 命令示例

前置条件：配置文件config.json 

```json
{
"iotUrl":"http://127.0.0.1:31234",                                       //tkeel 平台设备管理服务url	"token":"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY1MzQ0ODAwOCwic3ViIjoidXNyLWY0ZTFiMDY4YWE3YzE4YzFiNjQxYjJhNTA2OTUifQ.bVr41poNuKx9QgZJMdTGgeHNRffJzmiQfOpOdazF3yhO-RE14bhD"     //用户token 
}  
```

命令概览：以下命令是一个完整的流程  注意顺序

```
批量新增：
./tkeelBatchTool template -o add -f excel_file/template.xlsx //批量新增模板
./tkeelBatchTool spaceTree -o add -f excel_file/spaceTree.xlsx  //批量新增空间节点（设备组）
./tkeelBatchTool dev -o add -f excel_file/devices.xlsx  //批量新增设备
./tkeelBatchTool mapper -o add -f excel_file/mapper.xlsx        //批量新增设备数据映射关系

批量删除：
./tkeelBatchTool mapper -o del -f excel_file/mapper.xlsx        //批量删除设备数据映射关系 
./tkeelBatchTool dev -o del -f excel_file/devices.xlsx  //批量删除设备
./tkeelBatchTool template -o del -f excel_file/template.xlsx  //批量删除模板
./tkeelBatchTool spaceTree -o del -f excel_file/spaceTree.xlsx  //批量删除空间节点（设备组）

默认读取./config.json   指定路径 -c xxx/path
```

##### 4.2.2.1 设备模板批量预期结果

批量新增

```
./tkeelBatchTool template -o add -f excel_file/template.xlsx
```

结果：新增了UPS   温室度传感器   SICAM 电表  三个设备模板

![image-20220531151943844](../../../../static/images/device/image-20220531151943844.png)

![image-20220531152015422](../../../../static/images/device/image-20220531152015422.png)

批量删除：

```
./tkeelBatchTool template -o del -f excel_file/template.xlsx  //批量删除模板
```

![image-20220531172335160](../../../../static/images/device/image-20220531172335160.png)

##### 4.2.2.2 空间树批量预期结果

批量新增

```
./tkeelBatchTool spaceTree -o add -f excel_file/spaceTree.xlsx 
```

结果：新增了空间树

![image-20220601134048694](../../../../static/images/device/image-20220601134048694.png)

批量删除

```
./tkeelBatchTool spaceTree -o del -f excel_file/spaceTree.xlsx 
```

结果：

![image-20220601134338894](../../../../static/images/device/image-20220601134338894.png)

##### 4.2.2.3 设备列表批量预期结果

批量新增

```
./tkeelBatchTool dev -o add -f excel_file/device.xlsx 
```

结果：在空间节点 F103 下面 新增了一批设备

![image-20220601143057770](../../../../static/images/device/image-20220601143057770.png)

批量删除

```
./tkeelBatchTool dev -o del -f excel_file/device.xlsx 
```

结果：

![image-20220601143243049](../../../../static/images/device/image-20220601143243049.png)



##### 4.2.2.4 设备数据映射批量预期结果



#### 4.2.3 EXCEL 格式

##### 4.2.3.1 设备模板excel格式

![image-20220531152719962](../../../../static/images/device/image-20220531152719962.png)
参数说明：红色为必填

1、模板名称：需要创建的设备模板对象名称

2、模板对象ID  ：如果填写则按此ID 创建  ， 如果不填、执行命令后 **会自动根据平台生产的ID 反写入excel** 此列  ，便于其他excel 表需要填写此ID 时  直接拷贝引用， 执行批量新增以后的excel 表  可以执行批量删除命令（根据读取的反写模板对象ID ，执行批量删除）

![image-20220531164843190](../../../../static/images/device/image-20220531164843190.png)

3、测点名称：数据测点的显示名称：例如电压、电流之类的明文

4、测点数据字段（id）：对应平台的 属性ID 、遥测ID，唯一表示这个测点 ，例如：上报的设备数据报文里的字段名

5、测点数据类型： int  float  double enum  bool  string等

6、测点类型：对应平台的attribute telemetry command    也对应传统的AI 、AO 、DI、DO 

7、测点数据定义和约束关键字： 可以配置json schema 的关键字  例如  :  minimum maximun  patternn  ;可以配置物联网特征 例如单位、精度、步长 还有其他一些扩展配置 例如：变比、别名等;    格式为Json 的目的是为了方便解析;

8、测点说明：此测点的描述



##### 4.2.3.2 空间树excel格式

![image-20220601134405097](../../../../static/images/device/image-20220601134405097.png)

参数说明：红色为必填

1、父空间节点名：父设备组

2、父空间节点ID： 1、如果填写则按此ID、2、如果不填 则自动生成并反写 3、如果前面行已经创建过此节点则会自动引用创建过的节点ID，

3、当前空间节点名：设备组名称 ，目前是 用户下全局唯一  ，也就是此列名称不重复

4、当前空间节点ID：1、如果填写则按此ID、2、如果不填 则自动生成并反写 ，3、创建后 可直接复制用于 设备批量excel 表 填写

![image-20220601135222501](../../../../static/images/device/image-20220601135222501.png)

5、当前空间节点扩展信息：承载关于次空间节点（设备组）维度的配置，json 格式  便于解析

6、描述



##### 4.2.3.3 设备excel 格式

![image-20220601143544126](../../../../static/images/device/image-20220601143544126.png)

参数说明：红色为必填

1、空间节点名：来源于空间树excel 表  或者平台已经存在的

2、空间节点ID：来源于空间树excel 表  或者平台已经存在的

3、设备名称：创建设备的名字

4、设备ID：1、如果填写则按此ID ， 2、如果不填自动生成并反写 3、创建后可直接拷贝用于其他excel表（mapper）

![image-20220601145407300](../../../../static/images/device/image-20220601145407300.png)

5、设备是否直连： 直接对应物理世界设备连接并接受数据的为直连   TRUE or FALSE

6、设备模板自学开关：不存在于模板内的数据  可以展示并可以编辑保存为模板等其他操作 TRUE or FALSE

7、设备模板名称：来源于设备模板excel 表 或平台已经存在的

8、设备模板ID：来源于设备模板excel 表  或 平台已经存在的

9、设备扩展信息json：承载单个设备维度的配置，json 格式 ，便于解析

10、设备描述



##### 4.2.3.4 设备数据映射excel 格式







