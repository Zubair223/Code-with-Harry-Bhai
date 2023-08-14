const marks = {
ZahidSir : 80,
Zaid : 60,
Kafeel : 70,
}
console.log("The Key value pairs are as" ,marks["Kafeel"]);
console.log("The Key value pairs " ,marks);
//console.log("The Key value pairs are as" ,marks[Kafeel]); 
//above does not work because double quotes: 
console.log("The Key value pairs are as" ,marks.ZahidSir); 
for(var i=0; i<Object.keys(marks).length; i++) 
{
    console.log("The marks of ",Object.keys(marks)[i]," are", marks[Object.keys(marks)[i]]);
}

