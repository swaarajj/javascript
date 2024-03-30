const accountId = "S234232"
let accountEmail = "swaraj@.net"
var accountPassword = "4311241"
accountCity = "Chennai"   // javascript allows to declare variables in this method but it should be avoided

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity]);

//accountId = "345342342"
//not permitted because accountID is declared with const keyword

accountEmail = "swarajs@gmail.com"
accountPassword = "34324"
accountCity = "Jamshedpur"
console.table([accountId,accountEmail,accountPassword,accountCity]);


//try to avoid using var keyword due to issue in block scope and functional scope