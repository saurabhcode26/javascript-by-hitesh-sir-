const score = 400;

const balance = new Number(100)
console.log(balance);//output is number 100 it is confirmed numbers

console.log(balance.toString().length);//we can convert number in string and use string functions
console.log(balance.toFixed(2))//output is 100.00
 

const othernumber = 123.8966
othernumber.toPrecision(3)//output is 124
const othernumber2 = 23.899
othernumber2.toPrecision(3)//it rounds off onlly starting three values output is 23.9

const othernumber3 = 1000000
console.log(othernumber3.toLocaleString('en-IN'));//output is 10,00,000




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math)//maths is an object having many properties

console.log(Math.abs(-4))//output is 4
console.log(Math.round(4.6))//output is 5
console.log(Math.ceil(4.2))//output is 5
console.log(Math.floor(4.9))//output is 4
console.log(Math.min(4,4,3,5));//output is 3
console.log(Math.max(4,4,3,5));//output is 5


console.log(Math.random())//gives random values between 0 and 1 
console.log((Math.random()*10)+1);//to avoid zero and to get value between 0 and 10

const min =10
const max =20

Math.random(Math.floor(Math.random()*(max-min+1)+min)//it will give output in integer and between 10 to 20 any random number
//min value will be 10 we add +1 to avoid the condn where we get zero in random number



