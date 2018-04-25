/**
 * Created by qile on 2017/8/14.
 */
///////////Part1 原型链综述////////////
var proObj = {
    z:3
};

var obj = Object.create(proObj);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log("z" in obj);//true  in判断原型链上的所有属性，包括可枚举和不可枚举的属性
console.log(obj.hasOwnProperty("z"));//false   hasOwnProperty：是否是自身属性

///////////Part2 原型链属性操作////////////
obj.z = 5;//在obj自身上添加了一个z属性

console.log(obj.hasOwnProperty("z"));
console.log(obj.z);//5
console.log(proObj.z);//3

obj.z = 8;//修改的是obj自身的z属性
console.log(obj.z);//8

delete obj.z;//true
console.log(obj.z);//3  obj自身的z属性被删除了，所以要去原型链上找

delete obj.z;//true
console.log(obj.z);//still 3

//如何删除原型上的属性
delete  obj.__proto__.z;//或者delete proObj.z;
console.log(obj.z);//此时彻底没有z了

//注意：hasOwnProperty是原型方法
//调用的主体为obj,先在自身上找该方法，找不到的话去原型链上去找
//区别与Object.keys(obj)这种静态方法