var o={
	x:12
}
o.__proto__===Object.prototype;//true
o2.__proto__===o;//true

var Person=function(name){
	this.name=name;
}
var p=new Person('Jack');
p.__proto__===Person.prototype;//true
Person.__proto__===Function.prototype;//true
Person.__proto__.__proto__===Object.prototype;//true
Person.__proto__.__proto__.__proto__===null;//true


