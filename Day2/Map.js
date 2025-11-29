/*
Note : Creates a NEW array by applying a function to each element.
Use when: You want to transform each value → new array.
Sytanx: let newArr = arr.map((element, index, array) => { ... });
*/
let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2);

console.log(doubled); // [2, 4, 6]
