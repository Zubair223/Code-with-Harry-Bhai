// Program for factorial of a number
const prompt  = require('prompt-sync')();

var num ;
 num =prompt("Enter the number");
 
 let fact=1;
//  for(;num >0;num--)
//  {
//     fact = fact * num;
//  }
//  console.log(fact); // 5 * 4 * 3 * 2 * 1'

for(var i=0;i<num;num--) // 0 <5,1<4,2<3,3<2
{
    fact = fact * num;
    
}
console.log(fact); // 5 * 4 * 3 * 2 * 1'