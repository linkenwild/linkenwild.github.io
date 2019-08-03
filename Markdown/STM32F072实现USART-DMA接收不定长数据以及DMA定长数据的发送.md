---
title: STM32F072实现USART+DMA接收不定长数据以及DMA定长数据的发送
date: 2019-08-03 13:41:35
categories: 嵌入式
tags: STM32
---
### STM32F072实现USART+DMA接收不定长数据以及DMA定长数据的发送 ###
---
---
# 前述
________________
_________________
现在做项目需要用到串口通信，由于之前使用RXNE中断，每次接收一个字节就是进一次中断，当出现大数据量帧传输时，主程序的执行就会经常打断得不到保证。因此采用串口+DMA的方式能大大提高程序效率
___________
# DMA
___________
______________
DMA 传输将数据从一个地址空间复制到另外一个地址空间。CPU只需初始化DMA即可，传输动作本身是由 DMA 控制器来实现和完成。典型的例子就是移动一个外部内存的区块到芯片内部更快的内存区。这样的操作并没有让处理器参与处理，CPU可以干其他事情，当DMA传输完成的时候产生一个中断，告诉CPU我已经完成了，然后CPU知道了就可以去处理数据了，这样子提高了CPU的利用率，因为CPU是大脑，主要做数据运算的工作，而不是去搬运数据。DMA 传输对于高效能嵌入式系统算法和网络是很重要的。(来自网络)
__________

# 资源
___________
______________
STM32F072上只有一个DMA1,使用USART1是挂载通道2(Tx)和通道3(Rx)。

DMA在接收数据的时候，串口接收DMA在初始化的时候就处于开启状态，一直等待数据的到来，在软件上无需做任何事情，只要在初始化配置的时候设置好配置就可以了。等到接收到数据的时候，告诉CPU去处理即可。

DMA在发送的时候，配置发送缓冲数组地址和发送寄存器地址，设置好配置就可以了。死循环等待，发送完成之后会清标志位。
__________
# 源码程序
___________
______________
![](https://linkenwild.github.io/images/DMA1.jpg)
----
![](https://linkenwild.github.io/images/DMA2.jpg)
-----
![](https://linkenwild.github.io/images/DMA3.jpg)
----
![](https://linkenwild.github.io/images/DMA4.jpg)
---
![](https://linkenwild.github.io/images/DMA5.jpg)
----
![](https://linkenwild.github.io/images/DMA6.jpg)
-----
![](https://linkenwild.github.io/images/DMA7.jpg)
----
![](https://linkenwild.github.io/images/DMA8.jpg)
________
___________
# 工程地址
________
___________


本文 工程地址[PROJECT:STM32F072实现USART+DMA接收不定长数据以及DMA定长数据的发送](https://github.com/linkenwild/linkenwild.github.io/tree/master/PROJECT)


————————————————————
-------
-------
本文 Markdown 地址: [STM32F072实现USART+DMA接收不定长数据以及DMA定长数据的发送.md](https://github.com/linkenwild/linkenwild.github.io/tree/master/Markdown/STM32F072实现USART+DMA接收不定长数据以及DMA定长数据的发送.md)
---------