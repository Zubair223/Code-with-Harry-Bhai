const prompt  = require('prompt-sync')();

let arr = [];
console.log("Enter the array");
for (let i = 0; i < 5; i++)
{
    arr[i] = prompt();
}
console.log("Displaying the array");
for (let i = 0; i < arr.length; i++)
{
    console.log(arr[i]);
}

function double_array(item)
{
    let item2 = item * 2;
    return item2;
}
let double_arr = [];
for (let i = 0; i < arr.length; i++)
{
    let p = double_array(arr[i]);
    double_arr.push(p);
}
console.log("Displaying the new double array");
for (let i = 0; i < double_arr.length; i++)
{
    console.log(double_arr[i]);
}
