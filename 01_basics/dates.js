//Dates

let myDate = new Date()    //date is a object in javascript
// console.log(myDate)        // not in readable format
// console.log(myDate.toString());     //convert to string to make it come in readable format 
// console.log(myDate.toLocaleDateString())   // month/date/year format
// console.log(myDate.toLocaleString())   // month/date/year format with time
// console.log(myDate.toTimeString())   // gives only time 
// console.log(myDate.toDateString())   //     Day / Month / Date / Year  format

// const fixDate = new Date(2024,0,24)  // 2024 is the year 0 is the month and 24 is the date .. yes month starts from 0 in js for single digit entry
// console.log(fixDate.toDateString())

// const fixDate = new Date(2024,0,24,5,54)    // adds time with date 
// console.log(fixDate.toLocaleString())

const fixDate = new Date("01-04-2024")   // in this case month Jan = 01 
// console.log(fixDate.toDateString())



 let myTimeStamp = Date.now()  // used to know exact time stamps in  js (for quiz , for polls ,)
 //this will give current date in millisecond
 console.log(myTimeStamp)      // this will print milliseconds calculating from 1970 till today
 console.log(fixDate.getTime());    // this will give milliseconds from fix date till now
 console.log(Math.floor(Date.now()/1000));   //this is in seconds remember the formula

 fixDate.toLocaleString('default' ,{
    weekday : "long"
 })
 //read about this more