const options = {
    'math' : 90,
    'science' : 90,
    'urdu' : 90,
    'english' : 90,
    'kashmiri' : 90,
}
console.log(options);
console.log(options['math']);
//console.log(options[90]);
const prompt  = require('prompt-sync')();
//program for linear search
// let arr = [];
// let x;
// for(i=0; i< 10; i++) {
// arr[i] = parseInt(prompt("Enter the values of an array"));


// }
// num = parseInt(prompt("Enter the number to search"));
// //for(i=0; i< 10; i++)
// flag = 0;
// for(i=0; i< 10; i++)
// {
 
//     if(arr[i] ==  num)
//     {
//         //console.log("Number is found at index " , i);
//         flag = 1;
//         break;
//     }
//     // else
//     // {
//     //     console.log("Number is not found", i);
//     // }
    
// } 
    
    
//     if(flag == 1)
//     console.log("Number is found at index " , i);
//     else
//     console.log("Number is not found", i); //index is 10 because it searched whole array

    

//program for binary search


let arr = [];
let x;
for(i=0; i< 10; i++) {
arr[i] = parseInt(prompt("Enter the values of an array"));


}
let num = parseInt(prompt("Enter the number to search"));
let start,mid,end;
start = parseInt(0),end = parseInt(arr.length-1), mid = parseInt((start + end) / 2);
//for(i=0; i< 10; i++) 
let flag=0;
while(start  <= end)
{
    if(num == arr[mid]) //Math.trunc() (truncate fractional part, also see below)
    // Math.floor() (round down)
    // Math.ceil() (round up)
    // Math.round() (round to nearest integer)
    {
        flag=1;
        break;
    }
    else if( num < arr[mid] )
    {
        end = mid-1;
       (mid) =  parseInt((start + end) / 2);
    }
    else if( num > arr[mid] )
    {
        start = mid+1;
       (mid) =  parseInt((start + end) / 2);
    }
    // else
    // {
    //     console.log("Number not found");     // not needed here will never come in else
    // }

}
if(flag == 1)
{
    console.log("Number found at index " , mid);
}
else
{
    console.log("Number not found");
}


