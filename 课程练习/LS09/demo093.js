//part1
if(true){
    var i = 0;
}
function foo(){
    console.log("j:",j);//undefined
    var j = 10;
    console.log("j:",j);//10
}
foo();//undefined 10
console.log("i:",i);//0
console.log("j:",j);//报错

//上边的代码等价于
var i;
if(true){
    i = 0;
}
function foo(){
    var j;
    console.log("j:",j);//undefined
    j = 10;
    console.log("j:",j);//10
}
foo();//undefined 10
console.log("i:",i);//0
console.log("j:",j);//报错