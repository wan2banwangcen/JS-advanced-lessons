function foo(){}
console.log(foo); //function foo(){}
console.log(typeof foo); //function
console.log(foo instanceof Object); //true
console.log(foo instanceof Function); //true
console.log(foo === window.foo); //true

console.log(typeof Function);//function
console.log(typeof Array);//function
console.log(typeof Date);//function
console.log(typeof Error);//function
console.log(typeof Math);//object   Math.round()
console.log(typeof JSON);//object

var a=new Array(5);//创建一个五个元素的数组
var b=new Array("5");//创建有一个元素为5的数组

console.log(typeof new Function());// function  创建函数的一个方法
console.log(typeof new Array());//object  创建的是一个对象
console.log(typeof new Date());//object
console.log(typeof new new Function());//object    一个构造函数实例化一个对象

console.log(Function instanceof Function);//true
console.log(Function instanceof Object);//true

console.log(Array instanceof Function);//true  Array用来实例化数组的函数
console.log(Array instanceof Object);//true

console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true

console.log(Math instanceof Function);//false  不属于函数
console.log(Math instanceof Object);//true

console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true



var Person=function name(){
    this.name=name;
}
var p=new Person();