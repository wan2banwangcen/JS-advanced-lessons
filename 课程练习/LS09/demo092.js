//词法作用域，与调用形式无关
//以函数定义的地方，往上找
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();//Jack

//全局变量与局部变量
var x = "outside f1";
var f1 = function () {
    console.log(x);
};
f1();//outside f1 
console.log(x);//outside fi

var x = "outside f1";
var f1 = function () {
    var x = "inside f1";
    console.log(x);
};
f1();//inside f1
console.log(x);//outside f1

//若函数内未加var，则相当于创建了全局变量
var f2 = function () {
    var y = "局部";
    console.log(y);
};
f2();//局部
console.log(y);//报错

var f2 = function () {
    y = "全局";
    console.log(y);
};
f2();//全局
console.log(y);//全局


//ES5中没有块作用域
if(true){
    var z = 23;
}
console.log(z);//正常输出，if没有作用域，

if(true){
    (function () { //IIFE start
        var z = 23;
    }());           //IIFE end
}
console.log(z);//报错
