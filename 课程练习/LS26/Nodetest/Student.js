function Student(name,age,id){
    this.name=name;
    this.age=age;
    this.id=id;
}
Student.prototype.show=function(){
    console.log("I am",this.name,"I am",this.age,"years old","my ID is",this.id);
}
module.exports = Student;