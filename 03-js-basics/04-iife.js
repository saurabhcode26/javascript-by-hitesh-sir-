// Immediately Invoked Function Expressions (IIFE)
//used to immediately use the function

(function chai(){//named iife
    console.log('DB CONNECTED');
})();//we will put function in ()

(function)();//<=calling the function

( () => {//unnamed iife
    console.log(`DB CONNECTED`);
})();


( (name) => {
    console.log(`DB CONNECTED ${name}`);
})("saurabh");



