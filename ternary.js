const prompt  = require('prompt-sync')();
var x;
x = prompt("Enter number to check using ternary operator");
console.log("The number",(x> 4) ? "is greater" : "not greater");
