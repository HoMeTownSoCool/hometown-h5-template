<p align="center">
  <img width="160px" src="https://github.com/HoMeTownJS/site/blob/main/public/images/logo.png?raw=true" />
</p>
<h1 align="center">✨ hometown-h5-template 💥</h1>
<p align="center">轻松，简单，开箱即用 📦</p>
<p align="center"><a href="README.md">English</a> | 中文</p>

## 简介

[hometown-h5-template](https://github.com/HoMeTownSoCool/hometown-h5-template) 是一个开箱即用的 h5 前端解决方案，为前端开发朋友提供丰富简洁的开发环境，专注于业务，提高开发效率的同时也可用于学习参考。

## 技术栈

- **Vue3** `v3.2.31`
- **TypeScript** `v4.9.5`
- **Vite** `v4.1.1`
- **VantUI** `v4.0.10`
- **Pinia** `v2.0.13`
- **UnoCSS** `v0.49.4`
- **sass** `v1.49.11`
- **HoMeTownJS** `*.**.**`

## 特性

- **最新技术栈：** Vue3/Vite4 等前沿技术开发 & 高效的 npm 包管理工具 pnpm
- **TypeScript：** 应用程序级 JavaScript
- **灵活的 CSS：** 单一的主题配置入口，强大的 CssVar
- **Request：** 基于 axios 的一套完整的网络请求方案

## 开发环境推荐

- **node** `v14.21.2`
- **npm** `v6.14.17`
- **pnpm** `v7.26.3`
- **vscode** `v1.75.1`

## 安装和使用

### 克隆代码

```bash
git clone https://github.com/HoMeTownSoCool/hometown-h5-template.git
```

### 安装依赖

```bash
pnpm install
```

### 运行

```bash
pnpm dev
```

### 打包

```bash
pnpm build
```

## 目录

```text
├── LICENSE
├── README.md
├── README.zh_CN.md
├── auto-imports.d.ts # 自动导入文件
├── build # 打包相关
├── components.d.ts # 组件自动注册文件
├── dist # 打包的产物
├── index.html
├── node_modules
├── package.json
├── pnpm-lock.yaml
├── public # 静态文件
├── src
  ├── App.vue
  ├── assets # 资源
  ├── components # 组件
  ├── const # 常量
  ├── enum # 枚举
  ├── hooks # 钩子
  ├── main.ts # 入口
  ├── plugins # 插件
  ├── router # 路由
  ├── service # 服务
  ├── store # 状态
  ├── style # 样式
  ├── typings # 类型
  ├── utils # 工具
  └── views # 页面
├── stats.html
├── tsconfig.json # ts配置文件
├── unocss.config.ts # unocss配置文件
└── vite.config.ts # vite配置文件
```

## 代码提交

项目已经内置 angular 提交规范，直接执行 commit 命令即可。

首次提交代码前请执行命令开启 githooks:

```bash
pnpm init-git-hooks
```

代码提交

```bash
git add .
pnpm commit
git push origin xx
```

## 浏览器支持

推荐使用`Chrome 90+` 浏览器

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px"  />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                                               not support                                                                                                               |                                                                                        last 2 versions                                                                                        |                                                                                            last 2 versions                                                                                            |                                                                                          last 2 versions                                                                                           |                                                                                          last 2 versions                                                                                           |

## 作者

[HoMeTown](https://juejin.cn/user/4116184668057390) 🙊
