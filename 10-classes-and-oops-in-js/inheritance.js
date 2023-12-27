class User {
    constructor(username){
        this.username = username
    }


logme(){
 console.log(`USERNAME is ${this.username}`);
}

}

class Teacher extends User{
    constructor(username,email,password){
        super(username)//we now use super keyword in place of (.call) and this gives us all the access of username cosntructor
        this.email = email
        this.password = password
    }

    addcourse(){
        console.log(`A new course was added by ${this.username}`);
}



}

const chai = new Teacher("saurabh","chai@teacher.com","123")
chai.addcourse()//output is A new course was added by saurabh

const masalachai = new User("masala chai")
masalachai.logme() //output is USERNAME is masala chai

