// IIFE - Immediatly Invoke Function Execution 
// jo function immediatly invoke ho jaye 
// global scope ke pollution ko htane ke liye ye use krte hai
(function food () {
    // named iifi
    console.log(`hello eat some food`)
})() ; // this semi colon is compulsory

// ()()    // first bracket for wrapping function and second bracket for execution

((name) => {
    console.log(`DB CONNECTED ${name}`)
})("swaraj")