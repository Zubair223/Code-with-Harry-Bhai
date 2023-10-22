var Arr_Object = [{
    firstName : 'Zahid',
    lastName : 'Neaka',
    Address : 'Eidgah',
    Profession : 'Programmer'
},
{
    firstName : 'Zubair',
    lastName : 'Altaf',
    Address : 'Illahi Bagh',
    Profession : 'Student'
},
{
    firstName : 'Zaid',
    lastName : 'Tariq',
    Address : 'Soura',
    Profession : 'Student'
},
{
    firstName : 'Kafeel',
    lastName : 'Ahmad',
    Address : 'Buchpora',
    Profession : 'Student'
},
{
    firstName : 'Kaheel',
    lastName : 'Ahmad',
    Address : 'Buchpora',
    Profession : 'Student'
},
{
    firstName : 'Towqeer',
    lastName : 'Altaf',
    Address : 'Illahi Bagh',
    Profession : 'Student'
},
{
    firstName : 'Taufeeq',
    lastName : 'Irfan',
    Address : 'Sopore',
    Profession : 'Student'
},
{
    firstName : 'Tawseed',
    lastName : 'Irfan',
    Address : 'Sopore',
    Profession : 'Student'
}];


//Arr_Object.forEach((element)=> console.log(element));
//console.log(Arr_Object[1].firstName);
Arr_Object.forEach((element,index)=> {
    console.log("The first name of the first index "+index+" is " + element.firstName);
    console.log("The first name of the first index "+index+" is " + element.lastName);
    console.log("The first name of the first index "+index+" is " + element.Address);
    console.log("The first name of the first index "+index+" is " + element.Profession);
});