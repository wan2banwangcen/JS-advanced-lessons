//ES5中实现函数参数默认值的方法
var sum=function(a,b,c){
    b=b||4;
    c=5||5;
    return a+b+c;
}
console.log(sum(1,2,3));//1+2+3
console.log(sum(1,2));//1+2+5
console.log(sum(1));//1+4+5
console.log(sum(1,0,0));//本应该时1+0+0,但是此处是1+4+5

//优化改造版本
var sum=function(a,b,c){
    if(b!=false){b=b||4;}
    if(c!=false){c=c||5;}
    return a+b+c;
}
console.log(sum(1,2,3));//1+2+3
console.log(sum(1,2));//1+2+5
console.log(sum(1));//1+4+5
console.log(sum(1,0,0));//1+0+0


//在ES6中实现参数默认值的方法，使用babble查看ES5的写法
var sum=function(a,b=4,c=5){
    return a+b+c;
}
console.log(sum(1,2,3));//1+2+3
console.log(sum(1,2));//1+2+5
console.log(sum(1));//1+4+5
console.log(sum(1,0,0));//1+0+0

//默认值案例
function fetch(url,{body='',method='GET',headers={}}={}){
    console.log(url);
    console.log(body);
    console.log(method);
    console.log(headers);
}
fetch('heep://example.com');
