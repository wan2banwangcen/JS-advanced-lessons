// Part1 构造函数中函数嵌套 this缺陷
function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        function moveX(x) {
            this.x+=x;
        }
        function moveY(y) {
            this.y+=y;
        }
        moveX(x);
        moveY(y);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);//输出为Point{x:2,y:3}没有移动

// Part1 构造函数中函数嵌套 this缺陷
function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        var that=this;
        function moveX(x) {
            that.x+=x;
        }
        function moveY(y) {
            that.y+=y;
        }
        moveX(x);
        moveY(y);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);//输出为Point{x:3,y:4}

//call和apply方法
function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        function moveX(x) {
            this.x+=x;
        }
        function moveY(y) {
            this.y+=y;
        }
        moveX.call(this,x);//moveX.apply(this,[x]);  this指向的是实例化出来的对象
        moveY.call(this,y);//moveY.apply(this,[y]);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);//输出为Point{x:3,y:4}

//bind方法
function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        function moveX(x) {
            this.x+=x;
        }
        function moveY(y) {
            this.y+=y;
        }
        moveX.bind(this,x)();
        moveY.bind(this,y)();
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);

