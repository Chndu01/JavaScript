// Variables

const accountId = 144553;   // Declaring  variable using "const"
let accountEmail = "chandu@gmail.com";   // Declaring variable using "let"
var accountPassword = "12345";   // Declaring variable using "var"
accountCity = "Raipur"; // This way, it can be declared a variable but shouldn't be used.
let accountHolder;

/*
 { 
    } this is a scope in javascript  

  Prefer not to use var
  because of issue in block scope and functional scope

*/ 

console.table([accountId, accountEmail, accountPassword, accountCity, accountHolder]);

//  accountId = 2;    TypeError: Assignment to constant variable.
accountEmail = "C@gmail.com";
accountPassword = "123CHANDU";
accountCity = "Jaipur";

console.table([accountId, accountEmail, accountPassword, accountCity, accountHolder]);

// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);
// console.log(accountId);


