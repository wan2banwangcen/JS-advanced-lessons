//对象的解构赋值
var {foo1,bar1}={foo:"aaa",bar1:"bbb"};
console.log(foo1,bar1);//aaa bbb

//对象的解构与数组有一个重要的不同
//数组的元素时按次序排列的，变量的取值由它的位置确定
//而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
var {bar2,foo2}={foo2:"ccc",bar2:"ddd"};//次序不同也没有关系
console.log(foo2,bar2);//ccc ddd

var {bar3}={foo3:"ccc",bar3:"ddd"};
console.log(bar3);//ddd

//
//左侧为键值对时，注意键值对赋值时的对应关系
var {foo4:baz4}={foo4:"aaa",bar3:"ddd"};
console.log(baz4);//aaa

//
let obj1={first:'hello',last:'world'};
let {first:f,last:l}=obj1;
console.log(f,l);//hello world

let { first, last } = obj1;
console.log(first,last);//hello world
//上边的相当于是
let { first:first, last:last } = obj1;
console.log(first,last);

//
//这实际上说明，对象的解构赋值是下形式的简写
var {foo5:foo5,bar5:bar5}={foo5:'aaa',bar5:'ddd'};

//也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给变量，真正被赋值的是后者，而不是前者
var {foo6:baz6}={foo6:'aaa',bar6:'bbb'};
console.log(barz6);//aaa
//foo6://error:foo is not defined
//上面代码中，真正被赋值的变量是baz6，而不是模式foo6，foo6只是用来匹配


//和数组一样，解构也可以用于嵌套结构的对象，如果是键值对的情况，键只用于匹配，真正赋给的是对应的值
var obj2={
    p:[
        'hello',
        {y:'world'}
    ]
};
var {p:[x,{y}]}=obj2;
console.log(x);//hello
console.log(y);//world
//console.log(p);//会报错，p is not defined


///
var node={
    loc:{
        start:{
            line:1,
            column:5
        }
    }
}
var {loc:{start:{line,column}}}=node;
console.log(line,column);//1 5
//loc:// error:loc is undefined
//start://error:start is undefined
//上面代码中，只有line是变量，loc和start都是模式，不会被赋值


//嵌套赋值的例子，如果不加括号解析器将解析为代码块，所以要加括号
let obj3={};
let arr=[];
({foo7:obj3.prop,bar7:arr[0]}={foo7:123,bar7:true});
console.log(obj3);//{prop:123}
console.log(arr);[true]

//对象的解构也可以指定默认值
var {x2=3}={};
console.log(x2);//3

var {x3,y3=5}={x3:1};
console.log(x3,y3);//1 5

var {x4:y4=4}={};
console.log(y4);//4

var {x5:y5=3}={x5:5}
console.log(y5);//5

var {message:msg='Something went wrong'}={};
console.log(msg);//Something went wrong
