//Simple arguements passed

// function add(x,y){
//     let c = x + y;
//     return c;
// }
// let sum = add(4,2);
// console.log(sum);



//This is the arguements passed general function because of the 'argument' keyword
function add(){
    let sum = 0;
for(var i=0;i < arguments.length;i++)
{
    sum = sum + arguments[i];
    
}
console.log(sum);
}
 add(4,2);
 add(4,6,8,3);
 add("Hello, world!",4,"My World!",true,null,undefined);



