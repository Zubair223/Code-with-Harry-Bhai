const prompt  = require('prompt-sync')();
arr1 = [100000,80000,60000,40000,20000,10000]

arr2 = ["Zahid", "Zubair","Towqeer", "Kafeel", "Kaheel", "Zaid"]
console.log("Enter the name of the employee");
    var name = prompt();
arr1.map(function(element,index){
    
    console.log(element);
    return element;                     //forEach does not return
}).map((element,index)=>{
    if(name.toLowerCase() == arr2[index].toLowerCase())
    {
        arr1[index] = element + 10000;
    }
    else
    {
        console.log();
        return 0;    //it actually returns some thing does not go below
       // exit(0);
    }
    
    // if(arr1[0] =  arr2.name)
    // {
    //     arr1.index = arr1.item + 10000;
    // }
    // console.log(element);
    // console.log(arr2);
    console.log(arr1);
});