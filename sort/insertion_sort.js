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


for(let j = 1; j < 5; j++)
{
    i=j-1;
    key = arr[j];
    while(key < arr[i] && i > 0)
    {
        
        arr[i-1] = key;
        arr[j] = arr[i];
        i--;
    }
    arr[i+1] = arr[i];
}
    console.log("The given array is");
    for (let i = 0; i < 5; i++)
    {
        console.log(arr[i]);
    }
