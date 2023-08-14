const prompt  = require('prompt-sync')();
console.log("Quadratic equation ax2 + bx + c   where a != 0")
let a,b,c;

//c = parseInt(prompt("Enter value of c "));
find = prompt("Enter value to find among current ,voltage and resistance");
let e; //voltage
if(find == "voltage")
    {
        i = parseInt(prompt("Enter value of current "));
        r = parseInt(prompt("Enter value of resistance "));
         e = i * r;
        console.log(e);
    }

else if(find == "current")
    {
        e = parseInt(prompt("Enter value of voltage "));
        r = parseInt(prompt("Enter value of resistance "));
        i = e / r;
        console.log(i);
    }
else if(find == "resistance")
    {
        i = parseInt(prompt("Enter value of current "));
        e = parseInt(prompt("Enter value of voltage "));
         r = e / i;
        console.log(r);
    }


