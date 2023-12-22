const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbers.map( () =>num+10)//it returns values

const newNums1 = myNumbers
                    .map((num)=>num * 10)//map1
                    .map((num)=>num+1)//isme map1 se pass hui values 
                    .filter((num)=>num>=40)
                    //this process is known as chaining

console.log(newNums);

