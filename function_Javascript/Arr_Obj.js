arrObject = {
    firstName: 'Zahid',
    lastName: 'Neaka',
    profession : 'Programmer',
    Age : 37
};
// console.log(arrObject);
// console.log(arrObject.firstName)
// console.log(arrObject.Age)
for(var i = 0; i < Object.keys(arrObject).length; i++)
{
    console.log(Object.values(arrObject)[i]);
    console.log(Object.keys(arrObject)[i]);
    console.log(arrObject[Object.keys(arrObject)[i]]);
}

