const prompt  = require('prompt-sync')();
var a,b,c;
console.log("Enter the four nunbers: ");
a = parseInt(prompt()) ; 
b = parseInt(prompt()) ;
c = parseInt(prompt()) ;
d = parseInt(prompt()) ;
console.log("The numbers entered    are: " + a + "," + b + "," + c  + "," + d);


if(a > b)
{
    if(a > c)
    {
        if(a > d)
        {
            console.log("A is greater");
        }
        else
        {
            console.log("D is greater");
        }
    }
    else
    {
        if(c > d)
        {
            console.log("C is greater");
        }
        else
        {
            console.log("D is greater");
        }
    }
}
else
{
    if(b > c)
    {
        if(b > d)
        {
            console.log("B is greater");
        }
        else
        {
            console.log("D is greater");
        }
    }
    else
    {
        if(c > d)
        {
            console.log("C is greater");
        }
        else
        {
            console.log("D is greater");
        }
    }
}


