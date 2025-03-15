// Array methods

const marvelHeroes  = ["Thor","IronMan","Spiderman"];
const dcHeroes = ["Superman","Flash","Batman"];

marvelHeroes.push(dcHeroes)

console.log(marvelHeroes);
console.log(marvelHeroes[3][1]);

const newHeroes = marvelHeroes.concat(dcHeroes);   // It will returns new array consisting of both arrays.
console.log(newHeroes);


const new_all_heroes = [...marvelHeroes, ...dcHeroes];   // same as concat.
console.log(new_all_heroes);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = anotherArray.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("Chandu"));
console.log(Array.from("Chandrakant"));
console.log(Array.from({name: "Chandu"}));  // Intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));