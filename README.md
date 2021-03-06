# react+koa+ts 前后端分离模板项目

## 一、技术选型

- 编程语言：typescript
- 前端框架：react
- 前端包管理工具：pnpm
- 打包工具：webpack
- 后端框架：koa
- 部署工具：pm2
- 格式化代码：prettier

## 二、目录结构

| 文件目录         | 说明                               |
| ---------------- | ---------------------------------- |
| ./README.md      | 说明文档                           |
| ./package        | 源代码                             |
| ./package/client | 前端源代码                         |
| ./package/server | 后端源代码                         |

## 三、开发指南

执行`bootstrap`命令安装 pnpm 和 pm2（如果你没有这两个东西的话）
使用`pnpm install`命令安装依赖
使用`dev:all`命令进行开发，访问`localhost:8080`即可看到网站
使用`build:all`命令进行打包
使用`format`命令格式化代码

## 四、部署指南

执行`bootstrap`命令安装 pnpm 和 pm2（如果你没有这两个东西的话）
使用`start`命令启动服务

## 五、开发日志

## 5月18日
#zan
将低代码编辑器中右侧设置各个组件参数的面板模块化了，在/package/client/pages/rightPanel下，新文件夹rightPanelComponent下四种类型组件的面板，可以分开编辑。
## 5月18日
#zan
低代码编辑器左侧面板组件分开写在/package/client/components下各个文件夹中，写不同组件的同学可以在不同文件夹下修改，对应拖拽，中间画布渲染，即右侧编辑面板对应都修改好了。
## 5月19日
#zan
右侧编辑面板样式美化了一下。
## 5月20日
#zan
修改了package.json文件中dev:all命令行，使后端8081端口可以正常访问。
## 5月21日
#zan
页面美化了一下，将组件背景改为边框，测试了一下后端接口数据提交修改都正常。

## 5月23日
#dyhes
借助github actions 实现自动部署

## 5月23日
#maple826
添加了图片组件