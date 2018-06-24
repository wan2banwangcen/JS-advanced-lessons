//part1 方法中的函数嵌套 this缺陷
var point={
    x:0,
    y:0,
    moveTo:function(x,y){
        //内部嵌套函数
        function moveToX(){
            this.x=x;//this绑定到了window上
        }
        //内部嵌套函数
        function moveToY(){
            this.y=y;//this绑定到了window上
        }
        moveToX();
        moveToY();
    }
}
point.moveTo(2,2);
console.log(point);//{x:0,y:0}
//console.log(window.x,window.y); 2  2


//part2 方法中的函数嵌套 this缺陷 ES5中通过软绑定解决
var point={
    x:0,
    y:0,
    moveTo:function(x,y){
        var that=this;//关键的一行，软绑定
        //内部嵌套函数
        function moveToX(){
            that.x=x;//this改为that
        }
        //内部嵌套函数
        function moveToY(){
            that.y=y;//this绑定到了point上
        }
        moveToX();
        moveToY();
    }
}
point.moveTo(2,2);
console.log(point);//{x:2,y:2}
//console.log(window.x,window.y); 2 2


//ES6中 箭头函数中this是与函数定义时所在的对象绑定，而不是使用时所在的对象（避免this缺陷）
//箭头函数导致this重视指向函数定义生效时所在的对象
var poing={
    x:0,
    y:0,
    moveTo:function(x,y){
        //内部嵌套函数
        var moveToX=()=>this.x=x;
        //内部嵌套函数
        var moveToY=()=>this.y=y;
        moveToX();
        moveToY();
    }
}
point.moveTo(2,2);
console.log(point);//{x:2.y:2}
//console.log(window.x,window.y); 2  2

//箭头函数有几个使用注意点
//（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
//（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误
//（3）不可以使用arguments对象，该对象再函数体内不存在。如果要用，可以用Rest代替
//（4）不可以使用yield命令，因此箭头函数不能用作Generator函数

//函数中的this ES5如何解决
function foo(){
    setTimeout(function(){
        console.log('id:',this.id);
    },100);
}
var id=21;
foo.call({id:42});//id:21

function foo1(){
    setTimeout(()=>{
        console.log("id:",this.id);
    },100);
}
var id=21;
foo1.call({id:42});//id:42

//由于箭头函数没有自己的this，所以当然也就不能用call（），aplly（），bind（）这些方法去改变this的指向
function foo(){
    return ()=>{
        return ()=>{
            return ()=>{
                console.log("id:",this.id);
            };
        };
    };
};
var f=foo.call({id:1});
var t1=f.call({id:2})()();//id:1
var t2=f().call({id:3})();//id:1
var t3=f()().call({id:4});//id:1

//foo()
//()=>{
//    return ()=>{
//        return ()=>{
//            console.log("id:",this.id);
//        };
//    };
//}

//foo()();
//()=>{
//    return ()=>{
//        console.log("id:",this.id);
//    };
//}

//foo()()();
//()=>{
//    console.log("id:",this.id);
//}

//foo()()()();
//id:1


//需哟啊特别注意：由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上小括号
var getTempItem=itemId=>({id:itemId,name:'Temp'});
//getTempItem(23);

//等效于
var getTempItem=function(itemId){
    return {id:itemId,name:"Temp"}
};
//getTempItem(23)
