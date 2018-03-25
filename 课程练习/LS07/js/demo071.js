//函数定义 函数声明方式
function max(a,b){
    return a<b?a:b;
}
max(2,3);//2
//函数定义 函数表达式方式 的能耗右侧可以是匿名函数也可以是非匿名函数
var max=function(a,b){//匿名函数
    return a<b?a:b;
}
max(2,3);//2
//通过new方法构造函数
var max = new Function("a","b","return a>b?a:b");
max(2,3);//2

var str="return a<b?a:b";
var min=new Function("a","b",str);//Function实例化对象
min(2,3);//2