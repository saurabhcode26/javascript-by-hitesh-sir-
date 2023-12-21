//dates
//date is an object 
let mydate = new Date()
console.log(mydate.toString());//output is Thu Dec 21 2023 10:36:09 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toDateString());//output is Thu Dec 21 2023
console.log(mydate.toLocaleString());//output is 12/21/2023, 10:36:09 AM
console.log(mydate.toISOString());//output is 2023-12-21T10:36:09.326Z
console.log(mydate.toJSON());//output is 2023-12-21T10:36:09.326Z
console.log(mydate.toLocaleDateString());//output is 12/21/2023
console.log(mydate.toLocaleTimeString());//output is 10:36:09 AM


let mycreateddate = new Date(2023 , 0 ,23)//months starts from 0 in js
let mycreateddate2 = new Date("01-14-2023")//in this format first month starts with 1
console.log(mycreateddate.toDateString());//output is Mon Jan 23 2023

let mytimestamp = Date.now()//output in milisecond from 1970
consolel.log(mycreateddate.getTime());
console.log(Math.floor(Date.now()/1000));//to convert ms in seconds

let newDate = new Date();
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday:"long"
})//we can customize it using tolocalstring
 