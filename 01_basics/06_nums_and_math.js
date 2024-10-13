const number=100
console.log(number);

const newNum=new Number(100)
console.log(newNum);

console.log(newNum.toString().length);
console.log(newNum.toFixed(2));

const another=123.7567
console.log(another.toPrecision(2));


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)