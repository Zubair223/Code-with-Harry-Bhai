const prompt  = require('prompt-sync')();

var i=1 , num , table;

num = parseInt(prompt("Enter number to get table of"));
if(num == '2')
{
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));

}
else if(num == '3')
{
    i=1;
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));

}
else if(num == '4')
{
    i=1;
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));
    i++;
    console.log(num + "*" + i + "=" + (num * i));

}
else
{
    console.log(`Wrong choice entered:`);
}