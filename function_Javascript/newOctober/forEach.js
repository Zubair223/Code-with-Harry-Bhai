
let name = "Hello world!"
let a = Array.from(name); // it is used to create a array from an object
console.log(a);
let obj = {
    name: "zubair",
    rollNo : 36
}
    let newArr = Object.keys(obj) 
console.log(newArr);

//ForEach Loop
let arr = [4,5,6,7,8,9,10,11,12,13];
arr.forEach(function(data,index,arr){
    arr[index] = data * data;
})
arr.forEach((newdata) => {
    console.log(newdata);
    });


    // let name = "Hello world!"
    // let a = Array.from(name);
    // console.log(a);
    for(i of arr) //gives the values of array
    {
        console.log(i+"-");
    }
    for(i in arr) // gives the index like keys in objects
    {
        console.log(i);
    }
    for(i of Object.values(obj)) //gives the values of array
    {
        console.log(i);
    }
    for(i in obj) // gives the index like keys in objects
    {
        console.log(i);
    }