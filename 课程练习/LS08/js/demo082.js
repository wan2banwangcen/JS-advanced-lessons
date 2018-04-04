//函数对象属性之arguments 实参集合（类似数组的一个对象）
var foo = function (a,b){
    console.log(arguments);//类似数组的一个对象
    //arguments 是Symbol类型，独一无二的，具体参见后续ES6部分
    console.log(arguments === wondow.arguments);//false
    console.log(arguments.length);//4
    var args = Array.prototype.splice.call(arguments,0);
    console.log(args);//[1,2,3,4]
};
foo(1,2,3,4);



//length是函数的形参个数
//arguments.length是函数的形参的个数
function foo(x,y,z){
    console.log(foo.length);
}
foo();

//函数对象属性之caller 获取调用当前函数的函数。（整体调用caller为null）（函数内部调用） 例一
function test() {
    if (test.caller == null) {//
        console.log("test is called from the toppest level");
    } else {
        console.log("test is called from the function:");
        console.log(test.caller.toString());
    }
}
//caller属性只有当函数正在执行时才被定义
console.log("没有调用的情况下test.caller为：",test.caller);//null
//整体调用
test();//test is called from the top level
//函数内部调用
function testOuter() {
    test();
}
testOuter();//test is called from the function testOuter

//例二
var obj = {
    foo1:function(){
        console.log(this.foo1.caller);
    },
    foo2:function abc(){
        this.foo1();
    }
};
obj.foo1();//null
obj.foo2();//function abc(){
                //this.foo1();
            //}


//函数对象属性之callee 返回正被执行的 Function 对象，
//即指定的 Function 对象的正文
//callee 属性是 arguments 对象的一个成员
//该属性仅当相关函数正在执行时才可用。通常这个属性被用来递归调用匿名函数
var func = function(n){
    if (n <= 0)
        return 1;
    else
        return n * func(n - 1);
        //return n * arguments.callee(n - 1);
};
console.log(func(4));

//优点，可以是匿名函数
(function(n){
    if (n <= 0)
        return 1;
    else
        return n * arguments.callee(n - 1);
}(4));


//函数对象属性之 prototype
//获取对象的原型。每一个构造函数都有一个prototype属性，指向另一个对象。这个对象的所有属性和方法，都会被构造函数的实例继承。
Object instanceof Function;//true
var a={};
a.__proto__===Object.prototype;//true
Object.__proto__===Function.prototype;//true

function Man(name,age){
    this.name=name;
    this.age=age;
}
Man.prototype.sex="M";
Man.prototype.sayHi = function () {
    console.log("Hi,i'm",this.name);
};
var li = new Man("Leo", 10);
li.sayHi();//
console.log(li.sex);//M

Man.prototype.isStrong = true;
console.log(li.isStrong);//true

//函数对象方法之 apply
//functionName.apply([thisObj[,argArray]])
//与call方法不同的地方是，apply的第二个参数类型必须是Array
swim.apply(me,[9,10]);
bird.fly.apply(me,[11,12]);
swim.apply(null,[13,14]);


//关于绑定 例一
//下述代码输出结果为（     ）
//bind
var x=45;
var obj={
	x:23,
	test:function(){
		function foo(){
			console.log(this.x);
		}
		var fee=foo.bind(this);//返回的是函数对象
		fee();//输出23
		//foo();//输出45
    }
}
obj.test();

//函数对象方法之 bind 硬绑定 例二
// function.bind(thisArg[,arg1[,arg2[,argN]]])
// 在绑定功能中，this对象解析为传入的对象。
// 返回一个与 function 函数相同的新函数，只不过函数中的this对象和参数不同。
// Define the original function.
var checkNumericRange = function (value) {
    if (typeof value !== 'number')
        return false;
    else
        return value >= this.minimum && value <= this.maximum;
};

// The range object will become the this value in the callback function.
var range = { minimum: 10, maximum: 20 };

// Bind the checkNumericRange function.
var boundCheckNumericRange = checkNumericRange.bind(range);

// Use the new function to check whether 12 is in the numeric range.
var result = boundCheckNumericRange (12);//相当于range.boundCheckNumericRange (12)
console.log(result);//true


//bind 参数的问题 例三
// 该绑定函数将 bind 方法中指定的参数用作第一个参数和第二个参数。
// 在调用该绑定函数时，指定的任何参数将用作第三个、第四个参数（依此类推）
// Define the original function with four parameters.
var displayArgs = function (val1, val2, val3, val4) {
    console.log(val1 + " " + val2 + " " + val3 + " " + val4);
};
var emptyObject = {};
// Create a new function that uses the 12 and "a" parameters
// as the first and second parameters.
var displayArgs2 = displayArgs.bind(emptyObject, 12, "a");
// Call the new function. The "b" and "c" parameters are used
// as the third and fourth parameters.
displayArgs2("b", "c");// Output: 12 a b c


//函数对象方法之 toString与valueOf 继承自Object.prototype的方法
//返回对象的字符串表示形式。objectname.toString([radix])
//关于toString与valueOf的详细内容参见JS对象相关章节
var foo = function () { 
    console.log("foo");
};
console.log(foo.toString()," ___ ",typeof foo.toString());//function(){console,log("foo");} string
console.log(foo.valueOf()," ___ ",typeof foo.valueOf());//function(){console,log("foo");} function

console.log(foo.hasOwnProperty("toString"));//false
console.log(Object.prototype.hasOwnProperty("toString"));//true

console.log(foo.hasOwnProperty("valueOf"));//false
console.log(Object.prototype.hasOwnProperty("valueOf"));//true
