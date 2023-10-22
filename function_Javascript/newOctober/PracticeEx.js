const prompt  = require('prompt-sync')();
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  var randomInt = getRandomInt(1, 100); // Generates a random integer between 1 (inclusive) and 11 (exclusive)
  let count=0;
  do
  {
      var user = Number.parseInt(prompt("Enter the number "));
      count ++;
  //console.log(randomInt);
 // let x = 100 - user;
  if(user  == randomInt)
  {
    console.log("The number is equal to the ", randomInt);
}
else if(randomInt < user)
  {
    console.log("The random number is less than", user);
  }
  else if(randomInt > user)
  {
    console.log("The random number is greater than ", user);
  }
}while(user != randomInt);
console.log("The number of guesses it took is",count ,"and the score is ", 100 - count);