---
title: linux命令
date: 2019-04-28 10:04:15
categories: Linux学习
tags: Linux
---
# 1 cd命令 #
> cd 是change directory的意思，即切换目录。



----------

1. cd /home 进入‘/home’目录
> 比如cd /c 表示进入C盘
> cd /e/Blog b表示进入E盘的Blog文件夹
# 2 pwd命令 #
pwd命令显示当前工作路径

Linux中用 pwd 命令来查看”当前工作目录“的完整路径。 简单得说，每当你在终端进行操作时，你都会有一个当前工作目录。 

在不太确定当前位置时，就会使用pwd来判定当前目录在文件系统内的确切位置。
> 输入pwd可以确认当前位置

# 3 ls命令 #
ls即list的意思，查看文件
> 
- ls 查看目录中的文件
- ls -l显示文件和目录的详细资料
- ls -a列出全部文件，包括隐藏文件
- ls -R连同子目录的内容一同列出（递归列出），等于该目录下的所有文      件都会显示出来  
- ls [0-9]显示包含数字的文件名和目录名

![](https://linkenwild.github.io/images/linux_ls.jpg)

# 4 cp命令 #
复制文件的命令，作用：
> 将多个文件一次性复制到一个目录下

> -a:将文件的特性一起复制
> -p:连同文件的数学一起复制，而非使用默认方式，与-a相似，常用语备份
> -i：若文件目标存在，在覆盖时会先进行询问操作
> -r:递归持续复制，用于目录的持续行为
> -u:目标文件与源文件有差异时才会复制


> 将文件file复制到目录/usr/men/tmp下，并改名为file1
> cp file /usr/men/tmp/file1


> 将目录 /g/查阅资料/算法 下的所有文件及其子目录复制到目录 /g/查阅资料/gossip

> cp -r /usr/men /usr/zh
```javascript
cp -r /g/查阅资料/算法 /g/查阅资料/gossip
```

# 5 mkdir创建文件夹命令 #
> mkdir [选项] DirName
```javascript
mkdir /g/查阅资料/gossip
```


> 表示在*/g/查阅资料*  下面建立了gossip文件夹

# 6 rm删除文件夹 #
> rm [选项] DirName

> 
-i 删除前逐一询问确认。



>  -f 即使原档案属性设为唯读，亦直接删除，无需逐一确认。


> -r 将目录及以下之档案亦逐一删除。

```javascript
rm -r gossip```



**表示将gossip文件夹删除**

# 7 mv命令 #
> -f ：force强制的意思，如果目标文件已经存在，不会询问而直接覆盖
 
> -i ：若目标文件已经存在，就会询问是否覆盖
 
> -u ：若目标文件已经存在，且比目标文件新，才会更新

# 8 cat命令查看文本内容 #

> cat file1 从第一个字节开始正向查看文件的内容
>  
> tac file1 从最后一行开始反向查看一个文件的内容
>  
> cat -n file1 标示文件的行数 
> 
> more file1 查看一个长文件的内容 
> 
> head -n 2 file1 查看一个文件的前两行 
> 
> tail -n 2 file1 查看一个文件的最后两行 
> 
> tail -n +1000 file1  从1000行开始显示，显示1000行以后的
> 
> cat filename | head -n 3000 | tail -n +1000  显示1000行到3000行
> 
> cat filename | tail -n +3000 | head -n 1000  从第3000行开始，显示1000(即显示3000~3999行)

