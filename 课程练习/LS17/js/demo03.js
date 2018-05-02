//构造函数中的this指向实例出来的对象
//JS实现继承的形式 一
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){console.log(this.name);};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
Student.prototype.__proto__ = Person.prototype;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);
//name属相添加到了实例化的对象上

//JS实现继承的形式 二
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){
    console.log(this.name);
};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
Student.prototype = Object.create(Person.prototype);
// console.log(Person.prototype.constructor); //
// console.log(Student.prototype.constructor); //
Student.prototype.constructor = Student;//让Student实例出来的对象的原型指向Student.prototype,不写的话会指向Person
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);