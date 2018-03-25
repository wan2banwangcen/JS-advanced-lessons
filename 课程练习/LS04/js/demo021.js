//复习上一讲知识
//part1
var a = [1,2,3];
var b = a;
console.log(a,b);//[1,2,3] [1,2,3]
b.pop();//3
console.log(a,b);//[1,2] [1,2]
b = [4,5,6];
console.log(a,b);//[1,2] [4,5,6]

//part2
function foo(x) {
    x.push(4);
    x = [5,6,7];
    x.push(8);
    //console.log(x);//[5,6,7,8]
}
var a = [1,2,3];
foo(a);
console.log(a);//[1,2,3,4]

//part3
function foo(x) {
    x.push(4);
    //console.log(x);//[1,2,3,4]
    x.length = 0;
    x.push(5,6,7,8);
    //console.log(x);//[5,6,7,8]
}
var a = [1,2,3];
foo(a);
console.log(a);//[5,6,7,8]

//字面量
//对象字面量  
var obj={x:1,y:2};
//数组字面量
var arr=[1,2,4];

//关键字： atguments、break、continue

//表达式语句
var o={x:1,y:2};
a>b;
//存在二义性的语句，要避免有二义性的语句
var max=function(x,y){
    return x>y?x:y;
};

//存在二义性的语句
var max=function(x,y){
    return x>y?x:y;
};
var x={
    foo:max(2,3)
}

//存在二义性的语句
var max=function(){
    return x>y?x:y;
}
{
    console.log(123);
    console.log(456);
    foo:max(2,3)
}