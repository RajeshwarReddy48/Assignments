const compose=(f1,f2)=>value=>f1(f2(value))

const double=(x)=>{
    return x*2;
}

const square=(x)=>
{
    return x*x;
}

const composedValue=compose(square,double);
console.log("The value of composed function is: "+composedValue(5));