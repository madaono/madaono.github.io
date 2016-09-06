---
layout: post
title: JS中的闭包
description: 闭包如风，常伴吾身
category: blog
---


###一个闭包的小栗子：
闭包是JS中可以说是最重要的概念，无时无刻不在使用着闭包，但是我们却很少意识到，想起我在学习这一部分的时候全程朦朦胧胧，现在想起来，好想是抓住了一点闭包的尾巴。
说起闭包，首先要以一个最经典的例子入手
		"for(var i = 1; i<=5; i++){
			setTimeout(function timer(){
				console.log(i);
		},i*1000);
	}"
这个当时以为应当是输出1到5，但是实际结果输出了5次6
这里又牵扯到一点JS的运行机制，JS是单线程运行，通过浏览器内核的定时器模块延时之后才将console事件压入JS处理队列，所以这段程序的执行顺序是先执行完了for循环（执行时间远小于1000MS），才会执行console事件，此时i永远为6，也就是循环结束时的i值，i被保存在了一个共享的全局作用域中。

正确的代码
	"for (var i=1;i<=5;i++){
		(function(){
			var j = i;
				setTimeout(function timer(){
					console.log(j);
				},j*1000);
		})();
	}"

简化为
	"for(var i=1; i<=5;i++){
		(function(j){
			setTimeout(function timer(){
				console.log(j);
			},j*1000);
		})(i);
	}"

原理就在于其中的立即执行函数。每次迭代过程中，都会生成一个新的作用域，使得延迟函数的回调可以将新的作用域封闭在每个迭代的内部，每个迭代中都会含有一个正确的变量。

当然，这个玩意很绕，作用域本身的不严谨也是JS语言诞生之初的弊端之一，好在ES6中有了let声明，可以用来劫持块作用域，并且在这个块作用域中声明一个变量，本质上还是将一个块转换成一个可以被关闭的作用域。
例子：
	"for(let i = 1; i<=5; i++){
		setTimeout(function timer(){
			console.log(i);
		},i*1000);
	}"
至此，这个问题完美解决。


###好想是明白了一点什么是闭包
下面来探究三个问题，闭包是什么？闭包是怎么产生的？闭包应用在哪里？

<em>首先是闭包是什么？</em>
目前比较主流的观点是：闭包是嵌套的内部函数，这么理解没毛病。
但是通过chrome工具观察发现，这句话并不是太准确
![chromeCloser](/imgs/chromecloser.png)
而应该理解为一个对象，包含着外部引用的局部变量。

<em>闭包是如何产生的?</em>
两个条件：
<ul>
	<li>函数嵌套</li>
	<li>内部函数引用了外部函数的数据(变量/函数)</li>
</ul>

<em>闭包主要应用在哪里？</em>
遍历循环加回调，简直是无处不在，JS的模块化也是靠着闭包。


<em>闭包这么棒，是不是可以到处使用</em>
完事讲计量，红糖泡人参，一天嚼三根，人呐？大象也受不了啊！
闭包可以延长变量的生命周期：
比如将函数作为实参传递给另一个函数调用
    "function showDelay(msg) {
        setTimeout(function () {
            alert(msg);         //引用外部函数的变量(msg)--->闭包(包含msg)
        }, 1000);
    }
    showDelay('hello closure');                               //showDelay执行完后, msg没有释放"
JS的垃圾回收机制只要一个变量不再被引用，则这个变量就是可回收的，而闭包的存在，无疑延长了变量的生命周期，函数执行完后, 函数上下文对象没有释放,占用内存时间会变长，容易造成内存泄露。所以除了合理的使用闭包外还可以将无用的变量手动赋值为null来消除。

<em>闭包的生命周期</em>
1. 产生: 在嵌套函数定义执行完时就产生了(不是在调用)2. 死亡: 在嵌套函数成为垃圾对象时


最后墙裂推荐一本书：《你不知道的JavaScript》，这本书真的是非常棒，让我好多模糊的地方有了稍微清晰点的认识。

最后是1个比较好玩的题目，我看的时候差点恶心到了。
答案在最下面
"function fun(n,o) {
        console.log(o)
        return {
            fun:function(m){
                return fun(m,n);
            }
        };
    }
    var a = fun(0);  a.fun(1);  a.fun(2);  a.fun(3);    -->undefined,?,?,?
    var b = fun(0).fun(1).fun(2).fun(3);     -->undefined,?,?,?
    var c = fun(0).fun(1);  c.fun(2);  c.fun(3);    -->undefined,?,?,?

"



<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>




























    答：
    a: undefined,0,0,0
    b: undefined,0,1,2
    c: undefined,0,1,1





