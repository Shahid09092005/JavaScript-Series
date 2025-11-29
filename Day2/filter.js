// Note : Creates a NEW array with elements that satisfy a condition.
// Use when: You want to filter out unwanted values.
  
let nums = [10, 20, 30, 40];
let bigNums = nums.filter(n => n > 20);

console.log(bigNums); // [30, 40]
