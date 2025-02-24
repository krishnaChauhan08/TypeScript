// it allows you to have only one specific value

// String literal types
let colorPick: "red" | "blue" | "green";
colorPick = "red"; // valid
// colorPick = "yellow"; // invalid
console.log(colorPick);

// Boolean literal types
let istrue: true;
// istrue = false; // invalid
istrue = true; // valid

// Numeric lietral types
let number: 1 | 2 | 3;
number = 1; // valid
// number = 4 ; // invalid
