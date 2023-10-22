setTimeout(() =>{
     console.log("This is the timeout function");
    }, 4000);
    
    
        let x= function fun()
        {
            console.log("This is the fun function");
        }
        //fun();

    //Now our own function like the setTimout

function setByZubair(fun) //where fun is the function passed and x,y are simple arguments
    {
         fun();
    }
setByZubair(x);





let y= function add(a,b)
{
    let c = a+b;
    console.log(c);
}
num = y;
//fun();

//Now our own function like the setTimout

function setByMe(y,a,b) //where fun is the function passed and x,y are simple arguments
{
 return y(a,b);
}
setByMe(num,4,6);
