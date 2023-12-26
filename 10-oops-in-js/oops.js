const user = {
    username:"saurabh",
    loginCount:8,
    signedin:true,
    getuserDetails:function(){
        console.log("got user details from databases");
        console.log(`username:${this.username}`);//(.this) it gives us the context from where we have to extract the username
        console.log(this);/*output is {
            username: 'saurabh',
            loginCount: 8,
            signedin: true,
            getuserDetails: [Function: getuserDetails]
          }*/
    }

}
console.log(user.login);
console.log(user.getuserDetails());
console.log(this);//in global context it gives us an empty object {}



const promiseOne = new Promise()//this new keyword is a constructor function allows us to make multiple instance of the same object

function user(username,loginCount,isLoggedIn){
 this.username = username;
 this.loginCount=loginCount;
 this.isLoggedIn=isLoggedIn;
  
this.greeting = function(){
    console.log(`welcome ${this.username}`);
}

 return this
}

const userOne = user("saurabh",12,true)
const userTwo = user("maurya",45,false)
console.log(userOne);
console.log(userTwo);//it overrides saurabh thats why we always use (new) keyword new gives a new copy of the function which does not get affected by old copy
//new keyword generates a empty object known as instance 
//constructor function is called due to new keyword
//(.this) adds the constructor function

