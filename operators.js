// BASIC PRINTING IN JAVASCRIPT:
let x = 5;
console.log(x);
console.log("Hello! Welcome to JavaScript...");

//////////////////////////////////////////////////////////////////////////////////////////////////////
// VARIABLES
let generalVariable = 'a';
console.log("General variable value:", generalVariable);

var varType = 'var';
console.log("Variable with var type value:", varType);

let letType = 'let';
console.log("Variable with let type value:", letType);

const constType = 100;
console.log("Variable with const type value:", constType);

// Attempting to reassign a value to a constant will result in an error.
// constType = 200; // Uncommenting this line will cause an error.

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// OPERATORS TYPES:
// Assignment operator
let assignedValue = 10;
console.log("Assignment operator:", assignedValue);

// Arithmetic operators: +, -, *, /, %
let operand1 = 10;
let operand2 = 5;
console.log("Arithmetic addition:", operand1 + operand2);
console.log("Arithmetic subtraction:", operand1 - operand2);
console.log("Arithmetic multiplication:", operand1 * operand2);
console.log("Arithmetic division:", operand1 / operand2);
console.log("Arithmetic modulus:", operand1 % operand2);

// LOGICAL OPERATORS: &&, ||, !
let logicalOperand1 = true;
let logicalOperand2 = false;
console.log("Logical AND:", logicalOperand1 && logicalOperand2);
console.log("Logical OR:", logicalOperand1 || logicalOperand2);
console.log("Logical NOT:", !logicalOperand1);

// Additional examples
console.log(10 || 20);
console.log(0 || 20);
console.log(20 || 0);
console.log(100 || 20);
console.log(100 || 20 && 0);
console.log((100 || 20) && 0);
console.log((100 || 20) && (0));
console.log(0 && (10 || 20)); // This line is similar to the last line in your code.
