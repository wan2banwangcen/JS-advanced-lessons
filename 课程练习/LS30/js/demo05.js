//ES5中，实参数大于形参数量时，可以通过arguments来获得所有参数
function test(){
    console.log(atguments);//console.log(test.arguments);
} 
test("a","b","c");//Arguments(3) ["a", "b", "c", callee: ƒ, Symbol(Symbol.iterator): ƒ]

//...Rest 相当于合并若干参数为一个数组，主要用于函数定义时，代替arguments，解决arguments的弊端
function f(...y){
    console.log(y);
}
f("a","b","c");//["a","b","c"]

function add(...values){
    let sum=0;
    for(var val of values){
        sum+=val;
    }
}
add(2,5,3);//10

//比arguments使用更加灵活，比如只想看从第二个开始之后的参数
function f(x,...y){
    console.log(x,y);
}
f("a","b","c","d");//"a",["b","c","d"]
f("a",["b","c","d"]);//输出 "a",[["b","c","d"]]
f(2);//2,[]
f();//undefined,[]


function f(x,...y,z){
    console.log(y);
}
f("a","b","c","d","e");//会报错


//part2 call和apply的转换 两者之间的区别
function abc(...v){
    console.log(v);
}
var o1={};
abc.call(o1,...[1,2,3]);//等效于 abc.apply(o1,[1,2,3]);

//函数定于和调用时 合并元素为数组（...Rest） 与 拆分数组为各个元素（...Spread）

