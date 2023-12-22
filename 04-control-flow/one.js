// if 

if (condition){//condition should be true to enter inside the code

}

//> less than,< greater than,>=,<=,== to check equal,!= not equal to , === also check the datatype (2==="2" it gives false)

const temperature =41
if(temperature === 41){
    console.log("less than 50")
}else{
    console.log("temperature is greater than 50")
}


const score = 200
if (score>100){
    const power = "fly"
    console.log(`use power:${power}`);
}
console.log(
    `user power : ${power}`
);//gives error as it is outside the scope


const balance =1000
if (balance > 500) console.log("test") //shorthand notation 

if (balance < 500){
 console.log("less than 500")
}else if (balance < 750){
    console.log("less than 750")
}else if (balance < 900){
    console.log("balance is less than 900")
}else {
    console.log("user has more than 900")
}


const userLoggedIn = true
const Loggedinfromgoogle = false
const Loggedinfromemail = true
const debitCard = true
if (userLoggedIn && debitCard && 2===3){//and condition
    console.log("allow to buy course");
}

if (Loggedinfromgoogle || Loggedinfromemail){//or condition
    console.log("user logged in");
}




