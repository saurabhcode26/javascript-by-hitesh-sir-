const userEmail = "saurabh@gmail"
if (userEmail){
    console.log("got user email")
}else{
    console.log("donot have user email")
}

//falsy value are => false , 0 , -0 , BigInt , 0n , "" , null , underfined , NaN

//truthy value are => "0","false","  ",[],{},function(){}

//to check empty array
const userEmail2 = []
if (userEmail2.length === 0){
    console.log("array is empty");
}
 
//to check empty object
const emptyObj ={}
if (Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}


//false == 0 is true
//false = '' is true



// Nullish coalescing Operator (??):null undefined

let val1;
val1 = 5?? 10 
//value in val1 will be 5 
val2 = null??10
//value in val2 is 10 
val3= undefined??15
//value in val3 is 15
val4 = null??10??20
//value in val4 is 10 


//terniary operator
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");
