let setTimeoutBtnEl = document.getElementById("setTimeoutBtn");

let uniqueId = null;

setTimeoutBtnEl.onclick = function() {
  setTimeout(function() {
    console.log("Hello");
  }, 3000);
};


// setTimeout()
// The setTimeout() method executes a function after the specified time.

// Syntax: setTimeout(function, delay);

// function - a callback function that is called after the specified time (delay).
// delay - time in milliseconds.



// let counter = 0;
// setTimeout(function() {
//   console.log(counter);
//   counter = counter + 1;
// }, 1000);








// clearTimeout()
// We can cancel the setTimeout() before it executes the callback function using the clearTimeout() method.

// To execute clearTimeout(), we need to pass the uniqueId returned by setTimeout() as an argument.

// Syntax: clearTimeout(uniqueId);let counter = 0;


// let uniqueId = setTimeout(function() {
//     console.log(counter);
//     counter = counter+1;
//   }, 1000);
  
//   clearTimeout(uniqueId);