/* 
var john={
    name:'john',
    yearOfBirth:1990,
    job:'teacher'
};

var person=function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
    
}
person.prototype.lastName='smith';

person.prototype.calculateAge=function(){ 
    console.log(2016-this.yearOfBirth);
}

var john=new person('john',1990,'teacher');
john.calculateAge();
console.log(john.lastName);*/


//Object.create
var personProto={
    calculateAge:function(){
        console.log(2016-this.yearOfBirth);
    }
}
var john=Object.create(personProto);
john.name='John';
john.year=1990;
john.job='teacher';

var jane=Object.create(personProto,{
    name:{value:'jane'},
    year:{value:1989},
    job:{value:'designer'}
});