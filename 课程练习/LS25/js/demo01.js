//JS时间是浏览器或用户自身之心的某种动作（包括前端中的事件，Node中的事件）
//前端事件主要包括BOM和DOM中发生的特定的交互
//常见事件（load,click,mouseover,keydown,keyup）
window.onload=function(){
    console.log("window onload");
    var div2=document.getElementById("div2");
    div2.onclick=function(){
        console.log("div2 click");
    }
}

function div1click(){
    console.log("div1 click");
}