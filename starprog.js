const prompt  = require('prompt-sync')();


//Program for star left side one to five top to bottom
for(var i=0 ; i<= 5 ; i++) 
{
    for(var j=0 ; j< i ; j++)
    {
        process.stdout.write('*');
    }
    console.log();
}

console.log();
//Prog for star left side five uper down ward one star
for(let i = 0 ; i<5 ;i++)
{
    for(let j = 0 ;j<5-i  ; j++)
    {
        process.stdout.write('*');
    }
    console.log();
}

console.log();

//Prog for star left side five uper down ward one star
for(let i=0 ;i<5  ;i++  )
{
    for(let j=0 ;j<5-i  ;j++)
    {
        process.stdout.write('*');
    }
    console.log();
    for(let k =0; k<=i ;k++ )
    {
        process.stdout.write(' ');
    }
}
console.log();
//Program for star right side one to five top to bottom
for(let i=0 ; i<5 ; i++  )
{
    for(let j=0 ; j<4-i ;j++ )
    {
        process.stdout.write(' ');
    }
    for(let k=0 ; k<=i ; k++ )
    {
        process.stdout.write('*');
    }
    console.log();
}
