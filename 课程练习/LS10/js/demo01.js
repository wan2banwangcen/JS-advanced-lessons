//全局作用
var a = 10,
    b = 20;
function fn() {
    //fn局部作用域
    var a = 100,
        c = 200;
    function bar() {
        //bar局部作用域
        var a = 500,
            d = 600;
        console.log(a,b,c,d);
    }
    bar();
}
fn();//500 20 200 600

//例二
var a = 10,
    b = 20;
function fn() {
    //fn局部作用域
    var a = 100,
        c = 200;
    function bar() {
        //bar局部作用域
        var a = 500,
            d = 600;
    }
    bar();
    console.log(a,b,c,d);//d会报错，d是局部的，不能访问
}
fn();//500 20 200 600
//console.log(a,b,c,d);

//例三
var a = 10,
    b = 20;
function fn() {
    //fn局部作用域
    var a = 100,
        c = 200;
    function bar() {
        //bar局部作用域
        var a = 500;
            d = 600;
    }
    bar();
    console.log(a,b,c,d);
}
fn();//500 20 200 600