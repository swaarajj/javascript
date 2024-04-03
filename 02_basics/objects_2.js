const tinderUser = new Object()
//this is a singleton object
//everything is same with that of the literal object just the fact that this is consturctor object makes it different


// console.log(tinderUser)
 
tinderUser.id = 464324 ;
tinderUser.name = "AbcD" ;
tinderUser.isLoggedIn = false 

const regularUser = {
    email : "abcd@gmail.com" ,
    full_name : {
        first_name : "Swaraj" ,
        last_name : "Kumar" 
    }

}

// console.log (regularUser["full_name"])
// console.log (regularUser["first_name"])
// console.log(regularUser.full_name.first_name)

const obj1 = {
    num : 12 ,
    num2 : 13 
}

const obj2 = {
    1 : "a" ,
    2 : "b" 
}
const obj3 = {
    3 : "e" ,
    4 : "f"
}
// const obj4 = {obj1 , obj2}
// console.log(obj3)   this is will obj1 and obj2 as the main items and others as the sub-object

const obj4 = Object.assign({} , obj1 , obj2)
console.log(obj3)   // this will perfectly give all the items as expected

// Object.assign({} , obj1 , obj2 , obj3)
// {} => this represents the target object means all the object will be copied here 
// so we put another object there for example target_obj

const target_obj = {}
Object.assign( target_obj  , obj1 , obj2 , obj3) 

// One more way to combine objects and the latest and most used one => 
const real_target_obj = {...obj1 , ...obj2 , ...obj3} 
// ... means to spread the items of the object and can also be used to combine array 

const objInArray = [
    {
        abc : 1 ,
        xyz : 2 
    } ,
    {
        swaraj : 0 , 
        aditi : 1 
    } ,
    {
        detail : "invalid" ,
        entry : "done"
    }  // this contain comma separated multiple objects inside an array
]

console.log(objInArray[1]. aditi)  // to access those values

console.log(tinderUser)

console.log(Object.keys(tinderUser))   // will give all the keys of the object passed
console.log(Object.values(tinderUser))  // will give all the key values of the object passed
console.log(Object.entries(tinderUser))  // it will make the object as array inside array with the first value as key and the second as values

console.log(tinderUser.hasOwnProperty(isLoggedIn)) // checks whether a given object has that key or not


// de-structuring objects 
const girlfriend = {
    name : "Aditi" ,
    age : 18 ,
    boyfriend : "Swaraj"
}

console.log(girlfriend.name) // this will print 

const {name} = girlfriend       // now name can be accessed with just name 
console.log(name)               // like this

const {boyfriend : bf} = girlfriend         // now boyfriend can also be accessed with just "bf"
console.log(bf)