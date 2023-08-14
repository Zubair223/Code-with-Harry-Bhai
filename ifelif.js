const prompt  = require('prompt-sync')();
var x,y,z;
console.log("Menu driven program calculatar");
console.log("Enter + for addition");
console.log("Enter - for subtraction");
console.log("Enter * for ");
console.log("Enter / for addition");
console.log("Enter % for addition");

x= parseInt(prompt("Enter your first number"));
y= parseInt(prompt("Enter your second number"));

var choice = prompt("Enter your choice");
if(choice == "+")
{
    z = x + y;
    console.log(`The addition of two numbers is ${z}`);
}
else if(choice == "-")
{
    z = x - y;
    console.log(`The subtraction of two numbers is ${z}`);
}
else if(choice == "*")
{
    z = x * y;
    console.log(`The multiplication of two numbers is ${z}`);
}
else if(choice == "/")
{
    z = x / y;
    console.log(`The division of two numbers is ${z}`); //quotient
}
else if(choice == "%")
{
    z = x % y;
    console.log(`The modulus of two numbers is ${z}`); //reminder
}
else
{
    console.log(`You entered wrong choice`);
}


