//复习 创建对象的三种方法
//字面量直接创建对象
var obj1={x:1};
//通过Create方法创建对象  第二个参数
var obj2=Object.create(obj1);
obj2.y=2;
//构造函数创建对象
var Person=function(name){this.name=name}
var obj3=new Person('Jack');
console.log(obj3.name);//Jack
obj3 instanceof Person;//true


var empty = {};
var obj2 = Object.create(empty,{
   x:{value:1}, y:{value:2,enumerable:true}
});
console.log(obj2);//解析器默认把可枚举的属性放在前边  {y:2,x:1}
console.log(obj2.hasOwnProperty("x"));//true

