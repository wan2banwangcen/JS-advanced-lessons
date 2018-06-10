// let和const的暂时性死区特性
// 只要块级作用域内存在let，它所声明的变量就“绑定”在这个区域，不再受外部影响
// let对这个块从一开始就形成了封闭的作用域，凡是在声明之前使用该变量，就会报错
//养成良好习惯，使用变量前声明


typeof b;//报错 ReferenceError 需要使用前定义
let b;//若没有此行，上一行也会报错

var tmp=123;
if(true){
    tmp='234';
    let tmp;
}//tmp is not defined

var tmp=123;
if(true){
    tmp='234';
    var tmp;
}//'234'

var tmp=123;
if(true){
	let tmp;
    tmp='234';
}//'234'


//let const不能重复声明
let abc;
let abc;//会报错

function foo1(){
    let x;
    var x;
}
foo1();//报错 重复定义

function foo2(){
    let x;
    let x;
}
foo2();//会报错 重复定义

