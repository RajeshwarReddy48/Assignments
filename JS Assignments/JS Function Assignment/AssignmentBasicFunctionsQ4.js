let numbers=[4,9,16,25,36];
let squares=[];
let squareRoot=[];

numbers.forEach(num=>squares.push(num*num));
numbers.forEach(nums=>squareRoot.push(Math.sqrt(nums)));
console.log(squares);

console.log("The squares of the numbers are :[" +squares +"]");
console.log("The square root of the numbers are :[" +squareRoot+ "]");