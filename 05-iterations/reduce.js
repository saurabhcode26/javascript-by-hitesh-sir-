const myNums = [1,2,3]

const myTotal = myNums.reduce(function(acc,curvalue){//acc is acculumator
    console.log(`acc:${acc} and currval:${curvalue}`);
    return acc + curvalue

},0)/*output is acc:0 and currval:1
acc:1 and currval:2
acc:3 and currval:3
and 6
*/
const myTotal1 = myNums.reduce((acc,curvalue) => acc + curvalue,0)
console.log(myTotal1);/*output is 6*/

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);//output is 22996

