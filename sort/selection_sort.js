const prompt  = require('prompt-sync')();
let arr = [];
console.log("Enter the array");
for (let i = 0; i < 5; i++)
{
    arr[i] = prompt();
}
console.log("The given array is");
for (let i = 0; i < 5; i++)
{
    console.log(arr[i]);
}
let min;
for (let i = 0; i < 5; i++)
{
     min = i;
    for(let j=i;j<5;j++)
    {

        if(arr[j] < arr[min])
        min = j;

       // arr[j] = min;
        
    }
    let temp =arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
    
}

console.log("The new array is");
for (let i = 0; i < 5; i++)
{
    console.log(arr[i]);
}