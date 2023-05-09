// Switch Statement
// A Switch statement is a conditional statement like if...else statement used in decision making.

// Syntax:


// switch (expression) {
//     case value1:
//       /*Statements executed when the
//       result of expression matches value1*/
//       break;
//     case value2:
//       /*Statements executed when the
//       result of expression matches value2*/
//       break;
//     ...
//     case valueN:
//       /*Statements executed when the
//       result of expression matches valueN*/
//       break;
//     default:
//       /*Statements executed when none of
//       the values match the value of the expression*/
//       break;
//   }



let day = 1;
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");  // Monday
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid");
    break;
}