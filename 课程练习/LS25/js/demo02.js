//当事件发生时会产生对应的事件对象（如：鼠标事件对象，键盘事件对象等）
//时间对象（Event）包含对应事件的相关信息（如触发的元素，坐标信息，键值信息等）
//时间对象的继承关系（如Event--UIEvent--MouseEvent）


window.onload=function(e){
    //console.log("window onload");
    //console.log("e:",e);
    //console.log(e.target);//#document
    var div1=document.getElementById("div1");
    var div2=document.getElementById("div2");
    var eventHandler=function(e){
        //00
        //console.log(e.type);//click
        //console.log(e.target);//  这里target和this是一样的
        //console.log(this);

        //11
        //console.log(e.clientX,e.clientY);
        //console.log(this,"----",e.target);

        //22
        //console.log(e);//MouseEvent
        //console.log(e.__proto__);//MouseEvent
        //console.log(e.__proto__.__proto__);//UIEvent
        //console.log(e.__proto__.__proto__.__proto__);//Event
        //console.log(e.__proto__.__proto__.__proto__.__proto__);//

        //33
        //for(var k in e){
        //    console.log(k,e[k]);
        //}
        //for(var k in e.__proto__){
        //    console.log(k);
        //}
        //for(var k in e.__proto__.__proto__){
        //    console.log(k);
        //}
        //for(var k in e.__proto__.__proto__.__proto__){
        //    console.log(k);
        //}
    }
    div1.onclick=eventHandler;
    div2.onclick=eventHandler;

    //自定义事件监听/事件分发
    //addEventListener()函数
    //第一个参数是事件的类型（如“click”或“mousedown”）
    //第二个参数是事件触发后调用的函数
    //第三个参数是个布尔值用于描述事件是冒泡函数捕获
    //在冒泡中，内部元素会先被触发，然后再触发外部元素，即：<p>元素 <p> 元素的点击事件先触发，然后会触发 <div> 元素的点击事件。
    //在 捕获 中，外部元素的事件会先被触发，然后才会触发内部元素的事件，即： <div> 元素的点击事件先触发 ，然后再触发 <p> 元素的点击事件。
    //document.addEventListener("xx",function(){console.log("11");});
    //document.dispatchEvent(new Event("xx"));
}