---
title: hexo博客美化添加live2d萌宠
date: 2019-04-26 21:21:35
categories: hexo美化
tags: hexo
---

# hexo添加live2d萌宠 #
live2d的仓库地址：

[Repo Address](https://github.com/EYHN/hexo-helper-live2d/blob/master/README.zh-CN.md)

## 安装插件 ##

1. 在hexo的git bash下输入
```shell
npm install --save hexo-helper-live2d
```
> 等待安装完成如图
> ![](https://linkenwild.github.io/images/live2d.jpg)


2.插件安装完成后，选择萌宠模型。

> 萌宠模型展示图 [Modeling](https://huaji8.top/post/live2d-plugin-2.0/)

```shell
- live2d-widget-model-chitose
- live2d-widget-model-epsilon2_1
- live2d-widget-model-gf
- live2d-widget-model-haru
- live2d-widget-model-haruto
- live2d-widget-model-hibiki
- live2d-widget-model-hijiki
- live2d-widget-model-izumi
- live2d-widget-model-koharu
- live2d-widget-model-miku
- live2d-widget-model-ni-j
- live2d-widget-model-nico
- live2d-widget-model-nietzsche
- live2d-widget-model-nipsilon
- live2d-widget-model-nito
- live2d-widget-model-shizuku
- live2d-widget-model-tororo
- live2d-widget-model-tsumiki
- live2d-widget-model-unitychan
- live2d-widget-model-wanko
- live2d-widget-model-z16
```

3. 选择安装，我选择的是Hibiki
```shell   
npm install live2d-widget-model-hibiki
```
如图所示

![](https://linkenwild.github.io/images/hibiki.jpg)

# 使用配置 #
1. 在hexo博客的根目录的配置文件下_config.yml中加入以下代码段
 
```shell
    live2d:
    enable: true
    scriptFrom: local
    pluginRootPath: live2dw/
    pluginJsPath: lib/
    pluginModelPath: assets/
    tagMode: false
    debug: false
    model:
    use: live2d-widget-model-hibiki
    display:
    position: right
    width: 150
    height: 300
    mobile:
    show: true
```

2. 同步显示效果
在hexo的git bush下输入
```shell
hexo g -d
```
完成同步


*效果图*
![](https://linkenwild.github.io/images/hibiki_model.jpg)
