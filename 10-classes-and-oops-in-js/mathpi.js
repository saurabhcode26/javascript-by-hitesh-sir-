const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);/*output is {
    value: 3.141592653589793,
    writable: false,//cannot be overwritten
    enumerable: false,
    configurable: false
  }*/

console.log(Math.PI);//this value cannot be overwritten


const chai = {
    name:'ginger chai',
    price:250,
    isAvailable:true
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"))/* output is {
    value: 'ginger chai',
    writable: true,
    enumerable: true,
    configurable: true
  } */

  //we can also define our own description of properties
  Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false

  })
  console.log(Object.getOwnPropertyDescriptor(chai,"name"))/* output is {
    value: 'ginger chai',
    writable: false,
    enumerable: false,//this means we can not iterate through the names property in the object
    configurable: true
  } */

//getOwnPropertyDescriptor only gives us the description of the property of the object not the object itself


