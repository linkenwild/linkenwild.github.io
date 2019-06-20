---
title: Markdown教程
date: 2019-04-29 14:38:59
categories: Markdown
tags: Markdown
---
# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

---
 *[只有六个级别的标题]*
---
# 一级标题 #
# 一级标题
------
## 二级标题 ##
## 二级标题
----
![](https://linkenwild.github.io/images/ziti.jpg)

这里是一段文字  
是否换行了  
方法一：换行使用两个空格+enter键  
方法二：在段落后面使用一个空行表示换行

# 字体选择
2019/4/29 15:48:02 

----------


***方法有两种***  
*斜体文字*  
_斜体文字_

---

**方法同样有两种**  
**粗体文字**  
__粗体文字__  

___

***粗斜体文字***  
___粗斜体文字___  

---

# 删除线

段落文字添加删除线 ，为两端加上两个波浪线~~
即可

**shell**~~提示符~~

___

~~BAIDU.COM~~  
## 下划线

使用标签来实现  
![下划线](https://linkenwild.github.io/images/xiahuaxian.jpg)  


<Centos系统>

---
# 脚注  

---

编写简单的[^脚本实用工具]  

[^脚本实用工具]: 实现天空自由的翱翔！


![](https://linkenwild.github.io/images/jiaozhu.jpg)  
* one
* second


- three
- four
- five  
- 
---
1. one
2. second
3. three
4. four
5. five

---
1. 一   
    - 电饭锅
    - 勺子
2. ——


# 代码块

---
如果是段落上的一个函数或片段的代码可以用反引号把它包起来


```shell
printf
```  


   你也可以用

>`````    

包裹一段代码，并指定一种语言（也可以不指定）：
```shell
printf();
for(int a =0;i<10;i++);
```


---
# Markdown 链接

---
> 中括号后面跟着一个小括号，中括号是链接名称，小括号内是链接网址
 


[菜鸟教程](https://www.runoob.com/)  

# Markdown 图片

___

- 开头感叹号
- 接着一个方括号，方括号内放图片介绍文字
- 接着小括号，小括号内放图片网址  
  

___


# Markdown 表格

![](https://linkenwild.github.io/images/biaoge.jpg)  

___

# 其他元素

___


---

<kdb>Ctrl</kdb>+<kdb>Alt</kdb>+<kdb>Del</kdb>重启电脑


# 引用

---

> 一级引用
> >二级引用
> > >三级引用

---

# ~~流程图~~

```graph
graph TD;
    A-->B;
	A-->C;
	A-->D;
	B-->E;
	B-->F;
	C-->G;
	D-->H;
	D-->I;
	D-->J;
	E-->L;
	F-->L;
	G-->L;
	H-->L;
	J-->L;
	I-->L;
	L-->W;
```




