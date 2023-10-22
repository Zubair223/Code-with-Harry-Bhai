//reduces an array to a single element
let arr = [5,8,3,2,1];
let hello = function(item)
{
    return item + item
}
let item = arr.reduce(hello)
console.log(item);// adds all the items 
