//part1
//ES6允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁
var foo='bar';
var baz={foo};
console.log(baz);//{foo:'bar'}
//等同于
var baz={foo:foo};

//上面代码表明，ES6允许在对象之中，只写属性名，不写属性值
//这是，属性值等于属性名所代表的变量
//下面是另一个例子，返回对象的简洁表示法
function f(x,y){
    return {x,y};
}
//等同于
function f(x,y){
    return {x:x,y:y};
}
f(1,2);//Object {x:1,y:2}

//除了属性简写，方法也可以简写
var o={
    method(){
        return 'Hello';
    }
}
//等同于
var o={
    method:function(){
        return 'Hello';
    }
}
//下面是一个实际的例子
var birth='1000/01/01';
var p1={
    name:'张三',
    birth,//等同于birth:birth
    hello(){
        console.log('我的名字是',this.name,'我的生日是',this.birth);
    }
}
p1.hello();

//这种写法用于函数的返回值，将会非常方便
function getPoint(){
    var x=1;
    var y=2;
    return {x,y};
}
getPoint();//{x:1,y:2}


//part2
//ES6允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在方括号内
let proKey='foo';
let obj={
    [proKey]:true,
    ['a'+'bc']:123
};
obj[proKey];//true
obj['foo'];//true
obj['abc'];//123


//下面是另一个例子
var lastWord='last word';
var a={
    'first word':'hello',
    [lastWord]:'world'
};
a[lastWord];//'world'
a['first word'];//'hello'
a['last word'];//world

//表达式还可以用于定义方法名
let obj={
    ['he'+'llo'](){
        return 'world';
    }
}
obj.hello();//'world'

//注意，属性名表达式与简洁表示法，不能同时使用，会报错。
// 报错
var foo = 'bar';
var bar = 'abc';
// var baz = { [foo] };//报错

// 正确
var foo = 'bar';
var baz = { [foo]: 'abc'};//或var baz = { [foo]: bar};
