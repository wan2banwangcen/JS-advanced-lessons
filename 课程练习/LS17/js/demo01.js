var superObj={
    x:1,
    y:2
};
var spuerObj_First=Object.create(superObj);
var spuerObj_Second=Object.create(superObj);
subObj_First.__proto__.x = 5;//改变了原有对象的共有属性x
//若此行写为subObj_First.x = 5;//给superObj_First添加了一个新的属性
console.log(subObj_Second.x);//5


var superObj={
	show:function(){
		console.log(this.x,this.y);//this指向调用它的主体
	}
}
var obj1=Object.create(superObj);
obj1.x=1;
obj1.y=2;
obj1.show();//1 2

var superObj={
	x:3,
	y:4,
	show:function(){
		console.log(this.x,this.y);
	}
}
var obj1=Object.create(superObj);
obj1.show();//3 4