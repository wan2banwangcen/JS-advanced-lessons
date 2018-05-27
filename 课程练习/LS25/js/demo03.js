//DOM0级事件处理
//window.onload=function(e){
//    var div1 = document.getElementById("div1");
//    var div2 = document.getElementById("div2");
//    var eventHandler = function (e) {
//        console.log(e.clientX,e.clientY);
 //   }
//    div1.onclick = eventHandler;
//    div1.onclick = function(){
//        console.log("xx");
//    };//第二个函数会覆盖eventHandler函数
//    div2.onclick = eventHandler;
//    //div2.onclick = null;//取消事件响应
//}

//DOM2级事件处理
//window.onload=function(e){
 //   var div1 = document.getElementById("div1");
//    var div2 = document.getElementById("div2");
//    var eventHandler = function (e) {
//        console.log(e.clientX,e.clientY);
//    }
    //事件监听
    //div1.addEventListener("click",eventHandler);
    // div1.addEventListener("click",eventHandler,false);//第3个参数可选
    //div1.addEventListener("click",function(){
    //    console.log("xx");
    //});//第二个函数会覆盖第一个函数
    //div2.addEventListener("click",eventHandler);
    //div2.addEventListener("click",eventHandler,false);
    //div2.removeEventListener("click",eventHandler);//取消事件响应处理

    //自定义事件/事件分发/事件监听
//    div2.addEventListener("MyEvent",function(){console.log("处理自定义事件");});
    //dispatchEvent()自定义事件
//    div2.dispatchEvent(new Event("MyEvent"));

    //DOM节点对象的继承关系
//    console.log(div2.__proto__);//HTMLDivElement
//    console.log(div2.__proto__.__proto__);//HTMLElement
//    console.log(div2.__proto__.__proto__.__proto__);//ELement
//    console.log(div2.__proto__.__proto__.__proto__.__proto__);//Node
//    console.log(div2.__proto__.__proto__.__proto__.__proto__.__proto__);//EventTarget   //addEventListener、removeEventListener、dispatchEvent这3个方法都是定义在EventTarget上的
    //EventTarget 是一个由可以接收事件的对象实现的接口，并且可以为它们创建侦听器
//}
//自定义事件
window.onload=function(e){
    var div1=document.getElementById("div1");
    var div2=document.getElementById("div2");
    var eventHandler=function(e){
        console.log(e.target);
        console.log(this);//这里e.target和this是相同的
        var myEvent=new Event("MyEvent");
        div2.dispatchEvent(myEvent);
    }
    div1.onclick=eventHandler;

    div2.addEventListener("MyEvent",function(e){
        console.log("div2 listener",e.type);
    },false);
    
    document.addEventListener("MyEvent",function (e) {
        console.log("document handler");
    },true);//若第3个可选参数为true的话会怎样，那个会输出，理解冒泡和捕获
    //第3个参数默认是false使用的是冒泡方式，若改为true的话则为捕获方式

    document.body.addEventListener("MyEvent",function (e) {
        console.log("body handler");
    },true);//若第3个可选参数为true的话会怎样，那个会输出，理解冒泡和捕获
    //第3个参数默认是false使用的是冒泡方式，若改为true的话则为捕获方式
}

/*
//DOM0级事件响应 定义在哪里？
document.body.__proto__.hasOwnProperty("onclick");//false
document.body.__proto__.__proto__.hasOwnProperty("onclick");//true

//DOM2级事件响应  定义在哪里？
document.body.__proto__.hasOwnProperty("addEventListener");//false
"addEventListener" in document;//true
document.body.__proto__.__proto__.__proto__.__proto__.__proto__.hasOwnProperty("addEventListener");//true
*/



