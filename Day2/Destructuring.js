// Note : Destructuring means unpacking values from arrays or objects into separate variables.
const arr = [10, 20, 30];
const [a, b, c] = arr;
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

// skip value
const[a,,c] // [10,30]
// work with object
const user = {
  name: "Shahid",
  age: 20,
  city: "Delhi"
};

const { name, age } = user;

console.log(name); // Shahid
console.log(age);  // 20
// Rename the variables
const { name: userName, age: userAge } = user;

