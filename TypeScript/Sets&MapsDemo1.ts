let mySet=Object.create(null);
mySet.id=1;
if(mySet.id)
{
    console.log(mySet+"Id Exists");
}

let myMap=Object.create(null);
myMap.name="Rajeshwar";
let val=myMap.name;
console.log(val);

myMap[100]="Hello";
console.log(myMap["100"]);

let obj1={};
let obj2={};

myMap["obj1"]="World";

console.log(myMap["obj1"]);
console.log(obj1.toString());
console.log(obj2.toString());