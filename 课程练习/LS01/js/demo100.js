//包装对象
var a=123;
var b=new Number(a);
console.log(a==b);//true
console.log(a===b);//false  a和b的数据类型不同，a为Number型，b为对象类型

//临时包装对象
var str="abcd";
console.log(str.length);//4
str.length=1;
console.log(str.length,str);//4 "abcd"  //临时包装对象并不影响原始值

var arr=[1,2,3,4];
console.log(arr.length);//4
arr.length=1;
console.log(arr.length,arr);//1 [1]