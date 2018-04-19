var obj = {
    x:12
 };
 obj.x;//12
 obj['x'];//12

 var obj={
	x1:12,
	x2:23,
	x3:34
}
for(var i=0;i<4;i++){
	console.log(obj['x'+i]);
}//当遍历对象属性时，用ogj[]访问属性

var bar={};
obj.x=2;//直接添加属性
console.log(obj.x);//通过.访问属性 2
obj.x=5;//设置属性
console.log(obj['x']);//通过[]访问属性
delete obj.x//删除属性
console.log(obj.x);

var obj3 = {};
for(var i=0;i<10;i++){
    obj3.i = i;
}
console.log(obj3);//{i:9}  i被共享

var obj4 = {};
for(var i=0;i<10;i++){
    obj4[i] = i;
}
console.log(obj4);//{0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9}