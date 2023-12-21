//we can denote string in single quotes ('') or double quotes ("")

//we use literal string (``) to add values
//string is an object type

let name="saurabh"
let repocount = 50

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String('saurabh')//another way of declaring string

console.log(gamename[0])//output is s
console.log(gamename.__proto__);//gives string in objects

console.log(gamename.length)//output is 7
console.log(gamename.toUpperCase)
console.log(gamename.charAt(2))//second postion pe konsa character hai ans is "u"
console.log(gamename.indexOf('u'))//output is 2
const newstring = gamename.substring(0,4)//output is saura
const anotherstring = gamename.slice(-7,4)//output is hbar
const newsstringone = "     saurabh        "
console.log(newsstringone.trim())//in output it removes extra spaces
const url = "https://saurabh.com/saurabh%20maurya"
console.log(url.replace('%20','-'))//output is https://saurabh.com/saurabh-maurya
url.includes('saurabh')//asking that string contains saurabh keyword or not returns true or false
const greetings = '   Hello world!   ';

console.log(greetings);
// Expected output: "   Hello world!   ";

console.log(greetings.trimEnd());
// Expected output: "   Hello world!";


const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// Expected output: "Hello world!   ";

//split function.
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]



