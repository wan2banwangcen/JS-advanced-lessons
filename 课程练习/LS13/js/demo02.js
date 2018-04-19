//part1
var i = new String("str");          // String Object
var h = new Number(1);              // Number Object
var g = new Boolean(true);          // Boolean Object
var j = new Object({name : "Tom"}); // Object Object
var k = new Array([1, 2, 3, 4]);    // Array Object
var l = new Date();                 // Date Object
var m = new Error();
var n = new Function();
var o = new RegExp("\\d");

//String...是对象，前边的i也是一个对象，i的类型就是string类型


//typeof
console.log(typeof Array);//Function
console.log(typeof Function);//Function
console.log(typeof Date);//Function
console.log(typeof Number);//Function
console.log(typeof String);//Function
console.log(typeof Boolean);//Function
console.log(typeof Math);//Object
console.log(typeof JSON);//Object

//part2
//instanceof
console.log(Object instanceof Function);//true
console.log(Object instanceof Object);//true
console.log(Boolean instanceof Function);//true
console.log(Boolean instanceof Object);//true
console.log(String instanceof Function);//true
console.log(String instanceof Object);//true
console.log(Number instanceof Function);//true
console.log(Number instanceof Object);//true
console.log(Function instanceof Function);//true
console.log(new Function() instanceof Function);//true   实例化一个对象,也是一个函数  
console.log((new (new Function())) instanceof Function);//false  new Function(）是实例化一个函数，new (new Function())是实例化一个对象，不是函数
console.log(Function instanceof Object);//true
console.log(Array instanceof Function);//true
console.log(Array instanceof Object);//true
console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true
console.log(Math instanceof Function);//false
console.log(Math instanceof Object);//true
console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true


