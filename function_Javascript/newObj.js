// if there is A statement in a function then there is no need to                        write return keyword the statement will automatically return
//Another thing to remind is that forEach does not support chaining because can't return the value it is necessary to return something to get chaining which can be done in map method or more like filter etc.
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
Arr_Object.map( element => 
    {
    //Only Firstnames
    console.log(element.firstName);     
    return element;
    }).map((element)=> {
    console.log(element.lastName)
    return element;}
    ).map((element)=>{ console.log(element.Address) ;return  element}
    ).map((element)=> console.log(element.Profession) );
