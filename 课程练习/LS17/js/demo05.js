// part 1 对象原型的constructor属性
//因为对象实例从原型中继承了constructor，所以可以通过constructor得到实例的构造函数
//确定对象的构造函数名、创建相似对象、constructor可用于指定构造函数
//1 确定对象的构造函数名
function Foo(){}
var f=new Foo();
console.log(f.constructor.name);//Foo

//2 创建相似对象
function Constr(name){
    this.name=name;
}
var x = new Constr("Jack");
var y = new x.constructor("Mike");
console.log(y);//Constr {name: "Mike"}
console.log(y instanceof Constr);//true

//3 constructor 可用于指定构造函数
function Person(area){
    this.type = 'person';
    this.area = area;
}
Person.prototype.sayArea = function(){
    console.log(this.area);
};
var Father = function(age){
    this.age = age;
};
Father.prototype = new Person('Beijin');
console.log(Person.prototype.constructor); //function person()
console.log(Father.prototype.constructor); //function person()
Father.prototype.constructor = Father;     //修正constructor指向
console.log(Father.prototype.constructor); //function father()
var one = new Father(25);

//part 2 公有属性、私有属性、特权方法
function A(id) {
    this.publicId = id;
    var privateId = 456;
    this.getId = function () {
        console.log(this.publicId,privateId);
    };
}
var a = new A(123);
console.log(a.publicId);//123
console.log(a.privateId);//undefined
a.getId();//123 456



function Person(name){
	this.name = name;
}
Person.prototype.getName = function(){}
var p = new Person("jack");
console.log(p.__proto__ === Person.prototype);//true
console.log(p.__proto__ === p.constructor.prototype);//true
console.log(Object.prototype === p.constructor.prototype);//false
console.log(Person.prototype===p.constructor.prototype);//true
//console.log(({getName:function(){}}).__proto__ === p.constructor.prototype);//true or false?


function Person(name){
	this.name = name;
}
Person.prototype = { 
 	getName:function(){}
}
var p = new Person("jack");
console.log(p.__proto__ === Person.prototype);//true
console.log(p.__proto__ === p.constructor.prototype);//false
console.log(Object.prototype === p.constructor.prototype);//true
console.log(({getName:function(){}}).__proto__ === p.constructor.prototype);//true
console.log(Person.prototype===p.constructor.prototype);//false