function sloppyFunc(){
    sloppyVar=123;
}
sloppyFunc();
console.log(sloppyVar);//123

//使用严格模式，会报错
function sloppyFunc(){
    "use strict"//函数内部使用
    sloppyVar=123;
}
sloppyFunc();
console.log(sloppyVar);//报错

