//创建数组的不同方式
var arr1 = [1,2,3,"4"];

var arr2 = new Array(5);//思考var arr2 = new Array("5");
console.log(arr2);
for(var i=0;i<arr2.length;i++){arr2[i] = i;}

//思考下述案例
var arr22 = [];
for(var i=0;i<5;i++){
	document.onclick = function(){
		arr22[i] = i;
	}
}
//先执行for循环，i变成5，然后点击一下，arr[5]=5,长度为6

var base = 1024;
var table = [base,base+1,base+2,base+3];

//回顾数据类型思考：
var a1 = [1,2,3];
var a2 = a1;
a2.length = 0;
console.log(a1,a2);//数组是对象，a1和a2指向同一个对象，改变的是同一个对象的值

var a3 = [1,2,3];
var a4 = a3;
a4 = [];
console.log(a3,a4);//a3和a4指向的不是同一个对象

