// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
        console.log("5 is best number");
    }
    console.log(element);
    
}


for (leti = 0;i <=10;i++) {
    console.log(`inner value${j} and inner loop ${i}`)
        
    for (let j = 0; j < 10; j++) {
        console.log(`inner value${j} and inner loop ${i}`)
        console.log(i + '*' + j +' = ' + i*j) //tables printing
    }
    
}


let myArray = ["flash","batman","superman"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)//output is flash , batman,superman
}


//break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`detected 5`);
        break//loop will stop here if it gets 5

    }
   console.log(`valuee of i is ${index}`)
    
}


for (let index = 1; index <= 20; index++) {
    if (index == 5){
        
        continue//5 will be skipped for 1 time from printing
        
    }
   console.log(`valuee of i is ${index}`)
    
}