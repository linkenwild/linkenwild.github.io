---
title: 基于时分复用的MAC协议
date: 2019-04-10 21:42:49
categories: 技术
tags: technical
---

## 基于时分复用的MAC协议

	在传感器网络中采用TDMA机制，就是为每个节点分配独立的用于数据发送或结束的时槽，而节点在其他空闲时槽内转入睡眠状态。TDMA没有竞争机制的碰撞重传问题，数据传输不需要过多的控制信息。但是，TDMA需要严格的时间同步。节点之间为了完成任务需要协同工作，同样不可避免的需要时间同步。缺点是：网络可扩展性不足，很难调整时间帧的长度和时槽的分配。
## 对时分复用网络的改进
	
> `基于分簇网络的MAC协议`
    传感器节点固定划分或者自动形成多个簇，每个簇内有一个簇头节点，簇头负责为簇内所有传感器节点分配时槽，收集和处理簇内节点发来的数据，并将数据发送给汇聚节点。
![](https://linkenwild.github.io/images/802.11与802.15.4信道重叠.jpg)