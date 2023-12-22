// for of 

const arr =[1,2,3,4,5]
for (const num of arr) {
    console.log(num);//output is 1,2,3,4,5
}

const greetings = "hello world"
for (const greet  of greetings) {
    console.log(`Each char is ${greet}`)
}//output is Each char is 
/*
Each char is e
Each char is l
Each char is l
Each char is o
Each char is  
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d
*/

//Maps 

const map = new Map()
map.set('IN',"india")
map.set('USA',"united states of america")
map.set('FR',"france")

console.log(map);
/*output is Map(3){
    'IN'=>"india",
'USA'=>"united states of america",
'FR'=>"france"
}
gives output like objects
*/

for (const [key,value] of map) {
    console.log(key,value);
}//output is 
//IN india
//USA united states of america
//FR france

const myObject2 = {
    'game1':'nfs',
    'game2':'spiderman'
}

for (const [key,value] of object) {//objects are not itratable in for of loop
    console.log(key,value);
}


//loops to use to interator through objects
const myObject ={
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"

}
for (const key in myObject){//forin loops
 console.log(`${key} shortcut is for ${myObject[key]}`)
}/*output is 
js shortcut is for javascript
cpp shortcut is for c++
rb shortcut is for ruby
swift shortcut is for swift by apple
*/

const programming = ["js","rb","py"]
for (const key in programming) {
   console.log(programming[key]);//key in array is index of the elements
}//output is js
//rb
//py
    

