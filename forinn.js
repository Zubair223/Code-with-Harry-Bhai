const prompt  = require('prompt-sync')();
let marks={
    abc : '49',
    xyz : '59',
    }
    var i;
    for(i in marks)
    {
        console.log("The marks of " + i , "are", marks[i]);
    }




    //Program to print the string until correct number  
    var c= prompt("Enter the number to match the string");
    if(c == 5)
    console.log("Correct number");
    else
    console.log("Try again");
