// Primitive

// 7 types : string, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = BigInt(123);
const bigNumber1 = 123n;

console.log(bigNumber === bigNumber1);

// Non-Primitive or Refrence Data Types

// Array, Objects, Functions

const heros = ["IronMan","Thor","CaptainAmerica"];

let myObj = {
    name1 : "Chandrakant",
    age : 21
}

const myFunction = function(){
    console.log("Hello Chandu");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);



