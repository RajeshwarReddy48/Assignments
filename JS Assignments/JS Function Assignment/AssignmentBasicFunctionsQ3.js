
function isEven(num)
{
    for(let i=0;i<num;i++)
    {
        if(num%2==0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

console.log("The first Even element in the array:"+[2,3,4,5,6].find(isEven));
