const coding = ["js","ruby","java","python","cpp"]

coding.forEach((item)=>{//for each does not return values
    console.log(item);
})


const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num)=>num>4)
console.log(newNums);
//output is [5,6,7,8,9,10]
/*
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num)=>{
    returns num>4})//if we use {} then we have to type return
console.log(newNums);
//output is [5,6,7,8,9,10]
*/

const newNums =[]
myNums.forEach((num)=>{
    if (num>4){
        newNums.push(num)
    }
})
console.log(newNums)//output is [5,6,7,8,9,10]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')//bk for books

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);

