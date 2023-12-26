//The Promise *object* represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

/*
A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
*/

const Promiseone = new Promise(function(resolve,reject){
    //do a async task
    //DB calls,cryptography
    setTimeout(function(){
        console.log('async task done')
        resolve()//to connect with .then
    },1000)
})//promise is created

Promiseone.then(function(){
    console.log("Promise consumed")
})//.then is connected to resolve

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
       resolve({
        username:"saurabh",email:"maurya@gmail.com"
       })
    },1000)
})
promiseThree.then(function(user){
 console.log(user);//output is { username: 'saurabh', email: 'maurya@gmail.com' }
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"saurabh",password:"123"})
        }else{
            reject('ERROR')
        }
    },1000)
})

//promiseFour.then().catch()//.catch for reject

promiseFour
.then((user)=>{
    console.log(user);
    return user.username//it returns saurabh
})
.then((myusername)=>{
    console.log(myusername);//chaining //the value which is returned by upper.then is displayed in this second chain .then
})
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log("the promise is either resolvesd or rejected"))//default message it will always execute


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject('ERRoR')
        }
    },1000)
})
// this async is same as promise whichever you understand better use that
async function consumePromiseFive2(){
    const response = await promiseFive
    console.log(response);//output is { username: 'javascript', password: '123' }
}
consumePromiseFive2()

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}



//about fetch

async function getAllusers(){
    try{   const response = await fetch('give it url')
    const data = await response.json()//we used await here because converting data to json can also take time
    console.log(data);
}catch(error){
    console.log("E:",error);
}
     
}

getAllusers()

//above function in promises

fetch('give url')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))

/*
A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar).
A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.
status properties.
*/


