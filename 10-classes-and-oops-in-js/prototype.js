let myName = "saurabh.    "

console.log(myName.length);//output is 12

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);//we used this to set the context that we are talking about the hero power spiderman
    }
}

Object.prototype.saurabh=function(){//we defined a prototype saurabh
    console.log('saurabh is present in all object');
}

Array.prototype.heysaurabh= function(){
 console.log(`saurabh says hello`)//we give power to array 

}

heroPower.saurabh()//output is saurabh is present in all object
myHeros.saurabh()//output is saurabh is present in all object
myHeros.heysaurabh()//only array has the power not the function or thr objects 
heroPower.heysaurabh()//will give error as object dont have the power of arrays


//inheritance

const user = {
    name:"chai",
    email:"chai@google.com"
}
const Teacher = {
    makevideo:true
}
const TeachingSupport = {
    isAvailable:false
}

const TASupport= {
    makeAssignment:'js assignment',
    fullTime:true,
    __proto__:TeachingSupport//this is used when we want to access the property of other objects
}

Teacher.__proto__= user


//modern approach

Object.setPrototypeOf(TeachingSupport,Teacher)//teachingsupport has the access of all contents of teacher

let anotherUsername = "chaiAurcode    "

String.prototype.truelength=function(){
    console.log(`${this}`);
    
    console.log(`True length is: ${this.trim
        ().length}`);
}

anotherUsername.truelength()//output is chaiAurcode    True length is: 11 //here (.this) is chaiaurcode

"saurabh".truelength() //output is saurabh True length is 7 //here (.this) is saurabh
"iceTea".truelength() //output is icetea True length is 6  //here (.this) is icetea


//.this gives us current execution context
