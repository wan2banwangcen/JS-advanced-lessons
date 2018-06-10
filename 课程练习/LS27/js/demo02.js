//变量共享问题
for(var i=0;i<3;i++){
    setTimeout(function(){
        console.log(new Date,i)
    },1000*i);
}
console.log("i:",i);
//i:3
//Thu Jun 07 2018 20:10:27 GMT+0800 (中国标准时间) 3
//Thu Jun 07 2018 20:10:28 GMT+0800 (中国标准时间) 3
//Thu Jun 07 2018 20:10:29 GMT+0800 (中国标准时间) 3

//通过IIFE解决变量共享问题
for(var i=0;i<3;i++){
    (function(j){
        setTimeout(function(){
            console.log(new Date,j);
        },1000*i);
    })(i);
}