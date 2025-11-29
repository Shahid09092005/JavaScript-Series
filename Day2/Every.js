// Note : Checks if ALL elements satisfy condition → returns true/false
// Use when: You want to confirm every element passes.

let nums = [2, 4, 6];

console.log(nums.every(n => n % 2 === 0)); // true
console.log(nums.every(n => n > 3)); // false
