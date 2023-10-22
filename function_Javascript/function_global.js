
add();  // easily runs the function code
function add()
{
    console.log("Hey this is my add function which is global.");
}
x(); // Cannot access 'x' before initialization
let x = function message()
{
    console.log("Hey this is my message function ");
}
x(); //necessary to be called after initialization of x or we can say after fun declaration