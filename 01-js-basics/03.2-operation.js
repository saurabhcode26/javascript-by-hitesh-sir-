let value = 3
let negvalue = -value //ans is -3


console.log(2+2); //we can perform any normal math.


let str1 = "hello"
let str2 ="saurabh"
 
let str3 = str1 + str2;//output is hello saurabh

console.log("1" + 2);//output 12
console.log("1"+2+2);//output is 122
console.log(1+2+"3");//output is 33

//best to use () paranthesis in arthematic operation
//if 1st value is string then all value will be converted in to string

// prefer not to use
console.log(+true)//output  is 1
console.log(+"")//output is 0


let gamecounter = 100;
gamecounter++;//postfix operator
++gamecounter;//prefix operator
console.log(gamecounter);//output is 101

//If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

/*
example of postfix
let x = 3;
const y = x++; x is 4; y is 3

let x2 = 3n;
const y2 = x2++; x2 is 4n; y2 is 3n
*/


/*
example of prefix
let x = 3;
const y = ++x;
x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;
x2 is 4n; y2 is 4n
*/
