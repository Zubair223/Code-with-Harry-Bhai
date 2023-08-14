
const prompt  = require('prompt-sync')();

let num = prompt("Enter the number");
if(num >= 10 && num <= 20)
console.log("The number",num ," lies between 10 and 20");
else
{
    console.log("The number does not lie between 10 and 20");
}





//question number 3
let n = prompt("Enter the number to find");
if(n % 2 == 0 && n % 3 == 0)
console.log("The number is divisible by 2 and 3");
else if(n % 2 == 0 ||  n % 3 == 0)
if(n % 2 == 0)
console.log("The number is divisible by 2");
else
{
    console.log("The number is divisible by 3");
}

else
{
    console.log(n," is not divisible by 2 and 3");
}



//question 4
let age;
age = prompt("Enter your age");
/*
console.log((age>= 18) ? "You can drive" : "You can not drive.");*/
//or

var a = ((age>= 18) ? "You can drive" : "You can not drive.");
console.log(a);