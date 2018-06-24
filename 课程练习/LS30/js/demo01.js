//
var f=function(v){
    return v+1;
}
f(2);//3

//使用箭头函数，上述代码等效如下们只有一份参数和一条语句
var f=v=>v+1;//单参数可以不加（），单语句也可以不用return关键字
//var f=(v)=>{return v+1;}
f(2);//3

//没有参数和有多个参数的情况下，需要用小括号来表示参数，如果有多条语句则需要用大括号表示函数体
var f=()=>5;
//等同于
var f=function(){
    return 5;
};

var foo=(num1,num2)=>{
    if(num1>num2){
        return num1*2;
    }
    else{
        return num2*2;
    }
}
//f(2,3)
//f(3,2)
//等同于
var foo=function(num1,num2){
    if(num1>num2){
        return num1*2;
    }
    else{
        return num2*2;
    }
}
//f(2,3)
//f(3,2)

//
var max=function(a,b){
    return a>b?a:b;
}