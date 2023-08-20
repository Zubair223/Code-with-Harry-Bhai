// An IIFE (Immediately Invoked Function Expression) is a function that runs the moment it is invoked or called in the JavaScript event loop


// function is called just  after the fucntion defintion is executed
(function(x=4,y=5){
    console.log(x+y);
})();
//The above function will add the number in literal as a parameter in function defintiion
//but if we pass the arguement then parameters will be arguement passed not the default value.
//Below is the function
(function(x=4,y=5){
    console.log(x+y);
})(3,5);
