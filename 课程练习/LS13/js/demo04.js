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


var obj = {
    x:12
 };
 obj.x;//12
 obj['x'];//12

 var obj={
	x1:12,
	x2:23,
	x3:34
}
for(var i=0;i<4;i++){
	console.log(obj['x'+i]);
}//当遍历对象属性时，用ogj[]访问属性