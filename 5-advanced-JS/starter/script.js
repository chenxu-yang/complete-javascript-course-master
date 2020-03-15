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
/*var personProto={
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
});*/

//primitives and objects

var john={
    fullname:'John Smith',
    mass:92,
    height:1.95,
    calBMI:function(){
        this.bmi=this.mass/(this.height*this.height);
        return this.bmi;
    }
}
var mark={
    fullname:'Mark miller',
    mass:78,
    height:1.69,
    calBMI:function(){
        this.bmi=this.mass/(this.height*this.height);
        return this.bmi;
    }
}


if (john.calBMI()>mark.calBMI()){
    console.log(john.fullname+'wins');
}else if(john.bmi<marl.bmi){
    console.log(mark.fullname+'wins');
}else{
    console.log('they are the same');
}