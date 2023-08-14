const prompt  = require('prompt-sync')();
console.log("Quadratic equation ax2 + bx + c   where a != 0")
let a,b,c;
a = parseInt(prompt("Enter value of a "));
b = parseInt(prompt("Enter value of b "));
c = parseInt(prompt("Enter value of c "));

let d;
 d = (b*b) - 4 * (a) * (c) ;

x1 = (-b + Math.sqrt(d)) / (2*a);
x2 = (-b - Math.sqrt(d)) / (2*a);
console.log(x1 +" and "+  x2);


