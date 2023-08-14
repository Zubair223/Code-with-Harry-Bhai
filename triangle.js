for(i=0 ; i< 5; i++)
{
    for(j = 0 ; j < 4-i ; j++)
    {
        process.stdout.write(' ');
    }
    for(k = 0 ; k <= i ; k++)
    {
        process.stdout.write('* ');
    }
    for(l = 0 ; l < 4-i ; l++)
    {
        process.stdout.write(' ');
    }
    console.log();
}