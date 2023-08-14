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
if(a > b)
{
    if(a > c)
    {
        if(a > d)
        {
            if(a > e)
            {
                if(a > f)
                {
                    if(a > g)
                    {

                    }
                    else
                    {

                    }
                }
                else
                {

                }
            }
            else
            {
                if(e > f)
                {
                    if(e > g)
                    {
                        
                    }
                    else
                    {
                        console.log("E is greater");
                    }
                }
                else
                {
                    if(e > g)
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
        else
        {
            if(d > e)
            {
                if(d > f)
                {
                    if(d > g)
                    {
                        console.log("D is greater");
                    }
                }
                else
                {

                }
            }
            else
            {

            }
        }
    }
    else
    {
        console.log("C is greater");
        if(c > d)
        {
            if(c > e)
            {
                if(c > f)
                {
                    if(c > g)
                    {
                        console.log("C is greater");
                    }
                    else
                    {

                    }
                }
                else
                {
                    
                }
            }
            else
            {

            }
        }
        else
        {

        }
    }
}
else
{
    if(b > c)
    {
        
    }
    else
    {

    }
}