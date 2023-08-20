const prompt  = require('prompt-sync')();
let top = -1;
let stk = new Array(5);

function overflow()
{
    // for(let i = 0; i < 5; i++)
    // {
        
    // }
    if(top > stk.length-1)
    {
        console.log("Stack Overflow");
    }
    else
    {
        top++;
        let num = prompt("Enter the number to push");
        stk[top] = num;
    }


}


function underflow()
{
    // for(let i = 0; i < 5; i++)
    // {
        
    // }
    if(top == -1)
    {
        console.log("Stack Underflow");
    }
    else
    {
        let num = stk[top];
        console.log("The poped element is " + num);
        top--;
    }


}
while(1)
{
    console.log("Enter 1 for push\n"+ "Enter 0 for pop\n"+ "Enter any number to exit");
    let x = prompt();
    if(x == 1)
    {
        overflow();
    }
    else if(x == 0)
    {
        underflow();
    }
    else
    {
        prompt("Press ENTER to exit...");
  break;
        
    }
}