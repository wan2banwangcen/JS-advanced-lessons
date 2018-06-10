var a=new Array(-5);
sonsole.log(a);//报错

try{
	var a=new Array(-5);
}
catch(e){
	console.log(e);
}//RangeError: Invalid array length
//at <anonymous>:2:8

try{
	var a=new Array(-5);
	console.log("cc");//上一个语句发生错误之后，之后的语句就不会执行了
}
catch(e){
	console.log(e);
}
finally{
	console.log("finally");
}//RangeError: Invalid array length
//at <anonymous>:2:8
//finally

try{
	throw "abc";
}
catch(e){
	console.log(e);
}//abc

try{
	console.log("xx");
}
catch(e){
	console.log(e);
}//xx


try{
	try{
		throw "oops";
	}
	catch(ex){
		console.log("inner",ex);
	}
	finally{
		console.log("finally");
	}
}
catch(ex){
	console.log("outer",ex);
}//inner oops  finally

try{
	try{
		throw "oops";
	}
	catch(ex){
		console.log("inner",ex);
		throw ex;
	}
	finally{
		console.log("finally");
	}
}
catch(ex){
	console.log("outer",ex);
}//inner oops  finally  outer oops