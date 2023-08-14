let name ;
name = "banana";
console.log(name); // prints the string
console.log(name.length); // prints the length of the string
name = "banana\'";
console.log(name); // prints the string
console.log(name.length); // prints the length as escape sequence 1 character /"
console.log(name.toUpperCase()); // prints the string in Upper case it is a function"
console.log(name.toLowerCase()); // prints the string in Lower case it is a function"
console.log(name.slice(3,5)); //prints the substring includes the range not end of index
console.log(name.slice(3)); // prints all the string from the index takes one also
console.log(name.replace("bana","la")); // replaces the substring with other characters
console.log(name.concat("also")); // replaces the substring with other characters
var n = "Hello World";
console.log(name.concat(n)); // combines the first string with the second string
var x = "Hello World    ";
console.log(x.trim().length); // trims the white spaces before and after the string
console.log(name.charAt(0));
console.log(name.charAt(6));//gives me the character on the index
var i= "What are you doing";
console.log(i.indexOf(' ')); // prints 4 the index is the space
console.log(i.indexOf('d')); // prints 13 the index of d
const a = (name.valueOf());

console.log(a);
console.log("Below is the substring")
var y = "This is string"
console.log(y.substr(6,8)); //substr starts 1st arg from and second the length of the string
console.log(y.substring(2,8)); //substr starts 1st start from and second the length of the string