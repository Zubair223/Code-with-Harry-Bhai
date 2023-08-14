const abc={
    a : 0,
    b : 1,
    c : 2,
    d : 3
}
for(var i in abc)
{
    console.log("The key value is ",i);
}
for(let x =0 ; x < Object.keys(abc).length ; x++)
{
    console.log(`The value of key ->`, Object.keys(abc)[x],`is `,abc[Object.keys(abc)[x]])

}