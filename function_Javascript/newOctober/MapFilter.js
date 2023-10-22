//ForEach is used with the given array for some manipulation
//Map is used  return and to create a new array do manipulation
let arr = [3,6,2,32,64];
arr.map((item) =>{
    console.log(item);
})
let x = arr.map((item,index) =>{
return item + index;
})

console.log(x); //i.e returns new array
    let arr2 = [3,6,2,32,64];
   let a =  arr2.filter(function a(item){
if(item <= 10){
    return item;
}
    })
    console.log(a); //filter returns only true values
   let b =  arr2.map(function a(item){
if(item <= 10){
    return item;
}
    })
    console.log(b); //map returns all values 
    //original arr not change