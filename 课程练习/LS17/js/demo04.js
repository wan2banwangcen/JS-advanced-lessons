//静态方法实例与原型方法实例
//静态方法是构造器函数对象（类）的属性
//原型方法是实例化对象（对象）的原型的属性
var BaseClass = function() {};
BaseClass.prototype.f2 = function () {
    console.log("This is a prototype method ");
};
BaseClass.f1 = function(){//定义静态方法
    console.log("This is a static method ");
};
BaseClass.f1();//This is a static method
var instance1 = new BaseClass();
instance1.f2();//This is a prototype method


var BaseClass = function() {};
BaseClass.prototype.method1 = function(){
    console.log("1 This is a method in Base.prototype");
};
var instance1 = new BaseClass();
instance1.method1();//访问的是BaseClass原型上的method1

instance1.method1 = function(){
    console.log("2 This is a method in instance1");
};
instance1.method1();//访问的是instance1自身有的method1


var BaseClass = function() {
    this.method1 = function(){
        console.log('1 Defined by the "this" in the instance method');
    }
};
var instance1 = new BaseClass();
instance1.method1 = function(){
    console.log('2 Defined directly in the instance method');
};
BaseClass.prototype.method1 = function(){
    console.log('3 Defined by the prototype instance method ');
};
instance1.method1();//Defined directly in the instance method
//访问的是istance1自身有的method1方法