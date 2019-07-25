---
title: 簇首节点两个ZigBee通信
date: 2019-07-25 22:32:11
categories: 嵌入式
tags: STM32
---
# 簇首节点的通信
____________________
## 通信实验测试过程
___________
____________
- 电脑上打开两个串口调试助手
- 将簇首节点硬件板上电烧录程序运行
- 需要四个ZigBee模块

簇首节点硬件实物图如下：
![](https://linkenwild.github.io/images/cushouyingjian.jpg)
______________________
### 配置过程
______
______
串口调试助手通过USB转TTL线连接ZigBee模块。打开ZigBee配置软件配置节点本机地址为0x2013目标地址为0x2016，运行在CH25信道上。

![](https://linkenwild.github.io/images/USB2TTL.jpg)
------------

配置簇首节点与USART4连接的ZigBee模块，打开ZigBee配置软件配置节点本机地址为0x2016目标地址为0x2013，运行在CH25信道上。
------------
配置簇首节点与USART1连接的ZigBee模块，打开ZigBee配置软件配置节点本机地址为0x2013目标地址为0x20143，运行在CH26信道上。
------
串口调试助手通过USB转TTL线连接ZigBee模块。打开ZigBee配置软件配置节点本机地址为0x2014目标地址为0x2002，运行在CH26信道上。
_______________________
_______________________
#### 数据流向
___________
 
1. 通过串口调试助手发送指令，经过USB转TTL连接的ZigBee模组（本机地址为0x2013目标地址为0x2016，运行在CH25信道上）。此ZigBee模块转发数据至簇首节点硬件板的与USART4连接的ZigBee上。
2. 配置簇首节点与USART4连接的ZigBee模块，（运行在CH25通道上）一个方向是将指令进行复制，返回给1中的串口调试助手，另一个数据流向是将指令通过MCU的处理传给USART1.
3. 配置簇首节点与USART1连接的ZigBee模块将响应数据帧通过CH26通道完成数据的发送。
4. （本机地址为0x2014目标地址为0x2002，运行在CH26信道上）的ZigBee模块连接有串口调试助手用于打印接收到的响应的数据。

此过程详细流程如图所示：
![](https://linkenwild.github.io/images/tongxin.png)




-------
-------
本文 Markdown 地址: [局域网认识.md](https://github.com/linkenwild/linkenwild.github.io/tree/master/Markdown/局域网认识.md)
---------