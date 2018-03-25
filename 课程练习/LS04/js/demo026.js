//检查是否使用严格模式
//非严格模式下函数里的this指向window
//严格模式下函数里的this指向undefined

"use strict"
function isStictMode(){
	if(this==undefined){
		return true;
	}
	else{
		return false;
	}
}
isStictMode();//true

"use stirct"
function isStrictMode() {
    return this === window?false:true;
}
console.log(isStrictMode());