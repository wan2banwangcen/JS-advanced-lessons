//例一 通过var定变量 ES5中没有块作用域{}外可以访问{}内变量
{
    var a=23;
}
console.log(a);//23  由于没有块作用域，a可以正常输出

//例2
for(var i=0;i<5;i++)
{
    //do somethings
}
console.log("i:",i);//i:5  此处i依然存在

//例3  通过var声明的变量，由于没有块作用域，容易造成变量污染
var userId=123;
document.onclick=function(){
    console.log("userId=",userId);
}

//一长串代码后，假如忘记上边定义了userId，容易造成变量污染
var a=2,b=3;
if(a<b){
    var userId=234;
}

/*
//可以通过立即执行表达式解决上述问题
(function(){
    var a=2,b=3;
    if(a<b){
        var userId=234;
    }
}());
*/