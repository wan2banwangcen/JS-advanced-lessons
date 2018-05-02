//通过构造函数创建的对象的原型共享问题
//以下写法实现了原型继承，但存在原型共享的问题
function Person(name){
    this.name = name;
}
Person.prototype.age = 22;
Person.prototype.showName = function(){console.log(this.name);};
function Student(id){
    this.id = id;
}
//var p1 = new Person("Mike");Student.prototype = p1;
Student.prototype = new Person("Mike");
var s1 = new Student(2017001);
var s2 = new Student(2017002);
console.log(s1.name,s1.age,s1.id);// Mike 22 2017001
console.log(s2.name,s2.age,s2.id);//Mike 22 2017002
s1.__proto__.name = "Jack";
console.log(s2.name);//Jack
s2.__proto__.__proto__.age = 99;
console.log(s2.age);//99
//name添加到了实例化对象上，age添加到了Person.prototype上，id添加到了Student上


console.log(s1);//Student{id:2017001}
console.log(s1.__proto__);//Person {name: "Jack"}
console.log(s1.__proto__.__proto__);//{age: 99, showName: ƒ, constructor: ƒ}
s1.__proto__===Student.prototype;//true
s1.__proto__.__proto__===Person.prototype;//true
console.log(Student.prototype);//Person{name:Jack}


//给每个student对象单独添加自身属性name和age
s1.name='Bill';
s1.age=23;
s2.name='Colin';
s2.age=24;



function Person(name){
    this.name = name;
}
Person.prototype.age = 22;
 Person.prototype.showName = function(){console.log(this.name);};
   
var person1 = new Person("Mike");
var student1 = Object.create(person1,{id:{value:123,writable:true}});
var student2 = Object.create(person1,{id:{value:456,writable:true,enumerable:true}});
console.log(student1.name,student1.age,student1.id);//Mike 22 123
console.log(student2.name,student2.age,student2.id);//Mike 22 456
student1.__proto__.name = "Jack";
console.log(student2.name);//Jack
student2.__proto__.__proto__.age = 99;
console.log(student2.age);//99
