const saurabh = 2334
let accountemail = "saurabh@gmail.com"
var accountpassword = "qwerty"//not used because of scope problem.
//prefer not to use var because of block and functional scope .
accountcity = "noida" //we can also declare variable like this but prefer not to use.
let saurabhm;//it will give undefined as we not assigned any value.

//saurabh =2;//not allowed to change


accountemail = "maurya@gmail.com"
accountpassword="1234"
accountcity = "balrampur"

console.table([accountemail,accountpassword,accountcity]);