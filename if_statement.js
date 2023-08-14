//write a program to find even odd
//y = 6;
const prompt  = require('prompt-sync')();
let num = parseInt(prompt("Enter a number"));
if (num%2 == 0) {
console.log("Number is a even number",typeof num);
}
else {
  console.log("Number is an odd number");

}
//let x = confirm("Enter a num");

//switch number
console.log("Enter 0 number is right");
console.log("Enter 1 number is ");
let num2 = parseInt(prompt("Enter choice"));


switch( num2)
{
    case 0:
        console.log("The number is right");
        break;
    case 1:
        console.log("The number is");
        break;
    default:
        console.log("The number is");

}

