// let's learn about the array

let arr = [12, 23, 4, 556, 7];

// length
let tem = arr.pop(); // it will return the last element from array
// console.log(tem);

arr.push(120); // it will push the element at last
// console.log(arr);

// shift()  return first element from the array
// unshift() // insert the element at begining

// join() // method use to convert the all array element in string by joining with specific character

// const tempCopy = arr.copyWithin(target,starting,end);

// console.log(tempCopy);

let subArr = [
  [12, 24],
  [2, 45, 6],
];

subArr.flat(); //it will create the new array by elemiting all the subarry into single new array

let num = [123, 43, 656, 7, 78];

let result = num.find((element) => element < 10); // it will return the number or value which full fill the condition

let filterResult = num.filter((element) => element < 10); // it works same as result but it return array

let temNum = (element) => element === 7;
// findIndex() method takes the function as argument and return the index of element with
// findLast() it works as same as findIndex() but it return the last index

// forEach() will iterate with every element
//  num.forEach((element)=> {
//    console.log(element);
// })

// Array.include() return the boolean value
// indexOf() return index if there is avilable of element if not it will return -1

// Map() also return the new array

let newTempArr = [12, , 34, 56, 7, 78, 2];

let ans = newTempArr.reduce((acc, curr) => {
  return acc < curr ? acc : curr;
});

// program to calculate the smallest value in array
// console.log(ans);
