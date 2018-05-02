objA={name:"AA",x:1};
objB={name:"BB",x:4};
function test(){
	console.log(this.name,this.x);
}
objA.fun=test;
objA.fun();//AA 1
objA.fun.call(objB);//BB 4

Function.prototype.hasOwnPerperty("call");//true
function f2(){};
f2.hasOwnPerperty("call");//false
f2.__proto__.hasOwnPerperty("call");//true