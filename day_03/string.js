// let's learn all about string
// string is primitive datatype

let username = "Bhaskar";

// all method of string

// uppercase ,lowercase

let temp = username.charAt(0); // it will return the first character i.e B 
// console.log(temp);


let code = username.charCodeAt(0); // it will return 66
// console.log(code);

let letter = username.at(0); // it will return the first letter 
// console.log(letter);


// different other method of string
let sliceName = username.slice(0,3); //slice(start,end)
// console.log(sliceName);


let subString = username.substring(0,3); // substring(0,3);
// console.log(subString);


// let's trim the string

let demo = "  demo  ";
let trimDemo = demo.trim();
// console.log(trimDemo.length); // it will log the length of string without the space


// repeate method 
let text = "Hello";
let tempText  = text.repeat(4); // it will repeate the string for 4 times
// console.log(tempText);


// replace method 
let line = "Hello world";
let temoLine = line.replace("world","Coders"); // it will replace the world with coders
// console.log(temoLine);


