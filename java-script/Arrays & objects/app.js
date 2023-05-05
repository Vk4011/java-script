// Data Structures
// Data Structures allow us to store and organize data efficiently. This makes us access and performs operations on the data smoothly.

// In JavaScript, we have built-in Data Structures like,

// Arrays
// Objects
// Maps
// Sets



// Array
// An Array holds an ordered sequence of items.

let myArray = [5, "six", 2, 8.2];

console.log(myArray);  // [5, "six", 2, 8.2]

// Accessing an Array Item
console.log(myArray[0]);  // 5
console.log(myArray[1]);  // six

// Modifying an Array Item

myArray[1] = 6;
console.log(myArray);  // [5, 6, 2, 8.2]


// Finding Array Length
// The array.length is used to find the number of items in the array.

let lengthOfArray = myArray.length;
console.log(lengthOfArray);  // 4

// Array Methods
// push()
// The push() method adds new items to the end of the array.
myArray.push(true);
console.log(myArray);  // [5, "six", 2, 8.2, true]


// pop()
// The pop() method removes the last item of an array and returns that item.

let lastItem = myArray.pop();

console.log(myArray);  // [5, "six", 2]
console.log(lastItem);  // 8.2


// Functions
// Function Declaration

function showMessage() {
    console.log("Hello");
  }
  
  showMessage();


//   Function Expression
// There is another syntax for creating a function which is called Function Expression.

// let showMessage = function() {
//     console.log("Hello");
//   };
  
//   showMessage();

