var a={}   //等价于  var b=new Object();
//他们的原型都是Object.prototype
b.__proto__===Object.prototype;//true
b.__proto__.__proto__;//null



var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
//console.log(obj.__proto__);
console.log(obj.__proto__ === Object.prototype);

var newObj = Object.create(obj);
newObj.y=45;
var newObj2 = Object.create(obj);//思考：多个对象同一个原型的情况
newObj.age = 23;

console.log(newObj.__proto__ === obj);
console.log(newObj2.__proto__ === obj);

//JavaScript的继承方式 是对象-对象的继承，对象要实现继承首先要有原型对象
console.log(newObj.__proto__.__proto__);//Object.prototype
console.log(newObj.__proto__.__proto__.__proto__);//null

//原型共享  obj2和ibj3的原型都是obj1
var obj1={x:1};
var obj2=Object.create(obj1);
obj2.y=2;
var obj3=Object.create(obj1);
obj2.z=2;
obj2.x;//1
obj3.x;//1
obj2.__proto__.x=5;
obj2.x;//5
obj3.x;//5