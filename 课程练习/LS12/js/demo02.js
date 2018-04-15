//Part 1
var tmp = 100;//注意：词法作用域,形成的闭包包含此行的变量tmp
function foo(x) {
    var tmp = 3;//注意：词法作用域，思考：若屏蔽此行，会输出什么？foo之外的tmp是否为闭包的一部分？
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var fee = foo(2); // fee 形成了一个闭包
fee(10);//16
fee(10);//17
fee(10);//18

var tmp = 100;//注意：词法作用域,形成的闭包包含此行的变量tmp
function foo(x) {
    //var tmp = 3;//注意：词法作用域，思考：若屏蔽此行，会输出什么？foo之外的tmp是否为闭包的一部分？
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var fee = foo(2); // fee 形成了一个闭包
fee(10);//113
fee(10);//114
fee(10);//115

//闭包嵌套，扩展知识（了解即可），思考下述代码中存在几个闭包，设置断点调试
function f1(m){
	var z = 100;
	function f2(x) {
    	return function (y) {
        	console.log(x + y + (++z));//设置断点，有2个闭包
    	}
	}
	return f2(m);
}
var f3 = f1(2); 
f3(10);
f3(10);
//x属于f2()闭包，z属于f1()闭包

//Part 2
function foo(x) {
    var tmp = 3;
    return function (y) {
        x.count = x.count ? x.count + 1 : 1;
        console.log(x + y + tmp,x.count);
    }
}
var age = new Number(2);
var bar = foo(age); //和相关作用域形成了一个闭包
bar(10); //15 1
bar(10); //15 2
bar(10); //15 3


// Part 3
function fn() {
    var max = 10;//若屏蔽此行，则输出为多少？
    return function bar(x) {
        if(x > max){
            console.log(x);
        }else {
            console.log(max);
        }
    }
}
var f1 = fn();
var max = 100;
f1(15);//15

function fn() {
    //var max = 10;//若屏蔽此行，则输出为多少？
    return function bar(x) {
        if(x > max){
            console.log(x);
        }else {
            console.log(max);
        }
    }
}
var f1 = fn();
var max = 100;
f1(15);//100


