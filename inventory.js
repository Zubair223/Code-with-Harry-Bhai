const prompt  = require('prompt-sync')();
const product=[] , s_price=[] , c_price=[];
let quantity=[] ;
//Inventory management system
for(let i=0; i<3;i++)
{
    console.log("Enter the product name");
    product[i] = prompt();
    console.log("Enter the cost price");
    c_price[i] = parseInt(prompt());
    console.log("Enter the selling price");
    s_price[i] = parseInt(prompt());
    console.log("Enter the quantity of products");
    quantity[i] = parseInt(prompt());
}

for(let i=0; i<3; i++)
{
    console.log(`Product ID          product name     selling price     cost price      quantity`);
    console.log(`${i}            ${product[i]}             ${s_price[i]}                 ${c_price[i]}             ${quantity[i]}`);

}

var name,address,phone;var ch;
name = prompt("Enter the name of the customer");
phone = prompt("Enter the phone number");
address = prompt("Enter the address");
let prod,sum=0;
do{

prod = prompt("Enter the product ID");

for(let i=0; i<3; i++)
{
    if(i == prod)
    {
        let q = prompt("Enter the quantity of product to buy");
        
        sum = sum + (q * s_price[i]);
        quantity[i] = quantity[i] - q;
    }
    
}    
    
    for(let i=0; i<3; i++)
{
    console.log(`Product ID          product name     selling price     cost price      quantity`);
    console.log(`${i}            ${product[i]}             ${s_price[i]}                 ${c_price[i]}             ${quantity[i]}`);

}

ch = prompt("Do you want to buy another product?\n"+"If Yes type y else type n");
}while(ch == 'y' || ch == 'Y')

console.log(`Total bill of the customer name ${name} is ${sum}`);