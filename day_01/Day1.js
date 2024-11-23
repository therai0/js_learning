// day one of re-learning js 

// let's learn about how variable are use to declare in js 

const userid = "1228989";
// once if  you use the const key word to declare the varilable then you can't re-define the same value

// userid = 123445; // it use to throw the error that assignment to constant varaible



let username = "Messi";

// we can re-define the username
username = "Ronaldo"; //now the value of the username become Ronaldo


// even we can use the var key word to declare the variable

var dog = "Puppy";


// another way to declare the variable is without the any keyword
price = 12000;



// this is the real actual difference between the var and let keyword in scope
// 

let age = 100;
var isValid = false;
if (age > 20) {
    var isValid = true;
    //   console.log(isValid);
}
// console.log(isValid);



let isValidage = false;
if (age > 20) {
    let isValidage = true;
    //    this isValidage variable is different then isValidage which is out the if block so while again declaring
    // the new variable with same it will be valid for particular scope 
    console.log(isValidage); //output will be true
}
console.log(isValidage); //output will be false



// always recommend to use the let and const key work varaible
