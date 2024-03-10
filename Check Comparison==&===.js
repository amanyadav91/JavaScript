const a = 1;
const b = "1"; //its a string
console.log(a == b); // Output: true
// due to type coercion
console.log(a === b); // Output: false

const c = 0;
console.log(a==c); // Output: false
console.log(a==b); // Output: True Cause its a string and not a number
// for checking the type of the variable always use ===
// use parseFloat parseInt for converting the string to number
console.log(a!==b)