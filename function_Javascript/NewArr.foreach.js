const prompt  = require('prompt-sync')();
let arr = new Array(10,2); // with the second arguement array is now with two elements 
console.log(arr);
//output is [10,2]
let arr1 = new Array(10); // if there is single arguement it is considered length of an array
//output is [10 empty elements]
console.log(arr1);

//Difference between forEach and filter is actually same but slight difference is forEach can not return value and chaining while as the filter can do 

for(let i = 0; i < 10; i++)
{
    arr1[i] = prompt("Enter the elements on the index " );
}
arr1.forEach((item) => console.log("hello this is me"+item));
let sum=0;
let arr2 = arr1.map((item) => 
{
    let temp = item * 2;
    console.log("The new elements are:" + temp);
    return temp;
});
console.log("The new" + arr2);
let arr3 = arr2.map((item) => 
    {
        let temp = item * 2;
    console.log("The new elements are:" + temp);
    return temp;
    });
let arr4 = arr3.map((item) => 
    {
        let temp = item * 2;
    console.log("The new elements are:" + temp);
    return temp;
    });
let arr5 = arr4.map((item) => 
    {
        let temp = item * 2;
    console.log("The new elements are:" + temp);
    return temp;

});



 arr4.map((item) => 
    {
        let temp = item * 2;
    console.log("The new elements are:" + temp);
    return temp;
    }).map((item) => 
    {
        let temp = item * 2;
    console.log("The new elements are:" + temp);
    return temp;
    }).map((item) => 
    {
        let temp = item * 2;
    console.log("The new elements are:" + temp);
    return temp;
    })






