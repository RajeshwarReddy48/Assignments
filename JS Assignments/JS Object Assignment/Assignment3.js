
function rectangle(height,width)
{
    this.height=height;
    this.width=width;
}
rectangle.prototype.getArea2=function()
{
    return this.height*this.width;
}

var rect=new rectangle(10,5)
rect.height=50;
console.log("Area taken from constructor is " + rect.getArea2())