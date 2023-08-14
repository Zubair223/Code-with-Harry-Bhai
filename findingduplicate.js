const prompt  = require('prompt-sync')();
let arr ={} ;
for(let i=0;i<10;i++)
{
    arr[i] = parseInt(prompt("Enter your array"));
}
console.log("Traversing array...");
for(let i=0;i<10;i++)
{
    console.log(arr[i]);
}
