const x = function() 
{
    console.log("hello world!");
}
x();
const y = function add()
{
    console.log("hello world2!");
}
y();
const z = () =>{
    console.log("hello world3!");
}
z();
 (() =>{
    console.log("hello world4 o.....!");
})();

setTimeout(() =>
{
    console.log("hello world");
},5000);

setInterval(() =>{console.log("hello world this is interval")},5000); //calls a function repeatedly

