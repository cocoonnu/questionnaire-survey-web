# react脚手架

## 文件目录介绍

```BASH
├─config webpack打包配置文件
├─public 静态文件目录，不会被编译
├─app
|  ├─assets 静态文件目录，会被编译
|  ├─views 页面视图层
|  ├─utils 共用方法文件
|  ├─types 这是TS全局模块定义
|  ├─layout 页面layout组件
|  ├─store 全局状态管理目录
|  ├─main 页面主入口目录
|  ├─service 服务接口
|  ├─router 路由配置文件
|  ├─consts 常量配置，例如环境变量
|  ├─components 组件库
```

## 启动变量参数介绍

FIG_ENV 用于读取指定webpack配置(参数dev 或 prod)，以及暴露全局使用的config变量，在app/config中自定义业务变量使用

NODE_ENV 用于常规检测（development 或 production），例如用在动态添加redux中判断环境，进行处理不同逻辑，主要是不需要手动在次暴露一次变量，而且只需要二种环境，BUILD_ENV可能会存在多种情况所以不适用

# APP项目文件介绍

## 路由配置

app/router/ 目录内

## 不同环境config参数

app/config/ 目录内，根据打包BUILD_ENV变量，暴露不同的参数，供前端请求接口或其它业务使用


## 自动打tag追加版本号

npm i -g nsh-tag 全局安装插件

使用方式：

```shell
npm run tag:prod # 自动打tag，基于当前version版本追加小版本号
```