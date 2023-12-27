class user {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("saurabh","saurabh@fb.com","123")
console.log(chai.encryptPassword());//output is 123abc
console.log(chai.changeusername());//output is SAURABH


//behind the scences

function users(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password
}
users.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const chai2 = new user("saurabh","saurabh@fb.com","123")

console.log(chai2.encryptPassword());//output is 123abc
console.log(chai2.changeusername());//output is SAURABH

