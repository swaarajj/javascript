let score = 56 

console.log(score)
console.log(typeof (score))
//here we can easily tell that score is a number by seeing it but while getting the value from front_end sometimes its not possible
// in those cases we need this function


score="543"
let valueInNumber = Number(score)  
// this is the method to convert value to another data type 
console.log(typeof (valueInNumber))


valueInNumber =  String(score)
console.log(typeof (valueInNumber))

score="45abcc"
valueInNumber = Number(score) 
/* score should now not convert into number because 45abc cant be converted to a number
   but it will convert to a number and when we try to print the number it gives output as "Nan" -> Not a Number
*/
console.log(score)