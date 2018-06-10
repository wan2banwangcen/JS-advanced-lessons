var str="xx-xxy-xx";
var a=str.split("-");
console.log(a);//["xx", "xxy", "xx"]

var str="xx-x*y-xx";
var a=str.split(/[-*]/gi);
console.log(a);//["xx", "x", "y", "xx"]

//test（）方法，检测对象中是否有正则对象
//特殊字符
//d任何一个数字
"a2d5".replace(/\d/gi,"x");//"axdx"
//D 非数字
"a2d5".replace(/\D/gi,"x");//"x2x5"
//w 所有字符
"a2d5".replace(/\w/gi,"x");//"xxxx"
//W 非字符
"a2d5".replace(/\W/gi,"x");//"a2d5"
//s 每一个空格
"a 2d5".replace(/\s/gi,"x");//"ax2d5"
//S 除空格外的每一个字符
"a 2d5".replace(/\S/gi,"x");//"x xxx"
//b 是否为边界

//B 与b相反
//^
console.log("123123 123".replace(/\b123/g,"*"));//*123 *


//量词
//？出现0次或一次（最多一次）
console.log("mooooonooy".replace(/o?/g,"*"));
//
console.log("mooooonooy".replace(/o?/g,"*"));
console.log("mooooonooy".replace(/o{1,2}/g,"*"));

//贪婪模式
console.log("12345678".replace(/\d{3,6}/,"z"));
console.log("12345678".replace(/\d{3,6}?/,"z"));
console.log("12345678".replace(/\d{3,6}?/g,"z"));
console.log("12345678".replace(/\d{3,6}/g,"z"));