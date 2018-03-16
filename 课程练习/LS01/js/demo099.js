//对象类型 
var obj={x:1,y:2};//obj的原型是Object.prototype，并且obj继承的属性和方法都源于这个原型
console.log(obj.__proto__===Object.prototype);//true
console.log(Object.prototype);

var arr = [1,2,3,4,5];//arr的原型是Array.prototype,并且arr继承的属性和方法都源于这个原型
console.log(arr.__proto__ === Array.prototype);//true
console.log(Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);//true

function foo() { //foo的原型是Function.prototype,并且foo继承的属性和方法都源于这个原型
    console.log("foo function!");
};
console.log(foo.__proto__ === Function.prototype);//true
console.log(foo.__proto__.__proto__ === Object.prototype);//true

console.log(obj instanceof Object);//true
console.log(arr instanceof Object);//true
console.log(foo instanceof Object);//true
console.log(foo === window.foo);//true

//在js中函数也是属性

//所有的对象都有属性，查看对象的属性
for(var k in obj){//只能遍历整个原型链上所有可遍历的属性
    console.log(k,obj[k]);
}
console.log(Object.keys(obj));//返回一个数组，包含自身所有可枚举的属性
console.log("x" in obj);//能够检查整个原型连上的属性，包括不可遍历的属性


