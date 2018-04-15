function f1(){
    var n = 999;
    function f2(){
        console.log(++n);
    }
    return f2;
}
var f = f1();
f();//1000
f();//1001

// 闭包实例
// 函数f1中的局部变量n一直保存在内存中，并没有在f1调用后被自动清除
// 原因就在于f1是f2的父函数，而f2被赋给了一个全局变量，
// 这导致f2始终在内存中，而f2的存在依赖于f1，因此f1也始终在内存中，
// 不会在调用结束后，被垃圾回收机制（garbage collection）回收
var n = 10;
function f1(){
    var n=999;
    nAdd=function(){n+=1;};//思考：nAdd是闭包, n是f1()作用域下的变量
    function f2(){
        console.log(n);
    }
    return f2;
}
var result=f1();
result();//999
nAdd();
result();//1000

////////闭包 应用案例 实现数据的封装 私有属性
function Person(){
    var name = "default";
    return {
        getName : function(){
            return name;
        },
        setName : function(newName){
            name = newName;
        }
    }
};
var john = Person();
console.log(john.getName());//default
john.setName("john");
console.log(john.getName());//john

var jack = Person();
console.log(jack.getName());//default
jack.setName("jack");
console.log(jack.getName());//jack

////
var m = 10;
function f1(){
    nAdd=function(){++m;};
    function f2(){
        console.log(m);
    }
    return f2;
}
var result1=f1();
var result2=f1();
result1(); //10
nAdd();
result2(); //11
result1();//11