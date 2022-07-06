let mySet2=new Set();
mySet2.add("Rajeshwar");
mySet2.add(1248);

let objd1={};
let objd2={};
mySet2.add(objd1);
mySet2.add(objd2);

console.log(mySet2.size);

let intSet= new Set([1,2,2,3,3,3,4,4,4,4,]);
console.log(intSet.size);

let stringSet= new Set().add("Rajeshwar").add("Nishanth");
console.log(stringSet.size);

console.log(intSet.has(2));
console.log(intSet.delete(1));
console.log(intSet.size);