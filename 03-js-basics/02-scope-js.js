{}//it is a scope of that program 
//value inside it is known as local scope and value outside it is known as global 
let a = 300;
if(true){
    let a= 10;
    const b=20;
    var c = 30;//avoid using var
    console.log(a)//output will be 10
}//scope of these values is till here

console.log(a);//output will show not defined because it is inside the scope //output will be 300
console.log(b);//output will show not defined because it is inside the scope
console.log(c);//output is 30 because var does not scope rule thats why we dont use var 

function one(){//bada function hai sabkuch access kar sakta hai 
    const username = "saurabh"

    function two(){//chota function hai sirf apne scope ke ander ki values ko hi access kar sakta hai
        const website ="youtube"
        console.log(username);//output is saurabh
    }
    console.log(website);//website is nor defined because its scope ends with two and no execution takes place further
    two()
}
one()

if (true){
    const username = "saurabh"
    if(username === "saurabh"){
        const website=" youtube"
        console.log(username + website);//output is saurabh youtube
    }
    console.log(website);//cannot access it  as it is outside the scope
}

console.log(username);//cannot access it as it is outside the scope





//++++++++++++++++++++++++++++++++++++++++ little bit of hoisting ++++++++++++++++++++++++++++


addone(5)//it will execute before intialization
function addone(num){//support hoisting
    return num+1
}

addone(5)

addtwo(5)//it will not execute before inializtion
const addtwo = function(num){//addtwo also known as expression //does not support hoisting 
    return num+2
}
addtwo(5)