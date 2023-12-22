const coding = ["js","ruby","java","python","cpp"]
coding.forEach( function  (item) {//we donot give name to this function
 console.log(item);
})/*output is js
ruby
java
python
cpp
*/

coding.forEach((item)=>{
console.log(item);
})/*output is js
ruby
java
python
cpp
*/

function printme(item){
    console.log(item);
}

coding.forEach(printme)/*output is js
ruby
java
python
cpp
*/


coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})/*output is 
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/

const mycoding =[
    {
        languageName:"javascript",
        languageFileName:"js"
    },{
    
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languageName);
})/*output is javascript
java
python
*/