---
title: cli
sidebar_position: 30
---

# TKeel

tkeel 是我们为管理员开发的用于安装和管理tkeel平台的 cli 工具。

## 安装

```bash
wget -q https://raw.githubusercontent.com/tkeel-io/cli/master/install/install.sh -O - | /bin/bash
```

或者

```bash
curl -fsSL https://raw.githubusercontent.com/tkeel-io/cli/master/install/install.sh | /bin/bash
```

### 安装须知

> ⚠️ tKeel 现阶段依赖于 Dapr（Kubernetes mode）。

- 安装 [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- 安装 [Dapr on Kubernetes](https://docs.dapr.io/operations/hosting/kubernetes/kubernetes-deploy/)
- kubernetes worker 节点需安装 socat

### 安装 TKeel 平台

```bash
# 使用官方仓库安装 tkeel 平台
> tkeel init --timeout=3600

# 使用自定义仓库源安装 tkeel 平台
> tkeel init --repo-url=https://xxx.com/helm-charts --timeout=3600

# 使用自定义配置安装 tkeel 平台
> tkeel init --config config.yaml --timeout=3600

```

> 注意：Linux 用户请注意，如果你的 docker 需要使用 sudo 权限才能使用，那么请你使用 `sudo tkeel init`

输出应该如下所示:

```
⌛  Making the jump to hyperspace...
(1/7) load tkeel install config.
(2/7) install tKeel middleware begin.ur cluster... ℹ️
←  Deploying the tKeel Platform to your cluster... ℹ️  install tKeel middleware done.
(3/7) install tKeel keelChart begin.
↘  Deploying the tKeel Platform to your cluster... ℹ️  install tKeel platform  done.
(4/7) install tKeel coreChart begin.
↙  Deploying the tKeel Platform to your cluster... W0706 11:22:32.565576 3733698 warnings.go:70] policy/v1beta1 PodDisruptionBudget is deprecated in v1.21+, unavailable in v1.25+; use policy/v1 PodDisruptionBudget
←  Deploying the tKeel Platform to your cluster... W0706 11:22:32.657250 3733698 warnings.go:70] policy/v1beta1 PodDisruptionBudget is deprecated in v1.21+, unavailable in v1.25+; use policy/v1 PodDisruptionBudget
←  Deploying the tKeel Platform to your cluster... ℹ️  install tKeel component <core> done.
(5/7) install tKeel rudderChart begin.
↙  Deploying the tKeel Platform to your cluster... ℹ️  install tKeel component <rudder> done.
✅  Deploying the tKeel Platform to your cluster...
(6/7) set tkeel default repo.
(7/7) install tkeel preset plugins
✅  Install "tkeel/console-portal-admin" success! It's named "console-portal-admin" in k8s
✅  Install "tkeel/console-portal-tenant" success! It's named "console-portal-tenant" in k8s
✅  Install "tkeel/console-plugin-admin-plugins" success! It's named "console-plugin-admin-plugins" in k8s
✅  Success! tKeel Platform has been installed to namespace keel-system. To verify, run `tkeel plugin list' in your terminal. To get started, go here: https://tkeel.io/keel-getting-started
```

### 自定义配置

#### 生成默认配置

tkeel 安装可以自定义配置

```bash
> tkeel config > config.yaml
> cat config.yaml

host:
  admin: admin.tkeel.io # 管理平台的入口地址
  tenant: tkeel.io # 租户平台的入口地址
middleware: # 自定义中间件
  cache: # 缓存
    customized: false
    url: redis://:Biz0P8Xoup@tkeel-middleware-redis-master:6379/0
  database: # 数据库
    customized: false
    url: mysql://root:a3fks=ixmeb82a@tkeel-middleware-mysql:3306/tkeelauth
  queue: # 消息队列
    customized: false
    url: kafka://tkeel-middleware-kafka-headless:9092
  search: # 搜索
    customized: false
    url: elasticsearch://admin:admin@tkeel-middleware-elasticsearch-master:9200
  service_registry: # 服务注册与发现
    customized: false
    url: etcd://tkeel-middleware-etcd:2379
port: 30080 # 租户平台入口和管理平台入口的端口
repo: # 插件源
  name: tkeel
  url: https://tkeel-io.github.io/helm-charts
plugins: # 自动安装的插件列表
  - tkeel/console-portal-admin@latest
  - tkeel/console-portal-tenant@latest
  - tkeel/console-plugin-admin-plugins@latest

```

### 平台管理员

#### 登录

```bash
> tkeel admin login
? Please enter your password:  ********
✅  You are Login Success!
```

### 插件管理

#### 查看插件源

```bash
> tkeel repo list
  REPO NAME     REMOTE
  tkeel-io-dev   https://harbor.wuxs.vip:30003/chartrepo/tkeel-io-dev
```

#### 添加插件源

```bash
> tkeel repo add <repo-name> <repo-url>
✅  Successfully added!
```

#### 删除插件源

```bash
> tkeel repo delete <repo-name>
✅  Successfully delete!
```

#### 查看插件源所有安装包

```bash
> tkeel installer list -r <repo-name>
  NAME                                        VERSION            REPO          STATUS
  console-plugin-admin-custom-config          0.6.0              tkeel-io-dev  UNINSTALL
  console-plugin-admin-notification-configs   0.6.0              tkeel-io-dev  UNINSTALL
  console-plugin-admin-plugins                0.6.0              tkeel-io-dev  SAME_NAME
```

#### 查看所有已安装插件

```bash
> tkeel plugin list
  NAME                          PLUGIN                        PLUGIN VERSION  REPO          REGISTER AT          STATE    DESCRIPTION
  console-plugin-admin-plugins  console-plugin-admin-plugins  0.6.0           tkeel-io-dev  2022-07-04 14:40:47  RUNNING  console of plugin manager
  console-portal-admin          console-portal-admin          0.6.0           tkeel-io-dev  2022-07-04 14:40:51  RUNNING  console manager portal
  console-portal-tenant         console-portal-tenant         0.6.0           tkeel-io-dev  2022-07-04 14:40:54  RUNNING  console user portal
```

#### 安装插件

```bash
> tkeel plugin install <repo-name>/<installer-name>[@<version>] <plugin-name>
✅  Successfully added!
```

#### 删除插件

```bash
> tkeel plugin delete <plugin-name>
✅  Successfully delete!
```

#### 启用插件

```bash
> tkeel plugin enable <plugin-name> -t <tenant-id>
✅  Successfully enabled!
```

#### 禁用插件

```bash
> tkeel plugin disable <plugin-name> -t <tenant-id>
✅  Successfully disabled!
```

### 租户管理

#### 创建租户

```bash
# 交互式创建租户
> tkeel tenant create
? What the tenant space name? demo
? What the tenant admin username? demo
? What the tenant admin password? ****
✅  Successfully created!

# 交互式创建租户
> tkeel tenant create <tenant-space-name> -u demo -p demo -
✅  Successfully created!
```

#### 查看租户列表

```bash
> tkeel tenant list
  ID        TITLE  REMARK
  mH-Oz5pB  demo
```

#### 删除租户

```bash
> tkeel tenant delete <tenant-id>
✅  Successfully delete!
```

### 调用插件接口

#### 调用插件接口

```bash
> tkeel invoke -v <Verb> -p <plugin-name> -m <path> [-d <json-string>]

✅  Plugin invoked successfully
```

### 卸载 tKeel 平台

要从你的 Kubernetes 集群中移除 `tKeel`，请使用 `uninstall`命令。

```bash
# 移除 tkeel 平台
> tkeel uninstall

# 移除 tkeel 平台和所有插件 
> tkeel uninstall --all
```
