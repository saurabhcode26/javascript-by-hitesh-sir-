class user {
    constructor (email,password){
        this.email = email;
        this.password = password;
    }
   
get email(){
    return this._email.toUpperCase()//we have to change the name of the property because if we dont do it it will start a race between cosntructor and setters
}
set email(value){
    this._email = value
}

    get password(){//koi password le raha hai to usko kya message mile is liye get keyword ka use karte hai
        return `${this._password}saurabh`
    }
    set password(value){//when we use get we have to also use set because we want to set the password
       this._password = value
    }
}

const saurabh = new user("saurabh@gmail.com","123")//output is 123saurabh
console.log(saurabh.password);
console.log(saurabh.email);