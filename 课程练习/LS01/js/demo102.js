//Part1 隐式类型转换
//比较运算符 与 隐式类型转换
var a=3;
var b=4;
console.log(typeof (a>b),a>b);//boolean false
console.log(typeof (a==b),a==b);//boolean false
console.log(typeof (a<b),a<b);//boolean true

//算数运算符 与 隐式类型转换 + -
var c="img"+3+".jpg";
var d="23"-5;
console.log(c,d);//img3.jpg  18

//逻辑运算符 与 隐式类型转换
var e=!23;//false
var f=!!34;//!!"" !!0 !!"abc" !!undefined !!null     //true
var g=!!{};//true
console.log(e,f,g);

//流程语句 与 隐式类型转换
var h={x:1};
if(h){
    console.log("h:",h);
}//h:{x:1}