class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username:${this.username}`);
    }

    static createId(){//if we do not want to give access of createId to everyone we use static keyword it doesnot give access to the child or parent
        return `123`
    }
}
const hitesh = new User("hitesh")
//console.log(hitesh.createId())//output is  hitesh.createId is not a function

////
class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","i@phone.com")
(iphone.logme())