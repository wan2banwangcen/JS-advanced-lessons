//复习
//创建对象的三种方法
var obj1={x:1};

var obj2=Object.create(obj1);
obj2.y=2;

var Obj3=function(){this.z=3};
var obj3=new Obj3();

//defineProperty属性
var obj={x:1,y:2};
for(var k in obj){
	console.log(k,obj[k]);
}//x 1 y 2

var obj={x:1,y:2};
Object.defineProperty(obj,'x',{enumerable:false});
for(var k in obj){
	console.log(k,obj[k]);
}
for(var k in obj){
	console.log(k,obj[k]);
}//y 2

var objProto = {
    z:3
};

var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log(obj.toString);//原型链上有toString属性

for(var k in obj){//通过for...in遍历所有原型链上的属性
    console.log(k,obj[k]);//不能遍历到toString
}