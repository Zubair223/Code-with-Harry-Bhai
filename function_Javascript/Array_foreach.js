const prompt  = require('prompt-sync')();
let arr = [];
for (var i = 0; i < 5; i++) 
{
    arr[i] = prompt("Enter the array at index ");
}
for (var i = 0; i < 5; i++) 
{
    console.log(arr[i]);
}

for(let i = 0 ; i < 5; i++)
{
    arr.forEach( () => {
        console.log("Hello world")
    })
}

