//JS对象的属性
//part1 例一
var o = {
    _x:1.0,//如果都写成x会报错
    get x(){
        return this._x;//如果都写成x会怎样
    },
    set x(val){
        this._x = val;//如果都写成x会怎样
    }
};
console.log(o.x);//1
o.x = 2;
console.log(o.x,o._x);//2 2


//访问器属性 只读 例二
var o = {
    _x:1.0,
    get x(){//优先级高于_xS
        return this._x;
    }
};
console.log(o.x);//1
o.x = 2;//相当于添加了一个属性
console.log(o.x,o._x);//1 1

// 访问器属性 实例三
var p1 = {
    _name:"Jack",
    _age:23,
    set age(val){
        if(val>0&&val<150){
            this._age = val;
        }else{
            console.log("请设置正常年龄");
        }
    },
    get age(){
        return this._age;
    }
};
p1.age = 178;
console.log(p1.age);//请设置正常年龄 23

//pare2
//JS属性
var arr=[1,2,3];
arr.__proto__;
//[constructor: ƒ, concat: ƒ, find: ƒ, findIndex: ƒ, pop: ƒ, …]

arr.__proto__===Array.prototype;//true
({}).__proto__===Object.prototype;//true
//（{}）是一个对象；{}是一个代码块，不认为是一个对象

({}).__proto__.__proto__;//null
