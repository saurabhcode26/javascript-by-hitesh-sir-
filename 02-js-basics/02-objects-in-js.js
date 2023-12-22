// singleton hamesha constructor hi banta hai

//object literals
const mysym = Symbol("key1")
const jsuser = {
    name:"saurabh", //name is key and value is saurabh
    "full name" : "saurabh maurya",//can not access it with dot notation
    age:18,
    [mysym]:"mykey1",//to use symbols we have to use bracket notation
    location:"greaternoida",
    email:"saurabh@google.com",
    isLoggedIn:false,
    lastloginDays:['mondays','saturday']
};

jsuser.email//to access values 
console.log(jsuser["email"]);//another way to access value
console.log(jsuser["full name"]);
console.log(jsuser[mysym])//output is mykey1 and type is symbol not a string


jsuser.email = "saurabh@gmail.com"//to change value in the object
Object.freeze(jsuser)//freezes the objects means no one can change the value of jsuser from this point


jsuser.greeting = function(){
    console.log(`hello ${this.name}`);
}

console.log(jsuser.greeting());//output is hello saurabh



const tinderuser = new Object()//it is a singleton object
const tinderuser2 ={}//it is not a singleton object

tinderuser2.id = "122abc"
tinderuser2.name="saurabh"
tinderuser2.isLoggedIn=false/*output is tinderuser2 = {
    id = "122abc"
name="saurabh"
isLoggedIn=false
}
*/

const regularUser ={
    email:"saurabh@email.com",
    fullname:{
        userfullname:{
            firstname:"saurabh",
            lastname:"maurya"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)//to access the objects vlaues

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

const obj3= Object.assign({},obj1,obj2);//output is {1:"a",2:"b",3:"a",4:"b"} 
//another method
//spread method
const obj4 = {...obj1,...obj2}//output is {1:"a",2:"b",3:"a",4:"b"} 

const user = [{
    {
        {
            {

            }
        }
    }
}]

users[1].email//to access object inside array

console.log(Object.keys(tinderuser));//gives all the keys as an array ["id","name","isloggedin"]
console.log(Object.values(tinderuser));//gives all the values as an array

console.log(tinderuser.hasOwnProperty('isLoggedin'));//checking that property is available are not (returns true and false)

//object destructing

const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

const {courseInstructor:instructor} = course//extrate course instructor //we are assign course instructor to instructor
console.log(courseInstructor);//output is hitesh
console.log(instructor)//output is hitesh


//json format 

{
    "name":"saurabh",
    "coursename":"js in hindi",
    "price":"free"
}







