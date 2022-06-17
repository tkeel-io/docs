---
title: "API列表"
description: 'API列表'
sidebar_position: 0
---


## EntityToken相关API

| Name |  Description | 
| ---- |  ----------- | 
| [CreateEntityToken](./method_CreateEntityToken)|  创建实体Token |
| [EntityTokenInfo](./method_EntityTokenInfo)|  获取实体Token原信息 |
| [DeleteEntityToken](./method_DeleteEntityToken)|  注销实体Token |


## OAuth相关API

| Name |  Description | 
| ---- |  ----------- | 
| [IdentityProviderTemplate](./method_IdentityProviderTemplate)|  获取外部身份认证配置模板 |
| [UpdatePassword](./method_UpdatePassword)|  修改密码 |
| [OIDCRegister](./method_OIDCRegister)|  注册 OIDC 外部身份认证方 |
| [TokenRevoke](./method_TokenRevoke)|  注销 access_token |
| [ResetPassword](./method_ResetPassword)|  重置密码 |
| [OauthAuthenticate](./method_OauthAuthenticate)|  获取 access_token 认证信息 |
| [OauthToken](./method_OauthToken)|  获取API access_token |
| [GetIdentityProvider](./method_GetIdentityProvider)|  获取租户外部认证配置 |
| [OauthAuthorize](./method_OauthAuthorize)|  获取授权码 |
| [IdentityProviderRegister](./method_IdentityProviderRegister)|  外部认证注册 |


## Tenant相关API

| Name |  Description | 
| ---- |  ----------- | 
| [GetResetPasswordKey](./method_GetResetPasswordKey)|  获取重置密码密钥 |
| [DeleteUser](./method_DeleteUser)|  删除用户 |
| [UpdateUser](./method_UpdateUser)|  修改用户信息 |
| [GetUser](./method_GetUser)|  获取用户信息 |
| [GetTenant](./method_GetTenant)|  获取租户详情 |
| [DeleteTenant](./method_DeleteTenant)|  删除租户 |
| [UpdateTenant](./method_UpdateTenant)|  修改租户信息 |
| [DeleteTenantPlugin](./method_DeleteTenantPlugin)|  停用租户插件 |
| [TenantByExactSearch](./method_TenantByExactSearch)|  租户认证方式查询 |
| [ListTenantPlugin](./method_ListTenantPlugin)|  租户插件列表 |
| [AddPlugin](./method_AddPlugin)|  租户启用插件 |
| [PermissibleTenantPlugin](./method_PermissibleTenantPlugin)|  租户插件权限校验 |
| [ResetPasswordKeyInfo](./method_ResetPasswordKeyInfo)|  获取重置密码密钥信息 |
| [ListTenant](./method_ListTenant)|  获取租户列表 |
| [CreateTenant](./method_CreateTenant)|  create a tenant |
| [ListUser](./method_ListUser)|  查询用户列表 |
| [CreateUser](./method_CreateUser)|  创建用户 |

