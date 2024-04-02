//  Two ways for creating objects in javascript 
//  First is constructor method
//  It creates singleton objects
//  Object.create  // syntax 
 
//  Second is literal method 
//  It does not create singleton objects
//  syntax =>>
mySym = Symbol ("key1")
 const Jsuser = {
    name : "Swaraj" ,
    age : 18 ,
    city : "Chennai" ,
    isLoggedIn : true ,
    workingDays : ["Monday" , "Wednesday" , "Friday"] ,
    [mySym] : "key1"
 }

//  accessing object elements =>
//  2 methods 
 console.log(Jsuser.age)
//  console.log(Jsuser[age])   // this won't give output 
 // the reason behind the error is that js considers all the keys of objects as string by default
 // so to get output we must write like - 
 console.log(Jsuser["age"])


 // to use symbols =>
//  mySym = Symbol ("key1")
// now to add this symbol to object and print it 
// object {
//     [symbol_name] = "value"
//   }

// Now to print the symbol =>
console.log(Jsuser[mySym])


// object freezing =>
Jsuser.city = "Pune"
console.log(Jsuser["city"])
Object.freeze(Jsuser)       // Now the object is freezed and its values cant be changed
Jsuser.city = "Delhi"       // It wont throw any error but the value wont change
console.log(Jsuser["city"])     
Jsuser.age=20
console.log(Jsuser["age"])


// Functions inside the object 
Jsuser.greetings = function() {
    console.log("Hello JS user ")
}
Jsuser.greetingsTwo = function() {
    console.log(`Hello JS user , ${this.name} `)
}
console.log(Jsuser.greetings)
console.log(Jsuser.greetingsTwo)