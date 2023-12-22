const user = {
    username:"saurabh",
    price:999,

    welcomemessage:function(){
        console.log(`${this.username},welcome to website`);//this is used for the current context of the 
        console.log(this)//output is {username:"saurabh",
        //price:999, welcomemessage:function()}
    
    }
}

user.welcomemessage()//output is saurbh welcome to website
user.username ="maurya"
user.welcomemessage()//output is maurya welcome to website because 'this' work on current context 


console.log(this)//output is empty bracket {}


//"this" works only in object



const chai = ()=>{
    let username = "saurabh"
    console.log(this)//output is {}
    console.log(this.username)//output is undefined
}
chai();



const addTwo1 = (num1,num2)=>{
    return num1+num2  //known as explicit return

}
console.log(addTwo(3,6));//output is 9


const addTwo = (num1,num2)=> (num1+num2 ) //known as implicit return
//if we use {} we have to write return keyword
//if we use () we do not have to write return keyword usefull in returning object 
console.log(addTwo(3,6));//output is 9


