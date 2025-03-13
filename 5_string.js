// Strings

const name = "Chandrakant";
const repoCount = 50;

// console.log(name + repoCount + " value ");

// String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Chandu-Netam-Chandrakant-Netam');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(3));
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,5);
console.log(newString);

const anotherString = gameName.slice(2,4);
console.log(anotherString);

const newString1 = "    chandrakant  ";
console.log(newString1);

const newString2 = newString1.trim();
console.log(newString2);

const url = "https://www.chandu.com/name%20chandu";
console.log(url.replace('%20','-'));

console.log(url.includes('chandu'));
console.log(url.includes('Chandrakant'));


console.log(gameName.split('-'));
