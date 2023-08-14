var s= "Hello world!";
console.log(s);
var t= 4+s;
console.log(t);
// ans = 4HelloWorld!
  console.log(typeof(s));
// ans = string

const str ={
      "fname" :'zubair',
      mname :'altaf',
      is_lname :false,
      num: 1


}
// i=0;
// while(i< str.length)
// {
//     console.log(str[i]);
//     i++;
// }
console.log(str["fname"],str["mname"],str["is_lname"],str["num"]);
//  str = 5;
// console.log(str);
// str will not print says already declared
str['xyz'] = true;
console.log(str);


const dictionary = {
    appreciate: "recognize the full worth of.",
    ataraxia: "a state of freedom from emotional disturbance and anxiety.",
    yakka: "work, especially hard work."
}
console.log(dictionary);
console.log(dictionary.yakka);
console.log(dictionary['yakka']);
//above three are same

