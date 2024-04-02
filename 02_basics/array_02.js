// array further
const marvelHeros = ["Iron_man " , "Capt_America " , "Thor"]
const dc_Heros = ["Superman " , "Batman "]

// marvelHeros.push(dc_Heros) //push adds the new elements at the back and returns the length of th new array
// console.log(marvelHeros)

// all_heros = marvelHeros.concat(dc_Heros)
// console.log(all_heros)

const spread_heros = [...marvelHeros , ...dc_Heros]  
// this spreads the array elements and puts the value to the new array 
// better than concat function as it will work for more than two arrays 
// console.log(spread_heros)

const another_array = [12,43,54,[54,65,2,6,],3,[67,[76,124,12]]]
//array ke andar array ke andar array 
// flat sbko ek array bna deta hai
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

// console.log(Array.isArray("Swaraj"))   // check whether entered parameter is array or not 
// console.log(Array.from("Swaraj"))     // coverts entered parameter into array
// console.log(Array.from({Name : "Swaraj"}))     // returns empty array when unable to create array

const num1 = 43
const num2 = 43
const num3 = 43

console.log(Array.of(num1,num2,num3))    // converts given set of elements into array
