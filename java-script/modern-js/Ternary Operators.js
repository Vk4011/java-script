// Operators
// 1.1 Ternary Operator
// A Ternary Operator can be used to replace if...else statements in some situations.

// Syntax: condition ? expressionIfTrue : expressionIfFalse



let speed = 70;
let message = speed >= 100 ? "Too Fast" : "OK";

console.log(message);  // OK




// If there is no break statement, then the execution continues with the next case until the break statement is met.

let day = 4;
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
  case 5:
    console.log("Friday");
  case 6:
    console.log("Saturday");
  default:
    console.log("Invalid");
}