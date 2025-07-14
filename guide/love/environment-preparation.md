# 环境准备

## Tauri 安装

### 包管理器

统一包管理器使用 bun, 通过 npm 在电脑中全局安装 bun

```bash
npm install -g bun
```

### 利用 create-tauri-app 创建项目

使用 bun create 命令克隆远程模板

```bash
bun create tauri-app
```

接下来的选择统一

- Project Name: da-ai-xian-zun
- Identifier: icu.sunway
- Language: TypeScript/JavaScript
- package manager: bun
- UI Template: React
- UI flavor: TypeScript

### 进入项目安装依赖

```bash
bun install
```

### 启动项目

```bash
bun dev
```

## Rust 环境安装

### 下载 Rust up

[rustup-init.exe](https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-msvc/rustup-init.exe)

运行 rustup-init.exe, 并按照如下选择安装

1. Quick install via the Visual Studio Community installer
2. Proceed with standard installation

### 启动调试

```bash
bun tauri dev
```

### 配置打包

找到你的 `\用户\[username]\AppData\Local\tauri`， 如果没有该目录则新建一个

1. [wix314-binaries.zip](https://github.com/wixtoolset/wix3/releases/download/wix3141rtm/wix314-binaries.zip) 解压至 `\tauri\WixTools314`。
2. [nsis-3.zip](https://github.com/wixtoolset/wix3/releases/download/wix3141rtm/nsis-3.zip) 解压至 `\tauri\NSIS`。
3. [nsis_tauri_utils.dll](https://link.zhihu.com/?target=https%3A//github.com/tauri-apps/nsis-tauri-utils/releases/download/nsis_tauri_utils-v0.4.2/nsis_tauri_utils.dll) 存放至 `\tauri\NSIS\Plugins\x86-unicode`。

### 打包项目

```bash
bun tauri build
```

## Supabase 账号注册

前往 [Supabase](https://supabase.com/)

## Gitea 账号注册

前往 [Gitea](http://182.92.242.196:3000/)
