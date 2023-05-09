// There are multiple ways to define a function.

// Function Declaration
// Function Expression
// Arrow Functions
// Function Constructor, etc.



// Arrow Functions
// An Arrow function is a simple and concise syntax for defining functions.

// It is an alternative to a function expression.

// Syntax:

// let sum = (param1, param2, …) => {
//     // statement(s)
//   };
//   sum();


let sum = (a, b) => {
    let result = a + b;
    return result;
  };
  console.log(sum(4, 3));

//   Simple Expressions
// In arrow functions, the return statement and curly braces are not required for simple expressions.

let sub = (a, b) => a + b;

console.log(sub(4, 3));


// One parameter
// f there is only one parameter, then parentheses are not required.


let greet = name => `Hi ${name}!`;

console.log(greet("Rahul"));  // Hi Rahul!

// No parameters
// If there are no parameters, parentheses will be empty, but they should be present.

let sayHi = () => "Hello!";

console.log(sayHi());  // Hello!

// Returning Objects
let createUser = name => {
    return {
      firstName: name
    };
  };
  
  console.log(createUser("Mark"));  // Object {firstName: "Rahul"}

  
  
//   Simple Expression
//   let createUser = name => { firstName: "Rahul" };

// console.log(createUser());  // undefined

// JavaScript considers the two curly braces as a code block, but not as an object syntax.

// So, wrap the object with parentheses to distinguish with a code block.

// let createUser = name => ({ firstName: "Rahul" });

// console.log(createUser());  // Object {firstName: "Rahul"}