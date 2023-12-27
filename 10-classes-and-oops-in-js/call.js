function SetUsername(username){//this method is not  called we have to use (.call) to call the setusername function
    //complex DB call
    this.username = username
}

function createUser(username,email,password){
    SetUsername.call(this,username)//we have to give it a context about which username we are calling  so we use this.
    this.email = email
    this.password = password
}

const chai = new createUser("saurabh","saurabh@fb","123")
console.log(chai)//output is { email: 'saurabh@fb', password: '123' } username is not set