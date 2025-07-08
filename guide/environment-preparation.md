# 环境准备

请先将这些软件安装到你的电脑上，以便后续的开发能够快速进行

## Clash for Windows

::: tip 省流

就是用来翻墙的

:::

Clash for Windows (简称 CFW) 是一款在 Windows 平台上广受欢迎的图形化网络代理客户端。它能让你通过代理服务器来管理和转发电脑上的所有网络流量，从而实现访问国际互联网、加速海外网站访问等目的。其核心特色是强大的“规则分流”功能，可以根据你预设的规则，自动将不同的网络请求发送到不同的代理节点或选择直接连接，这不仅提升了上网效率，也让网络管理更加智能和灵活。用户通常只需导入服务商提供的配置文件，即可方便地切换节点和代理模式，无需复杂的命令行操作。

国内代理: [点击此处下载 Clash for Windows](https://down.clash.la/cfw/0.20.39/Clash.for.Windows.Setup.0.20.39.exe)

Github 仓库: [点击此处访问](https://github.com/clashdownload/Clash_for_Windows/releases)

::: warning 注意

测试在 2025/7/8 可用，其他时间可能失效

:::

代理购买链接: [点击此处访问](https://mojie.app/register?aff=Sa3CAVqc)

使用教程地址: [点击此处访问](https://cn.clashop.org/clash-for-windows-tutorial)

> 后续的环境安装中，大部分都需要开启 Clash 系统代理，所以如果您没有代理经验，请不要跳过这一步

## Github

GitHub 是一个面向软件开发的、基于云的代码托管平台，它以强大的版本控制系统 Git 为核心。它不仅允许开发者安全地存储、管理和追踪代码的每一次修改历史，更重要的是，它通过“拉取请求”（Pull Request）、“议题”（Issues）等功能，极大地促进了团队协作和代码审查。如今，GitHub 已成为全球最大的开源软件中心和开发者社区，无数知名项目在此托管，它也因此是开发者展示技术能力、积累项目经验和建立专业影响力的重要“数字名片”。

官网地址: [点击此处访问](https://github.com/)

::: tip 提示

请提前注册一个账号，为后续的合作开发做准备

:::

## Git

Git 是一款强大且高效的分布式版本控制系统，它就像是开发者为代码打造的“时光机”和“协作中心”。它会精确地记录你对文件所做的每一次修改（称为“提交”），让你可以在任何时候轻松回溯到任意一个历史版本，再也不怕代码丢失或改错。更重要的是，Git 通过“分支”（Branching）功能，允许多人同时在各自独立的空间里开发新功能或修复错误，互不干扰，最后再通过“合并”（Merging）将各自的成果安全地整合到主项目中，这使得团队协作变得井然有序、高效无比。简而言之，Git 是现代软件开发中用于管理代码、保障安全和促进团队合作的基石工具。

官方下载地址: [点击此处访问](https://git-scm.com/downloads/win)

直链下载地址(无繁琐步骤): [点击此处访问](https://github.com/git-for-windows/git/releases/download/v2.50.0.windows.2/Git-2.50.0.2-64-bit.exe)

::: tip 提示

请选择 Git for Windows/x64 Setup 版本进行下载，如果您在安装过程中遇到了不确定的选项，请直接使用默认设置

:::

::: info 图形化

强烈推荐您使用任意的图形化工具，比如 [SourceTree](https://www.sourcetreeapp.com/)、[GitKraken](https://www.gitkraken.com/)、[GitHub Desktop](https://desktop.github.com/) 等，或者使用集成开发环境自带的 Git 可视化工具，它们可以极大地提高您的工作效率，您没有必要花太多的时间在 Git 命令行的学习上

:::

## JDK

JDK，全称 Java Development Kit（Java 开发工具包），是 Java 开发者用于构建、调试和运行 Java 应用程序的核心软件包。它不仅包含了让 Java 程序得以运行的 Java 运行时环境（JRE），更重要的是，它提供了一整套必不可少的开发工具，例如将我们编写的 .java 源代码编译成机器可执行的字节码的编译器（javac）、用于程序排错的调试器以及其他实用工具。因此，对于任何想要编写和开发 Java 软件的人来说，安装 JDK 是第一步也是必不可少的一步，它相当于为你的电脑装备了一个完整的“Java 工厂”。

官方下载地址: [点击此处访问](https://www.oracle.com/java/technologies/downloads/#jdk24-windows)

直链下载地址(无繁琐步骤): [点击此处访问](https://download.oracle.com/java/24/latest/jdk-24_windows-x64_bin.exe)

::: tip 提示

请选择 x64 Installer 版本进行下载，如果您在安装过程中遇到了不确定的选项，请直接使用默认设置

:::

::: info 问题

您可能遇到需要注册一个 Oracle 账号才允许下载的问题，您只需要按照提示注册账号即可

:::

## IDEA

IntelliJ IDEA 是由 JetBrains 公司开发的一款功能极其强大的集成开发环境（IDE），被广泛认为是 Java 开发领域的行业标杆。它最核心的优势在于其无与伦比的“智能”，能提供极其精准的代码自动补全、强大的安全重构功能，以及实时的代码质量分析，可以像一位资深专家一样，在你编码的同时就发现潜在错误和优化建议。除了对 Java 生态（如 Spring、Maven）的完美支持，它通过丰富的插件也成为了一款支持多种语言的全能型工具，极大地提升了开发者的生产力和代码质量，因此被许多专业程序员誉为“开发利器”。

官方下载地址: [点击此处访问](https://www.jetbrains.com/idea/download/)

直链下载地址(无繁琐步骤): [点击此处访问](https://download.jetbrains.com/idea/ideaIU-2025.1.3.exe)

::: tip 提示

强烈推荐您选择 Professional 版本进行下载，关于激活工具，后续将配合实验室内网服务器将下载地址放于此处，您可以先联系实验室管理员获取激活工具

:::

## Mysql

MySQL 是一款全球最受欢迎的开源关系型数据库管理系统（RDBMS）。它将数据高效地组织在结构化的表格中，就像电子表格一样，用“行”来表示每条记录，用“列”来定义不同的数据属性。开发者通过标准的 SQL（结构化查询语言）来对这些数据进行增、删、改、查等操作。凭借其高性能、高可靠性和易于使用的特性，MySQL 成为了无数网站、应用程序和服务的核心数据存储引擎，尤其是在著名的 LAMP（Linux, Apache, MySQL, PHP/Python）技术栈中扮演着基石角色，为 WordPress 等内容管理系统和众多电商平台提供了坚实的数据支持。

官方下载地址: [点击此处访问](https://dev.mysql.com/downloads/mysql/)

直链下载地址(无繁琐步骤): [点击此处访问](https://dev.mysql.com/get/Downloads/MySQL-8.4/mysql-8.4.5-winx64.msi)

::: tip 提示

请选择 MySQL Community Server 8.4.5 LTS Windows (x86, 64-bit), MSI Installer 版本进行下载，如果出现了让您登录的界面，请直接点击下方小字部分 No thanks, just start my download，或者登录您的 Oracle 账号

:::

::: info 建议

强烈建议您先使用图形化工具管理数据库，比如 [Navicat](https://www.navicat.com/en/download/navicat-for-mysql)、[DataGrip](https://www.jetbrains.com/datagrip/) 等

:::

## NodeJs

Node.js 是一个强大的 JavaScript 运行时环境 (runtime environment)，它革命性地让 JavaScript 不再局限于浏览器，而是可以直接在服务器端运行。它基于 Google Chrome 强大的 V8 引擎构建，其核心特点是采用了事件驱动和非阻塞 I/O 模型，这使得它在处理大量并发连接时（例如构建实时聊天应用、API 接口或流媒体服务）表现得极其高效和轻量。因此，Node.js 不仅成为了构建快速、可扩展网络应用的热门后端技术，它自带的包管理器 npm 更成为了整个现代前端开发工具链不可或缺的基石。

下载地址: [点击此处访问](https://nodejs.org/en/download/)

直链下载地址(无繁琐步骤): [点击此处访问](https://nodejs.org/dist/v22.17.0/node-v22.17.0-x64.msi)

::: tip 提示

请选择 v22.17.0 LTS Windows Installer (.msi) 版本进行下载，如果您在安装过程中遇到了不确定的选项，请直接使用默认设置

:::

## Visual Studio Code

Visual Studio Code（简称 VS Code）是微软开发的一款免费、开源且轻量级的代码编辑器，但它通过其极其强大的扩展生态系统，拥有了堪比重量级 IDE 的功能。它的核心魅力在于高度的可定制性：无论你是在进行前端网页开发、后端服务编写，还是从事数据科学或云计算，都可以通过安装相应的插件，将其打造成一个为你量身定做的开发环境。VS Code 凭借其出色的性能、智能的代码提示（IntelliSense）、内置的 Git 版本控制和调试功能，以及跨平台（支持 Windows, macOS, Linux）的特性，已经成为全球最受欢迎和使用最广泛的开发工具之一。

下载地址: [点击此处访问](https://code.visualstudio.com/)

::: tip 提示

近期发现 vscode 官网无法进入，大家可以直接跳过 vscode 的安装，直接使用下方的 cursor，他们都是基于 vscode 的，功能上几乎没有区别

:::

## Cursor

Cursor 是一款专为 AI 协作而设计的现代化代码编辑器，它基于广受欢迎的 VS Code 构建，因此保留了其熟悉的用户界面和强大的插件生态。其核心亮点是深度集成了先进的大型语言模型（如 GPT-4），这使得开发者可以直接在编辑器内通过聊天对话的方式，让 AI 帮助编写新代码、重构现有函数、解释复杂的代码块，甚至自动修复错误。简单来说，Cursor 不仅仅是一个写代码的工具，它更像一个能理解你整个项目代码库、与你并肩作战的智能编程伙伴，旨在将 AI 无缝融入日常编码流程，从而极大地提升开发效率。

下载地址: [点击此处访问](https://cursor.com/cn)
