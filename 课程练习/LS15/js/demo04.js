//基于构造函数实现的原型继承
function Person(){
    this.name ='Jack';
    console.log('hi');
};
var p=new Person();
console.log(p);//hi {name:Jack}
Person();//hi


var Person=function(name,age){
	this.name=name;
	this.age=age;
}
Person.prototype.sayHi=function(){
	console.log(this.name,this.age);
}
var p=new Person("Mike",23);
p.sayHi();//Mike 23
p.__proto__===Person.prototype;//true
Person.__proto__===Object.prototype;//false
Person.__proto__===Function.prototype;//true
Person.__proto__.__proto__===Object.prototype;//true
Person.__proto__.__proto__.__proto__;//null


function Person(age){
    this.age =age;
    
};
Person.prototype.name='Jack';
Person.prototype.sayHi=function(){
	console.log(this.name,this.age);
}
var p1=new Person(23);
var p2=new Person(24);
p1.sayHi();//Jack 23
p2.sayHi();//Jack 24
p1.__proto__.name='Lucy';
p1.sayHi();//Lucy 23
p2.sayHi();//Lucy 24

p1.hasOwnProperty('constructor');//false
'constructor' in p1;//true
p1.__proto__.hasOwnProperty('constructor');//true


var arr=new Array();
arr.__proto__===Array.prototype;//true
arr.__proto__.__proto__===Object.prototype;//true
