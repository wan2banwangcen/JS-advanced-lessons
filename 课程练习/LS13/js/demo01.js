//part1 
//JS对象
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        console.log(this.str);
    }
};
console.log(obj.num);//10
console.log(obj.str);//Hi
obj.show();			 //Hi


//自己定义一个对象
var obj = {
    name:'lily',
	age:20,
	show:function (){
		console.log('我是'+this.name+'今年'+this.age+'岁');
	}
};
obj.show();//我是lily今年20岁

//JS对象
//1.自定义的对象
Person=function(name){
    this.name=name;
    console.log(this.name);
}
var p=new Person('lily');