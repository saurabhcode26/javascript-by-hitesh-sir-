//js use stack memory for primitivve datatype
//heap memory is used for non primitive datatype

let myname = "saurabh"

let anothername = myname
anothername = "maurya"

console.log(myname)//output is saurabh
console.log(othername);//output is maurya 
//as it is  in stack so it provides copy of myname to anothername so changing in othername doesnot affect myname

let userone = {
    email:"user@google.com",
    upi:"user@ybl"

}

let usertwo = userone;//in heap it provides refence or address of userone not the copy so userone and usertwo is pointing to same value
 
usertwo.email = 'saurabh@gmail.com'
console.log(userone);//output is user@google.com
console.log(usertwo);//output will be user@google.com as it does not provide copy so we cannot change the value