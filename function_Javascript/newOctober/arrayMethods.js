let arr =[1,2,3,4,5]
let v = arr.toString();
console.log(v);
let c = arr.join("_");
console.log(c,typeof c);
arr.pop();
let r = arr.pop(); // pop returns poped element 
console.log(arr)    
//new array is returned element is pushed added from the last index and vice versa in pop
arr.shift(); //new array is returned element is deleted from the first index and vice versa in unshift 


let arr1 = [3,5,6,7,78]
 delete(arr1[3])
// console.log(arr1) //
//delete(arr1[8]) does nothing because it does'nt exist
console.log(arr1) //
let a = arr.concat(arr1);
console.log(a) //
let vt = [3,6,784,3,2,2,6,7];
vt.sort();
console.log(vt) // modifies the original array  


// sorting with the compare function
let compare = function (a, b) {
    return a-b; // or b-a for decending order
}
let arrayToSort  = [4,6,3,4,7,2,1];
arrayToSort.sort(compare);
console.log(arrayToSort) // modifies the original array




console.log(arrayToSort.reverse()); // modifies the original array

//splice and slice
//splice
let num = [3,3,2,6,6,1,,6,21,43];
num.splice(3,2,1,1);
console.log(num); //first element start,numof elements delete then add as much elements from that index
//slice
let num2 = [31,311,52,3,16,13,64,211,43];
let returnedarray =  num2.slice(4); //returns new array from the index 4
console.log(returnedarray);
console.log(num2);
let newarray = num2.slice(2,6); //returns new array from the index
console.log(newarray);
//end is not included


