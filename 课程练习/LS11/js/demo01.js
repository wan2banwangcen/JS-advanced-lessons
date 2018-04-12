//立即执行表达式 常见形式
(function max(x,y){
    console.log(x+y);
}(2,3));//5

(function (x,y){ //可以没有函数名
    console.log(x+y);
})(2,3);//5

// 其他形式的IIFE 与运算符结合的写法
var i = function(){
    return 10;
}(); //i为10
//如果没有（）就是给i赋一个函数对象

true && function(a,b){
    return a>b?a:b;
}(5,9);//9

0 && function(a,b){
    return a>b?a:b;
}(5,9);//0

!function(x,y){
    return x==y?true:false; // === 返回true
}("5",5);//false

!function(){return 2; }( );//false
!function(){return 0; }();//true

(function(){
    console.log("111");
})()
(function(){
    console.log("222");
})()//会报错，要加分号

(function(){
    console.log("111");
})();
(function(){
    console.log("222");
})()//111 222