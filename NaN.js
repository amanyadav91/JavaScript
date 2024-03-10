// Side effect of type coercion in JavaScript
const a="asdsDF";
console.log(parseInt(a)); // Output: true
console.log(parseInt(a)==NaN); // Output: true
// NaN IS NEVER EQUAL TO ANYTHING
console.log(parseInt(a)===NaN); // Output: false
console.log(isNaN(parseInt(a))); // Output: true