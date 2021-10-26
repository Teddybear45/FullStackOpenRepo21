//constant variable
const x = 1;
// variable which can be modified
let y = 5;
// variables in javascript are dynamic

console.log(x, y); // 1, 5 are printed
y += 10;
console.log(x, y); // 1, 15 are printed
y = "sometext";
// x = 4 // error: cannot assign to x because it is a constant

let z = 5;

console.log(z, x, y); // 5, 1, sometext are printed
