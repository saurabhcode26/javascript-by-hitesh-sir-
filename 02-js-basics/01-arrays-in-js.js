// ARRAYS 

const myArr = [1,3,4,5,5]//array contains elements
//js array is resizeable 
console.log(myArr[0]);//to access elements of array
const myHereos = ["iron man","hulk"]
const myArr2 =(1,4,4,5);

//array methods

myArr.push(6)//adds value to an array
myArr.pop()//remove last value in an array

myArr.unshift(9)//adds 9 in the first place in the array
myArr.shift()//remove the value 9

console.log(myArr.includes(9))//to check if value is present in an array or not 
console.log(myArr.indexOf(5));//gives index of value 5 in the array

const newArr = myArr.join()//binds the array and converts it into string


//slice , splice 

//slice syntax
slice()
slice(start)
slice(start, end)
console.log("A",myArr);// output is A [0,1,2,3,4,5]
const myn1 = myArr.slice(1,3)
console.log(myn1);//output is [1,2]
console.log("B",myArr);//output is B [0,1,2,3,4,5]

//splice syntax
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)

const myn2 = myArr.splice(1,3)//splice also modifies the array 
console.log("c",myArr);//output is c [0,4,5]

console.log(myn2)//output is [1,2,3]

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]




const marvelHereos = ["thor","ironman","spiderman"]
const dcHereos = ["superman","flash","batman"]
//wrong way
marvelHereos.push(dcHereos);//output is ["thor","ironman","spiderman", ["superman","flash","batman"]] it take dchereos as another value in the array
console.log(marvelHereos[3][1]);//we get output as flash 

//correct way
const allhereos = marvelHereos.concat(dcHereos)//output is ["thor","ironman","spiderman","superman","flash","batman"]

//spread method
const allhereos2 = [...marvelHereos,...dcHereos]//output is ["thor","ironman","spiderman","superman","flash","batman"]


const anotherArray = [1,2,3,[4,5,6],7,[6,7[4,5]]]

const realanotherAray = anotherArray.flat(Infinity)//output is [1,2,3,4,5,6,7,6,7,4,5]


console.log(Array.isArray("saurabh"))//output is false
console.log(Array.from("saurabh"))//converts into an array ["s","a","u","r","a","b","h"]
console.log(Array.from({name : "saurabh"}))//gives backs an empty array we have to define from what to make an array
const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);
// [ "foo", "bar", "baz" ]
function f() {
    return Array.from(arguments);
  }
  
  f(1, 2, 3);
  


let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));//output an [100,200,300]
Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]





