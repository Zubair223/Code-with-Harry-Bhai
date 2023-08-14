const prompt  = require('prompt-sync')();
var a,b,c,d,e,f,g;
console.log("Enter the seven nunbers: ");
a = parseInt(prompt()) ;
b = parseInt(prompt()) ;
c = parseInt(prompt()) ;
d = parseInt(prompt()) ;
e = parseInt(prompt()) ;
f = parseInt(prompt()) ;
g = parseInt(prompt()) ;


console.log("The numbers entered    are: " + a + "," + b + "," + c + "," + d + "," + e + "," + f + "," + g);
if(a > b && a > c && a > d && a > e && a > f && a > g)
{
    console.log("A is greater");
}
else
{
    if(b > c && b > d && b > e && b > f && b > g)  
    {
        console.log("B is greater");
    }
    else
    {
        if(c > d && c > e && c > f && c > g) 
        {
            console.log("C is greater");
        }
        else
        {
            if(d > e && d > f && d > g)
            {
                console.log("D is greater");
            }
            else
            {
                if(e > f && e > g)
                {
                    console.log("E is greater");
                }
                else
                {
                    if(f > g)
                    {
                        console.log("F is greater");
                    }
                    else
                    {
                        console.log("G is greater");
                    }
                }
            }
        }
    }
}