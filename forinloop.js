let items;
items ={
mango:1,
orange:2,
banana:'3',
papaya:4
}
console.log(items);
console.log(items["mango"]);
var x;
for ( x in items)
{
    console.log(x); //for in loop iterates through all keys
}
for ( x of "items")
{
    console.log(x);// for off loop iterates through value e.g abc it will print a /n b /n c
}