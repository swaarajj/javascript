let sentence = "swaraj"
let repo = 50;

console.log("My name is " + sentence + " my repo count is " + repo);


console.log(`My name is ${sentence} and my repo count is ${repo} `);
// Modern way to concatinate string (string interpolaltion)

const className = new String('Javascript-is-a-good-language');
console.log(className)
console.log(className.__proto__);
//output is empty here but can be checked in console 
// many functions are listed in console read from mdndocs

console.log(className.charAt(2));
console.log(className.indexOf('t'));

const anotherString = className.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   swaraj      "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(className.split('-'));  //returns array
console.log(typeof (className.split('-')));
