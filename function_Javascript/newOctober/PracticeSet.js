const prompt  = require('prompt-sync')();
// let arr_num = [3,53,2,2,4,6,32,2];
// while(1)
// {
//     let userNum = parseInt(prompt("Please enter the data"));
//     if(userNum != 0)
//     {
//     arr_num.push(userNum);
//     console.log(arr_num);
//     }
//     else
//     {
//         break;
//     }
// }




let ToFilter = [3,5,52,2,5,50,70,2,2,20];
let MappedArray = ToFilter.map(function(item){
    if(item%10 == 0)
    {
        return item;
    }
    else
    return 0;
});
console.log(MappedArray);
let FilteredArray = ToFilter.filter(function(item){
    if(item%10 == 0)
    {
        return item;
    }
    else
    return 0;
});
console.log(FilteredArray);




let DoubleArray = [4,6,3,2,6,2,21];
let Double = function(item,index,arr){
    arr[index] = item * 2;
}
DoubleArray.forEach(Double);
console.log(DoubleArray);

let fact=1;
let reduceArr = [1,2,3,4,5,6,7,8,9,10];
let a = reduceArr.reduce((num1,num2)=>{
   return num1 * num2;
})
console.log(a);