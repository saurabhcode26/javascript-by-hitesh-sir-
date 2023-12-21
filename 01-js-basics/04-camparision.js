console.log(2>3);//answer come in boolean value
//same in string

//try not to campare different data types
console.log("2" >1 );
console.log("02" > 1);

/* avoid this type of camparision
console.log(null>0);//false 
console.log(null == 0);//false 
console.log(null >= 0);//true null is converted in zero

//equality check (==) and comparision (<,>,>=,<=) works diffrently
//comparision convert null to a number treating it as zero 
//thats why null>=0 is true and null>0 is false


console.log(undefined == 0);//false
console.log(undefined >= 0);//false
console.log(undefined <=0);//false
*/

//'===' checks strictly 
//it does not convert any value for camparision

