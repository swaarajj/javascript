console.log(Math);
//Math is an object in itself with multiple properties and functions

console.log(Math.abs(-3));   //converts negative to positive 
console.log(Math.round(4.3));   //rounds numbers

console.log(Math.ceil(4.3))   //rounds to the bigger number
console.log(Math.floor(4.9))   //rounds to the smaller number


// let a = [34,343,234,342,435,54]
console.log(Math.min(34,343,234,342,435,54))   
// finds the smallest number in array , can not pass array stored in a variable

console.log(Math.max(34,343,234,342,435,54))   //finds the largest number stored in an array

console.log(Math.random());
// will always give a different value between 0 and 1 
console.log(Math.random()*10);       // now it will shift one digit 
// but still it can give 0 value to avoid that case we add 1 
console.log((Math.random()*10)+1);


const max = 6
const min = 1

console.log(Math.floor(Math.random() * (max - min + 1) + min))
//this is formula when maximum and minimum value is pre defined (can be use in dice game and all)
// max-min gives the range ; +1 avoids 0 case ; adding min makes sure minimum value is obtained