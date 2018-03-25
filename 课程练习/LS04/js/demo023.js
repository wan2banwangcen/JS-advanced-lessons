//ES5 中没有作用域
{
    var a=20;
}
console.log("大括号外依然能访问到a:",a);//大括号外依然能访问到a: 20

for(var i=0;i<5;i++){
    console.log("in for",i);
}
console.log("out for",i);
//in for 0
//in for 1
//in for 2
//in for 3
//in for 4
//out for 5

if(true){
    var a=20;
}
console.log(a);//20

if(false){
    var b = 30;
}
console.log(b);//undefined
//undefined是定义了，但不知道值  undeclared是没有定义