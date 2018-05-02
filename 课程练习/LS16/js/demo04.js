function Person(age){
    this.age =age;
    
};
var p1=new Person(23);//this指向实例化出来的对象  23


function Person(name,age){
	this.name=name;
	this.age=age;
	this.show=function(){
		console.log(this.name,this.age);
	}
}
var p1=new Person('Jack',23);
var p2=new Person('Lucy',40);
p1.show();//Jack 23
p2.show();//Lucy 40

function Person(name,age){
	this.name=name;
	this.age=age;
	show=function(){
		console.log("xxx");
		//console.log(this.name,this.age);
	}
}
var p1=new Person('Jack',23);
p1.show();//报错
show()//xxx  this指向全局window

function Person(name,age){
	this.name=name;
	this.age=age;
	this.show=function(){
		console.log(name,age);
	}
}
var p1=new Person('Jack',23);
p1.show();//Jack 23  形成了闭包

//私有属性
function Person(name,age){
	var a=name;
	var b=age;
	this.show=function(){
		console.log(a,b);
	}
}
var p1=new Person('Jack',23);
p1.show();