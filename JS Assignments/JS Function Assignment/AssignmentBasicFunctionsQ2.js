
const compose2=(a1,a2)=>(data)=>a1(a2(data));

const double2=(v)=>
{
    return v*2;
}

const square2=(v)=>
{
    return v*v;
}
const composedValue2=compose(square2,double2);
const composedValue3=compose(double2,square2)

console.log("The value of the function: "+composedValue2(5));
console.log("The value of the function: "+composedValue2(10));
console.log("The value of the function: "+composedValue3(5));
console.log("The value of the function: "+composedValue3(10));