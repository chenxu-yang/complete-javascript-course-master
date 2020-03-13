//var firstname='chenxu';
//console.log(firstname);
//var lastname='yang';
//var age=23;
//var fullage=true;
//console.log(fullage);
/*
*/
//var job;
//console.log(job)
//
//var $3year=3
//console.log($3year)
//
//var firstName='Chenxu';
//var age=23;
//console.log(firstName+' '+age);
//
//var job,isMarried;
//job='student';
//isMarried=false;
//
//console.log(firstName+'is a '+job+'is married:'+isMarried)
//age='twenty eight';
//alert(firstName+'is a '+job+'is married:'+isMarried)
//age='twenty eight';
//var lastName=prompt('what is your lastname');
//console.log(firstName+' '+lastName)


//var job='actor';
//switch(job){
//    case 'teacher':
//        console.log('hh');
//        break;
//    case 'driver':
//        console.log('driver');
//        break;
//    default:
//        console.log('defualt');
//        break;
//}
//var age=90
//switch(true){
//    case age>13:
//        console.log('he is a boy');
//        break;
//    case age>20:
//        console.log("he can married")
//        break;
//    default:
//        console.log('he is died')
//        break
//}
//var jane=new Object();
//jane.lastname='chenxu';
//jane.firstname='ej';
//jane['birthyear']=1292;
//console.log(jane);



var john={
    fullname:'john smith';
    bills:[124,48,268,180,42];
    caltips:function(){
        this.tips=[];
        this.final=[];
        for(var i=0;i<this.bills.length;i++){
            var percentage;
            if(this.bills[i]<50)
            {
                percentage=0.2
            }
        }
        
    }
}