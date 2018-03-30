//part 1
console.log(a);//undefined
var a=1;
console.log(a);//1
//上边的代码等价于 解析器严重的代码
var a;
console.log(a);
a=1;
console.log(a);

//
console.log(a,b);//undefined undefined
var b = 23;
console.log(a,b);//undefined 23
var a = b;
console.log(a,b);//23 23
//
console.log(obj1,obj2);//undefined undefined
var obj1 = {x:23};
console.log(obj1,obj2);//{x:23} undefined
var obj2 = obj1;
console.log(obj1,obj2);//{x:23} {x:23}
obj2.x =25;
console.log(obj1,obj2);//{x:25} {x:25}

// Part 
foo();//f_2
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}

//上边代码等价如下 解析器眼中的代码
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
foo();//f_2


//part3
foo();
var foo = function(){
    console.log("foo");
};//报错 foo is not a function
//
console.log(foo);//undefined
var foo = function(){
    console.log("foo");
};
foo();//foo

// Part4
AA();
function AA(){
    console.log("AA_1");
}
var AA = function AA(){
    console.log("AA_2");
};
AA();

//上边代码等价如下
function AA(){
    console.log("AA_1");
}
var AA;//不会对已经声明的变量不会进行二次声明

AA();
AA = function AA(){
    console.log("AA_2");
};
AA();