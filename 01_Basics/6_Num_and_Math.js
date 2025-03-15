// Number and Math

const score = 400 ;
console.log(score);

const balance = new Number(100);
console.log(balance);   // Console it on Google Chrome for more methods and functions.

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumer = 34.456;
const otherNumer1 = 34.556;

console.log(otherNumer.toPrecision(2));
console.log(otherNumer1.toPrecision(2));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

/////      Math       /////

console.log(Math);

console.log(Math.abs(-5));
console.log(Math.round(34.5));
console.log(Math.floor(34.5));
console.log(Math.ceil(34.4));
console.log(Math.min(2,3,4,5));
console.log(Math.max(3,3,2,44,3,232,33));

console.log(Math.random());  // Only between 0 to 1 
console.log(Math.random()*100);
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);


console.log(Math.sqrt(25));


const min = 10;
const max = 20;

console.log(Math.random()* ( max - min + 1));
console.log(Math.floor(Math.random() * (max - min + 1 )) + min);
 









