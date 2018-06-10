//ES6中let和const不进行变量提升特性
//var 声明变量
console.log(a);
var a=1;
console.log(a);

//预解析 上述代码等效于
var a;
console.log(a);
a=1;
console.log(a);

//ES5没有块作用域
var temp=new Date();
function(){
    console.log(temp);
    if(false){
        var temp="Hi";
    }
}
f();//undefined

//let和const不存在变量提升
console.log(a);//会报错
let a=2;
console.log(a);