//修改obj属性的特性
var obj = {
    x:1,
    y:2
};
//Object.defineProperty(obj,"x",{writable:false,value:11,enumerable:false,configurable:true});
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]);
}

//如果只更改writable特性的话，enumerable特性不会被修改
//configurable属性设置为false，delete是不成功的