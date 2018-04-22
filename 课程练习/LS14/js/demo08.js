var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,//改成true会如何
    configurable:false,//改成true会如何
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//Mike
person.name = "Lucy";
console.log(person.name);//Mike
delete person.name;
console.log(person.name);//Mike

//configurable属性为false时，属性是删不掉的
var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:true,
    configurable:false,
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//Mike
person.name = "Lucy";
console.log(person.name);//Lucy
delete person.name;
console.log(person.name);//Lucy

var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,
    configurable:true,
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//Mike
person.name = "Lucy";
console.log(person.name);//Mike
delete person.name;
console.log(person.name);//undefined