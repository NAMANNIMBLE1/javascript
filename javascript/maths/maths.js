const balance = 10;
const number = new Number(10);
console.log(balance);
console.log(number);

console.log(number.toString());

console.log(number.toFixed(2)); // prewcision value decimal

const price = new Number(34.443765634);

console.log(price.toFixed(3));

console.log(price.toPrecision(3)); // include before decimal

console.log(price.toLocaleString('en-IN'));


console.log(Math);

console.log(Math.abs(-4)); // nev to pos

console.log(Math.cos(30));

console.log(Math.min(3,2,4,5,6,4));

const random = (Math.random()*10);

console.log(random + 1);


const min = 10;
const max = 20;
//im[p]
let num =  Math.floor(Math.random() * ((max-min+1) + min ))

console.log(num);

