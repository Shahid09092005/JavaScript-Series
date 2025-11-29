// Note : Spread operator expands arrays or objects.

// copy an array
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

// Merge Array
const a = [1, 2];
const b = [3, 4];

const c = [...a, ...b];
console.log(c); // [1, 2, 3, 4]

// add values
const d= [...c.7,8,9] // [1,2,3,4,7,8,9] 
