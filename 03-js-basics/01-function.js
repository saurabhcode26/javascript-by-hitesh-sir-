function saymyname(){
    console.log("saurabh")
}

saymyname();//output  is saurbh //calling a function 


function addTwoNumbers(number1,number2){
   console.log(number1 + number2); 
}//it takes parameter
addTwoNumbers(3,4)//output is 7 //these are arguments
addTwoNumbers(3,"4")//output is 34
function addTwoNumbers(number1,number2){
    return number1+number2
 }
 addTwoNumbers(3,4)//output is 7 //these are arguments 

 function loginusermessage(username){
    if (username===undefined){
        console.log("please enter a message");
        return //if it enters in the if block then it will return from here and does not execute after code
    }
    return `${username} just logged in`
 }
console.log(loginusermessage("saurabh"));

function loginusermessage(username="default value"){
    if (!username)){//same as above
        console.log("please enter a message");
        return //if it enters in the if block then it will return from here and does not execute after code
    }
    return `${username} just logged in`
 }



 function calculatecartprice(...num1){//also known as rest operator
    return num1;
 }
 console.log(calculatecartprice(200,400,500))//problem is that it only prints 1st price not the rest of the price so use spread operator also known as rest operatot it converts value in the array[200,300,400]

 const user ={
    username:"saurabh",
    price:199
 }

 function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price us ${anyobject.price}`);
 }
 handleObject(user);
 //or
 handleObject({
    username:"saurabh",
    price:199
 })

 const mynewArray = [200,400,100,600]

 function returnsecondvalue(getarray){
    return getarray[1] //output is 400
 }

 console.log(returnsecondvalue(mynewArray));
 //or
 console.log(returnsecondvalue([200,400,100,600]));