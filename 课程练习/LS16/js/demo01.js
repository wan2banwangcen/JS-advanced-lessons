//非严格模式系this指向的是全局对象
function thisTest(){
    console.log(this === window);
}
thisTest();//true

//this改变，删除，增加属性
var a=2,b=3;
function ff(){
	this.a=4;
	delete this.b;
	this.c=5;
}
ff();
console.log(a,c);//4 5


function ff(){
	var a=b=3;//相当于var a=3;b=3
}
ff();
console.log(a);//报错 a为定义
console.log(b);//可以访问到 3



