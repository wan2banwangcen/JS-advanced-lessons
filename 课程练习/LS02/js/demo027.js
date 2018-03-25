//逻辑与、逻辑或实现if--else的替换，代码更简洁
var sum=function(a,b,c){
	if(b!=false){b=b||4;}
	if(c!=false){c=c||5;}
	return a+b+c;
};
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8
console.log(sum(1));//10
console.log(sum(1,0,0));//1

var sum=function(a,b,c){
	(b!=false)&&(b=b||4);
	(c!=false)&&(c=c||5);
	return a+b+c;
};
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8
console.log(sum(1));//10
console.log(sum(1,0,0));//1