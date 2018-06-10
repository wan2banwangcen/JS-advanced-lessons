typeof Math;//object
typeof Array;//function
typeof Date;//function
typeof Number;//function
typeof JSON;//object

console.log(({})&&null);//null
console.log(2==new Number(2));//true
console.log((5>4)&&([]==[]));//false
console.log((2>3)||5);//5

//变量共享，变量污染
for(var i=1;i<=3;i++){
	(function(i){
		setTimeout(function(){
			console.log(i);
		},0);
	}(i));
};
//预解析
var foo=1;
(function(){
	console.log(foo);
	var foo=2;
	console.log(foo);
}());//2

//在解析器里是
//var foo=1;
//(function(){
  //  var foo；
	//console.log(foo);
	//var foo=2;
	//console.log(foo);
//}());


var tmp=10;
function foo(x){
	var tmp=3;
	return function(y){
		console.log(x+y+(++tmp));
	}
}
var fee=foo(2)
fee(10);
fee(10);
fee(10);

var a=15+3+"2";
console.log(a);//182
var a=15+(3+"2");
console.log(a)//1532


var aa=[1,2,3];
var bb=aa;
bb.shift();
console.log(aa);//[2,3]

var aa=[1,2,3];
var bb=aa;
bb.shift();
bb=[2,3,5];
console.log(aa);

var aa=[1,2,3];
var bb=aa;
bb.shift();
bb=[2,3,4,5];
bb.pop();
console.log(aa);

function add(a,b){this(a,b);console.log(a+b);}
function sub(a,b){console.log(a-b);}
undefined
var arr=[3,1];
add.apply(sub,arr);//2 4

var obj={};
var newObj=Object.create(obj);
console.log(newObj.__proto__===obj);//true


var x=1;
function foo(y){
	y=2;
}
foo(x);
console.log(x);//1

var x=[1];
function foo(y){
	y[0]=2;
}
foo(x);
console.log(x[0]);//2