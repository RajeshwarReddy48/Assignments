
let myMap2 = new Map();

myMap2.set("fname","Chandler");
myMap2.set("age", 30);

console.log(myMap2.get("fname"));

let ob1 = {};
let ob2 = {};

myMap2.set(ob1, 10);
myMap2.set(ob2, 20);

console.log(myMap2.get(ob1));
myMap2.delete("fname");
myMap2.clear();

console.log(myMap2.size);
console.log(myMap2.has("fname"));