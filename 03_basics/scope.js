// var c = 10
// let a = 5
// if(true) {
//     let a = 3
//     const b = 6 
//     var c = 2
//     // console.log(a)
// }


// // console.log(a)
// // console.log(b)
// // console.log(c)  
// // this is the problem with var declaration of variables , they can be acessed out of their scope also 
// // and the const and let can not be 
// // let and const follow scope concept as expected

function first() {
    const fname = "swaraj"

    function second(){
        const sname = " kumar"
        console.log(fname + sname )
    }
    // console.log(sname)     ..this cant be accesed here because its local variable of second()
    second()
}

// first()


// same scenario with if else and loop also 
if (true) {
    const username = "swaraj"
    if (username === "swaraj") {
        const website = " whatsapp"
        console.log(username + website);
    }
    // console.log(website);
}

console.log(addone(5))

function addone(num){
    return num + 1
}
// this function is declared by function expression , Function declarations are hoisted in JavaScript, meaning they are moved to the top of the scope during the compilation phase. So, even though the console.log(addone(5)) statement appears before the function declaration, it will still work fine, and the output will be 6.

// The addTwo function is declared using a function expression assigned to a constant variable. Function expressions are not hoisted in the same way function declarations are. So, when you attempt to call addTwo(5) before the function expression is assigned, it will result in an error. JavaScript will not find addTwo as a function at the time of invocation.
// addTwo(5)
const addTwo = function(num){
    return num + 2
}