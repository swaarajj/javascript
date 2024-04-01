const score = 400
console.log(score)
const balance = new Number(5000)
console.log(balance)



console.log(balance.toString().length)     //will convert the number to string and string functions can be used 
// one very important point is it doesn't the change the original variable
// as the original variable is primitive and stored in stack and hence only a copy of the variable is passed rather than the original variable


console.log(balance.toFixed(3));   //will put 3 decimal points after the number 



const otherNumber = 123.9334;

console.log(otherNumber.toPrecision(3)); //rounds of the number to the number of digit provided in the functon argument


const hundreds = 1000000
console.log(hundreds.toLocaleString()); //puts comma according to american standards
console.log(hundreds.toLocaleString('en-IN'));  // puts comma according to indian standards
