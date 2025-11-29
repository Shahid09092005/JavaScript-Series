// Note : Checks if ANY element satisfies condition → returns true/false
// Use when: You want to know if at least one value passes.

let nums = [1, 2, 3];
console.log(nums.some(n => n > 2)); // true
console.log(nums.some(n => n > 5)); // false
