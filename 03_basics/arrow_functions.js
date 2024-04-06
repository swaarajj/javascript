const hello = () => {
    const  username = "Swaraj"
   console.log(this.username)
}
hello()


// arrow functions =>
// basic syntax = 
// const (function name) = (parameters) => {}
   

const add = (num1 , num2)  => {
   return num1 + num2
}

// const sub = (num1 , num2) => {
//     return num1 - num2
// }
 
// this are examples of explicit retrun in arrow functions 

const sub = (num1 , num2) =>  (num1 - num2)
// this is example of implicit return 

// curly braces me wrap kiya to return likhna hoga  circle bracket diye to return nhi likhna hoga

console.log(add(5,4))
console.log(sub(5,4))

// to return object =>  wrapping in parantheis is necessary
const object_return = () => ({username : "swaraj"})
console.log(object_return())


// arrow functions are also used in loops an all 
const myArray = [34,5,64,66,12]

// myArray.forEach(() => {()})