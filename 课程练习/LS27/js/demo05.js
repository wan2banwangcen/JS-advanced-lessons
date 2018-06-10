const PI=3.1415926;
console.log(PI);
PT=3;//给变量重新赋值会报错

//const声明变量时必须赋值，一旦声明必须立即初始化
const foo;//会报错
const foo=3;

//const作用域同let
if(true){
    const max=3;
}
console.log(max);//会报错

//const除了声明常量外，也常用来声明不变的函数
const fee=function(){
    var a=3;
    console.log(a);
}

//const指向的对象引用不可变，但其属性或元素（如果是数组对象的话）是可变的
const a=[];
a.push(123,345);//可以
a.length=1;//可以
a="str";//报错 因为a是const其元素或属性可改，但其引用不能修改类似于const指针
