//
var name = "Brendan";
console.log(`Yo, ${name}!`);
var box5={
    color:'green',
    position:1,
    clickme:function(){
        var self=this;
        document.querySelector('.green').addEventListener('click',function(){
            
            var str='This is box number '+self.position+' and it is '+self.color;
            alert(str);
        })
    }
}
//box5.clickme();


//ES6
var box6={
    color:'green',
    position:1,
    clickme:function(){
        document.querySelector('.green').addEventListener('click',()=>{
            
            var str='This is box number '+this.position+' and it is '+this.color;
            alert(str);
        })
    }
}
//box6.clickme();
const years=[100,200,230,240]
//ES5
var ages=years.map(function(el){
    return 2016-el
})

//ES6
let ages6=years.map(el=>2016-el)

ages=years.map((er,index)=>'Age element ${index+1}:${2016-el}.')"
console.log(ages)

function person(name){
    this.name=name;
}
person.prototype.myFriends5=function(friends){
    var arr=friends.map(function(el){
        return this.name+' is friends with '+el;
    }.bind(this))
    console.log(arr);
    
}

var friends=['bob','jane','mark'];
new person('john').myFriends5(friends);

console.log(`this is ${friends[0]}`)

//ES6
person.prototype.myFriends6=function(friends){
    var arr=friends.map(el =>`${this.name} is friends of ${el}`);
    console.log(arr);
}

new person('mike').myFriends6(friends);